// ==UserScript==
// @name         Text Colorize
// @namespace    https://github.com/annieleonhardt/AttackOnTitan
// @version      V1.03
// @description  changes the color of your text automatically
// @author       Annie Leonhardt
// @match        *.oneplus.net*
// @include      *.oneplus.net*
// @grant        none
// ==/UserScript==

//colorizes the text for your replies
function colorize() {
  if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_NoAutoComplete') [0]) {
    $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_NoAutoComplete').contents().find('p').css({'color': '#4183c4', 'font-size': 'small'})
  } else if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_') [0]) {
    $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_').contents().find('p').css({'color': '#4183c4', 'font-size': 'small'})
  }
}

window.addEventListener('submit', colorize, true);
HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = colorize;
