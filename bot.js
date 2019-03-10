const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";


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
