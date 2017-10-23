/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"touhou01.jpg",
	"touhou02.jpg",
	"touhou03.jpg",
	"touhou04.jpg",
	"touhou05.jpg",
	"touhou06.jpg",
	"touhou07.jpg",
	"touhou08.jpg",
        "touhou09.jpg",
        "touhou010.jpg",
        "touhou011.jpg",
        "touhou012.jpg",      
        "touhou013.jpg",
        "touhou014.jpg",
        "touhou015.jpg",
        "touhou016.jpg",
        "touhou017.jpg",
        "touhou018.jpg",
        "touhou019.jpg",
        "touhou020.jpg",
        "touhou021.jpg",
        "touhou022.jpg",
        "touhou023.jpg",
        "touhou024.jpg",
        "touhou025.jpg",
        "touhou026.jpg",
        "touhou027.jpg",
        "touhou028.jpg",
        "touhou029.jpg",
        "touhou030.jpg",
        "touhou031.jpg",
        "touhou032.jpg",
        "touhou033.jpg",
        "touhou034.jpg",
        "touhou035.jpg",
        "touhou036.jpg",
        "touhou037.jpg",
        "touhou039.jpg",
        "touhou040.jpg",
        "touhou041.jpg",
        "touhou042.jpg",
        "touhou043.jpg",
        "touhou044.jpg",
        "touhou045.jpg",
        "touhou046.jpg",
        "touhou047.jpg",
        "touhou048.jpg",
        "touhou049.jpg",
        "touhou050.jpg",
        "touhou051.jpg",
        "touhou052.jpg",
        "touhou053.jpg",
        "touhou054.jpg",
        "touhou055.jpg",
        "touhou056.jpg",
        "touhou057.jpg",
        "touhou058.jpg",
        "touhou059.jpg",
        "touhou060.jpg",
        "touhou061.jpg",
        "touhou062.jpg",
        "touhou063.jpg",
        "touhou064.jpg",
        "touhou065.jpg",
        "touhou066.jpg",
        "touhou067.jpg",
        "touhou068.jpg",
        "touhou069.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "u4cFNwqX8hA", name: "StarShips Nicki Minaj"},
	{youtube: "Ssvu2yncgWU", name: "We Are One Vexento"},
	{youtube: "q1ULJ92aldE", name: "Syn Feel Good"},
	{youtube: "liEHDMrnUcc", name: "Goodbye Moonmen"},
	{youtube: "Y5TnYaZ31b0", name: "Waysons - Running"},
	{youtube: "dokspLaZqGE", name: "Electric Joy Ride"},
	{youtube: "cHQai9mQcDM", name: "Jet Look What You've Done"},
	{youtube: "6FNHe3kf8_s", name: "Different Heaven - Nekozilla"},
        {youtube: "MReNmBOspAg", name: "Jim Yosef & Anna Yvette - Courage"},
        {youtube: "SBjQ9tuuTJQ", name: "Foo Fighters The Pretender"},
        {youtube: "s_KhOempeQE", name: "Pompeii - Bastille if you close your eyes lyrics"},
        {youtube: "p7ZsBPK656s", name: "Disfigure Blank"},
        {youtube: "5LI5QZVUU98", name: "Jim Yosef - Arrow"},
        {youtube: "UzCFTyluxic", name: "Morning Sun Nicolai Heidlas Music"},
        {youtube: "Zyi9QUB-fyo", name: "Smells Like Summer Del"},
        {youtube: "4lXBHD5C8do", name: "Tobu & Itro - Sunburst"},
        {youtube: "8UVNT4wvIGY", name: "Gotye Somebody That I Used To Know"},
        {youtube: "Yim4--J44gk", name: "OneRepublic Counting Stars"},
        {youtube: "MkNeIUgNPQ8", name: "Adventures A Himitsu"},
        {youtube: "JNLtoqrjHG0", name: "Cell Outs"},
        {youtube: "ih-fhlJtCh4", name: "The Mine Song Instrumental"},
        {youtube: "SE_QDk3dR4c", name: "Candy-Coloured Sky"},
	{youtube: "0-JzHyJSPmk", name: "Galantis No Money"},
        {youtube: "nX1VeFBo9AQ", name: "You're Beautiful"},
        {youtube: "F3TzxXfoEHo", name: "Sugar Zone"},
        {youtube: "fh5LQHwTAMA", name: "Its Been Raining For So Long"},
        {youtube: "5kDO8hLu9iI", name: "Blue Skies"},
        {youtube: "Dw20ZkMwI10", name: "Dog and Pony Show Silent Partne"},
        {youtube: "VF9_dCo6JT4", name: "Dreams Joakim Karud"},
        {youtube: "kbqmEJTr3nU", name: "PACIFIC SUN Nicolai Heidlas Music"},
        {youtube: "FB4OOpo4sBU", name: "Adele Hello"},
        {youtube: "siCmqvfw_1g", name: "Spring In My Step Silent Partne"},
        {youtube: "pUVxaYdgS_Q", name: "She Will Be Loved"},
        {youtube: "U4BrnSm1yIs", name: "Opportunity Pete Murray"},
        {youtube: "nOCc8D2rbkQ", name: "Jazz Theme"},
        {youtube: "q1ULJ92aldE", name: "Cole Feel Good"},
        {youtube: "Z1k8Kk5VNLs", name: "Boys Of Summer"},
        {youtube: "7YfxeEvR89A", name: "Mr. Pink - Topher Mohr and Alex Elena"},
        {youtube: "IIrCDAV3EgI", name: "Tobu Candyland"},
        {youtube: "0t2tjNqGyJI", name: "Twenty One Pilots Stressed Out"},
        {youtube: "97OtwnnjZ6I", name: "Lily Allen Littlest Things Instrumental"},
        {youtube: "dX3k_QDnzHE", name: "M83 'Midnight"},
        {youtube: "nnrECgBw30U", name: "Shooting Stars"},
        {youtube: "cp6XGd-Ge-w", name: "Don't Tattle On Me"},
        {youtube: "FAf8ut69Sa4", name: "Colours"},
        {youtube: "KqnxVO5QiCs", name: "The Best Day Ever"},
        {youtube: "tiXhkcb4q7U", name: "Brain Power"},
        {youtube: "oWz4fHcCX0U", name: "Try Everything"},
        {youtube: "K4DyBUG242c", name: "Cartoon On & On"},
        {youtube: "qzVSd4egH9s", name: "Set My heart Afire-Defqwop x Panda Nation"},
        {youtube: "5ethBJzPDEU", name: "PayPhone"},
        {youtube: "cs926AIL-ck", name: "Ween Ocean Man"},
        {youtube: "5tepYJno7rU", name: "Ain't No Mountain High Enough"},
        {youtube: "8ciZGNmlWgo", name: "AudioscribeFree Fall"},
        {youtube: "Lq2UrnDsI_s", name: "Laszlo Fall To Light"},
        {youtube: "X5mcY8ecs8I", name: "Ahrix Nova"},
        {youtube: "jK2aIUmmdP4", name: "Different Heaven & EH!DE My Heart"},
        {youtube: "C4j84uIwTQ4", name: "Heroes & Trolls"},
        {youtube: "OBwl2glmqC0", name: "Tobu Life"},
        {youtube: "ux8-EbW6DUI", name: "Tobu Infectious"},
        {youtube: "FkKjZz2vpy4", name: "Itro Panda"},
        {youtube: "x6aY13UkgsU", name: "POLLY Perfect kinda day"},
        {youtube: "5ZYgIrqELFw", name: "All Star - Smash Mouth"},
        {youtube: "8UVNT4wvIGY", name: "Gotye Somebody That I Used To Know"},
        {youtube: "9nWZOk4mwhs", name: "Complicated - Avril Lavigne"},
        {youtube: "kaMdSxKzz8k", name: "The Cranberries Dreams"},
        {youtube: "RILP53OR63k", name: "I'm Yours Jason Mraz"},
        {youtube: "Z7tEQLH25wA", name: "Fuck You"},
        {youtube: "oBpvsSeBh54", name: "Michael Buble Haven't Met You Yet"},
        {youtube: "mRNhuJ3l060", name: "Tremor Sensation 2014 Anthem"},  
        {youtube: "LL12z7vHWn0", name: "Eric Carmen - Make me Lose Control"},
        {youtube: "0LpW0N5zeHU", name: "Lighthouse Family"},
        {youtube: "aNO6yd66PpA", name: "Iris The Goo Goo Dolls"},
        {youtube: "jD9dr2ZRm9A", name: "Adele Someone"},
        {youtube: "KnmQdHSRQ1U", name: "I Am Alive Rick and Morty"},
        {youtube: "lOr-22Ra7S0", name: "Schwifty Beat"},
        {youtube: "HZ5m_nlfZe4", name: "Noob-Noob!"},
        {youtube: "avbFUPZRPOU", name: "Whirly Dirly"},
        {youtube: "6wlbB1PTzJU", name: "Summer Smile Silent Partner"},
        {youtube: "EQlgcK25wh0", name: "Outnumbered"},
        {youtube: "Bh0QZvHdSKo", name: "Henry Hall Here Comes The Boogeyman"},
        {youtube: "TUj0otkJEBo", name: "Ty Dolla $ignOr Nah ft The Weeknd Wiz Khalifa & DJ Mustard"},
        {youtube: "7PCkvCPvDXk", name: "Meghan Trainor - All About That Bass"},
        {youtube: "I4Pa-OJ7yjQ", name: "Prince Ali Obama Aladdin Parody"},
        {youtube: "6nqWNZl3Ou4", name: "On the Open Road"},
        {youtube: "zDxAEY3l9BQ", name: "My Shiny Teeth and Me - Chip Skylark"},
        {youtube: "aOl4oeHZnBk", name: "You Sexy Thing I Believe in Miracles"},
        {youtube: "H0m3Lfkzcw4", name: "Happy Pharrell Williams"},
        {youtube: "HXEJjtBouRA", name: "Daft Punk Get Lucky"},
        {youtube: "g8PrTzLaLHc", name: "Imagine Dragons - On Top of the World"}



];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Vips Are Responsible For their Own Actions And Will Lose The Rank If Caught Abusing This Gos For Admins AsWell!",
	"The Admins Are AlWays Watching So Dont Fuck Up. And Please Behave!",
	"Mingeing In This Server Will Result In A Perma Ban With No Questions Asked!",
        "Don't You Dare Disconnect From Here Or We Will Hunt You Down And Destroy You!",
        "Thanks For Playing Here Hope You Enjoy Your Time Here!",
        "Invite Your Friends For Your Chance To Win Some Really Cool Stuff!",
        "Here To Advertise Your Server ? Well Then You Can Fuck Off Out Of Here!", 
        "Mingeing Is Unacceptable Behavior And You Will Be Permanently Banned!",
        "Do Not Ask For Ranks Please Apply On The Forums!",
        "I Don't Know What Else To Fucking Say AnyMore Just Be Good Ok!",
        "Crashing The Server Will Get You Ip Banned!",
        "Poseidon Is Gay XD :)!",
        "Check Out Ceyayroxs Youtube Channel He Is A Cool Dude Bro!",
        "Faded Servers Is Complete 100% Guaranteed Cancer Cheap Lying Scumbags Xd!",
        "I Have had It With Them Dumb Useless Children Asking For Ranks Like Come On Right Fuck Me XD!",
        "Don't You Dare Come In Here And Tell Me How To Do My Fucking Job M8!",
        "Don't Like The Server Then Get The Fuck Out Of Here Then. Go Join Your Favorite SandBox Server You Little Bitching Piece Of Shit!",
        "Donate Your Money To My Server Or No Vip Shit For You. I Ant Runging A Charity Here FFS!",
        "Your Welcome To Join Our Discord Server At AnyTime Here Is The Join Link https://discord.gg/EZ3gct8!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
