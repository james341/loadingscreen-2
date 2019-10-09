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
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",
        "image17.jpg",
        "image18.jpg",
        "image19.jpg",
        "image20.jpg",
        "image21.jpg",
        "image22.jpg",
        "image23.jpg",
        "image24.jpg",
        "image25.jpg",
        "image26.jpg",
        "image27.jpg",
        "image28.jpg",
        "image29.jpg",
        "image30.jpg",
        "image31.jpg",
        "image32.jpg",
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
	{youtube: "8VFCslLuPfY", name: "atlas - Installation Music"},
	{youtube: "pTLnlkrCK8c", name: "atlas - Installation Music"},
        {youtube: "XjBwAYIxUso", name: "atlas - Installation Music"},
        {youtube: "UXCe2X-hYxc", name: "atlas - Installation Music"},
        {youtube: "24rreFqTmO4", name: "atlas - Installation Music"},
        {youtube: "KyosPwwTl7s", name: "atlas - Installation Music"},
        {youtube: "oBpvsSeBh54", name: "atlas - Installation Music"},
        {youtube: "22bK0C2obFc", name: "atlas - Installation Music"},
        {youtube: "SUgxZ8_Iiqc", name: "atlas - Installation Music"},
        {youtube: "Oz6UptPNbdA", name: "atlas - Installation Music"},

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
	"In the PD, the Mayor has final say on building defenses. If they waive this right, then it is passed on to the Police Chief!",
	"You cannot shoot explosives through solid props. This means shooting walls to kill somebody on the other side. This includes fences. Also, do NOT use explosives in public!",
	"Anyone caught baiting or encouraging others to violate rules will have an equal or greater punishment to the rule violation!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Mayors can not take away rights from players such as freedom of privacy. This means no laws saying that players can't lock their doors!",
        "Do not Break NLR. You may not return to where you die for 5 minutes!",
        "Do not FailRP (Fail Role Play). This is when you do something unrealistic!", 
        "Do not no collide cameras and physgun them into other people's bases, this is known as camera abuse!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "You cannot trap people or force anyone to pay a toll to exit an obstruction if you are not a hostage taking class!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Do not impersonate other users (This includes having identical or similar names!",
        "Staff are also obligated to convene if they can find the proof to convict, like a confession or video proof for all that has been listed except advert!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Do not involve yourself in situations especially admin situations which you are not apart of in the first place!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You must advert Carjack when carjacking someone You can carjack every 5 minutes, but you have to wait 10 minutes to carjack the same person!",
        "We are Serious. Consider being serious at all times but understand there may also be times when the server relaxes!",
        "Accidentally killing someone (crossfire) is RDM (Not if for a valid reason aka raiding). If you think you might miss your shot or kill someone else, DON'T SHOOT!",
        "Don't ask for a staff position. Post an application on the forums if you feel you are a good candidate for admin, and do not pester us about your application!",
        "Do not abuse exploits or loopholes, report those to staff members, and you may receive a reward!",
        "Do not randomly kill someone (RDM - Random Death Match). If you don't know what it is, scroll down on this page to the 'Random Death Match' section!",
        "Anyone caught baiting or encouraging others to violate rules will have an equal or greater punishment to the rule violation!",
        "A war is over when one team fights off the entire other team and gain their base and their goods of both sides agree to stop!",
        "Gang leaders (Mob Boss, Crips leader and blood leaders) are allowed to claim a section of the map (or a smaller area) as gang territory!",
        "If you're anybody going by the name depresso Nevermore Fizzy I𝓃𝒻𝒾𝓃𝒾𝓉𝑒 & all of the rest we will find you and ban you leave now while you still can stop trying to minge here FFS!",
        "You must advert raid over after completing/failing a raid!"

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
