const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { Client, GatewayIntentBits, Collection } = require('discord.js');

// load env config
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

// connect to db
const connectDB = require('./db-connection');
connectDB();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const commands = [];
client.commands = new Collection();

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);

	const rest = new REST({
		version: "10"
	}).setToken(process.env.BOT_TOKEN);

	(async () => {
		try {
			if(process.env.ENV === "production") {
				await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
					body: commands
				});
				console.log("Successfully registered commands globally.")
			} else {
				await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), {
					body: commands
				});
				console.log("Successfully registered commands locally.")
			}
		} catch (err) {
			if (err) console.error(err);
		}
	})();
});

client.on("interactionCreate", async interaction => {
	if(!interaction.type === interaction.ApplicationCommand) return;
	
	const command = client.commands.get(interaction.commandName);

	if(!command) return;

	try {
		await command.execute(interaction);
	} catch (err) {
		if (err) console.log(err);

		await interaction.reply({
			content: "An error occured while executing that command.",
			emphemeral: true
		});
	}
});

client.login(process.env.BOT_TOKEN);
