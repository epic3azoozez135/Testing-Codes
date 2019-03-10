const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

const logs = require('./guildLogs.json');
client.on('message',async message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return
  const m = message.content.split(' ').slice(1);
  var args = message.content.split(' ');
  if(message.content.toLowerCase().startsWith(prefix + "settings")) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(':negative_squared_cross_mark: » You dont have permissions');
    if(!args[1] || args[1] && args[1] !== 'logs' && args[1] !== 'prefix' && args[1] !== 'sug') {
      if(args[0] !== prefix + 'settings') return;
      var aa;
      if(!logs[message.guild.id]) aa = 'None';
      if(logs[message.guild.id]) aa = logs[message.guild.id].channelName;
      var setEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle(`Settings \`${message.guild.name}\``)
      .addField(':exclamation: » Command', `\`Default\` ${prefix}\n\`Guild\` ${prefix}\n\`Syntax\` -settings prefix [new command]`,true)
      .addField(':musical_note: » Suggestions', `\`Default\` ${prefix}\n\`Guild\` ${prefix}\n\`Syntax\` -settings sug [Room]`,true)
      .addField(':hammer_pick: » Log', `\`Default\` None\n\`Guild\` ${aa}\n\`Syntax\` -settings logs [Room]`,true);
      message.channel.send(setEmbed);
    }
    if(args[1] === 'logs') {
      if(!args[2]) return message.channel.send(':negative_squared_cross_mark: » Write room name.');
      if(!message.guild.channels.find('name', args[2])) return message.channel.send(':negative_squared_cross_mark: » Error');
      message.channel.send(':white_check_mark: » Done');
      logs[message.guild.id] = {
        channelName: args[2],
        channelId: message.guild.channels.find('name', args[2]).id
      };
      fs.writeFile('./src/guildLogs.json', JSON.stringify(logs, null ,1), (err) => {
        if(err) message.channel.send(':negative_squared_cross_mark: » Error');
      });
    }
    if(args[1] === 'sug') {
       return message.channel.send(':negative_squared_cross_mark: » Soon');
    }
    if(args[1] === 'mprefix') {
      return message.channel.send(':negative_squared_cross_mark: » Soon');
    }
}
});
 
 
client.on("channelCreate",  channel => {
  if(!logs[channel.guild]) return;
  const c = channel.guild.channels.find("name", logs[channel.guild.id].channelName);
if(!c) return;
  if(c) {
    var emoji;
    if(channel.type === 'text') emoji = ':speech_balloon:| Text';
    if(channel.type === 'voice') emoji = ':microphone:| Voice';
    if(channel.type === 'category') emoji = ':books:| Category';
    channel.guild.fetchAuditLogs({
      limit: 1,
      type: 10
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var cReate = new Discord.RichEmbed()
      .setTitle('New room created')
      .setAuthor(audit.entries.map(e => e.executor.tag), channel.guild.iconURL)
      .setColor('GREEN')
      .addField('» Room Name:', channel.name,true)
      .addField('» By:',e,true)
      .addField('» Type:', emoji, true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(cReate);
    });
  } else {
    return;
  }
});
client.on('channelDelete', channel => {
  if(!logs[channel.guild.id]) return;
  const c = channel.guild.channels.find("name", logs[channel.guild.id].channelName);
if(!c) return;
  if(c) {
    channel.guild.fetchAuditLogs({
      limit: 1,
      type: 12
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var cDelete = new Discord.RichEmbed()
      .setTitle('Room Deleted')
      .setAuthor(audit.entries.map(e => e.executor.tag), channel.guild.iconURL)
      .setColor('RED')
      .addField('» Room Name:', channel.name,true)
      .addField('» By:',e,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(cDelete);
    });
  } else {
    return;
  }
});
client.on('guildBanAdd', (guild, member) => {
  if(!logs[member.guild]) return;
  const c = guild.channels.find("name", logs[guild.id].channelName);
  if(!c) return;
  if(c) {
    guild.fetchAuditLogs({
      limit: 1,
      type: 22
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var bEmbed = new Discord.RichEmbed()
      .setTitle('New Ban')
      .setAuthor(audit.entries.map(e => e.executor.tag), guild.iconURL)
      .setColor('RED')
      .addField('» User:', `**${member.tag}**`,true)
      .addField('» Moderator:', `**${e}**`,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(bEmbed);
    });
  } else {
    return;
  }
});
client.on('guildBanRemove', (guild, member) => {
  if(!logs[guild.id]) return;
  const c = guild.channels.find('name', logs[guild.id].channelName);
  if(!c) return;
  if(c) {
    guild.fetchAuditLogs({
      limit: 1,
      type: 23
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var gEmbed = new Discord.RichEmbed()
      .setTitle('New UnBan')
      .setAuthor(audit.entries.map(e => e.executor.tag), guild.iconURL)
      .setColor('GREEN')
      .addField('» User:', `**${member.tag}**`,true)
      .addField('» Moderator:', `**${e}**`,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(gEmbed);
    });
  } else {
    return;
  }
});
client.on('guildMemberAdd', member => {
  if(!logs[member.guild.id]) return;
  const c = member.guild.channels.find('name', logs[member.guild.id].channelName) || member.guild.channels.get(logs[member.guild.id].channelId);
  if(!c) return;
  if(c) {
    var wEmbed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setTitle('New Member')
    .setColor('GREEN')
    .setThumbnail(member.user.avatarURL)
    .addField('» Member:', member,true)
    .addField('» Member Count:', member.guild.memberCount,true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(wEmbed);
  } else {
    return;
  }
});
client.on('guildMemberRemove', member => {
  if(!logs[member.guild.id]) return;
  const c = member.guild.channels.find('name', logs[member.guild.id].channelName);
  if(!c) return;
  if(c) {
    var lEmbed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setTitle('Member Leave')
    .setColor('RED')
    .setThumbnail(member.user.avatarURL)
    .addField('» Member:', member.user.tag,true)
    .addField('» Member Count:',member.guild.memberCount,true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(lEmbed);
  } else {
    return;
  }
});
client.on('messageDelete', message => {
  if(!logs[message.guild.id]) return;
   const c = message.guild.channels.find('name', logs[message.guild.id].channelName);
   if(!c) return;
   if(c) {
     if(!message || !message.id || !message.content || !message.guild || message.author.bot) return;
     var mEmbed = new Discord.RichEmbed()
     .setTitle(`🗑 ${message.author.tag} Deleted Message .`)
     .setColor('BLACK')
     .setThumbnail(message.author.avatarURL)
     .setDescription(`\`\`\`${message.cleanContent.replace('`', '\`')}\`\`\``)
     .addField('» User:',message.author,true)
     .addField('» In:',message.channel,true)
     .setFooter('v0.1 | Logs.')
     .setTimestamp();
     c.send(mEmbed);
   } else {
     return;
   }
});
client.on('messageUpdate', (old, message) => {
  try {
    if(!logs[message.guild.id]) return;
  const c = message.guild.channels.get(logs[message.guild.id].channelId);
  if(c) {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot || message.content === old.content) return;
    var editedEmbed = new Discord.RichEmbed()
    .setTitle(`✏ ${message.author.tag} Edited Message .`)
    .setColor('BLACK')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`Old Message : \`\`\`${old.cleanContent || old.content}\`\`\`\nNew Message : \`\`\`${message.cleanContent || message.content}\`\`\``)
    .addField('» User:', message.author,true)
    .addField('» In:', message.channel, true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(editedEmbed);
  }
  } catch(e) {
    if(e) return null;
  }
});

client.login(process.env.BOT_TOKEN);
