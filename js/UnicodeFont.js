function UnicodeFont() {}
UnicodeFont.prototype.styles = {
    letters: {
        'normal': Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
        'bold': Array.from('𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙'),
        'italic': Array.from('𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑕𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍'),
        'monospace': Array.from('𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉'),
        'script': Array.from('𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵'),
        'bold-italic': Array.from('𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁'),
        'bold-script': Array.from('𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩'),
        'double-struck': Array.from('𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ'),
        'sans-serif': Array.from('𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹'),
        'sans-serif-bold': Array.from('𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭'),
        'sans-serif-italic': Array.from('𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡'),
        'sans-serif-bold-italic': Array.from('𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕'),
        'mini': Array.from('ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ'),
        'reverse': Array.from('ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎzⱯꓭƆꓷꓱℲꓨHIꓩꞰꓶꟽNOꓒQꓤSꞱꓵɅMX⅄Z'),
        //实际有效：асԁеցһіјӏոорԛѕսԝхуАВСЕНІЈКМОРԚЅΤՍԜХΥΖ
        'fake-normal': Array.from('аbсԁеfցһіјkӏmոорԛrѕtսvԝхуzАВСDЕFGНІЈКLМNОРԚRЅΤՍVԜХΥΖ'),
    },
    numbers: {
        'normal': Array.from('0123456789'),
        'bold': Array.from('𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'),
        'monospace': Array.from('𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'),
        'sans-serif': Array.from('𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'),
        'double-struck': Array.from('𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'),
        'sans-serif-bold': Array.from('𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'),
    },
    marks: {
        'normal': ['\\?', '\\.', ',', '!', '\\&',  '"'],
        'reverse': ['¿','˙',"'",'¡','⅋',',,'],
    },
}
UnicodeFont.prototype.font = function (text, style) {
    for (let i in this.styles) {
        if (this.styles[i][style] === undefined) {
            continue;
        }
        text = this.replaceAll(text, this.styles[i]['normal'], this.styles[i][style]);
    }
    return text;
}
UnicodeFont.prototype.replaceAll = function (text, from, to) {
    if (from.length != to.length) {
        console.log('`from` and `to`, length are not the same!');
    }
    var result = '';
    var list = Array.from(text);
    for (let i of list) {
        let found = false;
        for (let j in from) {
            if (i == from[j]) {
                result += to[j];
                found = true;
            }
        }
        if (!found) {
            result += i;
        }
    }
    return result;
}
UnicodeFont.prototype.mixin = function (text, mixin, missBrackets) {
    var result = '';
    var inBrackets = false;
    if (missBrackets) {
        for (let i in text) {
            let x = text[i];
            if (inBrackets) {
                result += x;
            } else {
                result += (mixin + x);
            }
            if (x == '[') {
                inBrackets = true;
            } else if (x == ']') {
                inBrackets = false;
            }
        }
    } else {
        for (let i in text) {
            result += (mixin + text[i]);
        }
    }
    return result;
}
UnicodeFont.prototype.reverse = function (text) {
    return text.split('').reverse().join('');
}
UnicodeFont.prototype.toggleBrackets = function (text) {
    result = '';
    for (let i in text) {
        result += this.toggleBracketsChar(text[i]);
    }
    return result;
}
UnicodeFont.prototype.toggleBracketsChar = function (char) {
    return (char == '(') ? ')' :
        (char == ')') ? '(' :
        (char == '{') ? '}' :
        (char == '}') ? '{' :
        (char == '<') ? '>' :
        (char == '>') ? '<' :
        char;
}

function Font(name, styles) {
    this.name = name;
    this["from"] = styles["from"];
    this["normal"] = styles["normal"] || null;
    this["bold"] = styles["bold"] || null;
    this["italic"] = styles["italic"] || null;
    this["bold-italic"] = styles["bold-italic"] || null;
}
Font.prototype.setStyle = function(text, styleName) {
    return this.replaceAll(text, this.from, this[styleName]);
}
Font.prototype.replaceAll = function (text, from, to) {
    if (from.length != to.length) {
        console.log('`from` and `to`, length are not the same!');
    }
    var result = '';
    var list = Array.from(text);
    for (let i of list) {
        let found = false;
        for (let j in from) {
            if (i == from[j]) {
                result += to[j];
                found = true;
            }
        }
        if (!found) {
            result += i;
        }
    }
    return result;
}
