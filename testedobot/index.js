//importar os módulos do discord.js
const Discord = require('discord.js');
//Criar uma instância de um cliente Discord
const cliente = new Discord.Client();
//importando as informações da nossa aplicação
const info = require('./info.json'); //pode ser editado de acordo com sua aplicação

// O evento ready é vital, significa que somente _depois_ isso fará com que seu bot comece a reagir às informações recebido do Discord
cliente.on('ready', () => {
    console.log(`O ${cliente.user.tag} foi iniciado com sucesso`); //o texto pode ser editado
});

//Criar um ouvinte de eventos para mensagens
cliente.on('message', msg => {
    //ping
    //Se o conteudo da mensagem for igual a ping
    if(msg.content === 'ping'){
    //Envia pong como retorno para o mesmo canal
        msg.reply('pong');
    }
    //avatar
    //Se o conteudo da mensagem for igual a avatar
    if(msg.content === 'avatar'){
    //Envia a avatar do usuario que fez a requisição
        msg.reply(`O seu avatar é ${msg.author.avatarURL}`);
    }
});

//comandos =>
cliente.on('message', message => {
    //Ignore as mensagens que não são de uma guilda
    if(!message.guild) return;
    //Se o conteudo da mensagem começa com '${info.prefixe}kick';
    if(message.content.startsWith(`${info.prefix}kick`)){
    //Supondo que mencionamos alguém na mensagem, isso retornará o usuário
        const user = message.mentions.users.first();
        //Se tivermos usuarios mencionados
        if(user){
            //Agora obtemos o membro
            const membro = message.guild.member(user);
            //Se o membro estiver na guilda
            if(membro){
            //Chute o membro
            //Certifique-se de executar isso em um membro, não em um usuário!
            //Existem grandes diferenças entre um usuário e um membro
                membro.kick('Razão opcional que será exibida nos logs de auditoria') .then(() => {
            //Informamos que conseguimos chutar o usuario
                    message.reply(`Usuario ${user.tag} chutado com sucesso`);
                }).catch(err => {
            //Ocorreu um erro
            //O erro é gerado quando o bot não consegue banir o usuario
            //devido á falta de permissões ou a hierarquia de funções
                    message.reply('Não consegui chutar o membro');
            //Registra o erro
                    console.error(err);
                });
            }else{
            //O usuario mencionado não esta na guilda
                message.reply('Esse usuário não está nesta guilda!');
            }
            //Caso contrario, se nenhum usuario for mencionado
            }else{
                message.reply('O usuario não foi mencionado');
            }
        }
    //Ignore as mensagens que não são de uma guilda
    if(!message.guild) return;
    //Se o conteudo da mensagem começa com `${info.prefix}ban`;
    if (message.content.startsWith(`${info.prefix}ban`)){
    //Supondo que mencionamos alguém na mensagem, isso retornará o usuario
        const user = message.mentions.users.first();
        //Se tivermos usuarios mencionados
        if (user) {
          //Agora obtemos o membro
          const membro = message.guild.member(user);
          //Se o membro estiver na guilda
          if (membro) {
            //bani o membro
            //Certifique-se de executar isso em um membro, não em um usuário!
            //Existem grandes diferenças entre um usuário e um membro
            membro.ban({
              reason: 'Ele era mau',
            }).then(() => {
              //Informamos que conseguimos banir o membro
              message.reply(`O usuario ${user.tag} foi banido com sucesso`);
            }).catch(err => {
            //Ocorreu um erro
            //O erro é gerado quando o bot não consegue banir o usuario
            //devido á falta de permissões ou a hierarquia de funções
              message.reply('Não consegui banir o membro');
            //Registra o erro
              console.error(err);
            });
          } else {
            //O usuario mencionado não esta na guilda
            message.reply('Este usuario não esta nesta guilda');
          }
        } else {
        //Caso contrario, se nenhum usuario for mencinado
          message.reply('O usuario não foi mencionado');
        }
    }
});

//Fazer no bot usando o token da aplicação
cliente.login(info.token); //O caminho pode ser editado