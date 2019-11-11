//importar os módulos do discord.js
const Discord = require('discord.js');
//Criar uma instância de um cliente Discord
const cliente = new Discord.Client();
//importando as informações da nossa aplicação
const info = require('info.json'); //pode ser editado de acordo com sua aplicação

// O evento ready é vital, significa que somente _depois_ isso fará com que seu bot comece a reagir às informações recebido do Discord
cliente.on('ready', () => {
    console.log(`O ${cliente.user.tag} foi iniciado com sucesso`); //o texto pode ser editado
});

//Criar um ouvinte de eventos para mensagens
cliente.on('message', msg => {
    //Se o conteudo da mensagem for igual a ping
    if(msg.content === 'ping'){
    //Envia pong como retorno para o mesmo canal
        msg.reply('pong');
    }
});
//Fazer no bot usando o token da aplicação
cliente.login(info.token); //O caminho pode ser editado