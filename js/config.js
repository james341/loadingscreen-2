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
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
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
	{youtube: "Nvc0hgt9I1g", name: "Ultra 5 Gaming - Vexento - Masked Raver"},
	{youtube: "6ZTs78crINU", name: "Ultra 5 Gaming - Clarity - Zedd feat Foxes"},
        {youtube: "svcAwJQFVwM", name: "Ultra 5 Gaming - Toto - Africa"},
        {youtube: "SgbXu5gE2qA", name: "Ultra 5 Gaming - Waiting For Love - Avicii Karaoke"},
        {youtube: "H2dUbfJ12_s", name: "Ultra 5 Gaming - Wake Me Up - Avicii Karaoke"},


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
	"You are allowed to keep someone kidnapped for a maximum of 10 minutes!",
	"Do not joke about crashing the server. Doing so will result in a permanent ban!",
	"No breaking NLR. You may not return to where you die for 5 minutes!",
        "Do NOT RDM (Random Death Match)!",
        "If your printers/items are stolen, you must wait one hour before rejoining the server if you chose to leave!",
        "Do NOT CDM (Car Death Match)!",
        "Do NOT threaten to DDoS the server - This will result in a perma ban!", 
        "Mingeing Is Unacceptable Behavior!",
        "Terrorists can ONLY attack people (With their gun) If they are attacked first!",
        "Your base can't include movement impairing door ways or entrances, aka crouching jumping!",
        "No hits on the same person more than one time every five minutes. (Even if you are the hitman!",
        "Welcome This Is [AU] Ultra Five Gaming!",
        "You may NOT return to your point of death for 3 minutes. Follow the NLR Rule (New Life Rule!",
        "Do NOT Spam (Mic, Chat, Prop, Etc!",
        "CitizenHack is not Allowed if crought. it's a Permanent ban!",
        "Not doing your job could get you either fined in-game, or temporarily banned from that particular job!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "No job abuse, change jobs, etc to get out of a role-play situation or an admin sit!",
        "Do not prop climb, surf, kill, block, bridge, push, trap or spam!",
        "You cannot kill yourself to evade a roleplay situation!",
        "Do NOT Abuse Props (Prop Climb, Prop Kill, Prop Block Etc!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
