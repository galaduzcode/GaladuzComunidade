const Discord = require('discord.js');
const cliente = new Discord.Client();
const config = require('conf.json');

//messagen de inicialização
cliente.on('ready', () => {
    console.log(`Olá, meu nome é ${cliente.user.tag} estou pronto(a) para operar no seu servidor`)
    console.log(`para que possa me mandar executar uma tarefa peço para que coloque o ${config.prefix} na frente de todos os comandos`)
});

cliente.login(config.token);