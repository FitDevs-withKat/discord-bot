# Setup Guide

Sign up for a new application on the [Discord developer portal](https://discord.com/developers/applications).

On the developer portal dashboard, you will want to select your new application and enable the bot setting on the application's page. You will need the bot token to create the `.env` file.


## Env File

Create a `.env` file and fill out the following value(s). If you do not know your bot token, you can refresh it on the application's main page.

```
BOT_TOKEN=
```

## Inviting 

On the application's main page, you will want to navigation to Settings -> OAuth2 -> URL Generator. Follow the choices below.

1. Scope: `bot`
2. Bot Permissions: `administrator`
3. Copy the generated URL and paste it into your browser
4. You will receive an OAuth2 message for your bot, choose the server you wish to add it to, continue and authorize

You should see your bot join the selected discord server.

## Testing the Bot

Running the startup command `node index.js` will display a message in terminal. If you look at the users list of the server the bot was invite to, the bot will be online.