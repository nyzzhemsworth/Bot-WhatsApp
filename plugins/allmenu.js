import { promises } from "fs";
import { join } from "path";
import { xpRange } from "../lib/levelling.js";
import moment from "moment-timezone";
import os from "os";
import fs from "fs";
import fetch from "node-fetch";
const { generateWAMessageFromContent, proto } = (
  await import("@adiwajshing/baileys")
).default;

let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  
  const defaultMenu = {
    before:
      `Bokobokobokobo... Kobo Kanaeru at your service! Let me be your sun to shine your day! Ehe! hallowww %name 🍁.
Aku、adalah、Kobokanaeru、Multidevice yang awal perilisan oleh owner Kobo Akan Membantu kalian dan menemani kalian ehekk(⁠つ⁠✧⁠ω⁠✧⁠)⁠つ。 

 乂  *S T A T I S T I C*

. .╭── ︿︿︿︿︿ .   .   .   .   .   . 
. .┊ ‹‹ *ɴᴀᴍᴇ* :: %name
. .┊•*☔°... Baca ini ya KoboSkuy (⁠◠⁠‿⁠◕⁠) ...
. .╰─── ︶︶︶︶ ♡⃕  ⌇. . .
 . . ┊➜ [ *ʀᴜɴᴛɪᴍᴇ* :: %muptime] . .
 . . ┊➜ [ *ᴘʀᴇғɪx* :: <%p>] . .
 . . ┊➜ [ *ᴅᴀᴛᴀʙᴀsᴇ* :: %totalreg] . .
 . . ┊➜ [ *ᴅᴀᴛᴇ* :: %date]. . 
 . . ┊➜ [ *ᴘʟᴀᴛғᴏʀᴍ* :: %platform]. . 
 . . ┊➜ [ *ʟɪʙʀᴀʀʏ* :: @whiskeysocket/baileys]. . 
 . . ┊➜ [ *ᴄʀᴇᴀᴛᴏʀ* :: Arifzyn]. . 
 . . ┊➜ [ *INFO BOT* :: Tahap Upgrade Ehekk]. . 
 . . ╰─────────╮

*Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ* Menggunakan Sebagian Fitur *Elaina ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ*, Dan Dibuat Dengan Sepenuh Hati oleh owner Agar Kobokanaeru - MD Gak Keban Jangan Banyak banyak Spam .allmenu yakk Koboskuy (⁠人⁠ ⁠•͈⁠ᴗ⁠•͈⁠)。
%readmore
`.trimStart(),
    header: "─₍🍁₎❝┊ *%category*",
    body: `┊꒱ ☁   %cmd %islimit %isPremium `,
    footer: "╰─── –",
    after: `Kobokanaeru - ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ ʙʏ ${global.nameown} ${global.version}`,
  };
  
  let teks = `${args[0]}`.toLowerCase()
  let tags;
  let arrayMenu = [
    "ai",
    "download",
    "group", 
    "owner"
  ]
  
  if (!arrayMenu.includes(teks)) teks = "404";
  if (teks == "ai") {
    tags = {
      ai: "*Ai Feature*",
    };
  } else if (teks == "download") {
    tags = {
      download: "*Download Feature*",
    };
  } else if (teks == "group") {
    tags = {
      group: "*Group Feature*",
    };
  } else if (teks == "owner") { 
    tags = {
      owner: "*Owner Feature*",
    };
  }
  
  try {
    let name = m.pushName || conn.getName(m.sender);
    let d = new Date(new Date() + 3600000);
    let locale = "id";
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Jakarta",
    });
    let time = d.toLocaleTimeString(locale, { timeZone: "Asia/Kolkata" });
    time = time.replace(/[.]/g, ":");
    let _muptime;
    if (process.send) {
      process.send("uptime");
      _muptime =
        (await new Promise((resolve) => {
          process.once("message", resolve);
          setTimeout(resolve, 1000);
        })) * 1000;
    }

    let _uptime;
    if (process.send) {
      process.send("uptime");
      _uptime =
        (await new Promise((resolve) => {
          process.once("message", resolve);
          setTimeout(resolve, 1000);
        })) * 1000;
    }
    
    if (teks == "404") {
      return conn.sendMessage(m.chat, { text: "Test" }, {
        quoted: fkontak,
        mentions: await conn.parseMention(conn),
        contextInfo: { forwardingScore: 99999, isForwarded: true },
      });
    }

    let bjir = "https://telegra.ph/file/7d021a0fb961c4dd68ddf.jpg";
    let totalreg = Object.keys(global.db.data.users).length;
    let platform = os.platform();
    let muptime = clockString(_muptime);
    let uptime = clockString(_uptime);
    let help = Object.values(global.plugins)
      .filter((plugin) => !plugin.disabled)
      .map((plugin) => {
        return {
          help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
          tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
          prefix: "customPrefix" in plugin,
          limit: plugin.limit,
          premium: plugin.premium,
          enabled: !plugin.disabled,
        };
      });
    for (let plugin of help)
      if (plugin && tags in plugin)
        for (let tag of plugin.tags) if (!(tag in tags) && tag) tags[tag] = tag;
    conn.menu = conn.menu ? conn.menu : {};
    let before = conn.menu.before || defaultMenu.before;
    let header = conn.menu.header || defaultMenu.header;
    let body = conn.menu.body || defaultMenu.body;
    let footer = conn.menu.footer || defaultMenu.footer;
    let after = conn.menu.after || defaultMenu.after;
    let _text = [
      before,
      ...Object.keys(tags).map((tag) => {
        return (
          header.replace(/%category/g, tags[tag].toUpperCase()) +
          "\n" +
          [
            ...help
              .filter(
                (menu) => menu.tags && menu.tags.includes(tag) && menu.help,
              )
              .map((menu) => {
                return menu.help
                  .map((help) => {
                    return body
                      .replace(/%cmd/g, menu.prefix ? help : "%p" + help)
                      .replace(/%islimit/g, menu.limit ? "(Ⓛ)" : "")
                      .replace(/%isPremium/g, menu.premium ? "(Ⓟ)" : "")
                      .trim();
                  })
                  .join("\n");
              }),
            footer,
          ].join("\n")
        );
      }),
      after,
    ].join("\n");
    let text =
      typeof conn.menu == "string"
        ? conn.menu
        : typeof conn.menu == "object"
          ? _text
          : "";
    let replace = {
      "%": "%",
      p: _p,
      uptime,
      muptime,
      me: conn.getName(conn.user.jid),
      name,
      date,
      time,
      platform,
      _p,
      totalreg,
      readmore: readMore,
    };
    text = text.replace(
      new RegExp(
        `%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`,
        "g",
      ),
      (_, name) => "" + replace[name],
    );

    conn.sendMessage(
      m.chat,
      {
        video: fs.readFileSync("./media/video/elaina.mp4"),
        mimetype: "video/mp4",
        fileLength: 1000000,
        caption: Styles(text),
        gifPlayback: true,
        gifAttribution: 5,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            forwardingScore: 2023,
            title: "ᴍ ᴇ ɴ ᴜ  k o b o k a n a e r u",
            thumbnailUrl: "https://telegra.ph/file/7d021a0fb961c4dd68ddf.jpg",
            sourceUrl: "",
            mediaType: 1,
            renderLargerThumbnail: true,
            mentionedJid: [m.sender],
          },
        },
      },
      { quoted: fkontak },
    );
  } catch (e) {
    conn.reply(m.chat, "Maaf, menu kobo sedang error", m);
    console.error(e);
  }
};
handler.command = /^(allmenu|menuall|menunya|listmenu)$/i;
handler.daftar = false;

export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

function Styles (text, style = 1) {
    var xStr = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var yStr = Object.freeze({
      1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890",
    });
    var replacer = [];
    xStr.map((v, i) =>
      replacer.push({
        original: v,
        convert: yStr[style].split("")[i],
      }),
    );
    var str = text.toLowerCase().split("");
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join("");
  };
  