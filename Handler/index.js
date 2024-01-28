const fs = require("fs")
module.exports = (client)=>{

    const paths = ["Comandos", "Eventos"]
    paths.forEach(path=>{
        fs.readdir(`./${path}`, (err, subPast)=>{
            subPast.forEach(subPast=>{
                fs.readdir(`./${path}/${subPast}`, (er, files)=>{
                    files.forEach(file=>{
                        file = require(`../${path}/${subPast}/${file}`)
                        path == "Eventos" 
                        ? client.on(file.eventName, file.exec.bind(null, client)) 
                        : client.slashCommands.set(file.name, file)
                    })
                })
            })
        })
    })

    client.on("ready", ()=>{
        client.application.commands.set([...client.slashCommands.values()])
    })
}