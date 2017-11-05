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
	{youtube: "DHITmcKUGik", name: "n u a g e s - closer"},
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
        {youtube: "GsIRt0bge1Y", name: "The Dream Academy Life In A Northern Town"},
        {youtube: "F3TzxXfoEHo", name: "Sugar Zone"},
        {youtube: "anmtXXf88cc", name: "Alicks. - Next To You"},
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
        {youtube: "ZKEIt9tAXt4", name: "Mumford And Sons Little Lion Man"},
        {youtube: "FAf8ut69Sa4", name: "Colours"},
        {youtube: "qK_NeRZOdq4", name: "Ed Sheeran Shape Of You"},
        {youtube: "24rreFqTmO4", name: "but if you close your eyes remix"},
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
        {youtube: "mlmpVkhV0X4", name: "Faded vs Closer Mashup Alan Walker, The Chainsmokers & Halsey"},
        {youtube: "avbFUPZRPOU", name: "Whirly Dirly"},
        {youtube: "6wlbB1PTzJU", name: "Summer Smile Silent Partner"},
        {youtube: "EQlgcK25wh0", name: "Outnumbered"},
        {youtube: "Bh0QZvHdSKo", name: "Henry Hall Here Comes The Boogeyman"},
        {youtube: "TUj0otkJEBo", name: "Ty Dolla $ignOr Nah ft The Weeknd Wiz Khalifa & DJ Mustard"},
        {youtube: "7PCkvCPvDXk", name: "Meghan Trainor - All About That Bass"},
        {youtube: "I4Pa-OJ7yjQ", name: "Prince Ali Obama Aladdin Parody"},
        {youtube: "6nqWNZl3Ou4", name: "On the Open Road"},
        {youtube: "O9TunCtR3dQ", name: "Red Hot Chili Peppers - Under The Bridge"},
        {youtube: "aOl4oeHZnBk", name: "You Sexy Thing I Believe in Miracles"},
        {youtube: "H0m3Lfkzcw4", name: "Happy Pharrell Williams"},
        {youtube: "HXEJjtBouRA", name: "Daft Punk Get Lucky"},
        {youtube: "g8PrTzLaLHc", name: "Imagine Dragons - On Top of the World"},
        {youtube: "p3J5KMbdniI", name: "Hallo-winners Bob's Burgers Remix"},
        {youtube: "fTtgVSxfr5M", name: "Elton John Can You Feel The Love Tonight"},
        {youtube: "QnABC0b1gCI", name: "You spin me right round (like a record baby"},
        {youtube: "qDLJ3pUZm9A", name: "Toto - Africa (Lyrics on screen"},
        {youtube: "d0lgswGOgrs", name: "Jeepers Creepers Song"},
        {youtube: "7gPD7kY1amE", name: "Corinne Bailey Rae - Put Your Records On"},
       {youtube: "v2nUtpv0IAQ", name: "Naked Eyes: Theres Always Something There to Remind Me"},
       {youtube: "5bHimOJb-Xw", name: "Pomf Pomf"},
       {youtube: "YwsHq3eh7U", name: "Living In The Sunlight"},
       {youtube: "CVZXj53i9Js", name: "Together in Electric Dreams"},
       {youtube: "dUpBNu6ckfU", name: "Good Things"},
       {youtube: "LPn0KFlbqX8", name: "Cyndi Lauper True Colors"},
       {youtube: "9mW4qmh8_9g", name: "Martika Toy Soldiers Lyrics"},
       {youtube: "K0GqcpVy5EA", name: "Sorrow - Kalypso"}


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
        ": Welcome to SkeletalServers!",
        "Check Out Ceyayroxs Youtube Channel He Is A Cool Dude Bro!",
        "Make sure to read the rules!",
        "I Have had It With Them Dumb Useless Children Asking For Ranks Like Come On Right Fuck Me XD!",
        "Don't You Dare Come In Here And Tell Me How To Do My Fucking Job M8!",
        "Don't Like The Server Then Get The Fuck Out Of Here Then. Go Join Your Favorite SandBox Server You Little Bitching Piece Of Shit!",
        "Donate Your Money To My Server Or No Vip Shit For You. I Ant Runging A Charity Here FFS Here Is My Email Taine049@gmail.com!",
        "Your Welcome To Join Our Discord Server At AnyTime Here Is The Join Link https://discord.gg/EZ3gct8!",
        "Enjoy your time on our server!",
        "Any Kind Of Cyber Bullying Is Not Tolerated Here Please Respect All Players If You're Caught Doing This It's A Permanent Ban For Life!"
];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
