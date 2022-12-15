const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Displays resources for FitDevs."),
    async execute(interaction) {
        interaction.reply("[Accountability Page](https://fitdevs.org/Fitness-Accountability/) \n[FitDevs Homepage](https://fitdevs.org/) \n[GitHub](https://github.com/FitDevs-withKat) \n[Twitter](https://twitter.com/fit_devs)");
    }
}