import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

//Import Images
import CE from "./images/CE.png";
import CE2 from "./images/CE-2.png";
import MA from "./images/MA.png";
import MA2 from "./images/MA-2.png";
import DF from "./images/DF.png";
import DF2 from "./images/DF-2.png";
import CEgif from "./images/CEgif.gif"
import gitrepo from "./images/gitrepo.png"


export const ProjectState = () => {
  return [
    {
      title: "Currency Exchange",
      mainImg: CE,
      secondaryImg: CE2,
      url: "/projects/currency-exchange",
      expertiseAreas: ["api-developer", "qa-engineer"],
      technologies: ["Python", "Flask", "PostgreSQL", "Heroku", "Bootstrap"],
      role: "Full-stack Developer & QA",
      detailDescription: <p> 
        <p> A Python-Flask Application that implements a currency exchange function using a currency conversion API that updates regularly. </p>
        <h3> Setup Instructions </h3>
        <p> Preparation: mkdir currency-exchange Git git init touch .gitignore </p>
        <p> Installations: pip install virtualenv </p>
        <p> Create Virtual Environment called ‘virtual’: virtualenv virtual </p>
        <p> Activate Virtual Environment: source virtual/bin/activate </p>
        <p>
          <ul>
            <li> Install Flask: pip install flask </li>
            <li> Install Requests: pip install requests </li>
            <li> Bootstrap: pip install flask-bootstrap </li>
            <li> Forms: pip install flask-wtf </li>
            <li> Flash Script: pip install flash-script </li>
            <li> Fonts: pip install Flask-FontAwesome </li>
            <li> LogIn: pip install flask-login </li>
            <li> Werkzeug: pip install -U Werkzeug==0.16.0 </li>
            <li> Database Installations: 
              <ul>
                <li> pip install flask-SQLAlchemy </li>
                <li> pip install psycopg2 </li>
              </ul>
            </li>
            <li> Database Migrations: </li>
            <ul>
                <li> pip install Flask-Migrate==2.7.0 </li>
                <li> python3 manage.py db init </li>
                <li> python3 manage.py db migrate -m "Initial Migration </li>
                <li> python3 manage.py db upgrade </li>
              </ul>
            <li> Enable easy run: </li>
            <ul>
                <li> chmod a+x start.sh </li>
                <li> ./start.sh </li>
              </ul>
          </ul>
        </p>
        <h3> API </h3>
        <p> The API chosen for this project is the Free Currency Converter. The API provider offers free web services for developers to convert one currency to another. Currency values are updated every 60 minutes but on the free plan may experience some downtime occasionally. </p>
        <h3> User Authentication. </h3>
        <p> Authentication comprises a log-in, signup, profile and edit profile function that includes the option to update a profile picture and select a default currency. Every user starts with a KES 1000 balance converted into their default currency. </p>
        <h3> Currency Conversion. </h3>
        <p> A user can convert from one currency to the other on request using the “Make Conversion” function. Another way conversion happens is through transactions. For instance, when one user sends money to another user in the same app, in the case that their default currencies are different, conversion happens by default and reaches the receiver wallet in their default currency. The conversions are up to date with the conversion rates which update every hour. Debit and Credit functions can also be performed in any currency by a user to their own wallets and the money is saved to their wallets in their individual currencies. </p>
        <h3> Transactions </h3>
        <p> Transactions are displayed on the transactions page depending on the user where they can view debits and credits that occurred in their accounts as statement of accounts. Time and amount are also included in the report. </p> 
        <h3> Deployment </h3>
        <p> Deployment Deployment has been achieved through Heroku. Heroku is a cloud deployment platform that is able to implement both the application dependencies and the database. 
          <p>
          <ul>
            <li> pip install gunicorn </li>
            <li> pip freeze requirements.txt </li>
            <li> touch Procfile and write the code: web: gunicorn manage:app into the file. </li>
            <li> heroku login </li>
            <li> heroku create currency-exchange-application </li>
            <li> heroku config:set API_KEY='YOUR MOVIE API' </li>
            <li> heroku config:set SECRET_KEY= 'YOUR SECRET KEY' </li>
            <li> heroku addons:create heroku-postgresql </li>
            <li> Alter config.py with: class ProdConfig(Config): SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL") </li>
            <li> Alter manage.py: From: app = create_app(‘development’) To: app = create_app(‘production’) </li>
            <li> pip freeze requirements.txt </li>
            <li> Push to App Heroku: git push heroku master </li>
            <li> Deploy Database: heroku run python3 manage.py db upgrade </li>
          </ul>
          </p>
        </p>
        <h3> Future Development </h3>
        <p> As the business grows, the number of requests is expected to increase on the server. To handle an increased number of requests, the application would need to use another API as the one applied here has a limit on the number of responses and requests it can provide and receive per unit time. The future applied API also needs to update the exchange rates instantly as in the exchange market rather than the 60 minute rate provided in this application. </p>
        <h3> Technologies and Frameworks used: </h3>
        <p>
          <ul>
            <li> HTML5 </li>
            <li> CSS3 </li>
            <li> Python3 </li>
            <li> PostgreSQL </li>
            <li> Git </li>
            <li> Bootstrap </li>
            <li> Flask </li>
            <li> Heroku </li>
          </ul>
        </p>
      </p>,
      links: [
        {
          title: "Live Heroku Link",
          description:
            <a href = "https://currency-exchange-application.herokuapp.com/" target = "_blank" rel = "noopener noreferrer">
              <img src= {CEgif} alt="Currency Exchange GIF" />
            </a>
        },
        {
          title: "YouTube Demo",
          description: 
          <div className="youtube">
            <ReactPlayer
              url="https://youtu.be/pzUS_yKeVxI"
            />
          </div>,
        },
        {
          title: "Github Repository Link",
          description:
          <a href = "https://github.com/georgeKaizen/currency-exchange-app" target = "_blank" rel = "noopener noreferrer">
            <img src= {gitrepo} alt="Github Icon" />
          </a>
        },
      ],
    },
    {
        title: "Music Application",
        mainImg: MA,
        secondaryImg: MA2,
        url: "/projects/music-application",
        expertiseAreas: ["api-developer"],
        technologies: ["React", "JavaScript", "Music API"],
        role: "Frontend Developer",
        detailDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, totam?",
        links: [
          {
            title: "Live Link",
            description:
              "link comes here",
          },
          {
            title: "Youtube Demo",
            description:
              "youtube link comes here",
          },
          {
            title: "Repository Link",
            description:
              "github link comes here",
          },
        ],
        
      },
      {
        title: "Douglas Fir",
        mainImg: DF,
        secondaryImg: DF2,
        url: "/projects/douglas-fir",
        expertiseAreas: ["api-developer", "qa-engineer"],
        technologies: ["Python", "Flask", "Testing"],
        role: "Developer & QA Engineer",
        detailDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, totam?",
        links: [
          {
            title: "Live Link",
            description:
              "link comes here",
          },
          {
            title: "Youtube Demo",
            description:
              "youtube link comes here",
          },
          {
            title: "Repository Link",
            description:
              "github link comes here",
          },
        ],
      },
  ];
};
