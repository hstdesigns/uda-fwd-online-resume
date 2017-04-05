/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Rick",
    role: "web dev beginner",
    contacts: {
        mobile: "0123456789",
        email: "rick@example.com",
        github: "hstdesigns",
        twitter: "@example",
        location: "Berlin"
    },
    welcomeMessage: "Hey I am Awesome",
    skills: ["awesome", "web dev", "biking", "machine learning", "hardware dev"],
    biopic: "images/hstxlogo.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(formattedName + formattedRole);

        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));

        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));

        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));

        $("#header").append(HTMLskillsStart);

        this.skills.forEach(function (elem) {
            $("#skills").append(HTMLskills.replace("%data%", elem));
        });

        $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
    }
};
bio.display();

var work = {
    jobs: [{
            employer: "stargate",
            title: "firmware developer",
            location: "Kassel",
            dates: "2005 - 2008",
            description: "Senectus congue fringilla class sociis nisl convallis, ad eros mauris et montes leo morbi, justo aptent curae taciti vel."
    },
        {
            employer: "technics",
            title: "system admin",
            location: "Hamburg",
            dates: "2008 - 2013",
            description: "Metus lectus nam odio vitae quam taciti platea molestie malesuada, sed enim magnis viverra praesent porta lacus."
    }],
    display: function () {
        $("#workExperience").append(HTMLworkStart);

        this.jobs.forEach(function (elem) {
            $(".work-entry").append(HTMLworkEmployer.replace("%data%", elem.employer) + HTMLworkTitle.replace("%data%", elem.title));
            $(".work-entry").append(HTMLworkDates.replace("%data%", elem.dates));
            $(".work-entry").append(HTMLworkLocation.replace("%data%", elem.location));
            $(".work-entry").append(HTMLworkDescription.replace("%data%", elem.description));
        });
    }
};
work.display();

var projects = {
    projects: [{
            title: "DIY high resolution weight scale",
            dates: "2009 - 2010",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit gravida ad, viverra dictumst fames rutrum blandit ullamcorper libero natoque. Penatibus cum praesent varius malesuada nam leo aliquam, sollicitudin placerat eget nunc vel natoque, diam elementum potenti sociosqu ac ut.",
            images: ["images/proj11.jpg", "images/proj12.jpg"]
    },
        {
            title: "DIY led pulse oximeter",
            dates: "2010 - 2011",
            description: "Dictum turpis mi litora iaculis lectus libero scelerisque interdum, urna nunc tempor aliquam suspendisse fringilla posuere pharetra ultricies, pulvinar magnis sem tellus habitasse ligula ultrices.",
            images: ["images/proj21.jpg", "images/proj22.jpg"]
    }],
    display: function () {
        $("#projects").append(HTMLprojectStart);

        this.projects.forEach(function (elem) {
            $(".project-entry").append(HTMLprojectTitle.replace("%data%", elem.title));
            $(".project-entry").append(HTMLprojectDates.replace("%data%", elem.dates));
            $(".project-entry").append(HTMLprojectDescription.replace("%data%", elem.description));
            elem.images.forEach(function (picUrl) {
                $(".project-entry").append(HTMLprojectImage.replace("%data%", picUrl));
            });
        });
    }
};
projects.display();

var education = {
    schools: [{
        name: "Hochschule für Technik und Wirtschaft Berlin",
        location: "Berlin",
        degree: "BA",
        majors: ["first"],
        dates: "2014 - 2017",
        url: "htw-berlin.de"
    }],
    onlineCourses: [{
        title: "Udacity Frontend Nanodegree",
        school: "edx",
        dates: "2016 - 2017",
        url: "https://classroom.udacity.com/nanodegrees/nd001"
    }, {
        title: "project management",
        school: "edx",
        dates: "2015 - 2016",
        url: "edx.de"
    }],
    display: function () {
        $("#education").append(HTMLschoolStart);

        this.schools.forEach(function (elem) {
            $(".education-entry").append(HTMLschoolName.replace("%data%", elem.name) + HTMLschoolDegree.replace("%data%", elem.degree));
            $(".education-entry").append(HTMLschoolDates.replace("%data%", elem.dates));
            $(".education-entry").append(HTMLschoolLocation.replace("%data%", elem.location));
            $(".education-entry").append(HTMLschoolMajor.replace("%data%", elem.majors));
        });

        $(".education-entry").append(HTMLonlineClasses);

        this.onlineCourses.forEach(function (elem) {
            $(".education-entry").append(HTMLonlineTitle.replace("%data%", elem.title) + HTMLonlineSchool.replace("%data%", elem.school));
            $(".education-entry").append(HTMLonlineDates.replace("%data%", elem.dates));
            $(".education-entry").append(HTMLonlineURL.replace("%data%", elem.url));
        });
    }
};
education.display();

$("#mapDiv").append('<div id="map"></div>');
