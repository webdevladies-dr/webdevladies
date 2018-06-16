import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Projects.css'

const projects = [{
    title: '1. Portfolio or Storefront Website',
    image: './assets/images/project-images/continental-phil-tube.png',
    description: 'Build and deploy a responsive, mobile-ready website, continue learning how to use your Chrome developer tools as well as begining to use Gitbash/Terminal, a text editor like Atom, and Github for version control and Github pages for deployment.',
    tech: 'Bootstrap, Atom, Gitbash/Terminal, Github'
  },{
    title: '2. Let\'s Play',
    image: './assets/images/project-images/pdx-tech-hub.png',
    description: 'Build a simple game to practice your JavaScript skills, like tic-tac-toe, a memory card game, or an online quiz.',
    tech: 'JavaScript'
  },{
    title: '3. Quote Generator',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build an application that will deliver as many quotes as the user requests, on a theme of your liking.',
    tech: 'more Javascript, jQuery'
  },
  {
    title: '4. Use an API',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Consume data from a third party API and deliver it to your user.',
    tech: 'Postman, API'
  },
  {
    title: 'Front-End Capstone: Your Choice',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Work with at least one other person to develop a beautiful, interactive, responive front-end project.',
    tech: 'Semantic HTML, CSS, Bootstrap, Chrome Web Developer Tools, Atom, Gitbash/Terminal, Github, JavaScript, jQuery, Postman, API, Pair-programming'
  },
  {
    title: '5. Node',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build a simple command-line application with Node.js and learn about the word of Node packages with NPM (Node Package Manager).',
    tech: 'Node.js, NPM, Inquirer.js'
  },
  {
    title: '6. Server-up!',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build your first back-end server using Express.',
    tech: 'Express'
  },
  {
    title: '7. Simple React App',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'Build a basic React application using create-react-app',
    tech: 'React, create-react-app'
  },
  {
    title: '8. Firebase Project',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'See how it easy it is to build serverless full-stack application with user authentication using a service like Firebase in combiantion with React.',
    tech: 'Firebase'
  },
  {
    title: 'Full-Stack Capstone: Your Choice',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'You will work with at least one other person to put together a full-stack application website of your choosing.',
    tech: 'Semantic HTML, CSS, Bootstrap, Chrome Web Developer Tools, Atom, Gitbash/Terminal, Github, JavaScript, jQuery, Node.js, Express, Handlebars or React, Mongo/Mongoose, Passport.js'
  }
]

const ProjectsMini = () => {
  return (
      <div className="Projects" id='projects'>
        {projects.map( (project, index) => {
          return <MuiThemeProvider key={index}>
            <Card className='project'>
              <CardHeader
                title={project.title}
                subtitle={project.description}
                // avatar="./assets/images/alfonsotech-logo.png"
              />
              <CardText>
                {/* <a href={project.deploy} target="_blank" rel="noopener noreferrer"><img className="project-image" src={project.image} alt={project.title} /></a> */}
                <hr />
                <div className="project-links">
                  <p>{project.tech}</p>
                  {/* <a href={project.deploy} target="_blank" rel="noopener noreferrer"><FlatButton label="Live" /></a>
                  <br />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FlatButton label="Code" /></a> */}
                </div>
              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default ProjectsMini
