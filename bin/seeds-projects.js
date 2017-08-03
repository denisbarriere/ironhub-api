/**
 * MIDDLEWARE IMPORT
**/
const mongoose = require('mongoose');
const Project = require('../models/project-model');
require("dotenv").config(); // To connect to the database


/**
 * MIDDLEWARE CONFIGURATION
**/
// Database connection
mongoose.connect(process.env.MONGODB_URI); // Databse name from local .env


/**
 * PROJECTS DATA
**/
const projects = [ 
  {
    name: 'M Y F O L T',
    contributors: ['5982f74c6a05fc8ef0d9ff5e'],
    endOfModuleProject: 'Module 1',
    description: 'Javascript version of F O L T, the iOS game',
    urls: {
      gitHub: 'https://github.com/denisbarriere/ironhack-game',
      productUrl: 'https://denisbarriere.github.io/ironhack-game/',
      projectImageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/733340/images/3955600/Screen_Shot_2017-06-30_at_12.37.07_pm.png',
      slidePresentationUrl: 'http://slides.com/denisbarriere/m-y-f-o-l-t',
      videoPresentationUrl: 'http://youtube.com',
    }
  },
  {
    name: 'Ironhelp',
    contributors: ['5982f74c6a05fc8ef0d9ff5e', '5982f74c6a05fc8ef0d9ff5f'],
    endOfModuleProject: 'Module 2',
    description: 'The best documentation platform for developers, built by the community',
    urls: {
      gitHub: 'https://github.com/denisbarriere/ironhelp',
      productUrl: 'https://ironhelp.herokuapp.com',
      projectImageUrl: 'https://s3.amazonaws.com/media-p.slid.es/uploads/733340/images/4001613/ironhelp-logo--green.png',
      screenshots: [{
        title: "Homepage capture",
        url: "https://s3.amazonaws.com/media-p.slid.es/uploads/733340/images/3955600/Screen_Shot_2017-06-30_at_12.37.07_pm.png"
      }],
      slidePresentationUrl: 'http://slides.com/denisbarriere/ironhelp',
      videoPresentationUrl: 'http://youtube.com',
    }
  },
]


/**
 * CREATE PROJECTS
**/
// Add the projects to the database
Project.create(projects, (err, docs) => {
  if (err) {
    throw err;
  }
  console.log('---------------');
  console.log('PROJECTS:');
  
  docs.forEach((project) => {
    console.log(project.name)
  });
  mongoose.connection.close();
});
