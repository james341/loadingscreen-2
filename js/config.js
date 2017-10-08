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
        "touhou037.jpg"
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
	{youtube: "moTWIO55UeY", name: "Dot in the Pouch of a Red Kangaroo"},
	{youtube: "SQxL2Kpi04Y", name: "Kid Cudi Day n Nite"},
        {youtube: "MReNmBOspAg", name: "Jim Yosef & Anna Yvette - Courage"},
        {youtube: "bR-s4ReIxJo", name: "Pumped up Kicks"},
        {youtube: "s_KhOempeQE", name: "Pompeii - Bastille if you close your eyes lyrics"},
        {youtube: "p7ZsBPK656s", name: "Disfigure Blank"},
        {youtube: "5LI5QZVUU98", name: "Jim Yosef - Arrow"},
        {youtube: "UzCFTyluxic", name: "Morning Sun Nicolai Heidlas Music"},
        {youtube: "Zyi9QUB-fyo", name: "Smells Like Summer Del"},
        {youtube: "4lXBHD5C8do", name: "Tobu & Itro - Sunburst"},
        {youtube: "8UVNT4wvIGY", name: "Gotye Somebody That I Used To Know"},
        {youtube: "Yim4--J44gk", name: "OneRepublic Counting Stars"},
        {youtube: "MkNeIUgNPQ8", name: "Adventures A Himitsu"},
        {youtube: "r6BC_uQEEmM", name: "Little Talks-Of Monsters and Men"},
        {youtube: "2fAjyFbyb4o", name: "Hush, Hush, Hush (Here Comes The Boogeyman"},
        {youtube: "SE_QDk3dR4c", name: "Candy-Coloured Sky"},
	{youtube: "0-JzHyJSPmk", name: "Galantis - No Money"},
        {youtube: "nX1VeFBo9AQ", name: "You're Beautiful"},
        {youtube: "mKWtYOswmyk", name: "You had a bad day"},
        {youtube: "fh5LQHwTAMA", name: "Its Been Raining For So Long"},
        {youtube: "Ss0kFNUP4P4", name: "I Don't Wanna Miss a Thing"},
        {youtube: "T9TlJOfMYtA", name: "lily allen her life's already over"},
        {youtube: "pPGa6vzfvqk", name: "Tony Orr Up the fucking ass"},
        {youtube: "ZZ5LpwO-An4", name: "HEYYEYAAEYAAAEYAEYAA"},
        {youtube: "FB4OOpo4sBU", name: "Adele Hello"},
        {youtube: "CuZBfX2mW7s", name: "what does the fox say"},
        {youtube: "IeqtAB1WgEw", name: "KC & The Sunshine Band Give It Up"},
        {youtube: "U4BrnSm1yIs", name: "Opportunity Pete Murray"},
        {youtube: "r5EXKDlf44M", name: "Green Day Boulevard of Broken Dreams"},
        {youtube: "q1ULJ92aldE", name: "Cole Feel Good"},
        {youtube: "Z1k8Kk5VNLs", name: "Boys Of Summer"},
        {youtube: "psuRGfAaju4", name: "Owl City Fire Flies"},
        {youtube: "IIrCDAV3EgI", name: "Tobu Candyland"},
        {youtube: "0t2tjNqGyJI", name: "Twenty One Pilots Stressed Out"},
        {youtube: "guLKy0aa5I", name: "Kylie Minogue All The Lovers"},
        {youtube: "dX3k_QDnzHE", name: "M83 'Midnight"},
        {youtube: "nnrECgBw30U", name: "Bag Raiders Shooting Stars"},
        {youtube: "nI26a2pDxGk", name: "Tattletail Song Don't Tattle On Me"},
        {youtube: "K2rwxs1gH9w", name: "Spooky Scary Skeletons"}



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
        "I Dont Know What Else To Fucking Say AnyMore Just Be Good Ok!",
        "Crashing The Server Will Get You Ip Banned!",
        "Poseidon Is Gay XD :)!",
        "Check Out Ceyayroxs Youtube Channel He Is A Cool Dude Bro!",
        "Faded Servers Is Complete 100% Guaranteed Cancer Cheap Lying Scumbags Xd!",
        "I Have had It With Them Dumb Useless Children Asking For Ranks Like Come On Right Fuck Me XD!",
        "Don't You Dare Come In Here And Tell Me How To Do My Fucking Job!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
