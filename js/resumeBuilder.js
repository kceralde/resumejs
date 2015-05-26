var bio = {
  "name" : "Kimberly Ceralde",
  "role" : "Web Developer",
  "contacts" : {
    "mobile": "888-888-8685",
    "email": "kimberlyceralde@gmail.com",
    "github": "kceralde",
    "twitter": "@vivresavie",
    "location": "San Diego, CA"
  },
  "welcomeMessage": "All mimsy were the borogoves, And the mome raths outgrabe.",
  "skills": ["HTML", "CSS", "Poetry", "Sitting"],
  "biopic": "images/profile_pic.jpg",
  display : function(){
    var formattedName =  HTMLheaderName.replace('%data%', bio.name);
    var formattedRole =  HTMLheaderRole.replace('%data%', bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var topContact = $("#topContacts");
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var skillsStart =  HTMLskillsStart;
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    topContact.append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
    $(skillsStart).insertAfter(topContact);
    $(formattedPic).insertBefore($("#skillsH3"));
    $(formattedWelcomeMsg).insertBefore("#skillsH3");
    for(var skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);
    }
    $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter).append(formattedLocation);
    $("#footerContacts").next().append(formattedPic).append(formattedWelcomeMsg);
  }
};

bio.display();

var education = {
  "schools": [{
    "name": "University Of Wikipedia",
    "location": "Silicon Valley, CA",
    "degree": "Bachelor of Science",
    "majors": "Encyclopedia",
    "dates": "2012-Present",
    "url": "http://en.wikipedia.org"
  },
  {
    "name": "University Of California",
    "location": "Silicon Valley, CA",
    "degree": "Bachelor of Science",
    "majors": "Speed Reading",
    "dates": "2007-2010",
    "url": "http://en.wikipedia.org"
  }],
  "onlineCourses": [{
    "title": "JavaScript",
    "school": "Udacity",
    "date": "2015",
    "url": "www.udacity.com"

  }],
  display : function(){
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedEducation = HTMLschoolName.replace("%data%", education.schools[school].name);
      var formattedEducationDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedCompleteEducation = formattedEducation + formattedEducationDegree;
      $(".education-entry:last").append(formattedCompleteEducation);
      var formattedEducationDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedEducationDates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedSchoolLocation);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
      $(".education-entry:last").append(formattedSchoolMajor);
    }
    for(var onlineClass in education.onlineCourses) {
      $(HTMLonlineClasses).insertAfter($(".education-entry:last"));
      var formattedOnlineClassTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineClass].title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineClass].school);
      var formattedOnlineClass = formattedOnlineClassTitle + formattedOnlineSchool;
      var formattedOnlineData = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineClass].date);
      var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineClass].url);
      $(HTMLschoolStart).insertAfter($("h3"));
      $(".education-entry:last").append(formattedOnlineClass).append(formattedOnlineData).append(formattedOnlineUrl);
    }
  }
};

education.display();

var work = {
  "jobs": [
    {
      "employer": "Thurn and Taxis \(a real postal system\)",
      "title": "The Crying of Lot 49",
      "location": "Regensburg, Germany",
      "dates": "02/01/1996",
      "description": '"Everybody who says the same words is the same person if the spectra are the same only they happen differently in time, you dig? But the time is arbitrary. You pick your zero point anywhere you want, that way you can shuffle each person’s time line sideways till they all coincide."'
    },
    {
      "employer": "Ennet House Drug and Alcohol Recovery House",
      "title": "Counselor",
      "location": "Organization of North American Nations",
      "dates": "12/21/1987",
      "description": "Founded in Year of the Whopper by \“nail-tough\” addict and alcoholic \"known in Boston AA simply as the Guy Who Didn’t Even Use His First Name.\”"
    }],
    display : function(){
      for(var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  };

  work.display();

  var projects = {
    "projects": [{
      "title": "A Failed Entertainment",
      "dates": "02/01/1996",
      "description": '"Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is!"',
      "image":"images/kitten.jpg"
    }],
    display : function () {
      for(var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedProjectImage);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedProjectImage);
      }
    }
  };

  projects.display();

$("#mapDiv").append(googleMap);
