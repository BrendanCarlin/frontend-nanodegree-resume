/*bio JSON*/
var bio = {
    "name": "Brendan Carlin",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "813-600-7242",
        "email": "brendan.g.carlin@gmail.com",
        "github": "BrendanCarlin",
        "twitter": "@carlin_brendan",
        "location": "Tampa, FL"
    },
    "welcomeMessage": "Company Man by Day, Web Developer by Night...",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Python"
    ],
    "biopic": "images/me.jpg"
}

/*display function for bio JSON*/
bio.display = function() {
    //replace with my role
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    //append my role to the header
    $("#header").prepend(formattedRole);
    //replace with my name
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    //append my name to the header
    $("#header").prepend(formattedName);

    //replace with my contact info
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    //append my contact info to the header
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    //append my contact info to the footer
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);


    //replace with my bioPIC and welcomeMsg, then append
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedPic);
    $("#header").append(formattedMsg);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
}

/*education JSON*/
var education = {
    "schools": [
    {
        "name": "University of Toledo",
        "location": "Toledo, OH",
        "degree": "BA",
        "majors": "English & Philosophy",
        "dates" : "2008",
        "url" : "www.utoledo.edu"
    },
    {
        "name": "Udacity",
        "location": "Tampa, FL",
        "degree": "Nanodegree",
        "majors": "Front-End Web Developer",
        "dates" : "2015",
        "url" : "www.udacity.com/course/nd001"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "JavaScript Basics",
        "school" : "Udacity.com",
        "date" : 2015,
        "url" : "https://www.udacity.com/course/ud804"
    },
    {
        "title" : "Intro to HTML and CSS",
        "school" : "Udacity.com",
        "date" : 2015,
        "url" : "https://www.udacity.com/course/ud304"
    }
    ]
}

/*display function for education JSON*/
education.display = function() {
    //iterate each instance and append
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        //replace and append
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        //$(".education-entry:last").append(formattedName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        //$(".education-entry:last").append(formattedDegree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
}
    $(".education-entry:last").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        //$(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        //$(".education-entry:last").append(formattedSchool);
        var formattedSchoolTitle = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedSchoolTitle);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedDates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedUrl);
    }
}

/*work JSON*/
var work = {
    "jobs" : [
    {
        "employer" : "AT&T",
        "title" : "Sr. Training Manager",
        "location" : "Tampa, FL",
        "dates" : "4/2013 - Current",
        "description" : "I facilitate and coach for improved workforce performance.  My team trains the entire Florida market's retail sales channel--focusing on customer experience, leadership, solutions-based selling, and emerging technologies depending on the course."},
    {
        "employer" : "AT&T",
        "title" : "Assistant Store Manager",
        "location" : "Delray Beach, FL",
        "dates" : "2011 - 2013",
        "description" : "Successfully coached employees to exceed sales metrics and customer experience goals by providing effective feedback and fostering a winning mentality."
    },
    {
        "employer" : "AT&T",
        "title" : "Retail Sales Consultant",
        "location" : "Boca Raton, FL",
        "dates" : "2009 - 2011",
        "description" : "Fresh out of college with debt and a recession-- the hustle begins..."
    }
    ]
}

/*display function for work JSON*/
work.display = function() {
for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
}
}

/*projects JSCN*/
var projects = {
    "projects" : [
    {
        "title" : "Website Mockup",
        "dates" : "February, 2015",
        "description" : "Design a responsive website to mirror the exact image of a PDF file",
        "images" : ["images/mockup.png"]
    }
    ]
}

/*display function for projects JSON*/
projects.display = function() {
    /* iterate and append */
    for (each in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        /* replace content and append */
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[each].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[each].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[each].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[each].images[each]);
        $(".project-entry:last").append(formattedImages);
    }
}

/*call function displaying bio*/
bio.display();

/*call function displaying work*/
work.display();

/*call function displaying education*/
education.display();

/* call function to display projects */
projects.display();


function locationizer(work_obj) {
    var cityArray = [];

    for (city in work_obj.jobs) {
        var newCity = work_obj.jobs[city].location;
        cityArray.push(newCity);
    }

    return cityArray;
}

$("#mapDiv").append(googleMap);