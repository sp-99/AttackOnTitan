// ==UserScript==
// @name         Rainbow Text
// @namespace    *.oneplus.net*
// @version      1.0
// @description  Rainbow colored text.
// @author       Annie Leonhart
// @include      *forums.oneplus.net*
// @grant        none
// @license      MIT License; http://opensource.org/licenses/MIT
// ==/UserScript==

function rainbowfy() {
    function RGB2Color(r, g, b) {

        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);

    }

    function byte2Hex(n) {

        var nybHexString = "0123456789ABCDEF";

        return String(nybHexString.substr((n >> 4) & 0x0F, 1)) + nybHexString.substr(n & 0x0F, 1);

    }

    function roundDecimal(v, n) {

        var isNeg = v < 0;

        v = Math.abs(v);

        return (isNeg ? '-' : '') + String(Math.floor(v)) + '.' + String((1 + Math.abs(v) - Math.floor(Math.abs(v))) * Math.pow(10, n)).substr(1, n);

    }

    function colorText(str, phase) {

        var msg = "";

        var in_tag = 0;

        var temp = "";

        var links = /(\bhttp|https\:\/\/?|www\b)[A-Za-z0-9\-_\/.:?=]+/igm;

        var quotes = /(\[[^\/](.*?)\])((.|\n)*?)(\[[\/][^\buser\b](.*?)\])/igm;

        var smilies = /(\;\)|\:D|\:\(|8\-\)|\:\)|(\:\/)(?![\/])|\:P)/igm;

        var tags = /@(\bBrettPlusOne|drmartin|kp1234|DRCH|PLPeeters|Jevoly|finaldentiny|wtfhsf|Adam Krisko|nguser|\b)[A-Za-z0-9\-_\/.:ÁÉÍÓÚáéíóuñÑ]+/igm;

        var mlinks = str.match(links);

        var mquotes = str.match(quotes);

        var msmilies = str.match(smilies);

        var mtags = str.match(tags);

        str = str.replace(links, "^l");

        str = str.replace(quotes, "^q");

        str = str.replace(smilies, "^s");

        str = str.replace(tags, "^t");

        var linkFiller = /(\<\bfont color\b[#="a-z0-9]+\>\^\<\/\bfont\b\>)(\<\bfont color\b[#="a-z0-9]+\>l\<\/\bfont\b\>)/im;

        var quoteFiller = /(\<\bfont color\b[#="a-z0-9]+\>\^\<\/\bfont\b\>)(\<\bfont color\b[#="a-z0-9]+\>q\<\/\bfont\b\>)/im;

        var smilieFiller = /(\<\bfont color\b[#="a-z0-9]+\>\^\<\/\bfont\b\>)(\<\bfont color\b[#="a-z0-9]+\>s\<\/\bfont\b\>)/im;

        var tagFiller = /(\<\bfont color\b[#="a-z0-9]+\>\^\<\/\bfont\b\>)(\<\bfont color\b[#="a-z0-9]+\>t\<\/\bfont\b\>)/im;

        if (mlinks == null) {

            numLinks = 0;

        } else {

            numLinks = mlinks.length;

        }

        if (mquotes == null) {

            numQuotes = 0;

        } else {

            numQuotes = mquotes.length;

        }

        if (msmilies == null) {

            numSmilies = 0;

        } else {

            numSmilies = msmilies.length;

        }

        if (mtags == null) {

            numTags = 0;

        } else {

            numTags = mtags.length;

        }

        if (phase == undefined)

            phase = 140;

        center = 128;

        width = 127;

        len = str.length;

        frequency = Math.PI * 2 / str.length;

        console.log("going to colorize: " + str)

        for (i = 0; i < str.length; i++) {

            if (str.charAt(i) == "<") in_tag = 1;

            if (in_tag == 0) {

                temp = str.charAt(i);

                if (str.charAt(i) == "&") {

                    for (l = i + 1; l < str.length; l++) {

                        if (str.charAt(l) == " ") break;

                        if (str.charAt(l) == "<") break;

                        if (str.charAt(l) == ">") break;

                        if (str.charAt(l) == ";") break;

                    }

                    if (str.charAt(l) == ";") {

                        temp = str.substr(i, l - i + 1);

                        console.log(temp);

                        msg = msg + temp

                        i += temp.length - 1

                        console.log(i);

                        temp = "";

                    }

                }

                if (temp == "") {

                } else {

                    red = Math.sin(frequency * i + 2 + phase) * width + center;

                    green = Math.sin(frequency * i + 0 + phase) * width + center;

                    blue = Math.sin(frequency * i + 4 + phase) * width + center;

                    msg = msg + '<font color="' + RGB2Color(red, green, blue) + '">' + str.charAt(i) + '</font>';

                }

            }

            if (in_tag == 1) {

                if (str.charAt(i) == ">") in_tag = 0;

                msg = msg + str.charAt(i);

            }

        }

        mlinkFiller =

            console.log("Re-adding links");

        for (link = 0; link < numLinks; link++) {

            msg = msg.replace(linkFiller, mlinks[link]);

        }

        console.log("Re-adding quotes");

        for (quote = 0; quote < numQuotes; quote++) {

            msg = msg.replace(quoteFiller, mquotes[quote]);

        }

        console.log("Re-adding smilies");

        for (smilie = 0; smilie < numSmilies; smilie++) {

            msg = msg.replace(smilieFiller, msmilies[smilie]);

        }

        console.log("Re-adding tags");

        for (tag = 0; tag < numTags; tag++) {

            msg = msg.replace(tagFiller, mtags[tag]);

        }

        console.log(msg);
        $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor').contents().find('body').html(msg)

    }

    function makeColorGradient(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {

        if (len == undefined)

            len = 50;

        if (center == undefined)

            center = 128;

        if (width == undefined)

            width = 127;

        for (var i = 0; i < len; ++i) {

            var red = Math.sin(frequency1 * i + phase1) * width + center;

            var grn = Math.sin(frequency2 * i + phase2) * width + center;

            var blu = Math.sin(frequency3 * i + phase3) * width + center;

            var msg = '<font color="' + RGB2Color(red, grn, blu) + '">&#9608;</font>';

        }

    }

    var text = $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor').contents().find('body').html()

    colorText(text, 4);
}

//Rainbowfy Text
if ($('input[value="Post Reply"]').length > 0) {
    var rainbowfyBtn = $('&nbsp;<button class="button">Rainbowfy</button>');
    $('input[value="Post Reply"]').after(rainbowfyBtn);
    rainbowfyBtn.click(function(e) {
        e.preventDefault();
        rainbowfy();
    });
}
