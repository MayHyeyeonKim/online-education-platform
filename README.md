<h1>Online Education Platform </h1>

![image](https://github.com/MayHyeyeonKim/online-education-platform/blob/main/Online%20Edu%20Platform.png)

## Project Overview

This project aims to create an Online Education Platform that offers a wide range of educational content and course materials for users.<br>
The platform provides functionalities for user registration and login, allowing users to access personalized content.

Development Methodology: Feature-Driven Development (FDD)

## Workflow, Implementation pattern

**Workflow**

**Initial Planning:** Define the overall scope of the project and identify the main features required, such as user authentication, course boards, and CRUD operations. <br>
<br>
Create a detailed list of features, breaking down the main functionalities into smaller, manageable tasks.

**The feature list includes:**

- User authentication (login and registration) <br>
- Course board creation, listing, updating, deletion

**Implementation**

**User Authentication** <br>
**Create a form to add new course boards.**
Implement CRUD operations for course boards, including listing, updating, and deleting.
Test and debug the course board functionalities.

**Integration and Testing:**
Integrate the completed features into the main application. Conduct thorough testing to identify and fix any bugs or issues.

**User Feedback and Improvements:** Gather user feedback and make necessary improvements based on user suggestions or usability testing results.

**Deployment:** Deploy the Online Education Platform to a hosting service or cloud platform, making it accessible to users.

## Project Sturucture

<pre>

project/
├── server/
│ ├── models/
│ │ ├── user.js
│ │ └── ...
│ ├── public/
│ │ ├── images/
│ │ └── ...
│ ├── templates/
│ │ └── ...
│ ├── credentials.js
│ └── server.js
│
├── client/
│ ├── public/
│ │ ├── images/
│ │ │ ├── logo192.png
│ │ │ ├── logo512.png
│ │ │ ├── manifest.json
│ │ │ └── robots.txt
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── forms/
│ │ ├── hooks/
│ │ ├── .env
│ │ ├── app.css
│ │ ├── BasicTabs.js
│ │ ├── favicon.ico
│ │ ├── index.css
│ │ ├── index.js
│ │ ├── login.js
│ │ └── register.js
│ ├── .gitignore
│ └── package.json
│
├── .gitignore
├── package.json
├── README.md
└── .env

</pre>

## ERD

## Tech Stack

Frontend: React, html, css, scss

Backend: Node.js, express

DataBase: MongoDB

DevOps: AWS,

etc: github

## Final Remarks

The Feature-Driven Development (FDD) approach was followed throughout this project, focusing on developing and delivering features incrementally. Starting with user authentication, the login and registration functionalities were implemented and deployed. Subsequently, the course board features were developed, allowing users to create, manage, and interact with course boards. By adopting FDD, the project was able to evolve in a structured and iterative manner, delivering value to users with each new feature release.

## Build Setup

```bash
# install dependencies
$ npm install

# build for production and launch server
$ npm start
```
