module.exports = {
    eventName: `interactionCreate`,
    exec(client, interaction){
        if(!interaction.isCommand()) return;

        const command = client.slashCommands.get(interaction.commandName)

        if(command) command.run(client, interaction)
    }
}