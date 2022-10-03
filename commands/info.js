const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Info command"),
    async execute(interaction) {
        interaction.reply("[Accountability](https://fitdevs-withkat.github.io/Fitness-Accountability/) \n [Landing Page](https://fitdevs-withkat.github.io/Support/landing_page/) \n [GitHub](https://github.com/FitDevs-withKat) \n [Twitter](https://twitter.com/fit_devs)");
    }
}