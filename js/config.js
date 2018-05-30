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
        "image12.jpg",
        "image13.jpg",
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
	{youtube: "E5i5lg5olYE", name: "Ultra 5 Gaming - Van Halen - Jump"},
        {youtube: "uZ8X9k-Ot8s", name: "Ultra 5 Gaming - Foreigner - I Want To Know What Love Is"},
        {youtube: "SgbXu5gE2qA", name: "Ultra 5 Gaming - Waiting For Love - Avicii Karaoke"},
        {youtube: "H2dUbfJ12_s", name: "Ultra 5 Gaming - Wake Me Up - Avicii Karaoke"},
        {youtube: "DbJZJCkcs3U", name: "Ultra 5 Gaming - Zedd feat. Foxes - Clarity"},
        {youtube: "Ry4TqqM5TGs", name: "Ultra 5 Gaming - AWOLNATION - Sail HQ"},


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
	"Only Hobos and the Mayor can build on sidewalks. DJ's must require approval!",
	"No breaking NLR. You may not return to where you die for 5 minutes!",
        "Do NOT RDM (Random Death Match)!",
        "Raid Cooldown (Same Person) - 10 Minutes!",
        "Do NOT CDM (Car Death Match)!",
        "Police, during PD raids ARE permitted to break NLR; this is to make PD raids difficult!", 
        "There must be at least one entrance  and exit to the base!",
        "Terrorists can ONLY attack people (With their gun) If they are attacked first!",
        "Your base can't include movement impairing door ways or entrances, aka crouching jumping!",
        "Do not prop block. (Purposely block players or Block rooms without a keypad!",
        "Do as the staff say. If you are speaking over the admin this is considered disrespect. You will be punished!",
        "You may NOT return to your point of death for 3 minutes. Follow the NLR Rule (New Life Rule!",
        "Do not use chain adverts, at most you can have ONE action on ONE bind. (Ex: raid/raid over, PD raid/raid, These are not allowed!",
        "CitizenHack is not Allowed if crought. it's a Permanent ban!",
        "Not doing your job could get you either fined in-game, or temporarily banned from that particular job!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "No job abuse, change jobs, etc to get out of a role-play situation or an admin sit!",
        "You may kill players who are trying to steal your car!",
        "You may not player warn, except for hobos and Vapers [3 advert warns]. If they are bothering you ask a staff member!",
        "Staff word is final. If you have an issue with a certain staff member or sit, please report it on the forums!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
