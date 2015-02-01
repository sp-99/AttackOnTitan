// ==UserScript==
// @name         Better Emoji for Oneplus
// @namespace    http://github.com/annieleonhardt
// @version      1.6
// @description  Allows you to use different emoji icons on Oneplus forums
// @author       Annie Leonhardt
// @include      *.oneplus.net*
// @grant        none
// ==/UserScript==

var Emojivisible = true;

/* ------------ EMOJI TEMPLATE ------------- */
function Emoji(source, classname) {
    $('li.smilieCategory').find('ul')
        .append($('<li></li>')
            .append($('<img>')
                .attr({
                    src: source,
                    'data-smilie': "yes",
                }).addClass(classname)
        ).addClass("Smilie")
    )
}

/* ------------ DEFINE EMOJIS ------------- */
function EmojiIcons(){

    // XAT ----------------------------------------------
    new Emoji("http://i.imgur.com/usDwzaJ.gif", "emoji");
    new Emoji("http://i.imgur.com/Pf3Hb6O.gif", "emoji");
    new Emoji("http://i.imgur.com/bio1pvI.gif", "emoji");
    new Emoji("http://i.imgur.com/Ltd5iU6.png", "emoji");
    /*** Might add more XATs in the future, I'm lazy ***/
    
    // Other -------------------------------------------
    new Emoji("http://i.imgur.com/T4IgzTY.gif", "emoji");
    new Emoji("http://i.imgur.com/s2mnHPj.png", "emoji");
    new Emoji("http://i.imgur.com/xQEgir2.png", "emoji");
    new Emoji("http://i.imgur.com/uQKnAHL.png", "emoji");
    new Emoji("http://i.imgur.com/77QKaCF.png", "emoji");
    new Emoji("http://i.imgur.com/aEIFMOD.png", "emoji");
    new Emoji("http://i.imgur.com/3xmvLQB.png", "emoji");
    new Emoji("http://i.imgur.com/j8kVjQx.png", "emoji");
    new Emoji("http://i.imgur.com/Osrk8Z6.png", "emoji");
    new Emoji("http://i.imgur.com/PLXyQoG.png", "emoji");
    new Emoji("http://i.imgur.com/Wt6Mt5Y.png", "emoji");
    new Emoji("http://i.imgur.com/coW4gmv.png", "emoji");
    new Emoji("http://i.imgur.com/U7sQeeB.png", "emoji");
    new Emoji("http://i.imgur.com/SOIm2QI.png", "emoji");
    new Emoji("http://i.imgur.com/1CQnfI4.png", "emoji");
    new Emoji("http://i.imgur.com/n0LxE67.png", "emoji");
    new Emoji("http://i.imgur.com/0vO27Us.png", "emoji");
    new Emoji("http://i.imgur.com/NJ6VaZd.png", "emoji");
    new Emoji("http://i.imgur.com/Iz9dIeF.png", "emoji");
    new Emoji("http://i.imgur.com/SCcL49G.png", "emoji");
    new Emoji("http://i.imgur.com/jJz11mk.png", "emoji");
    new Emoji("http://i.imgur.com/JKsX6sA.png", "emoji");
    new Emoji("http://i.imgur.com/TE23JDQ.png", "emoji");
    new Emoji("http://i.imgur.com/Z6rEbOj.png", "emoji");
    new Emoji("http://i.imgur.com/7x4vE57.png", "emoji");
    new Emoji("http://i.imgur.com/4kuBhCa.png", "emoji");
    new Emoji("http://i.imgur.com/5ySsWCx.png", "emoji");
    new Emoji("http://i.imgur.com/oGC5iz9.png", "emoji");
    new Emoji("http://i.imgur.com/mlVCJNQ.png", "emoji");
    new Emoji("http://i.imgur.com/exbEJw6.png", "emoji");
    new Emoji("http://i.imgur.com/XtcLVi8.png", "emoji");
    new Emoji("http://i.imgur.com/oXnPJzK.png", "emoji");
    new Emoji("http://i.imgur.com/7nQzs1N.png", "emoji");
    new Emoji("http://i.imgur.com/C35tWRr.png", "emoji");
    new Emoji("http://i.imgur.com/dTeca6e.png", "emoji");
    new Emoji("http://i.imgur.com/kz4sU6E.png", "emoji");
    new Emoji("http://i.imgur.com/dXV0bPZ.png", "emoji");
    new Emoji("http://i.imgur.com/jpgBiOo.png", "emoji");
    new Emoji("http://i.imgur.com/e1rc3vr.png", "emoji");
    new Emoji("http://i.imgur.com/Pq6xcYg.png", "emoji");
    new Emoji("http://i.imgur.com/hO7m9ga.png", "emoji");


    // Google Hangouts -----------------------
    new Emoji("http://i.imgur.com/vpOXVGK.png", "emoji");
    new Emoji("http://i.imgur.com/Y1vZjiX.png", "emoji");
    new Emoji("http://i.imgur.com/qPVDTQ9.png", "emoji");
    new Emoji("http://i.imgur.com/zkaTlAd.png", "emoji");
    new Emoji("http://i.imgur.com/scUISw8.png", "emoji");
    new Emoji("http://i.imgur.com/xp1jqJf.png", "emoji");
    new Emoji("http://i.imgur.com/4Kn0YBJ.png", "emoji");
    new Emoji("http://i.imgur.com/hK8EFTv.png", "emoji");
    new Emoji("http://i.imgur.com/X9SqjQ2.png", "emoji");
    new Emoji("http://i.imgur.com/aYRlrHV.png", "emoji");
    new Emoji("http://i.imgur.com/I3AS64C.png", "emoji");
    new Emoji("http://i.imgur.com/kJJNiwZ.png", "emoji");
    new Emoji("http://i.imgur.com/fKAFbm0.png", "emoji");
    new Emoji("http://i.imgur.com/JICfIFj.png", "emoji");
    new Emoji("http://i.imgur.com/FytXaEh.png", "emoji");
    new Emoji("http://i.imgur.com/rrekvUn.png", "emoji");
    new Emoji("http://i.imgur.com/ad6HSLi.png", "emoji");
    new Emoji("http://i.imgur.com/ER0gWHb.png", "emoji");
    new Emoji("http://i.imgur.com/1wkDeWB.png", "emoji");
    new Emoji("http://i.imgur.com/KwDoZ9A.png", "emoji");
    new Emoji("http://i.imgur.com/ovqPLQn.png", "emoji");
    new Emoji("http://i.imgur.com/qOtWwcH.png", "emoji");
    new Emoji("http://i.imgur.com/mU1RKXd.png", "emoji");
    new Emoji("http://i.imgur.com/x0pychj.png", "emoji");
    new Emoji("http://i.imgur.com/u1WHrgx.png", "emoji");
    new Emoji("http://i.imgur.com/G3w9kef.png", "emoji");
    new Emoji("http://i.imgur.com/HzTxh21.png", "emoji");
    new Emoji("http://i.imgur.com/dFUn4OG.png", "emoji");
    new Emoji("http://i.imgur.com/ejes95e.png", "emoji");
    new Emoji("http://i.imgur.com/OwA33Zb.png", "emoji");
    new Emoji("http://i.imgur.com/kmvVMTC.png", "emoji");
    new Emoji("http://i.imgur.com/AX9Rut8.png", "emoji");
    new Emoji("http://i.imgur.com/pQpnv0k.png", "emoji");
    new Emoji("http://i.imgur.com/pf4L6gk.png", "emoji");
    new Emoji("http://i.imgur.com/AOKKQP1.png", "emoji");
    new Emoji("http://i.imgur.com/WAaoHfp.png", "emoji");
    new Emoji("http://i.imgur.com/GmMXwZB.png", "emoji");
    new Emoji("http://i.imgur.com/XPVBoet.png", "emoji");
    new Emoji("http://i.imgur.com/jbNBigO.png", "emoji");
    new Emoji("http://i.imgur.com/817AGU4.png", "emoji");
    new Emoji("http://i.imgur.com/sCKxAV9.png", "emoji");
    new Emoji("http://i.imgur.com/vI1c2TU.png", "emoji");
    new Emoji("http://i.imgur.com/vP3I9w3.png", "emoji");
    new Emoji("http://i.imgur.com/pAUELjY.png", "emoji");
    new Emoji("http://i.imgur.com/urJYVoa.png", "emoji");
    new Emoji("http://i.imgur.com/kV7PgWJ.png", "emoji");
    new Emoji("http://i.imgur.com/esFvxar.png", "emoji");
    new Emoji("http://i.imgur.com/zDZkc7W.png", "emoji");
    new Emoji("http://i.imgur.com/5fC1h4r.png", "emoji");
    new Emoji("http://i.imgur.com/TheqhpC.png", "emoji");
    new Emoji("http://i.imgur.com/VJnirgH.png", "emoji");
    new Emoji("http://i.imgur.com/xLhnK5d.png", "emoji");
    new Emoji("http://i.imgur.com/E9W6WN3.png", "emoji");
    new Emoji("http://i.imgur.com/kP2djp2.png", "emoji");
    new Emoji("http://i.imgur.com/Qx2wwAi.png", "emoji");
    new Emoji("http://i.imgur.com/WwrbsDX.png", "emoji");
    new Emoji("http://i.imgur.com/Zj2aBHy.png", "emoji");
    new Emoji("http://i.imgur.com/QRr7pgi.png", "emoji");
    new Emoji("http://i.imgur.com/ynah5l8.png", "emoji");
    new Emoji("http://i.imgur.com/TPqkjBo.png", "emoji");
    new Emoji("http://i.imgur.com/mXZQQyR.png", "emoji");
    new Emoji("http://i.imgur.com/VOesKVE.png", "emoji");
    new Emoji("http://i.imgur.com/sPrcwnI.png", "emoji");
    new Emoji("http://i.imgur.com/v3eZTzx.png", "emoji");
    new Emoji("http://i.imgur.com/QjrFTOo.png", "emoji");
    new Emoji("http://i.imgur.com/Oul1J4D.png", "emoji");
    new Emoji("http://i.imgur.com/REaECno.png", "emoji");
    new Emoji("http://i.imgur.com/tZD9WDu.png", "emoji");
    new Emoji("http://i.imgur.com/1snuG0r.png", "emoji");
    new Emoji("http://i.imgur.com/nzAP2JG.png", "emoji");
    new Emoji("http://i.imgur.com/j7C4Aq0.png", "emoji");
    new Emoji("http://i.imgur.com/tMxIx7S.png", "emoji");
    new Emoji("http://i.imgur.com/SJbR6sm.png", "emoji");
    new Emoji("http://i.imgur.com/YKlOs0W.png", "emoji");
    new Emoji("http://i.imgur.com/WTMNq8v.png", "emoji");
    new Emoji("http://i.imgur.com/GWilqh2.png", "emoji");
    new Emoji("http://i.imgur.com/Bbsm9n5.png", "emoji");
    new Emoji("http://i.imgur.com/pGU6x8S.png", "emoji");
    new Emoji("http://i.imgur.com/FDP39zz.png", "emoji");
    new Emoji("http://i.imgur.com/79VA6TT.png", "emoji");
    new Emoji("http://i.imgur.com/WdCtOnn.png", "emoji");


    //Other1 ----------------------------------
    new Emoji("http://i.imgur.com/KaCv5op.gif", "emoji");
    new Emoji("http://i.imgur.com/ejU2fcF.png", "emoji");
    new Emoji("http://i.imgur.com/bio1pvI.gif", "emoji");
    new Emoji("http://i.imgur.com/Ltd5iU6.png", "emoji");
    new Emoji("http://i.imgur.com/T4IgzTY.gif", "emoji");
    new Emoji("http://i.imgur.com/PbUaxYx.png", "emoji");
    new Emoji("http://i.imgur.com/R8W6I0w.png", "emoji");
    new Emoji("http://i.imgur.com/xG4RIrA.gif", "emoji");
    new Emoji("http://i.imgur.com/rbFuPXF.gif", "emoji");
    new Emoji("http://i.imgur.com/wyYOabT.gif", "emoji");
    new Emoji("http://i.imgur.com/S6UEbHD.gif", "emoji");
    new Emoji("http://i.imgur.com/4xMO5KD.gif", "emoji");
    new Emoji("http://i.imgur.com/TwFgi2c.gif", "emoji");
    new Emoji("http://i.imgur.com/hbETBD0.png", "emoji");
    new Emoji("http://i.imgur.com/tQ9iHT6.gif", "emoji");
    new Emoji("http://i.imgur.com/jomyAJ4.gif", "emoji");
    new Emoji("http://i.imgur.com/1hHjhXy.gif", "emoji");
    new Emoji("http://i.imgur.com/JBLi3hO.png", "emoji");
    new Emoji("http://i.imgur.com/2zCelqA.gif", "emoji");
    new Emoji("http://i.imgur.com/v6wvs7A.gif", "emoji");
    new Emoji("http://i.imgur.com/HN61JpJ.png", "emoji");
    new Emoji("http://i.imgur.com/p80TRPX.gif", "emoji");
    new Emoji("http://i.imgur.com/jKIo5cV.gif", "emoji");
    new Emoji("http://i.imgur.com/qENwY90.gif", "emoji");
    new Emoji("http://i.imgur.com/3fIiDj2.gif", "emoji");
    new Emoji("http://i.imgur.com/6t2Edws.png", "emoji");
    new Emoji("http://i.imgur.com/QFgTdCv.gif", "emoji");
    new Emoji("http://i.imgur.com/IesFNjq.gif", "emoji");
    new Emoji("http://i.imgur.com/dqSaOBe.png", "emoji");
    new Emoji("http://i.imgur.com/LFhYb3I.gif", "emoji");
    new Emoji("http://i.imgur.com/7ggKVAO.gif", "emoji");
    new Emoji("http://i.imgur.com/AccmU5M.gif", "emoji");
    new Emoji("http://i.imgur.com/T2CfvSd.gif", "emoji");
    new Emoji("http://i.imgur.com/ueULm7y.gif", "emoji");
    new Emoji("http://i.imgur.com/euU0YPC.gif", "emoji");
    new Emoji("http://i.imgur.com/2cgWGlH.gif", "emoji");
    new Emoji("http://i.imgur.com/MPPaTyz.png", "emoji");
    new Emoji("http://i.imgur.com/iy5JEtV.gif", "emoji");
    new Emoji("http://i.imgur.com/ZENu745.gif", "emoji");
    new Emoji("http://i.imgur.com/nfFXKjo.gif", "emoji");
    new Emoji("http://i.imgur.com/ebWpush.png", "emoji");
    new Emoji("http://i.imgur.com/ZF06woy.gif", "emoji");
    new Emoji("http://i.imgur.com/PQ46nnT.gif", "emoji");
    new Emoji("http://i.imgur.com/ERHUlCz.gif", "emoji");
    new Emoji("http://i.imgur.com/6RjFMle.gif", "emoji");
    new Emoji("http://i.imgur.com/f5T2Orb.png", "emoji");
    new Emoji("http://i.imgur.com/Sjxv94d.gif", "emoji");
    new Emoji("http://i.imgur.com/j79a9aH.gif", "emoji");
    new Emoji("http://i.imgur.com/V5cCsWh.png", "emoji");
    new Emoji("http://i.imgur.com/cMyP5ad.gif", "emoji");
    new Emoji("http://i.imgur.com/HCRlrTz.gif", "emoji");
    new Emoji("http://i.imgur.com/UEJ07GO.gif", "emoji");
    new Emoji("http://i.imgur.com/FhxkvG1.gif", "emoji");
    new Emoji("http://i.imgur.com/OphqGmp.gif", "emoji");
    new Emoji("http://i.imgur.com/ltpLsUw.gif", "emoji");
    new Emoji("http://i.imgur.com/L8qFDbk.gif", "emoji");
    new Emoji("http://i.imgur.com/VdsR7Kd.gif", "emoji");
    new Emoji("http://i.imgur.com/Qh7HS3l.gif", "emoji");
    new Emoji("http://i.imgur.com/sR5ERGu.png", "emoji");
    new Emoji("http://i.imgur.com/NSLcMn7.gif", "emoji");
    new Emoji("http://i.imgur.com/1goqhMM.gif", "emoji");
    new Emoji("http://i.imgur.com/HrYLFFB.gif", "emoji");
    new Emoji("http://i.imgur.com/Jbt4I2Z.gif", "emoji");
    new Emoji("http://i.imgur.com/CKbSOtO.png", "emoji");
    new Emoji("http://i.imgur.com/hd1dUWI.png", "emoji");
    new Emoji("http://i.imgur.com/ylaLgZg.gif", "emoji");
    new Emoji("http://i.imgur.com/lYIYWaG.gif", "emoji");
    new Emoji("http://i.imgur.com/OfDMTt5.gif", "emoji");
    new Emoji("http://i.imgur.com/DtZamGL.gif", "emoji");
    new Emoji("http://i.imgur.com/2PfclL5.gif", "emoji");
    new Emoji("http://i.imgur.com/mjDDoYp.png", "emoji");
    new Emoji("http://i.imgur.com/AFAlTnd.gif", "emoji");
    new Emoji("http://i.imgur.com/AbXv6rW.gif", "emoji");
    new Emoji("http://i.imgur.com/DdGW27Z.png", "emoji");
    new Emoji("http://i.imgur.com/1PWsDVr.gif", "emoji");
    new Emoji("http://i.imgur.com/qsn9fnc.png", "emoji");
    new Emoji("http://i.imgur.com/p9FSUKE.gif", "emoji");
    new Emoji("http://i.imgur.com/Uh85EFc.gif", "emoji");
    new Emoji("http://i.imgur.com/WVE2soK.png", "emoji");
    new Emoji("http://i.imgur.com/ynRV5zk.png", "emoji");
    new Emoji("http://i.imgur.com/hXawssJ.gif", "emoji");


    // Skype ----------------------------------------------
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0100-smile.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0101-sadsmile.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0102-bigsmile.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0103-cool.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0105-wink.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0106-crying.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0107-sweating.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0108-speechless.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0109-kiss.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0110-tongueout.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0111-blush.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0112-wondering.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0113-sleepy.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0114-dull.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0115-inlove.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0116-evilgrin.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0117-talking.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0118-yawn.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0119-puke.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0120-doh.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0121-angry.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0122-itwasntme.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0123-party.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0124-worried.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0125-mmm.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0126-nerd.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0127-lipssealed.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0128-hi.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0129-call.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0130-devil.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0131-angel.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0132-envy.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0133-wait.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0134-bear.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0135-makeup.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0136-giggle.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0137-clapping.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0138-thinking.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0139-bow.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0140-rofl.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0141-whew.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0142-happy.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0143-smirk.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0144-nod.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0145-shake.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0146-punch.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0147-emo.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0148-yes.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0149-no.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0150-handshake.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0152-heart.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0153-brokenheart.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0154-mail.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0155-flower.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0156-rain.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0157-sun.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0158-time.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0159-music.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0160-movie.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0161-phone.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0162-coffee.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0163-pizza.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0164-cash.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0165-muscle.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0166-cake.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0167-beer.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0168-drink.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0169-dance.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0170-ninja.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0171-star.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0174-bandit.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0175-drunk.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0176-smoke.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0177-toivo.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0178-rock.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0179-headbang.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0180-bug.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0181-fubar.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0182-poolparty.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0183-swear.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0184-tmi.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0185-heidy.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0186-myspace.gif", "emoji");
    new Emoji("http://factoryjoe.s3.amazonaws.com/emoticons/emoticon-0189-priidu.gif", "emoji");


    // Other2 --------------------------------------
    new Emoji("http://tweakimg.net/g/s/smile.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/frown.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/redface.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/biggrin.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/biggrin.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/cry.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/devil.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/clown.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/wink.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/puh2.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/yummie.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/shiny.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/heart.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/sleephappy.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/vork.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/rc5.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/yawnee.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/sadley.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/coool.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/confused.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/frusty.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/nosmile2.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/nosmile.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/puh.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/kwijl.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/shutup.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/bonk.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/hypocrite.gif", "emoji");
    new Emoji("http://tweakimg.net/g/s/worshippy.gif", "emoji");
}

// Creates the new emoji when emoji button is clicked
var writeEmoji = setInterval(function(){
    if($('div.redactor_smilies').is(':visible')) {
        console.log("running hfemoji");
        EmojiIcons();
        clearInterval(writeEmoji);

    } else {

    }
}, 300);

