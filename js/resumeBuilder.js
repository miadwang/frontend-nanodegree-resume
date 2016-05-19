var bio = {
  "name": "Mia Wang",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "+86-152-1067-5902",
    "email": "mia.d.wang@gmail.com",
    "github": "miadwang",
    "twitter": "@Miadwang",
    "location": "Beijing"
  },
  "welcomeMessage": "Welcome to my resume!",
  "skills": {
    "HTML": 60,
    "CSS": 40,
    "JavaScript": 20
  },
  "biopic": "images/Mia.jpg",
  "display": function() {

    $('#header').prepend(HTMLheaderRole.replace('%data%',bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%',bio.name));

    $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile) + HTMLemail.replace('%data%', bio.contacts.email) + HTMLtwitter.replace('%data%', bio.contacts.twitter) + HTMLgithub.replace('%data%', bio.contacts.github) + HTMLlocation.replace('%data%', bio.contacts.location));

    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic) + HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills !== {}) {
      $('#header').append(HTMLskillsStart);
      for (var skill in bio.skills) {
        $('#skills').append(HTMLskills.replace('%data%', skill).replace('%wd%', bio.skills[skill]));
        console.log(bio.skills[skill]);
      }
    }

    $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile) + HTMLemail.replace('%data%', bio.contacts.email) + HTMLtwitter.replace('%data%', bio.contacts.twitter) + HTMLgithub.replace('%data%', bio.contacts.github) + HTMLlocation.replace('%data%', bio.contacts.location));
  }
};

var work = {
  "jobs": [
    {
      "employer": "ABB",
      "title": "Material Science",
      "location": "Beijing",
      "dates": "2014-2016",
      "description": "Material R&D"
    }
  ],
  "display": function() {
    for (var i = 0; i < work.jobs.length; i++) {
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer) + HTMLworkTitle.replace('%data%', work.jobs[i].title));
      $('.work-entry:last').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
      $('.work-entry:last').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
      $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "100 Days' UI",
      "dates": "2016",
      "description": "One UI design a day for 100 days",
      "images": ["images/work-1.jpg", "images/work-2.jpg"]
    }
  ],
  "display": function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $('#projects').append(HTMLprojectStart);
      $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title) + HTMLprojectDates.replace('%data%', projects.projects[i].dates) + HTMLprojectDescription.replace('%data%', projects.projects[i].description));
      for (var ii = 0; ii < projects.projects[i].images.length; ii++) {
        $('.project-entry:last').append(HTMLprojectImage.replace(/%data%/g, projects.projects[i].images[ii]));
      }
    }
  }
};

var education = {
  "schools": [
    {
      "name": "Chinese Acadamy of Sciences",
      "location": "Beijing",
      "degree": "phD.",
      "majors": ["Material Science"],
      "dates": "2009-2014",
      "url": "http://www.cas.cn"
    },
    {
      "name": "Nankai University",
      "location": "Tianjin",
      "degree": "B.S.",
      "majors": ["Chemistry"],
      "dates": "2005-2009",
      "url": "http://www.nankai.edu.cn"
    }
  ],

  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    },
    {
      "title": "Responsive Images",
      "school": "Udacity",
      "dates": "2016",
      "url": "https://www.udacity.com/course/responsive-images--ud882"
    }
  ],

  "display": function() {
    for (var i = 0; i < education.schools.length; i++) {
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url) + HTMLschoolDegree.replace('%data%', education.schools[i].degree) + HTMLschoolDates.replace('%data%', education.schools[i].dates) + HTMLschoolLocation.replace('%data%', education.schools[i].location)+ HTMLschoolMajor.replace('%data%', education.schools[i].majors.join(', ')));
    }

    $('#education').append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
      $('#education').append(HTMLschoolStart);
      $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url) + HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school) + HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates));
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();

// make project images show fullscreen

$('.normal').click(function(event) {
  $(event.target).prev(".hidden").addClass('show');
  $('.show').click(function(event) {
    $(event.target).removeClass('show');
    console.log($('.show'));
  });
});

// function inName(name) {
//   var nameArray = name.trim().split(" ");
//   nameArray[0] = nameArray[0][0].toUpperCase() + nameArray[0].slice(1).toLocaleLowerCase();
//   nameArray[1] = nameArray[1].toUpperCase();
//   return nameArray.join(" ");
// }
//
// $("#main").append(internationalizeButton);

$('#mapDiv').append(googleMap);
