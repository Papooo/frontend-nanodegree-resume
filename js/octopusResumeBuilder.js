var model = {
    bio: {
        name : 'Monika',
        role : 'Front-end developer',
        contacts : {
            mobile: '+555 555 5555',
            email: 'monika@email.go',
            github: 'Papooo',
            twitter: '@Papoooga',
            facebook: 'monikusha',
            location: 'Vilnius, Lithuania'
        },
        welcomeMessage: 'Hey, nice to see You!',
        skills: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SEO', 'eCommerce'],
        biopic: 'images/monosm.jpeg'
    },
    education: {
        schools: [
            {
                name: 'Vilnius University',
                location: 'Vilnius, Lithuania',
                degree: 'Bachelor',
                majors: ['CS', 'Informatics'],
                dates: '1997 - 2001',
                url: 'http://mif.vu.lt/lt3/'
            },
            {
                name: 'Vilnius University',
                location: 'Kaunas, Lithuania',
                degree: 'Masters',
                majors: ['CS', 'Informatics'],
                dates: '2001 - 2003',
                url: 'http://mif.vu.lt/lt3/'
            },
            {
                name: 'Vilnius University',
                location: 'Palanga, Lithuania',
                degree: 'Masters',
                majors: ['CS', 'Informatics'],
                dates: '2001 - 2003',
                url: 'http://mif.vu.lt/lt3/'
            },
            {
                name: 'Vilnius University',
                location: 'Skuodas, Lithuania',
                degree: 'Masters',
                majors: ['CS', 'Informatics'],
                dates: '2001 - 2003',
                url: 'http://mif.vu.lt/lt3/'
            }
        ],
        onlineCourses: [
            {
                title: 'Front-End Web Developer Nanodegree',
                school: 'Udacity',
                dates: '2017',
                url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
            },
            {
                title: 'Front-End',
                school: 'Udacity',
                dates: '2017',
                url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
            },
            {
                title: 'Web Developer Nanodegree',
                school: 'Udacity',
                dates: '2017',
                url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
            }
        ]
    },
    work: {
        jobs: [
            {
                employer: 'UAB Softnova',
                title: 'UX, Front-end developer, Technical support, SEO',
                location: 'Vilnius',
                dates: '2007 - in progress',
                description: 'Nulla et convallis ligula. Cras nec pretium odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed diam non lorem ornare placerat. Ut non ultrices nunc. Integer posuere eros in rutrum porttitor. Integer sit amet pulvinar nisi, sit amet auctor augue.'
            },
            {
                employer: 'Freelancer',
                title: 'UX, Front-end developer',
                location: 'Vilnius',
                dates: '2003 - 2007',
                description: 'Nulla et convallis ligula. Cras nec pretium odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sed diam non lorem ornare placerat. Ut non ultrices nunc. Integer posuere eros in rutrum porttitor. Integer sit amet pulvinar nisi, sit amet auctor augue.'
            }
        ]
    },
    projects: {
        projects: [
            {
                title: 'Resume Project for Udacity',
                dates: '2017',
                description: 'My resume (the one you are reading now) - JavaScript and jQuery skills showing project for Udacity Front-End Web Developer Nanodegree course',
                images: ['images/resume0.jpg']
            },
            {
                title: 'manadev.com theme',
                dates: '2016',
                description: 'Responsive theme developement - styling and front-end',
                images: ['images/manadev0.jpg', 'images/manadev1.jpg']
            }
        ]
    }
};

var octopus = {
    init: function() {
        bio.display();
        work.display();
        projects.display();
        education.display();
    },
    // bio
    HTMLheaderName: HTMLheaderName.replace('%data%', model.bio.name),
    HTMLheaderRole: HTMLheaderRole.replace('%data%', model.bio.role),
    HTMLbioPic: HTMLbioPic.replace('%data%', model.bio.biopic),
    HTMLwelcomeMsg: HTMLwelcomeMsg.replace('%data%', model.bio.welcomeMessage),
    HTMLmobile: HTMLmobile.replace('%data%', model.bio.contacts.mobile),
    HTMLemail: HTMLemail.replace('%data%', model.bio.contacts.email),
    HTMLtwitter: HTMLtwitter.replace('%data%', model.bio.contacts.twitter),
    HTMLfacebook: HTMLfacebook.replace('%data%', model.bio.contacts.facebook),
    HTMLgithub: HTMLgithub.replace('%data%', model.bio.contacts.github),
    HTMLlocation: HTMLlocation.replace('%data%', model.bio.contacts.location),

    HTMLskillsStart: HTMLskillsStart,
    HTMLskills: function() {
        var skills = model.bio.skills;
        var result = [];
        skills.forEach(function(skill) {
            result.push(HTMLskills.replace('%data%', skill));
        });
        return result;
    },
    //education
    HTMLschoolStart: HTMLschoolStart,
    HTMLonlineClasses: HTMLonlineClasses,
    HTMLschools: function() {
        var schools = model.education.schools;
        var result = [];
        schools.forEach(function(school) {
            result.push(
                HTMLschoolName.replace('%data%', school.name) + ' ' +
                HTMLschoolDegree.replace('%data%', school.degree) + ' ' +
                HTMLschoolDates.replace('%data%', school.dates) + ' ' +
                HTMLschoolLocation.replace('%data%', school.location) + ' ' +
                HTMLschoolMajor.replace('%data%', school.majors) + ' ' +
                HTMLschoolURL.replace(/%data%/g, school.url)
            )
        });
        return result;
    },
    HTMLonlineCourses: function() {
        var courses = model.education.onlineCourses;
        var result = [];
        courses.forEach(function(course) {
            result.push(
                HTMLonlineTitle.replace('%data%', course.title) + ' ' +
                HTMLonlineSchool.replace('%data%', course.school) + ' ' +
                HTMLonlineDates.replace('%data%', course.dates) + ' ' +
                HTMLonlineURL.replace('%data%', course.url)
            )
        });
        return result;
    },

    // work
    HTMLworkStart: HTMLworkStart,
    HTMLworks: function() {
        var jobs = model.work.jobs;
        var result = [];
        jobs.forEach(function(job) {
            result.push(
                HTMLworkEmployer.replace('%data%', job.employer) + ' ' +
                HTMLworkTitle.replace('%data%', job.title) + ' ' +
                HTMLworkDates.replace('%data%', job.dates) + ' ' +
                HTMLworkLocation.replace('%data%', job.location) + ' ' +
                HTMLworkDescription.replace('%data%', job.description)
            )
        });
        return result;
    },

    // projects
    HTMLprojectStart: HTMLprojectStart,
    HTMLprojects: function() {
        var projects = model.projects.projects;
        var result = [];
        projects.forEach(function(project) {
            var images = '';
            project.images.forEach(function(image) {
                images += HTMLprojectImage.replace('%data%', image);
            });

            result.push(
                HTMLprojectTitle.replace('%data%', project.title) + ' ' +
                HTMLprojectDates.replace('%data%', project.dates) + ' ' +
                HTMLprojectDescription.replace('%data%', project.description) + ' ' +
                images
            );

        });
        return result;
    }
};

var projects = {
    projectsContainer: document.getElementById('projects'),
    display: function() {
        var projects = octopus.HTMLprojects();
        var lastEntry = null;
        projects.forEach(function(project) {
            this.projectsContainer.insertAdjacentHTML('beforeend', octopus.HTMLprojectStart);
            lastEntry = this.projectsContainer.lastElementChild;
            lastEntry.insertAdjacentHTML('beforeend', project);
        }.bind(this));
    }
};

var work = {
    workExperience: document.getElementById('workExperience'),
    display: function() {
        var jobs = octopus.HTMLworks();
        var lastEntry = null;
        jobs.forEach(function(job) {
            this.workExperience.insertAdjacentHTML('beforeend', octopus.HTMLworkStart);
            lastEntry = this.workExperience.lastElementChild;
            lastEntry.insertAdjacentHTML('beforeend', job);
        }.bind(this));
    }
};

var education = {
    education: document.getElementById('education'),
    display: function() {
        //  schools
        var schools = octopus.HTMLschools();
        var lastEntry = null;
        schools.forEach(function(school) {
            this.education.insertAdjacentHTML('beforeend', octopus.HTMLschoolStart);
            lastEntry = this.education.lastElementChild;
            lastEntry.insertAdjacentHTML('beforeend', school);
        }.bind(this));

        // courses
        var courses = octopus.HTMLonlineCourses();
        this.education.insertAdjacentHTML('beforeend', octopus.HTMLonlineClasses);
        courses.forEach(function(course) {
            this.education.insertAdjacentHTML('beforeend', octopus.HTMLschoolStart);
            lastEntry = this.education.lastElementChild;
            lastEntry.insertAdjacentHTML('beforeend', course);
        }.bind(this));

    }
};

var bio = {
    header: document.getElementById('header'),
    topContacts: document.getElementById('topContacts'),
    skills: function() {
        this.header.insertAdjacentHTML('beforeend', octopus.HTMLskillsStart);
        return document.getElementById('skills');
    },
    footerContacts: document.getElementById('footerContacts'),
    display: function() {
        this.header.insertAdjacentHTML('afterbegin',
            octopus.HTMLheaderName +
            octopus.HTMLheaderRole +
            octopus.HTMLbioPic +
            octopus.HTMLwelcomeMsg
        );
        this.displayContacts(this.topContacts, this.footerContacts);
        this.skills().insertAdjacentHTML('beforeend', octopus.HTMLskills().join(''));
    },
    displayContacts: function() {
        for (var i = 0; i < arguments.length; i++){
            arguments[i].insertAdjacentHTML('beforeend',
                octopus.HTMLmobile +
                octopus.HTMLemail +
                octopus.HTMLtwitter +
                octopus.HTMLfacebook +
                octopus.HTMLgithub +
                octopus.HTMLlocation
            );
        }
    }
};

octopus.init();
$('#mapDiv').append(googleMap);
