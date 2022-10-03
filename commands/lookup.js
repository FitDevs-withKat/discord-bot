const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lookup")
        .setDescription("Lookup a user"),
    async execute(interaction) {
        interaction.reply("This is a new user lookup command.");
    }
}