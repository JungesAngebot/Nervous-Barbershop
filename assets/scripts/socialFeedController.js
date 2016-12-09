/**
 * Created by Elliott on 28/11/2016.
 */

var socialFeedController = function () {

    function setSocialFeeds() {

        $('#feedLinks').socialfeed({
            // FACEBOOK
            facebook:{
                accounts: ['@linkspartei','@AntifaschistischesInfoblatt','@neues eutschland','@junge.welt','@JungleWorld','@sahra.wagenknecht','@Graswurzel.net'],
                limit: 2,
                access_token: ''
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
                access_token: ''
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
                accounts: ['@faz','@CiceroMagazin','@Bild','@focus.de','@Huffingtonpostde','@CDU','@StuttgarterZeitung','@bundesjugendring','@jugend.im.dgb'],
                limit: 2,
                access_token: ''
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
                access_token: ''
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


        $('#tweets').socialfeed({
            // TWITTER
            twitter:{
                accounts: ['#ungefiltert'],                      //Array: Specify a list of accounts from which to pull tweets
                limit: 10,                                   //Integer: max number of tweets to load
                consumer_key: 'Kra5v3MXSNUrETB9EI1zCu1rW',          //String: consumer key. make sure to have your app read-only
                consumer_secret: 'tlGzCdKT9WAU8DIONOok15EMbMOoGciKWAhSrz285kH54jt3qE' //String: consumer secret key. make sure to have your app read-only
            },
            //  GENERAL SETTINGS
            length: 200,
            show_media: false,
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

