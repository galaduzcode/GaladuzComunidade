const Discord = require('discord.js');
const usuario = new Discord.Client();
const conf = require('../require/config.json');

//inicialização =>
usuario.on('ready', () => {
    console.log(`Logado com sucesso ${usuario.user.tag}`);
});

//boas vindas => 
usuario.on('guildMemberAdd', membro => {
    const canal = membro.guild.channels.find(ch => ch.name === '💌boas-vindas💌');
    if(!canal)return;
    canal.send(`Seja mundo bem vinda(o), ${membro}`);
});

//mensagens =>
usuario.on('message', msg => {
    if(msg.content === 'ping'){
        msg.reply('pong')
    }

    if(msg.content === 'qual e meu avatar?'){
        msg.reply(`O seu avatar é ${msg.author.avatarURL}`);
    }
});

//marketing =>
const webhook = require('../require/hook.json');
const hook = new Discord.WebhookClient(webhook.id, webhook.token);
const links = require('../links/links.json');

hook.send(links.link);

//comandos =>


usuario.login(conf.token);