let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh:\n${usedPrefix}${command} Halo?`;
  let ouh = await fetch(
    `https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=Elaina`,
  );
  let gyh = await ouh.json();
  await conn.sendMessage(m.chat, {
    text: `${gyh.result}`,
    contextInfo: {
      externalAdReply: {
        title: "Elaina - C.ai",
        body: "K O B O K A N A E R U  M U L T I D E V I C E",
        thumbnailUrl: "https://telegra.ph/file/7d021a0fb961c4dd68ddf.jpg",
        sourceUrl: "https://chat.whatsapp.com/FhZ2oueAcLK5GqZu0nfKq6",
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
      },
    },
  });
};
handler.command = /^(caielaina)$/i;
handler.help = ["caielaina"];
handler.tags = ["character-ai"];
handler.premium = false;

export default handler;
