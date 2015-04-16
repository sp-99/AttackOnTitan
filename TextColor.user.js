// ==UserScript==
// @name         Text Colour
// @namespace    https://github.com/annieleonhardt/AttackOnTitan
// @version      2.0.0
// @description  changes the color of your text automatically
// @author       Annie Leonhardt
// @match        *.oneplus.net*
// @include      *.oneplus.net*
// @grant        none
// ==/UserScript==

//colorizes the text for your replies
function colorize() {
	var rn = Math.floor((Math.random() * 3) + 1);
	var color;
	switch (rn) {
	case 1:
		color = '#1122c6';
		break;
	case 2:
		color = '#c62211';
		break;
	case 3:
		color = '#119122';
		break;
	}
	if ($("iframe.redactor_textCtrl").length) {
		$("iframe.redactor_textCtrl").contents().find('p').css({
			'color' : color,
			'font-size' : 'medium',
			'font-weight' : 'bold'
		})
	}
}
window.addEventListener('submit', colorize, true);
HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = colorize;
