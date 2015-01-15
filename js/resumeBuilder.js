var bio = {
	"name" : "Louis Webb",
	"role" : "Web Developer, Game Designer",
	"welcomeMessage" : "Haven't decided on welcome message yet",
	"skills" : [
		"Web Development", "Game Design", "Mathematics", "Tutoring", "Educational Content Development"
	],
	"plangs" : [
	    "JavaScript", "HTML & CSS", "Java", "Python", "Lua", "LaTeX"
	],
	"contacts" : {
		"mobile" : "(917) 562 9896",
		"email" : "louis.webb5@gmail.com",
		"github" : "https://github.com/l-e-webb",
		"location" : "Portland, OR"
	},
	"bioPic" : "./images/louisprofilepic.JPG"
	
};

var education = {
	"schools" : [
		{
			"name" : "Reed College",
			"location" : "Portland, OR",
			"degree" : "BA - Mathematics",
			"dates" : "September 2008 - May 2012",
			"url" : "www.reed.edu"
		},
		{
		    "name" : "Budapest Semesters in Mathematics",
		    "location" : "Budapest, Hungary",
		    "dates" : "August - December 2011",
		    "url" : "http://www.budapestsemesters.com/"
		},
		{
		    "name" : "Oxford Seminars",
		    "location" : "Portland, OR",
		    "degree" : "TESL/TEFL Certification",
		    "dates" : "January - February 2013",
		    "url" : "http://www.oxfordseminars.com/"
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
			"employer" : "American Institutes for Research, Freelance",
			"title" : "Math Content Developer",
			"location" : "Portland, OR",
			"dates" : "May 2012 - Present",
			"description" : "Write materials such as worksheets, lesson plans, and multiple-choice questions (with student-facing feedback) intended for use as teaching resource and in standardized testing. Explore contemporary pedagogical challenges facing K-12 mathematics teachers and students, and calibrated content for all grade levels with a view toward innovation and conceptual clarity."
		},
		{
            "employer" : "Democracy Resources",
            "title" : "Administrative Assistant",
            "location" : "Portland, OR",
            "dates" : "April - July 2014",
            "description" : "Operated in a variety of administrative support roles.  Required strong attention to detail, interpersonal and written communication skills, and the ability to quickly and accurately perform myriad administrative tasks."
        },
        {
            "employer" : "Reed College Academic Support Services",
            "title" : "Math Tutor",
            "location" : "Portland, OR",
            "dates" : "January 2011 - May 2012",
            "description" : "Aided students at diverse levels with mathematics related coursework in drop-in setting, in groups, and individually. Exercised extensive knowledge of advanced material; involved strong analytic, mathematical and communicative skills, and emphasized the ability to explain complicated material efficiently and with clarity."
        },
        {
            "employer" : "Reed College Mathematics Department",
            "title" : "Grader",
            "location" : "Portland, OR",
            "dates" : "January - December 2011",
            "description" : "Graded problem sets for freshman, sophomore and junior level courses. Assessed how different students approach mathematical problems, identified lacunae in understanding and provided written feedback to alleviate confusion with careful communication of conceptual points."
        },
        {
            "employer" : "Reed College Facility Services",
            "title" : "Building Services Assistant",
            "location" : "Portland, OR",
            "dates" : "April - August 2011",
            "description" : "Provided logistical support in a team under multiple supervisors for the Reed College community. Assisted in project work requiring multi-tasking, teamwork, and priority-sensitive organizing to maintain Reed College campus and aid in event planning, preparation, and management."
        },
        {
            "employer" : "ARAMARK / Brooklyn Cyclones",
            "title" : "Concessions Cashier",
            "location" : "Brooklyn, NY",
            "dates" : "May - August 2008",
            "description" : "Passed qualifying math exam for money-handling responsibilities.  Quantified and accurately recorded cash profits from multiple registers.  Attained certification to serve alcoholic beverages in New York State.  Developed strong customer service skills and the ability to work flexible and unpredictable hours in a fast-paced environment."
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
	$("#headerInner").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#headerInner").prepend(HTMLheaderName.replace("%data%", bio.name));
	bio.displayContacts("top");
	$("#headerInner").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#headerInner").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	if (bio.skills != []) {
		$("#headerInner").append(HTMLskillsStart);
		for (var i = 0; i<bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}
	if (bio.plangs != []) {
        $("#headerInner").append(HTMLlangsStart);
        for (var i = 0; i<bio.plangs.length; i++) {
            $("#langs").append(HTMLskills.replace("%data%", bio.plangs[i]));
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
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates) + HTMLworkLocation.replace("%data%", work.jobs[job].location));
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
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
			if (education.schools[school].degree) {
    			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
	        }
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates) + HTMLschoolLocation.replace("%data%", education.schools[school].location));
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

























