module.exports = {
    name: "daily",
    description: "pegar seu dinheiro diario",
    async run(client, interaction){
        const userDatabase = await client.userDB.findOne({ _id: interaction.user.id }) || await client.userDB.create({ _id: interaction.user.id })
        
        if(userDatabase.cooldowns.daily < Date.now()){
            const Amount = Math.floor(Math.random() * 2500)

            await client.userDB.updateOne({
                _id: interaction.user.id,
            },{
                $inc: {
                    money: Amount
                }
            })

            await client.userDB.updateOne({
                _id: interaction.user.id,
            },{
                $set: {
                    'cooldowns.daily': Date.now() + 1000 * 60 * 60 * 24
                }
            })

            interaction.reply(`> **Parabuains pegastes ${Amount} de dineros hoje**`)
        } else {
            interaction.reply(`> Você ainda não pode pegar o daily, falta <t:${Math.floor(userDatabase.cooldowns.daily / 1000)}:R>`)
        }
    }
}