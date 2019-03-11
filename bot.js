const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on('message',async function(message) {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let editRole = message.mentions.roles.first();
  let args = message.content.split(' ');
  let color = args[2];
  let black = '#1c1b1b',
      white = '#ffffff',
      lime = '#02e048',
      blue = '#02def2',
      purple = '#cb00ff',
      pink = '#ff0077',
      red = '#ff0000',
      orange = '#ffae00',
      milky = '#005dff',
      darkgreen = '#2a8942',
      darkblue = '#2a1151',
      darkpurple = '#50114b',
      darkpink = '#99038d',
      darkred = '#990303',
      darkorange = '#996103'
  if(message.content.startsWith(prefix + "setcolor")) {
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`**:heavy_multiplication_x: | ليس لديك الصلاحيات الكافية**`);
    if(!message.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(`**:heavy_multiplication_x: | ليس لدي الصلاحيات لفعل هذا**`);
    if(!editRole) return message.channel.send(`**منشن رتبة لتـغير لونها **`);
    if(!args[2]) {
      let codes = [black, white, lime, blue, purple, pink, red, orange, milky, darkgreen, darkblue, darkpurple, darkpink, darkred, darkorange];
      let colors = new Discord.RichEmbed()
      .setTitle(`Role Colors: \`${message.guild.name}\``)
      .setColor(codes[Math.floor(Math.random() * codes.length)])
      .setFooter(client.user.username)
      .setTimestamp()
.setDescription(`\nBlack: \`${black}\`\n\nWhite: \`${white}\`\n\nLime: \`${lime}\`\n\nBlue: \`${blue}\`\n\nPurple: \`${purple}\`\n\nPink: \`${pink}\`\n\nRed: \`${red}\`\n\nOrange: \`${orange}\`\n\nMilky: \`${milky}\`
\nDarkGreen: \`${darkgreen}\`\n\nDarkBlue: \`${darkblue}\`\n\nDarkPurple: \`${darkpurple}\`\n\nDarkPink: \`${darkpink}\`\n\nDarkRed: \`${darkred}\`\n\nDarkOrange: \`${darkorange}\`\n`);
      return message.channel.send(colors);
    }

    if(args[2] && color === 'white') {
      editRole.edit({color: white}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      });
    }
    if(args[2] && color === 'black') {
      editRole.edit({color: black}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      });
    }
    if(args[2] && color === 'lime') {
      editRole.edit({color: lime}).then(function(done, err) {
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'blue') {
      editRole.edit({color: blue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'purple') {
      editRole.edit({color: purple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
  if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'pink') {
      editRole.edit({color: pink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'red') {
      editRole.edit({color: red}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'orange') {
      editRole.edit({color: orange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'milky') {
      editRole.edit({color: milky}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkgreen') {
      editRole.edit({color: darkgreen}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkblue') {
      editRole.edit({color: darkblue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkred') {
      editRole.edit({color: darkred}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkpink') {
      editRole.edit({color: darkpink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkpurple') {
      editRole.edit({color: darkpurple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkorange') {
      editRole.edit({color: darkorange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
  }
});



const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
var cds = new Set();
var cdv = new Set();
 const auto = require('./autoMessage.json');
client.on('message',async message => {
    var msg;
    var resp;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith(prefix + "replay")) {
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`:heavy_multiplication_x: **You dont have permissions**`);
      message.channel.send(`:eight_pointed_black_star:| **اكتب الرسالة**`).then(m => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ['time']
        }).then(collected => {
          msg = collected.first().content;
          collected.first().delete();
          message.delete();
          m.edit(`:eight_pointed_black_star:| **اكتب الرد**`).then(() => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ['time']
            }).then(collected => {
              resp = collected.first().content;
              collected.first().delete();
              message.delete();
              m.edit(`:eight_pointed_black_star:| **Auto Replay Activated**`);
              var autoM = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setThumbnail(message.author.avatarURL)
              .setTitle(`:white_check_mark:| **Changed the replay!**`)
              .addField('❯ Message',msg,true)
              .addField('❯ Replay',resp,true)
              .setFooter(`${message.author.tag} :: ${moment().format('MMM.Do.YY')}`);
              message.channel.send(autoM);
              auto[message.guild.id] = {
                msg: msg,
                resp: resp
              };
              fs.writeFile('./autoMessage.json', JSON.stringify(auto, null, 4), (e) => {
                if(e) console.log(e);
              });
            });
          });
        });
      });
    } else if(message.content.startsWith(auto[message.guild.id].msg)) {
      message.channel.send(auto[message.guild.id].resp);
    }
  });

client.login(process.env.BOT_TOKEN);
