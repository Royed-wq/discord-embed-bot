const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // الأمر الجديد
  if (message.content === "!rules") {
    // نرسل محتوى نصي عادي
    await message.channel.send("__    _         _　**★Moro Side Notes** <:umm:1376270838332133446>\n     .    .");

    // الإيمبد الأول مع الصورة
    const embed1 = new EmbedBuilder()
      .setColor(16360439)
      .setImage("https://i.imgur.com/nBNCvyk.gif");

    // باقي الإيمبدات (نسختها من الرسالة الأصلية)
    const embed2 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ O͟n͟e͟.")
      .setDescription("- **نرجو منك قراءة جميع القوانين الخاصة بالسيرفر والالتزام بها  **\n Please read through these, and ensure that you abide by them at all times.\n\n**يرجى احترام الجميع, اعط الاحترام الذي تريد ان يمنح لك `-1`**\nAlways be respectful and courteous. Give the respect you want to receive.\n\n**يمنع النشر والتجارة والاعلان والانتحال في السيرفر او في الخاص للاعضاء منعاََ نهائيا** `-2`\nAny type of trading/transactions/ads/impersonate are prohibited in the server.")
      .setColor(16360439);

    const embed3 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ T͟w͟o͟.")
      .setDescription("**تمنع العنصرية بجميع انواعها بناءً على سمات مثل العرق أو الأصل القومي أو الجنس أو الانتماء  الديني** `-3`\nIt's unacceptable to attack a person or a community based on attributes such as their race, ethnicity, national origin, sex, gender, religious affiliation, or disabilities. Do not make threats of violence.\n\n** يمنع استخدام اسماء غير مناسبة او صور غير مناسبة قد تتعرض للحظر النهائي او الطرد من السيرفر **`-4`\nAny members with inappropriate names or avatars will be kicked or banned from the server.")
      .setColor(16360439);

    const embed4 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ T͟h͟r͟e͟e͟.")
      .setDescription("**يمنع نشر المحتوى الغير اخلاقي والاباحي في السيرفر وعقوبته الباند النهائي** `-5`\nThis Server does not have a NSFW channel meaning NSFW is not allowed in this Server.\n\n**يمنع منعاََ باتاََ التحدث بالموأضيع السياسية او الدينية** `-6`\nNo political or religious discussions\n\n**المواعدة او البحث عن علاقات الحب في الخادم غير مسموح به نهائيا** `-7`\nDating or looking for relationships is not allowed on this server.")
      .setColor(16360439);

    const embed5 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ F͟o͟u͟r͟.")
      .setDescription("**يمنع الدخول بحساب جديد في حال كنت مُعاقب مسبقاً في حساب اخر** `-8`\nYou're not allowed to join the server with a new account If you were punished.\n\n\n**يمنع طلب الرتب الادارية او الرتب الشرفية منعا باتاََ وقد يضعك طلبك في القائمة السوداء للادارة** `-9`\nAsking the server management for roles is just plainly annoying so please just don't do it.\n\n**الرجاء عدم تكرار الكلام السبام في حال تجاوزك 4 رسائل متشابهة سيعرضك للعقوبة** `-10`\nRepeating four similar messages will result In punishment.")
      .setColor(16360439);

    const embed6 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ F͟i͟v͟e͟.")
      .setDescription("**اللغات المسموح بها في السيرفر الانجليزية والعربية فقط** `-11`\nthe only supported languages in the server are English and Arabic please don't use any other languages. \n\n**يمنع نشر الروابط داخل السيرفر او لأحد أعضاء السيرفر في الخاص** `-12`\nAdvertising Links In DM's or the server is prohibited.\n\n**يمنع القذف والسب بجميع انواعه, كما يمنع استخدام الفاظ غير مناسبة للفئة العمرية دون سن الـ 13** ``-13``\nDo not excessively swear or use non-PG13 words.\n\n**يمنع ازعاج محمد او اي صانع محتوى اخر بمنشن او سبام **`-14`\nPlease do not ping Web.Mohammed any <@&1414653414750683229> / <@&1414653425055961240>")
      .setColor(16360439);

    const embed7 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ S͟i͟x͟.")
      .setDescription("- ملاحظة: قوانين الشتم و القذف و النشر تشمل الخاص\n \n- Note: swearing/ads rules include private chat.")
      .setColor(16360439);

    const embed8 = new EmbedBuilder()
      .setTitle("﹒                    P͟a͟g͟e͟ S͟e͟v͟e͟n͟.")
      .setDescription("**للمزيد يمكنك التواصل معنا عبر [الدعم الفني](https://discord.com/channels/927902122433982534/1368210269129408664)**\nYou can contact us via [Support Team](https://discord.com/channels/927902122433982534/1368210269129408664)\n\n**نرجو ان تحظى بوقت مرح في مجتمعنا,**\nWe hope you have fun in our community ღ")
      .setColor(16360439);

    // إرسال الإيمبدات كلها
    await message.channel.send({ embeds: [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8] });
  }
});

client.login(process.env.TOKEN);
