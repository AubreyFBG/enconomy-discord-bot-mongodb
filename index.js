const { Client, GatewayIntentBits, Collection } = require("discord.js")
require("dotenv").config()
const mongoose = require('mongoose');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
})

client.slashCommands = new Collection()
client.userDB = require("./SchemasMongo/User")

mongoose.connect(process.env.MONGOURL).then(() => console.log('[MongoDB] Conectada com sucesso!'));

require("./Handler/index")(client)

client.login(process.env.TOKEN)
