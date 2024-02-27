import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import moment from "moment-timezone";

/*============= WAKTU =============*/
let wibh = moment.tz("Asia/Jakarta").format("HH");
let wibm = moment.tz("Asia/Jakarta").format("mm");
let wibs = moment.tz("Asia/Jakarta").format("ss");
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`;

let d = new Date(new Date() + 3600000);
let locale = "id";
let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
  Math.floor(d / 84600000) % 5
];
let week = d.toLocaleDateString(locale, { weekday: "long" });
let date = d.toLocaleDateString(locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/*============== SOCIAL ==============*/
global.sig = "https://instagram.com/@arifzxa19"; //instagram
global.sgh = "https://github.com/Arifzyn19"; //github
global.sgc = "https://chat.whatsapp.com/Hd1rHf8Fxq65FiPZE2B2NP"; //group whatsapp
global.saluran = "https://whatsapp.com/channel/0029VaPvn7DAInPeoypHqm45"; //saluran whatsapp
global.syt = "https://www.youtube.com/@arifzxa19"; //youtube
global.swa = "https://wa.me/6288213503541"; //whatsapp
global.tele = "https://t.me/arifzxa19"; //telegram
global.sdc = "-"; //discord
global.snh = "https://nhentai.net/HaramNgentod"; //nhentai

/*============== PAYMENT ==============*/
global.pdana = "081213229658"; //pulsa1
global.ppulsa = "085280565983"; //pulsa2
global.povo = "085280565983"; //ovo
global.gopay = "085280565984"; //gopay
global.dana = "081213229658"; //dana
global.sid = "https://s.id/RexxETC"; //s.id
global.psaweria = "-"; //saweria

/*============== NOMOR ==============*/
global.nomorwa = "6288213503541";
global.nomorbot = "6285280565984";
global.nomorown = "6288213503541";
global.namebot = "Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ";
global.nameown = "Arifzyn";

/*============== STAFF ==============*/
global.owner = [
  ["6288213503541", "Arifzyn", true],
  ["6285691464024", "Arifzyn", true],
];

global.mods = [];
global.prems = [];

/*============== API ==============*/
global.APIs = {
  arifzyn: "https://api.arifzyn.tech",
};

global.APIKeys = {
  "https://api.arifzyn.tech": "AR-ArifzynKey",
};

/*============== VERSION ==============*/
global.version = "3.0.0";

/*============== WATERMARK ==============*/
global.wm = "Arifzyn"; //wm1
global.wm2 = "꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷"; //wm2
global.wm3 = "➜ Kobokanaeru ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ"; //wm3
global.namedoc = "ʀᴇxx ʜᴀʏᴀɴᴀsɪ"; //nama document
global.botdate = `• ᴅᴀʏ's: ${week} ${date}`;
global.bottime = `ᴛɪᴍᴇ: ${wktuwib}`;
global.titlebot = "🎋 ┊ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ";
global.author = global.wm;

/*============== THUMB ==============*/
global.elaina = "https://telegra.ph/file/ccfab120681cd8bff3245.jpg";

/*============== TEXT ==============*/
global.wait = "🚩 ʟᴏᴀᴅɪɴɢ Tunggu Ya Sayang (⁠づ⁠｡⁠◕⁠‿⁠‿⁠◕⁠｡⁠)⁠づ... ";
global.eror = "```404 error```";
global.dtu = "ɪɴꜱᴛᴀɢʀᴀᴍ";
global.dtc = "ᴄᴀʟʟ ᴏᴡɴᴇʀ";
global.phn = "+62 882-1350-3541";

/*=========== TYPE DOCUMENT ===========*/
global.dpptx =
  "application/vnd.openxmlformats-officedocument.presentationml.presentation";
global.ddocx =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
global.dxlsx =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
global.dpdf = "application/pdf";
global.drtf = "text/rtf";
global.djson = "application/json";

global.thumb = "https://telegra.ph/file/04c4d43e78ee86c40a31e.jpg";
global.thumbdoc = "https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg";
global.flaaa = [
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
  "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
];

/*=========== FAKE SIZE ===========*/
global.fsizedoc = "99999999999999"; // default 10TB
global.fpagedoc = "999";

global.htki = "––––––『"; // Hiasan Titile (KIRI)
global.htka = "』––––––"; // Hiasan Title  (KANAN)
global.lopr = "Ⓟ"; //LOGO PREMIUM ON MENU.JS
global.lolm = "Ⓛ"; //LOGO LIMIT/FREE ON MENU.JS
global.htjava = "⫹⫺"; //hiasan
global.hsquere = ["⛶", "❏", "⫹⫺"];

/*============== STICKER WM ==============*/
global.stickpack = "ᴇʟᴀɪɴᴀ ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ";
global.stickauth = `☂︎\n𝗘\nl\na\ni\nn\na\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ\nwa.me/${global.nomorbot}`;
global.packname = "sᴛɪᴄᴋᴇʀ ʀᴇǫᴜᴇsᴛ ʙʏ";
global.packname2 = "ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴇʟᴀɪɴᴀ ᴀɪ";

global.multiplier = 38; // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      level: "📊",
      limit: "🎫",
      health: "❤️",
      exp: "✨",
      money: "💹",
      bank: "🏦",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🛍️",
      mythic: "🎁",
      legendary: "🗃️",
      superior: "💼",
      pet: "🔖",
      trash: "🗑",
      armor: "🥼",
      sword: "⚔️",
      pickaxe: "⛏️",
      fishingrod: "🎣",
      wood: "🪵",
      rock: "🪨",
      string: "🕸️",
      horse: "🐴",
      cat: "🐱",
      dog: "🐶",
      fox: "🦊",
      petFood: "🍖",
      iron: "⛓️",
      gold: "🪙",
      emerald: "❇️",
      upgrader: "🧰",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
