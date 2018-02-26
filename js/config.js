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
	{youtube: "uYW8KOK50IQ", name: "FreedomNetWorks Installation Music"},
	{youtube: "9NApuzbEbcw", name: "FreedomNetWorks Soundtrack"},
        {youtube: "IHRM5A6bXFQ", name: "FreedomNetWorks Good Ending Theme"},
        {youtube: "a5DdD2dTDBo", name: "FreedomNetWorks Gabe's Watching"},
        {youtube: "XtIBHfOdyX0", name: "FreedomNetWorks Berdthday boy"},
        {youtube: "l8wMVmY7Zpw", name: "FreedomNetWorks Berdst friend"},
        {youtube: "uDGEpsFrBT8", name: "FreedomNetWorks Gabe the halls"},
        {youtube: "kf7lybT9Y0o", name: "FreedomNetWorks Tour Music"},

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
        "Don't abuse entities, this includes spamming them, using them to annoy other players and spamming smoke grenades!",
        "Thanks For Playing Here Hope You Enjoy Your Time Here!",
        "Invite Your Friends For Your Chance To Win VIP!",
        "You must wait 10 minutes before raiding the same place again. This is ten minutes from the END of the first raid, not the start!", 
        "Mingeing Is Unacceptable Behavior And You Will Be Permanently Banned!",
        "Do Not Ask For Ranks Apply On The Forums!",
        "Be Respectful To All Players Out-Of-Character!",
        "Crashing The Server Will Get Your Ip Banned!",
        "Welcome This Is Freedom-Net-Works!", 
        "You Cant Find AnyThing Better Then GS M8!",
        "Do not disrespect other players in out of character (OOC). This includes being racist and/or sexually harassing players!",
        "Children Asking For Ranks Like Come On Right Fuck Me XD!",
        "Random Deathmatch RDM Killing without legitimate roleplay reasoning - also known as freekilling!",
        "Like The Server Invite Your Friends!",
        "Donate Your Money To My Server!",
        "Welcome To Join Our Discord Server At AnyTime Here Is The Join Link https://discord.gg/EZ3gct8!",
        "Enjoy The Server!",
        "Bullying Is Not Tolerated Respect All Players If You're Caught Doing This It's A Permanent Ban!",
        "Minge Groups Like The MLU Will Be Permanently Banned On Sight Becouse I Dont Give A Shit!",
        "Any Use Of Citizen Hack Is Not Allowed If Your Known To Have This Hack It's A straight Up Ban!"

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
