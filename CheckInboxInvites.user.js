// ==UserScript==
// @name         Check inbox for invites
// @namespace    *.oneplus.net*
// @version      1.2
// @description  Checks your inbox for invites.
// @author       Annie Leonhart
// @include      *forums.oneplus.net*
// @grant        none
// @license      MIT License; http://opensource.org/licenses/MIT
// ==/UserScript==

//Check inbox for INvites
if ($('a.callToAction').length > 0) {
    var checkInboxBtn = $('&nbsp;<button class="button" id="checkinvites" style="height:28px;">Check Inbox For Invites</button>');
    $('a.callToAction').after(checkInboxBtn);
    $('button#checkinvites.button').click( function(){
    	getInboxInvites();
    });
}

function getInboxInvites() {
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

	var links = [];
	var invites = [];
	try {
	    document.getElementsByClassName('PageNav')[0].getAttribute('data-last')
	    var pages = parseInt(document.getElementsByClassName('PageNav')[0].getAttribute('data-last')) + 2;
	} catch (err) {
	    var pages = 1;
	}
	var url = '/' + window.location.pathname.split('/')[1] + '/' + window.location.pathname.split('/')[2];
	var modalProgress = $('<div></div>');
	var progressModal = new modal('Collecting Invites...', modalProgress, {});

	function invitelinks(modalProgress) {
	    var numbLinks = links.length + 2;
	    var actualLoad = 0;

	    function sendBatch() {
	        var batchLoaded = 0;
	        for (i = 0; i <= 500; i++) {
	            console.log(i);
	            t = actualLoad + i;
	            console.log(links[t]);
	            var token = document.getElementsByName('_xfToken')[0].getAttribute('value');
	            $.get(links[t], function(data) {
	            	var inviteRegex = /([\w\d]{4}-)+([\w\d]{4}-)+([\w\d]{4}-)+([\w\d]{4})/igm
	            	$(data.replace(/<img[^>]*>/g, "")).find('a[class="externalLink"]').each(function() {                          	
	                	if ($(this).attr('href').match(inviteRegex)) {// get the normalized `href` property; fastest solution
	                		invites.push($(this).attr('href').match(inviteRegex));
	                	} else {

	                	}
	            	})
	                actualLoad++;
	                batchLoaded++;
	                if (batchLoaded == 500) {
	                    setTimeout(function() {
	                        sendBatch();
	                    }, 200);
	                }
	                modalProgress.text('Storing Invites ' + t + '/' + numbLinks + ' (' + Math.round(t * 100 / numbLinks) + '%)');
	                if (actualLoad == numbLinks) {
	                    progressModal.methods.close();
	                    var bob = "";
	                    for (m = 0; m < invites.length; m++) {
	                    	bob = bob + "http://account.oneplus.net/invite/claim/" + invites[m] + "\n";
							console.log(invites[m]);
						}
						copyIntoClipboard(bob);
						$('textarea#messageinvites.textCtrl').select();
						$('textarea#messageinvites.textCtrl').focus();
	                    //alert('Invites have been copied to your clipboard. Now redirecting to invite checker...');
	                    //window.location.href="http://angelsofinvites.com/invitechecker.php";
	                }
	            });
	            if (t > numbLinks) {
	                break;
	            }
	        }
	    }
	    sendBatch();
	}

	function copyIntoClipboard(text) {
	    var collected_invitesbox = $('<textarea id="messageinvites" class="textCtrl" style="height: 100px;resize: none;display:block;width:100%;"></textarea>')
	    var invites = $('<div>PRESS CTRL +  C to copy the invites below</div>');
	    invites.append(invites);
	    invites.append('<br><br>Invites collected from inbox')
	    invites.append(collected_invitesbox);
	    collected_invitesbox.val(text);
	    new modal('Inbox Invites', invites, {
	        'Check Invites': {
	            type: 'red',
	            click: function() {
	                this.close();
	                window.location.href="http://angelsofinvites.com/invitechecker.php";
	                console.log(collected_invitesbox.val())
	            }
	        },
	        'Close': {
	            type: 'grey',
	            click: function() {
	                this.close();
	            }
	        }
	    });
	}

	function getInviteURLs(modalProgress) {
	    var actualCount = 0;
	    for (i = 1; i <= pages; i++) {
	        $.get(url + 'page-' + i, function(data) {
	            //gets the like links from current page
	            $(data.replace(/<img[^>]*>/g, "")).find('a[class="ReadToggle"]').each(function() {                          	
	                links.push($(this).attr('href').replace('toggle-read', '')); // get the normalized `href` property; fastest solution
	            });
	            actualCount++;
	            modalProgress.text('Checking Page ' + actualCount + ' of ' + pages + '...');
	            if (actualCount == pages) {
	                if (links.length > 50) {
	                    invitelinks(modalProgress);
	                }
	            }
	        });
	    }
	}
	getInviteURLs(modalProgress);
}

