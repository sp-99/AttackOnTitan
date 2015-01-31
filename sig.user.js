// ==UserScript==
// @name         smartest dev signature
// @namespace    *.oneplus.net*
// @version      1.0
// @description  signature for @smartest dev 
// @author       smartest dev
// @include      *forums.oneplus.net*
// @grant        none
// @license      MIT License; http://opensource.org/licenses/MIT
// ==/UserScript==

var sig = "<br><br>--<br><font color=\"#fd4746\"><b>smartest</b></color> <font color=\"#0f1245\">dev</color>"
var text = $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor')
	.contents()
	.find('body')
	.text();
	
$('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor')
	.contents()
	.find('body')
	.html(text + sig);
