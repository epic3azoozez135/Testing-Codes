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
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`**:heavy_multiplication_x: | You dont have permissions**`);
    if(!message.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(`**:heavy_multiplication_x: | The Bot must have permissions**`);
    if(!editRole) return message.channel.send(`**:milky_way:| Mention role!**`);
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
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      });
    }
    if(args[2] && color === 'black') {
      editRole.edit({color: black}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      });
    }
    if(args[2] && color === 'lime') {
      editRole.edit({color: lime}).then(function(done, err) {
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'blue') {
      editRole.edit({color: blue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'purple') {
      editRole.edit({color: purple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
  if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'pink') {
      editRole.edit({color: pink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'red') {
      editRole.edit({color: red}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'orange') {
      editRole.edit({color: orange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'milky') {
      editRole.edit({color: milky}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkgreen') {
      editRole.edit({color: darkgreen}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkblue') {
      editRole.edit({color: darkblue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkred') {
      editRole.edit({color: darkred}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkpink') {
      editRole.edit({color: darkpink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkpurple') {
      editRole.edit({color: darkpurple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkorange') {
      editRole.edit({color: darkorange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | Error**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | Done**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
  }
});

client.login(process.env.BOT_TOKEN);
