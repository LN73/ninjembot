
                (async()=>{
                const Discord = require("discord.js");
                const Database = require("easy-json-database");
                const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                const s4d = {
                    Discord,
                    database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                    joiningMember:null,
                    reply:null,
                    tokenInvalid:false,
                    tokenError: null,
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                    partials: ["REACTION"]
                });

                var arguments2, command;


s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'n/say') {
    s4dmessage.channel.send(String((arguments2.join(' '))));
  }

});

s4d.client.on('ready', async () => {

          while(s4d.client && s4d.client.token) {
              await delay(50);
                s4d.client.user.setActivity(String('support: bit.ly/ninjembotsupport'));
    await delay(Number(5)*1000);
    s4d.client.user.setActivity(String('support: bit.ly/ninjembotinvite'));
    await delay(Number(5)*1000);
    s4d.client.user.setActivity(String('Nombre de serveurs:'));
    await delay(Number(5)*1000);
    

              console.log('ran')
          }

});

await s4d.client.login('token').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == 'n/liens') {
    const embed = new MessageEmbed()
    .setTitle('Mes liens')
    .addField('Tu souhaites m\'inviter sur ton serveur ?',':NBS_arrow_animated: [CLIQUE ICI](https://bit.ly/ninjembotinvite)')
    .addField('Tu as besoin d\'aide ou tu as trouvé un bug ?',':NBS_arrow_animated: [CLIQUE ICI](https://bit.ly/ninjembotsupport)');

s4dmessage.channel.send({ embeds: [embed] });
  }

});

                })();
            
