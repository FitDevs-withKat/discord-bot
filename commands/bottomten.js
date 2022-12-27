const { SlashCommandBuilder } = require('@discordjs/builders');
const Users = require('../models/User');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bottom10")
        .setDescription("Displays a message of bottom 10 FitDev participants."),
    async execute(interaction) {
        const users = await Users.find(
            {},
            ['username', 'total'],
            {
                skip: 0,
                limit: 10,
                sort: {
                    total: 1
                }
            }
        );

        let output = "```";
        users.forEach(user => {
            output += `${user['total']} | ${user['username']}\n`
        });
        output += "```";

        interaction.reply(output);
    }
}