var formattedName = HTMLheaderName.replace("%data%" , "Brendan G. Carlin");
var formattedRole = HTMLheaderRole.replace("%data%" , "Web Developer");
console.log(formattedName);
console.log(formattedRole);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Brendan Carlin",
	"role":"Sr. Training Manager",
	"contacts": {
		"mobile":"813-600-7242",
		"email":"brendan.g.carlin@gmail.com",
		"twitter":"@carlin_brendan",
		"github":"BrendanCarlin",
		"location":"Tampa, FL"
	},
	"bioPic":"images/fry.jpg",
	"welcomeMSG": "Ad sed ridens instructior, et sed atomorum delicata. Invidunt vituperata idens instructior.",
	"skills":["Sales", "Leadership", "Training", "Design"]
};

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts["location"])
$("#topContacts").prepend(formattedLocation);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts["github"]);
$("#topContacts").prepend(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts["twitter"]);
$("#topContacts").prepend(formattedTwitter);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts["email"]);
$("#topContacts").prepend(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
$("#topContacts").prepend(formattedMobile);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#topContacts").append(formattedBioPic);

var formattedMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMSG);
$("#topContacts").append(formattedMSG);

$("#topContacts").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#topContacts").append(formattedSkills);