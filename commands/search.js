const { SlashCommandBuilder } = require('@discordjs/builders');
const Users = require('../models/User');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("search")
        .setDescription("Search for a #OneMillionMinutes participant using their Twitter handle.")
        .addStringOption(option => 
            option.setName('username')
                .setDescription('Twitter handle you want to search for.')
                .setRequired(true)),
    async execute(interaction) {
        const searchParameter = interaction.options.getString('username');
        const user = await Users.find(
            { username: `${searchParameter}` },
            ['username', 'total'],
            {
                skip: 0,
                limit: 1,
                sort: {
                    total: -1
                }
            }
        );

        let output;
        if(user.length == 0) {
            output = "```No username was found. To participate, make a tweet recording your time with the #OneMillionMinutes hashtag!```";
        } else {
            output = `\`\`\`${user[0]['total']} | ${user[0]['username']}\`\`\``;
        }

        interaction.reply(output);
    }
}