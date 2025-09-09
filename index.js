const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  // حدد الـ Guild (السيرفر) والـ Role (الرتبة) اللي تبغى يتغير لونها
  const guild = client.guilds.cache.get("1253691655454855169");
  if (!guild) return console.log("❌ لم أجد السيرفر، تأكد من ID");

  const role = guild.roles.cache.get("1415000040593952778");
  if (!role) return console.log("❌ لم أجد الرتبة، تأكد من ID");

  // كل 30 ثانية غيّر اللون
  setInterval(async () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // لون عشوائي
    try {
      await role.setColor(`#${randomColor}`);
      console.log(`🎨 تم تغيير لون الرتبة إلى #${randomColor}`);
    } catch (err) {
      console.error("⚠️ خطأ أثناء تغيير اللون:", err);
    }
  }, 30000); // 30000ms = 30 ثانية
});

client.login(process.env.TOKEN);
