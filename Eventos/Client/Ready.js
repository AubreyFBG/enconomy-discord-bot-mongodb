module.exports = {
    eventName: `ready`,
    exec(client){
        console.log(`[Boto] Bot online em ${client.user.username}`)
    }
}