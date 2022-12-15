const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("emi")
        .setDescription("Displays the definition of EMI."),
    async execute(interaction) {
        interaction.reply("EMI means to explore, maintain, and inspire.");
    }
}