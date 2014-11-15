// ==UserScript==
// @name         Custom Sidebar
// @namespace    *.oneplus.net*
// @version      1.6.1
// @description  A custom sidebar for the Oneplus forums with many custom scripts and tools.
// @author       Annie Leonhardt AKA Kallen AKA Mikasa. AKA Akane, Kevin Pei AKA kp1234, Sam Prescott AKA sp99
// @include      *forums.oneplus.net*
// @grant        none
// @license      MIT License; http://opensource.org/licenses/MIT
// ==/UserScript==
function addJQuery(callback) {
    $('<style type="text/css"></style').text('.xenOverlay .xenForm.animateClose{-webkit-transition:300ms cubic-bezier(0.215,.61,.355,1);transition:300ms cubic-bezier(0.215,.61,.355,1);opacity:0;-webkit-transform: scale(0.9,0.9);transform: scale(0.9,0.9);}.xenOverlay .xenForm.animateClose.open{opacity:1;-webkit-transform: scale(1,1);transform: scale(1,1);}.xenOverlay .xenForm{border-radius:3px;box-shadow:0px 0px 600px #000;border-style:none;background:#151515 !important;}.xenOverlay .formOverlay .heading {color: #FFF;background: transparent;padding-left: 0px;border-style:none;}.sidebar{position:absolute;right:0px;}.sidebar.fixed{position:fixed;top:80px;box-sizing:border-box;}.custom-inner li{padding-top:16px;}.custom-inner li:first-child{padding-top: 0px;}.sidebar .section h3{padding:0px;padding-bottom:0px !important;cursor:pointer; color:#000 !important;}.sidebar .section h3 a{color:#000 !important;}#create-thread-button .inner{margin-bottom:30px;}.sidebar .section h3 a:hover{text-decoration:none;}#widget-11 .widget_header_small:hover{text-decoration:underline;}#create-thread-button .inner{margin-bottom:30px;}.sidebar .section .widget{padding:8px 0px 14px 0px;}.sidebar .section .section-wrapper{display:none;padding:10px 0px;}').appendTo('head');
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
}

function main() {
    function modal(title, content, btns) {
        var overlayObj = $('<div style="position: fixed;margin: auto;top: 0;left: 0;width: 100%;height: 100%;z-index: 209998;opacity: 0.9;filter: alpha(opacity=90);background-color: rgb(255,255,255);"></div>');
        var modalObj = $('<div class="xenOverlay" style="display: block;position: fixed;left: 50%;width: 600px;z-index:209999;margin-left: -300px;top: 50%;height: auto;"><form class="formOverlay xenForm animateClose"><div class="heading" id="redactor_modal_header">' + title + '</div><div id="redactor_modal_inner"><dl class="ctrlUnit"><div class="modal-inner-content"></div></dl><dl class="ctrlUnit submitUnit modal-btn-wrapper"></dl></div></form></div>');
        modalObj.find('.modal-inner-content').append(content);
        var modalMethods = {
            close: function() {
                modalObj.find('.xenForm').removeClass('open').delay(300).hide(1, function() {
                    modalObj.remove();
                });
                overlayObj.fadeOut(300, function() {
                    overlayObj.remove();
                });
            },
            add: function(data) {
                modalObj.find('.modal-inner-content').append(data);
            }
        };
        this.methods = modalMethods;
        $.each(btns, function(index, value) {
            var btn = $('<button class="redactor_modal_btn button" style="margin-right:5px;">' + index + '</button>');
            if (value.type == "red") {
                btn.addClass('primary');
            }
            modalObj.find('.modal-btn-wrapper').append(btn);
            btn.click(function(e) {
                e.preventDefault();
                btns[index].click.call(modalMethods);
            });
        });
        modalObj.appendTo('body');
        modalObj.css('margin-top', -modalObj.outerHeight() / 2);
        overlayObj.hide().appendTo('body').fadeIn(300);
        modalObj.find('.xenForm').addClass('open');
    }

    function quickPM(user) {
        var pm_title = $('<input id="title" class="textCtrl" type="text" style="width:50%;"/><br>');
        var pm_msg = $('<textarea id="message" class="textCtrl" style="height: 100px;resize: none;display:block;width:100%;"></textarea>')
        var sendMsg = $('<div>Subject: </div>');
        sendMsg.append(pm_title);
        sendMsg.append('<br><br>Message:')
        sendMsg.append(pm_msg);
        new modal('QUICK PM', sendMsg, {
            'Send Message': {
                type: 'red',
                click: function() {
                    this.close();
                    console.log(pm_msg.val().replace('<br>', '\n'))
                    var url = 'https://forums.oneplus.net/conversations/add';
                    var token = document.getElementsByName('_xfToken')[0].getAttribute('value')
                    var msgTitle = pm_title.val()
                    var msg = pm_msg.val().replace('\n', '<br>')
                    $.get('/conversations/add', function(data) {
                        $.post('/conversations/insert', {
                            recipients: user,
                            title: msgTitle,
                            message_html: msg,
                            last_date: Date.now(),
                            last_known_date: Date.now(),
                            xfRelativeResolver: url,
                            _xfToken: token,
                            _xfRequestUri: url.replace("https://forums.oneplus.net", ""),
                            _xfNoRedirect: 1,
                            _xfResponseType: "json"
                        });
                    });
                }
            },
            'Cancel': {
                type: 'grey',
                click: function() {
                    this.close();
                }
            }
        });
    }

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

            var quotes = /(\[[^\/](.*?)\])((.|\n)*?)(\[[\/](.*?)\])/igm;

            var smilies = /(\;\)|\:D|\:\(|8\-\)|\:\)|(\:\/)(?![\/])|\:P)/igm;

            var tags = /@(\bBrettPlusOne|drmartin|kp1234|DRCH|PLPeeters|Jevoly|finaldentiny|wtfhsf|Adam Krisko|nguser|\b)[A-Za-z0-9\-_\/.:]+/igm;

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

    function closeThread(batch) {
        function getWarningMsg(option, name, title) {
            if (option == 1) {
                return '<p>Hi there @' + name + '!</p><br/><p>It has come to my attention that you have created a thread to ask for invites, however that is not allowed.</p><br/><p>The best way to receive an invite is to hang around the forums, join in on the community discussion and create quality replies and threads.</p><br/><p>If you have any further questions, please read the following thread https://forums.oneplus.net/threads/2-rules-revisited-and-restated.78159/, or feel free to message me via the private message feature.</p><br/><p>Thanks for your understanding!</p><br/><p>Thread closed.</p>';
            }
            if (option == 2) {
                var link = prompt("Duplicate link for " + title + "? (enter 0 to skip this)");
                return '<p>Hi there @' + name + '!</p><br/><p>It appears that this has already been discussed ' + (link ? ('at ' + link + '.</p>') : 'before.') + '<p>Please search in the future prior to creating a thread, so we don\'t encounter any duplicates :).</p><br/><p>If you have any further questions, feel free to message me via the private message feature.</p><br/><p>Thanks for your understanding!</p><br/><p>Thread closed.</p>';
            }
            if (option == 3) {
                return '<p>Hi there @' + name + '!</p><br/><p>It has come to my attention that you have linked to a scalper site, however that is not allowed.</p><br/><p>OnePlus is the one and only official retailer of the OnePlus One at the moment, and buying from other sources puts people at risk of scamming and other dangers.</p><br/><p>If you have any further questions, please read the following thread https://forums.oneplus.net/threads/5-reasons-to-not-buy-the-oneplus-one-from-scalpers.35689/, or feel free to message me via the private message feature.</p><br/><p>Thanks for your understanding!</p>';
            }
            if (option == 4) {
                return '<p>Congrats to the winner(s)!</p><br/><p>Thank you @' + name + ' for sharing with the OnePlus community :)</p><br/>Invites given, thread closed.</p>';
            }
        }

        function closePost(url, message, modalObj) {
            $.get(url, function(data) {
                var token = data.match(/_csrfToken: \"(.*)\"/)[1];
                var dataObject = $(data);
                var name = dataObject.find('.message:first').attr('data-author');
                var msg = getWarningMsg(message, name, dataObject.find('.titleBar:first h1').text());
                $.post(url + '/add-reply', {
                    message_html: msg,
                    _xfRelativeResolver: url,
                    last_date: Date.now(),
                    last_known_date: Date.now(),
                    _xfToken: token,
                    _xfRequestUri: url.replace("https://forums.oneplus.net", ""),
                    _xfNoRedirect: 1,
                    _xfResponseType: "json"
                }, function(data) {
                    if (data.error) {
                        alert(data.error[0]);
                        return 0;
                    }
                    $.post(url + '/quick-update', {
                        'set[discussion_open]': 1,
                        'set[sticky]': 1,
                        _xfToken: token,
                        _xfRequestUri: url.replace("https://forums.oneplus.net", ""),
                        _xfNoRedirect: 1,
                        _xfResponseType: 'json'
                    }, function(data) {
                        if (batch) {
                            modalObj.add('<li>Closed ' + (url.replace('https://forums.oneplus.net/threads/', '').replace('/', '').replace('-', ' ')) + '. Waiting 30 seconds...</li>');
                        } else {
                            location.reload(1);
                        }
                    });
                });
            });
        }

        function runClose(links, modalObj) {
            window.queue = [];
            for (var i = 0; i < links.length; i++) {
                var message = 0;
                while (message < 1 || message > 4) {
                    message = Number(prompt("Warning type for \"" + (links[i].replace('https://forums.oneplus.net/threads/', '').replace('/', '').replace('-', ' ')) + "\": \n1. Begging\n2. Duplicate\n3. Scalpers\n4. Contest over"));
                    if (!message) {
                        return;
                    }
                }
                window.queue.push([links[i].replace(/page-\d+/, '').split("#")[0], message]);
            }
            var thisArgs = window.queue.shift();
            closePost(thisArgs[0], thisArgs[1], modalObj);
            if (window.queue.length != 0) {
                window.closeInterval = setInterval(function() {
                    thisArgs = window.queue.shift();
                    closePost(thisArgs[0], thisArgs[1], modalObj);
                    if (window.queue.length == 0) {
                        alert('All thread(s) successfully closed!');
                        modalObj.remove();
                        clearInterval(window.closeInterval);
                    }
                }, 35000);
            } else {
                if (batch) {
                    alert('All thread(s) successfully closed!');
                    modalObj.close();
                }
            }
        }
        if (batch) {
            var txtArea = $('<textarea id="postUrls" class="textCtrl" style="height: 100px;resize: none;display:block;width:100%;"></textarea>');
            var modalInner = $('<div>Links:</div>');
            modalInner.append(txtArea);
            modal('Batch Close Threads', modalInner, {
                'Close!': {
                    type: 'red',
                    click: function() {
                        runClose(txtArea.val().split("\n"), this);
                    }
                },
                'Cancel': {
                    type: 'grey',
                    click: function() {
                        this.close();
                    }
                }
            });
            modal.appendTo('body');
            modal.find('.redactor_btn_modal_close').click(function() {
                modal.remove();
            });
            modal.find('#redactor_insert_urls_btn').click(function() {
                modal.find('.button').remove();
                links = modal.find('#postUrls').val().split("\n");
                runClose();
            });
        } else {
            runClose([location.href]);
        }
    }

    function like(method) {
        //---------------------------- CURRENT PAGE LIKING FUNCTION -------------------------------//  
        function like() {
                for (k = 0; k < document.getElementsByClassName('LikeLink item control like').length; k++) {
                    document.getElementsByClassName('LikeLink item control like')[k].click();
                }
            }
            //---------------------------- SPECIFIC USER LIKING FUNCTION -------------------------------//  
        function likeSpecific() {
                var userlinks = [];
                try {
                    document.getElementsByClassName('PageNav')[0].getAttribute('data-last')
                    var pages = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-last')) + 2;
                } catch (err) {
                    var pages = 1;
                }
                var modalProgress = $('<div></div>');
                var progressModal;

                function getSpecificUserLinks() {
                    jQuery.ajaxSetup({
                        async: false
                    });
                    for (i = 1; i <= pages; i++) {
                        $.get(url + 'page-' + i, function(data) {
                            $.expr[":"].contains = $.expr.createPseudo(function(arg) {
                                return function(elem) {
                                    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
                                };
                            });
                            $(data.replace(/<img[^>]*>/g, "")).find("li:contains(" + name + ")").each(function() {
                                userlinks.push($(this).find('a[class="LikeLink item control like"]').attr('href'));
                            });
                        });
                        modalProgress.text('Checking Page ' + i + ' of ' + pages + '...');
                    }
                    likeSpecificLinks();
                }

                function likeSpecificLinks() {
                    var numbLinks = userlinks.length + 2;
                    for (t = 0; t <= numbLinks; t++) {
                        var token = document.getElementsByName('_xfToken')[0].getAttribute('value')
                        jQuery.ajaxSetup({
                            async: false
                        });
                        $.post(userlinks[t], {
                            _xfToken: token,
                            _xfNoRedirect: 1,
                            _xfResponseType: 'json'
                        }, function(data) {});
                        modalProgress.text('Liking ' + t + '/' + numbLinks + ' (' + Math.round(t * 100 / numbLinks) + '%)');
                    }
                }
                var url = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2] + '/';
                var usernameInput = $('<input type="text" style="width:100%;"/>');
                new modal('Enter username', usernameInput, {
                    'Like!': {
                        type: 'red',
                        click: function() {
                            this.close();
                            progressModal = new modal('Liking..', modalProgress, {});
                            name = usernameInput.val();
                            getSpecificUserLinks();
                            progressModal.methods.close();
                            alert('done');
                        }
                    },
                    'Cancel': {
                        type: 'grey',
                        click: function() {
                            this.close();
                        }
                    }
                });
            }
            //---------------------------- THREAD LIKING FUNCTION -------------------------------//  
        function likeThreadPosts() {
                var links = [];
                try {
                    document.getElementsByClassName('PageNav')[0].getAttribute('data-last')
                    var pages = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-last')) + 2;
                } catch (err) {
                    var pages = 1;
                }
                var url = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2] + '/';
                var modalProgress = $('<div></div>');
                var progressModal = new modal('Liking..', modalProgress, {});

                function likeLinks(modalProgress) {
                    var numbLinks = links.length + 2;
                    var actualLoad = 0;

                    function sendBatch() {
                        var batchLoaded = 0;
                        for (i = 0; i <= 500; i++) {
                            console.log(i);
                            t = actualLoad + i;
                            var token = document.getElementsByName('_xfToken')[0].getAttribute('value');
                            $.post(links[t], {
                                _xfToken: token,
                                _xfNoRedirect: 1,
                                _xfResponseType: 'json'
                            }, function(data) {
                                actualLoad++;
                                batchLoaded++;
                                if (batchLoaded == 500) {
                                    setTimeout(function() {
                                        sendBatch();
                                    }, 200);
                                }
                                modalProgress.text('Liking ' + t + '/' + numbLinks + ' (' + Math.round(t * 100 / numbLinks) + '%)');
                                if (actualLoad == numbLinks) {
                                    progressModal.methods.close();
                                    alert('done');
                                }
                            });
                            if (t > numbLinks) {
                                break;
                            }
                        }
                    }
                    sendBatch();
                }

                function getLikeURLs(modalProgress) {
                    var actualCount = 0;
                    for (i = 1; i <= pages; i++) {
                        $.get(url + 'page-' + i, function(data) {
                            //gets the like links from current page
                            $(data.replace(/<img[^>]*>/g, "")).find('a[class="LikeLink item control like"]').each(function() {
                                links.push($(this).attr('href')); // get the normalized `href` property; fastest solution
                            });
                            actualCount++;
                            modalProgress.text('Checking Page ' + actualCount + ' of ' + pages + '...');
                            if (actualCount == pages) {
                                if (links.length > 50) {
                                    if (confirm("DISCLAIMER/WARNING: You are about to give more than 50 likes. We the script creator's will not be responsible for any possible repercussions. Would you like to proceed?")) {
                                        likeLinks(modalProgress);
                                    } else {
                                        progressModal.methods.close();

                                    }
                                } else {
                                    likeLinks(modalProgress);
                                }
                            }
                        });
                    }
                }
                getLikeURLs(modalProgress);
            }
            //---------------------------- FORWARD POST LIKING FUNCTION -------------------------------//
        function likeForward() {
                var links = [];
                try {
                    document.getElementsByClassName('PageNav')[0].getAttribute('data-last')
                    var pages = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-last'));
                } catch (err) {
                    var pages = 1;
                }
                var url = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2] + '/'
                var modalProgress = $('<div></div>');
                var progressModal = new modal('Liking..', modalProgress, {});

                function getForward(modalProgress) {
                    var actualCount = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-end'));
                    for (i = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-end')); i <= pages; i++) {
                        $.get(url + 'page-' + i, function(data) {
                            //gets the like links from current page
                            $(data.replace(/<img[^>]*>/g, "")).find('a[class="LikeLink item control like"]').each(function() {
                                links.push($(this).attr('href')); // get the normalized `href` property; fastest solution
                            });
                            actualCount++;
                            modalProgress.text('Checking Page ' + actualCount + ' of ' + pages + '...');
                            if (actualCount == pages) {
                                if (links.length > 50) {
                                    if (confirm("DISCLAIMER/WARNING: You are about to give more than 50 likes. We the script creator's will not be responsible for any possible repercussions. Would you like to proceed?")) {
                                        likeLinks(modalProgress);
                                    } else {
                                        progressModal.methods.close();
                                    }
                                } else {
                                    likeLinks(modalProgress);
                                }
                            }
                        });
                    }
                }

                function likeLinks(modalProgress) {
                    var numbLinks = links.length + 2;
                    var actualLoad = 0;

                    function sendBatch() {
                        var batchLoaded = 0;
                        for (i = 0; i <= 500; i++) {
                            t = actualLoad + i;
                            console.log(t);
                            var token = document.getElementsByName('_xfToken')[0].getAttribute('value');
                            $.post(links[t], {
                                _xfToken: token,
                                _xfNoRedirect: 1,
                                _xfResponseType: 'json'
                            }, function(data) {
                                actualLoad++;
                                batchLoaded++;
                                if (batchLoaded == 500) {
                                    setTimeout(function() {
                                        sendBatch();
                                    }, 200);
                                }
                                modalProgress.text('Liking ' + t + '/' + numbLinks + ' (' + Math.round(t * 100 / numbLinks) + '%)');
                                if (actualLoad >= numbLinks) {
                                    progressModal.methods.close();
                                    alert('done');
                                }
                            });
                            if (t > numbLinks) {
                                break;
                            }
                        }
                    }
                    sendBatch();
                }
                getForward(modalProgress);
            }
            //---------------------------- ALERT LIKING FUNCTION -------------------------------//
        function likeAlert() {
                var alerts = [];
                $.get('account/alerts?page=' + 0, function(data) {
                    var token = data.match(/_csrfToken: \"(.*)\"/)[1];
                    for (i = 0; i <= 30; i++) {
                        alerts.push($(data).find('a.PopupItemLink').eq(i).attr('href') + 'like');
                        console.log('Liking post: ' + alerts[i].split('/')[1])
                        $.post(alerts[i], {
                            _xfToken: token,
                            _xfNoRedirect: 1,
                            _xfResponseType: 'json'
                        }, function(data) {});
                    }
                });
                alert('done')
            }
            //---------------------------- POST LIKING MENU -------------------------------//
        function option() {
            var selection = $('<select style="width:100%;"><option value="1">Like all posts on page</option><option value="2">Like all posts in thread</option><option value="3">Like posts from this page forward</option><option value="4">Like all posts by specific user</option></select>');
            var modalContent = $('<div></div>').append(selection);
            new modal('Choose an option below', modalContent, {
                'Like!': {
                    type: 'red',
                    click: function() {
                        this.close();
                        var likeChoice = Number(selection.find('option:selected').val());
                        if (likeChoice == 1) {
                            like();
                        } else if (likeChoice == 2) {
                            likeThreadPosts();
                        } else if (likeChoice == 3) {
                            likeForward();
                        } else if (likeChoice == 4) {
                            likeSpecific();
                        }
                    }
                },
                'Cancel': {
                    type: 'grey',
                    click: function() {
                        this.close();
                    }
                }
            });
        }
        if (method == "allPosts") {
            option();
        }
        if (method == "alerts") {
            likeAlert();
        }
    }

    function sidebar(title, opts) {
            var options = {
                layout: 'oneColumn'
            };
            $.extend(options, opts);
            this.wrapper = $('<div class="section widget-group-no-name widget-container"></div>');
            this.wrapper.append('<div class="secondaryContent widget" id="widget-12"><h3 style="padding-bottom:0px;">' + title + '</h3><ul class="custom-inner ' + (options.layout == 'twoColumns' ? 'xenforo-list-2cols' : '') + '"></ul><div class="clearfix" style="clear:left"></div></div>');
            this.content = this.wrapper.find('.custom-inner');
            this.add = function(elem, callback) {
                this.content.append(elem);
                elem.wrap('<li></li>');
                if (typeof callback != "undefined") {
                    callback(elem);
                }
            }
            $('.sidebar .section:first').after(this.wrapper);
        }
        //Quick Links
    var quickLinks = new sidebar("Quick Links", {
        layout: "twoColumns"
    });
    quickLinks.add($('<a href="/account/signature/">Edit Signature</a>'));
    quickLinks.add($('<a href="https://account.oneplus.net/invite/overview">View Invites</a>'));
    quickLinks.add($('<a href="/conversations/add">Start PM</a>'));
    quickLinks.add($('<a href="/account/ignored">Blocked People</a>'));
    quickLinks.add($('<a href="/account/following">Following</a>'));
    quickLinks.add($('<a href="/watched/threads">Watched Threads</a>'));
    quickLinks.add($('<a href="/account/likes">Likes Received</a>'));

    // Misc. Tools
    var miscTools = new sidebar("Misc. Tools");
    miscTools.add($('<a href="javascript:void(0);">Like All Posts</a>'), function(elem) {
        elem.click(function() {
            like('allPosts');
        });
    });
    miscTools.add($('<a href="javascript:void(0);">Like Alerts</a>'), function(elem) {
        elem.click(function() {
            like('alerts');
        });
    });

    //Notifications
    var nBar = new sidebar("Notifications");
    nBar.add($('<span> On first page of alerts:</span>'))
    $.get('/account/alerts?page=' + 0, function(data) {
        var tagNum = $(data).find("h3:contains('tagged')").length
        var likeNum = $(data).find("h3:contains('liked')").length
        var quoteNum = $(data).find("h3:contains('quoted')").length
        nBar.add($('<span> Tags: ' + tagNum + '</span>'))
        nBar.add($('<span> Likes: ' + likeNum + '</span>'))
        nBar.add($('<span> Quotes: ' + quoteNum + '</span>'))
    })

    //Mod Tools
    var moderatorTools = new sidebar("Moderator Tools");
    moderatorTools.add($('<a href="javascript:void(0);">Close Current Thread</a>'), function(elem) {
        elem.click(function() {
            closeThread(false);
        });
    });
    moderatorTools.add($('<a href="javascript:void(0);">Batch Close Threads</a>'), function(elem) {
        elem.click(function() {
            closeThread(true);
        });
    });

    //Quick PM
    var pmBtn = $('<input type="button" value="Quick PM" accesskey="s" style="font-size:11px;padding:5px;height:auto;line-height:12px;margin-top:5px;" class="button PreviewButton JsOnly" href="#"  id="number[0]">');
    pmBtn.appendTo('.userTitle');
    var numb = $('input.button.PreviewButton.JsOnly').length
    for (i = 0; i < numb; i++) {
        $('input.button.PreviewButton.JsOnly')[i].id = i
    }
    var button = document.getElementsByClassName("button PreviewButton JsOnly");
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function bob() {
            var t = this.id;
            quickPM($('li.message')[t].getAttribute('data-author'));
        });
    }

    //Sidebar Customizations
    $('.sidebar .section .widget').each(function() {
        $(this).children('*').not('h3').wrapAll('<div class="section-wrapper"></div>');
    });
    $('body').on('click', '.sidebar h3', function(e) {
        e.preventDefault();
        $(this).next().stop().slideToggle(500, function() {
            if ($(window).scrollTop() > $('#top').offset().top - 40) {
                if ($(window).scrollTop() + $('.sidebar')[0].scrollHeight + 160 > $(document).height() - 286) {
                    $('.sidebar').removeClass('fixed').css('top', $('.mainContent').height() - $('.sidebar')[0].scrollHeight + 200);
                }
            }
        });
    });
    $('#widget-11 .widget_header_small').click(function() {
        location.href = "/forums/";
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > $('#top').offset().top - 40) {
            if ($(window).scrollTop() + $('.sidebar')[0].scrollHeight + 160 > $(document).height() - 286) {
                $('.sidebar').removeClass('fixed').css('top', $('.mainContent').height() - $('.sidebar')[0].scrollHeight + 200);
            } else {
                $('.sidebar').addClass('fixed').css('top', '');
            }
        } else {
            $('.sidebar').removeClass('fixed').css('top', '');
        }
    }).resize(function() {
        $('.sidebar').css('left', $('.mainContent').outerWidth() + $('#top').offset().left + 10).css('max-height', $(window).height() - 110);
    }).trigger('resize').trigger('scroll');

    //Rainbowfy Text
    if ($('input[value="Post Reply"]').length > 0) {
        var rainbowfyBtn = $('&nbsp;<button class="button">Rainbowfy</button>');
        $('input[value="Post Reply"]').after(rainbowfyBtn);
        rainbowfyBtn.click(function(e) {
            e.preventDefault();
            rainbowfy();
        });
    }
}
var $ = jQuery;
addJQuery(main);
