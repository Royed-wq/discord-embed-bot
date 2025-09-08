const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // لو كتب !embed يرسل ايمبد
  if (message.content === "!embed") {
    const embed = new EmbedBuilder()
      .setTitle("📢 رسالة إيمبد")
      .setDescription("هذا مثال على رسالة إيمبد")
      .setColor("#5865F2")
      .setFooter({ text: "بوت الإيمبد" })
      .setTimestamp();

    await message.channel.send({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
