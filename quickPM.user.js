// ==UserScript==
// @name         Quick PM
// @namespace    *.oneplus.net*
// @version      1.0
// @description  Quickly PM a user from a thread post.
// @author       Annie Leonhart
// @include      *forums.oneplus.net*
// @grant        none
// @license      MIT License; http://opensource.org/licenses/MIT
// ==/UserScript==

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
                console.log(pm_msg.val())
                var url = 'https://forums.oneplus.net/conversations/add';
                var token = document.getElementsByName('_xfToken')[0].getAttribute('value')
                var msgTitle = pm_title.val()
                var reg = /(\n)/igm
                var msg = pm_msg.val().replace(reg, '<br>')
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
