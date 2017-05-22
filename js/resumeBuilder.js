/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio, education, work, projects;

bio = {
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
      biopic: 'images/monosm.jpeg',

      displayContacts: function (selector){
        $(selector).append(
          HTMLmobile.replace('%data%', bio.contacts.mobile),
          HTMLemail.replace('%data%', bio.contacts.email),
          HTMLtwitter.replace('%data%', bio.contacts.twitter),
          HTMLfacebook.replace('%data%', bio.contacts.facebook),
          HTMLgithub.replace('%data%', bio.contacts.github),
          HTMLlocation.replace('%data%', bio.contacts.location)
        );
      },
      display: function(){
        $('#header').prepend(
          HTMLheaderName.replace('%data%', bio.name),
          HTMLheaderRole.replace('%data%', bio.role)
        );
        bio.displayContacts('#topContacts');
        $('#header').append(
          HTMLbioPic.replace('%data%', bio.biopic),
          HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage),
          HTMLskillsStart
        );
        bio.skills.forEach(function(skill){
          $('#skills').append(
            HTMLskills.replace('%data%', skill)
          );
        });
      }
};

education = {
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
          }
      ],
      onlineCourses: [
        {
          title: 'Front-End Web Developer Nanodegree',
          school: 'Udacity',
          dates: '2017',
          url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
      ],
      display: function(){
        education.schools.forEach(function(school){
          $('#education').append(HTMLschoolStart);
          $('.education-entry:last').append(
            HTMLschoolName.replace('%data%', school.name) + ' ' +
            HTMLschoolDegree.replace('%data%', school.degree),
            HTMLschoolDates.replace('%data%', school.dates),
            HTMLschoolLocation.replace('%data%', school.location),
            HTMLschoolMajor.replace('%data%', school.majors),
            HTMLschoolURL.replace(/%data%/g, school.url)
          );
        });
      }
};

work = {
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
      ],
      display: function(){
        work.jobs.forEach(function(job){
          $('#workExperience').append(HTMLworkStart);
          $('.work-entry:last').append(
            HTMLworkEmployer.replace('%data%', job.employer) + ' ' +
            HTMLworkTitle.replace('%data%', job.title),
            HTMLworkDates.replace('%data%', job.dates),
            HTMLworkLocation.replace('%data%', job.location),
            HTMLworkDescription.replace('%data%', job.description)
          );
        });
      }
};

projects = {
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
      ],
      display: function(){
        projects.projects.forEach(function(project){
          $('#projects').append(HTMLprojectStart);
          $('.project-entry:last').append(
            HTMLprojectTitle.replace('%data%', project.title),
            HTMLprojectDates.replace('%data%', project.dates),
            HTMLprojectDescription.replace('%data%', project.description)
          );
          project.images.forEach(function(image){
            $('.project-entry:last').append(
              HTMLprojectImage.replace('%data%', image)
            );
          });
        });
      }
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
bio.displayContacts('#footerContacts');
