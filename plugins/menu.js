import canvafy from "canvafy";
import moment from "moment-timezone";

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command }) => {
  let pp = await conn
    .profilePictureUrl(m.sender, "image")
    .catch((_) => "https://i.ibb.co/2WzLyGk/profile.jpg");

  let yaya = `
⌬〡 *ɴᴀᴍᴇ ʙᴏᴛ* : ${global.namebot}
⌬〡 *ᴄʀᴇᴀᴛᴏʀ* : ${global.nameown}
⌬〡︎ *ᴠᴇʀsɪᴏɴs* : ${global.version}
⌬〡︎ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs
⌬〡 *ɪɴsᴛɢʀᴀᴍ* : ${global.sig}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
Heh anyying sebelum pakai Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ Utamakan Baca Peraturan ya annying ⟵⁠(⁠๑⁠¯⁠◡⁠¯⁠๑⁠)

𝟷. sᴘᴀᴍ Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ sangat di larang

𝟸. ᴄᴀʟʟɪɴɢ Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ sangat di larang

𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ sangat di larang karena hanya khusus untuk Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ

𝟺. sᴘᴀᴍ ke ɴᴏ ᴏᴡɴᴇʀ Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ Sangat di larang 

╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*Ketik .ᴀʟʟᴍᴇɴᴜ untuk memunculkan ᴍᴇɴᴜ _Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ_*

_Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ_ ʙᴏᴛ sedang dalam pengerjaan ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ_ jika kamu ingin Rental/Sewa ʜᴏsᴛɪɴɢ Server/Bot, Ketik .ᴏᴡɴᴇʀ [ɴᴏᴛ ᴀ ʙᴏᴛ]

_ɴᴏᴛᴇ: jika kamu tidak paham dengan fungsi dari *Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ* Ketik .ᴛᴜᴛᴏʀɪᴀʟ_

ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴀʟʟᴍᴇɴᴜ ᴋᴇᴛɪᴋ *.ᴀʟʟᴍᴇɴᴜ*`;

  let name = await conn.getName(m.sender);
  let fkon = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "16504228206@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  let p = await new canvafy.Security()
    .setAvatar("https://i.ibb.co/2WzLyGk/profile.jpg")
    .setBackground("color", "#FF0033")
    .setLocale("id")
    .setOverlayOpacity(1.0)
    .setAvatarBorder("#fff")
    .setCreatedTimestamp(Date.now())
    .setSuspectTimestamp(1)
    .build();

  conn.sendFile(
    m.chat,
    p,
    "",
    yaya,
    m,
    null,
    {
      fileLength: "10000",
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 1,
          description: wm,
          title: `ʜᴀʟʟᴏ ᴋᴀᴋ ${name}`,
          body: `${ucapan()}`,
          renderLargerThumbnail: true,
          thumbnail: await (
            await fetch(`https://telegra.ph/file/7bae3abe51b953b5b3a2e.jpg`)
          ).buffer(),
          sourceUrl: "https://s.id/RexxETC",
        },
      },
    },
    { quoted: fkon },
  );
};

handler.command = /^(menu|help|\?)$/i;

export default handler;

function ucapan() {
  const time = moment.tz("Asia/Jakarta").format("HH");
  let res = "ᴋᴏᴋ ʙᴇʟᴜᴍ ᴛɪᴅᴜʀ ᴋᴀᴋ? 🥱";
  if (time >= 4) {
    res = "ᴘᴀɢɪ ᴋᴀᴋ 🌄";
  }
  if (time >= 10) {
    res = "sɪᴀɴɢ ᴋᴀᴋ ☀️";
  }
  if (time >= 15) {
    res = "sᴏʀᴇ ᴋᴀᴋ 🌇";
  }
  if (time >= 18) {
    res = "ᴍᴀʟᴀᴍ ᴋᴀᴋ 🌙";
  }
  return res;
}
