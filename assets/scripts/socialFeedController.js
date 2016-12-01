/**
 * Created by Elliott on 28/11/2016.
 */

var socialFeedController = function () {

    function setSocialFeeds() {

        $('#feedLinks').socialfeed({
            // FACEBOOK
            facebook:{
                accounts: ['@GegenDieAlternativefuerDeutschland','@AntifaschistischesInfoblatt','@neues eutschland','@junge.welt','@JungleWorld','@ruhrbarone','@Graswurzel.net'],
                limit: 2,
                access_token: '652139488281223|6ab1dd4d9b3947ee7fc44dbd6dda36a2'
            },
            //  GENERAL SETTINGS
            length: 200,
            show_media: true,
            template : "feed_template.html",
            //           // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            }
            // //update_period: 5000,
            // // When all the posts are collected and displayed - this function is evoked
            // callback: function() {
            //   console.log('all posts are collected');
            // }
        });

        $('#feedMitteLinks').socialfeed({
            // FACEBOOK
            facebook:{
                accounts: ['@SPD','@zeitonline','@Zett.home','@netzpolitik','@taz.kommune','@B90DieGruenen','@correctiv.org','@bund.bundesverband'],
                limit: 2,
                access_token: '652139488281223|6ab1dd4d9b3947ee7fc44dbd6dda36a2'
            },
            //  GENERAL SETTINGS
            length: 200,
            show_media: true,
            template : "feed_template.html",
            //           // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            }
            // //update_period: 5000,
            // // When all the posts are collected and displayed - this function is evoked
            // callback: function() {
            //   console.log('all posts are collected');
            // }
        });

        $('#feedMitteRechts').socialfeed({
            // FACEBOOK
            facebook:{
                accounts: ['@faz','@CiceroMagazin','@Bild','@focus.de','@Huffingtonpostde','@CDU','@StuttgarterZeitung','@zuGuttenberg'],
                limit: 2,
                access_token: '652139488281223|6ab1dd4d9b3947ee7fc44dbd6dda36a2'
            },
            //  GENERAL SETTINGS
            length: 200,
            show_media: true,
            template : "feed_template.html",
            //           // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            }
            // //update_period: 5000,
            // // When all the posts are collected and displayed - this function is evoked
            // callback: function() {
            //   console.log('all posts are collected');
            // }
        });

        $('#feedRechts').socialfeed({
            // FACEBOOK
            facebook:{
                accounts: ['@Alternativefuerde','@jungefreiheit','@identitaere','@Dr.Frauke.Petry','@BeatrixVonStorch','@Luegenpress','@ferieninsyrien','@fuer.die.heimat'],
                limit: 2,
                access_token: '652139488281223|6ab1dd4d9b3947ee7fc44dbd6dda36a2'
            },
            //  GENERAL SETTINGS
            length: 200,
            show_media: true,
            template : "feed_template.html",
            //           // Moderation function - if returns false, template will have class hidden
            moderation: function(content) {
                return (content.text) ? content.text.indexOf('fuck') == -1 : true;
            }
            // //update_period: 5000,
            // // When all the posts are collected and displayed - this function is evoked
            // callback: function() {
            //   console.log('all posts are collected');
            // }
        });

    }

    return {
        setSocialFeeds: setSocialFeeds
    }

}

