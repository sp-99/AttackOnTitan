// ==UserScript==
// @name         Text Colour
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
  var rn = Math.floor((Math.random() * 3) + 1);
  if(rn == 1){
      if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_NoAutoComplete') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_NoAutoComplete').contents().find('p').css({'color': '#1122c6', 'font-size': 'medium', 'font-weight': 'bold'})
      } else if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_').contents().find('p').css({'color': '#1122c6', 'font-size': 'medium', 'font-weight': 'bold'})
      }
 }
 else if(rn == 2){
     if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_NoAutoComplete') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_NoAutoComplete').contents().find('p').css({'color': '#c62211', 'font-size': 'medium', 'font-weight': 'bold'})
      } else if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_').contents().find('p').css({'color': '#c62211', 'font-size': 'medium', 'font-weight': 'bold'})
      }
 } 
 else if(rn == 3){
     if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_NoAutoComplete') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_NoAutoComplete').contents().find('p').css({'color': '#119122', 'font-size': 'medium', 'font-weight': 'bold'})
      } else if (document.getElementsByClassName('redactor_textCtrl redactor_MessageEditor redactor_BbCodeWysiwygEditor redactor_') [0]) {
          $('iframe.redactor_textCtrl.redactor_MessageEditor.redactor_BbCodeWysiwygEditor.redactor_').contents().find('p').css({'color': '#119122', 'font-size': 'medium', 'font-weight': 'bold'})
      }
    }
}


window.addEventListener('submit', colorize, true);
HTMLFormElement.prototype._submit = HTMLFormElement.prototype.submit;
HTMLFormElement.prototype.submit = colorize;

