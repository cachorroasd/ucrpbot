const Discord = require("discord.js");
const  client = new Discord.Client();
const config = requiere (".\config.json")

client.on("ready", () => {
    console.log(`Logueado como: ${client.user.tag}!`);
    client.user.setPresence( {
        activity: {
            name: `Jugando a UCRP`,
            type: "WATCHING"
        },
        status: "online"
     });
 console.log(client.user.presence.status);
 });
 client.on("guildMemberAdd", (member) => {
   var canal = client.channels.get("819721549803552801"); 
   const name_embed = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle("¡Bienvenido a Universe City Roleplay")
         .setImage("") // poner una IMG
         .setDescription("${user.mention} ¡Gracias por elegirnos, el bot te ha enviado un mensaje al privado! \n Procura tener habilitado los MD, si no sabes como contacta soporte."); // aqui acabas con ;
         message.canal.send(name_embed);
         message.react(':bulb:'); // Hacer q le envie un mensaje al privado para que reaccione, y si reacciona le de el rol de verificado.

 });
const { prefix } = config;
const got = require('got');
// Comandos server
const args = message.content.substring(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
client.on('message', message =>{
  const { guild } = message;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  else if(command === 'ip')  
  {
        if (!message.content.startsWith(prefix)) return; 
        if (message.author.bot) return;
        message.channel.send({embed: {
       color: "RANDOM",
       title: `${message.guild.name}`,
       description: `Nuestra IP es: \n 144.217.174.215:8888`,
     }});
 }
 else if(coomand == "ping")
 {
    let ping = Math.floor(message.client.ws.ping);
    message.channel.send("Revisando estabilidad...")
    message.channel.send("Calculando ping...")
    if(ping < 200)
    {
        message.channel.send({embed: {
        color: RANDOM,
        title: `Ping ${client.user.tag} :ping_pong:`,
        description:  "" + ping +" ms\n **Ping Normal**",
        }});
    }
    else
    {
        message.channel.send({embed: {
        color: 3447003,
        title: `Ping ${client.user.tag} :ping_pong:`,
        description:  "" + ping +" ms\n **Ping inestable**",
        }});
    }
 }
 else if(command === 'encuesta')
 {
    if (message.author.bot) return;
   if (!message.content.startsWith(prefix)) return;
     let txt = args.join(" "); 
     if(!txt) return errormsg("Error",`${message.author.username} Usa !encuesta [encuesta]`);
   message.channel.bulkDelete(1)
     const No = client.emojis.cache.find(emoji => emoji.name === "No");
     const Si = client.emojis.cache.find(emoji => emoji.name === "Si");
     const embd = new Discord.MessageEmbed()
       .setColor("RANDOM")
       .setTitle(`¡Encuesta UCRP!`)
       .setDescription(`${txt} \n Si: ${Si} No: ${No}`)
       .setFooter(`Encuesta realizada por ${message.author.username}`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
    message.channel.send(embd).then(async message => {
     await message.react(Si);
     await message.react(No);
   });
 }

  else if(command == "Ayuda")
  {
    message.author.send('**COMANDOS DE  UCRP Discord Bot **\n```\n'+
    '-> '+prefix+'Ping    	:: Comprueba tu ping entre el bot y tu.\n'+
    '-> '+prefix+'avatar    	:: Muestra avatar de discord.\n'+
    '-> '+prefix+'Yt      	:: Hace una busqueda en youtube.\n'+
    '-> '+prefix+'Decir   	:: Hace que el bot diga un mensaje.\n'+
    '-> '+prefix+'ip     	:: Muestra los stats del servidor.\n'+
    '-> '+prefix+'Prefix  	:: Te muestra el prefix.\n'+
    '-> '+prefix+'Discord 	:: Invitacion de discord.\n'+
    '-> '+prefix+'Link    	:: Convierte tu link.\n'+
    '-> '+prefix+'decira     :: comando .decir en anonimo\n'+
    '-> '+prefix+'meme       :: Envia meme random\n'+
    '-> '+prefix+'sugerencia :: Realizar sugerencia en #「📩」ꜱugerencias  (Proximamente)\n');

  }
  else if(command == "ping")
  {

  }
});
client.login(config); 