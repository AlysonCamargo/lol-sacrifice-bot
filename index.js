import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import cron from "node-cron";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Bot logado como ${client.user.tag}`);
  client.on("messageCreate", async (message) => {
    if (message.content === "!sacrificar" && !message.author.bot) {
      const guild = await client.guilds.fetch(process.env.GUILD_ID);
      const channel = await guild.channels.fetch(process.env.CHANNEL_ID);
      const role = await guild.roles.fetch(process.env.ROLE_ID);
      const members = await guild.members.fetch();
  
      const roleMembers = members.filter((member) =>
        member.roles.cache.has(role.id)
      );
  
      if (roleMembers.size === 0) {
        message.reply("⚠️ Ninguém tem o cargo de Jogador de LoL...");
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * roleMembers.size);
      const chosen = Array.from(roleMembers.values())[randomIndex];
  
      channel.send(`🎯 ${chosen}, foi escolhido hoje para jogar League of Legends. Que tristeza. 🕊️`);
    }
  });

  client.on("messageCreate", async (message) => {
    if (message.content === "!sacrificar" && !message.author.bot) {
      try {
        // Buscar a guilda e o canal
        const guild = await client.guilds.fetch(process.env.GUILD_ID);
        const channel = await guild.channels.fetch(process.env.CHANNEL_ID);
        
        // Verificar se o canal existe
        if (!channel) {
          message.reply("Erro: Canal não encontrado.");
          return;
        }
  
        // Buscar o cargo
        const role = await guild.roles.fetch(process.env.ROLE_ID);
        
        // Verificar se o cargo existe
        if (!role) {
          message.reply("Erro: Cargo não encontrado.");
          return;
        }
  
        // Buscar todos os membros da guilda
        const members = await guild.members.fetch();
        const roleMembers = members.filter((member) =>
          member.roles.cache.has(role.id)
        );
  
        // Verificar se há membros com o cargo
        if (roleMembers.size === 0) {
          message.reply("⚠️ Ninguém tem o cargo de Jogador de LoL...");
          return;
        }
  
        // Garantir que o sorteio seja único
        const roleMembersArray = Array.from(roleMembers.values());
        const chosen = roleMembersArray[Math.floor(Math.random() * roleMembersArray.length)];
  
      } catch (error) {
        console.error("Erro ao executar o comando:", error);
        message.reply("Houve um erro ao tentar escolher um sacrificado.");
      }
    }
  });
  
  


  // Executa todo dia às 20h (horário do servidor onde o bot roda)
  cron.schedule("0 20 * * *", async () => {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);
    const channel = await guild.channels.fetch(process.env.CHANNEL_ID);
    const role = await guild.roles.fetch(process.env.ROLE_ID);
    const members = await guild.members.fetch();

    const roleMembers = members.filter((member) =>
      member.roles.cache.has(role.id)
    );

    if (roleMembers.size === 0) {
      channel.send("⚠️ Ninguém tem o cargo de Jogador de LoL...");
      return;
    }

    const randomIndex = Math.floor(Math.random() * roleMembers.size);
    const chosen = Array.from(roleMembers.values())[randomIndex];

    channel.send(`🎯 ${chosen} foi escolhido hoje para jogar League of Legends. Que tristeza. 🕊️`);
  });
});

client.login(process.env.DISCORD_TOKEN);
