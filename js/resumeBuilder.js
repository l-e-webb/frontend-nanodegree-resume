var bio = {
	"name" : "Louis Webb",
	"role" : "Web Developer",
	"welcomeMessage" : "I don't know what this is for exactly.",
	"skills" : [
		"Web Development", "Game Design", "Mathematics"
	],
	"contacts" : {
		"mobile" : "(917) 562 9896",
		"email" : "louis.webb5@gmail.com",
		"github" : "https://github.com/l-e-webb",
		"location" : "Portland, OR"
	},
	"bioPic" : "http://placehold.it/250x250"
	
};

var education = {
	"schools" : [
		{
			"name" : "Reed College",
			"location" : "Portland, OR",
			"degree" : "BA",
			"major" : "Mathematics",
			"dates" : "September 2008 - May 2012",
			"url" : "www.reed.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"url" : "https://www.udacity.com/course/ud804"			
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Democracy Resources",
			"title" : "Administrative Assistant",
			"location" : "Portland, OR",
			"dates" : "April - July 2014",
			"description" : "DR job description goes here"
		},
		{
			"employer" : "American Institutes for Research, Freelance",
			"title" : "Math Content Developer",
			"location" : "Portland, OR",
			"dates" : "May 2012 - Dec 2014",
			"description" : "AIR job description goes here"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Sample Project 1",
			"dates" : "January 2014",
			"description" : "Sample project 1 description.",
			"images" : [
				"http://placehold.it/250x250",
				"http://placehold.it/250x250"
			]
		},
		{
			"title" : "Sample Project 2",
			"dates" : "January 2014",
			"description" : "Sample project 2 description.",
			"images" : [
				"http://placehold.it/250x250",
				"http://placehold.it/250x250"
			]
		}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	bio.displayContacts("top");
	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	if (bio.skills != []) {
		$("#header").append(HTMLskillsStart);
		for (var i = 0; i<bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
	bio.displayContacts("footer");
}

bio.displayContacts = function(placement) {
	$("#" + placement + "Contacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#" + placement + "Contacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#" + placement + "Contacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#" + placement + "Contacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
		for (img in projects.projects[project].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[img]));
		}
	}
}

education.display = function() {
	if (education.schools != []) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
		}
	}
	if (education.onlineCourses != []) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

























