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
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
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
	{youtube: "cvCjNxJJhas", name: "Boys Of Summer"},
	{youtube: "0GbfHjG6EhY", name: "A Flock Of Seagulls I Ran"},
	{youtube: "ptmKHhxr6Y0", name: "PayPhone"},
        {youtube: "PimD6LtlMtM", name: "KC & The Sunshine - Give it Up"},
        {youtube: "0IYHGj_pSAg", name: "I'm Like A Bird Instrumental"},
        {youtube: "xoUVtthd7gY", name: "Bastille - Pompeii Audien Remix"}

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
        "Welcome to Deity RP!",
        "Check Out Ceyayroxs Youtube Channel He Is A Cool Dude Bro!",
        "Make sure to read the rules!",
        "I Have had It With Them Dumb Useless Children Asking For Ranks Like Come On Right Fuck Me XD!",
        "Don't You Dare Come In Here And Tell Me How To Do My Fucking Job M8!",
        "Don't Like The Server Then Leave Go Join Your Favorite SandBox Server You Little Bitching Piece Of Shit!",
        "Donate Your Money To My Server!",
        "Your Welcome To Join Our Discord Server At AnyTime Here Is The Join Link https://discord.gg/EZ3gct8!",
        "Enjoy your time on our server!",
        "Cyber Bullying Is Not Tolerated Here Please Respect All Players If You're Caught Doing This It's A Permanent Ban!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
