module.exports = {
    name: "atm",
    description: "Ver seu dinero",
    async run(client, interaction){
        const userDatabase = await client.userDB.findOne({ _id: interaction.user.id }) || await client.userDB.create({ _id: interaction.user.id })
        interaction.reply({ content: `> **Seu dinheiro atual é ${userDatabase.money}**`})
    }
}