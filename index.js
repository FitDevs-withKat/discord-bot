const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// load env config
dotenv.config({path: './.env'});

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);