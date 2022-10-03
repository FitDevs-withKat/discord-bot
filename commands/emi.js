const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("emi")
        .setDescription("Emi command"),
    async execute(interaction) {
        interaction.reply("This is a new EMI command.");
    }
}