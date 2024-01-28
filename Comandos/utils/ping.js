module.exports = {
    name: "pingo",
    description: "ver o pingo do boto",
    run(client, interaction){
        interaction.reply({ content: `O pingo atual del boto is ${client.ws.ping}`})
    }
}