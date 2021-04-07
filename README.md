# York Press Tech Take Home Test

```
TIMEBOX:    3 hours max
LANGUAGES:  Javascript or Typescript
FRAMEWORKS: React and any libraries you want
TESTS:      nice to have, but not mandatory
```

Hello! 👋 It's likely that if you're look at this, you're in the process of interviewing to become a developer at York Press. If so, congratulations! :tada:
We hope you enjoy this take home task. It's designed so we can get a feel for how you work. We want to see how you problem solve and write code a specification.

The purpose of this is **not** to be a test with a pass or fail. It is simple meant to be a demonstration of your skills and abilities. We are looking for clean, simple code - nothing complex.

## The Brief

You have been charged with creating an app for teachers to create homework. The teacher needs to assign the homework to the students and particular resources for their study. Please make sure your application fulfills the criteria found [here](acceptance-criteria.md). Please style the application according to the images found under the acceptance criteria. Not all pages have designs, so just use the images in there for the look and feel. Feel free to use styling libraries (tailwind, bootstrap, etc) for quickness, but we **recommend** you do your own styling as the projects you will be working on is all custom styling.

If you have time, feel free to write tests (using jest or react-testing-library) to ensure your application is correct.



When you have finished, please submit a pull request against this repository.

In this take home exercise, you will use the following skills
* Calling API's and parsing responses
* CSS Styling
* Stateful application design
* Building an application according to acceptance criteria
## Setup

The API is available under the `/backend` folder. It is an express server that returns some static data.
- To get the list of students you can request `http://localhost:3000/students`
- To get the list of resources you can request `http://localhost:3000/resources`

To run the server run the following commands
```bash
cd backend
npm install
npm start
```

In a new terminal, start the frontend by running the following:
```bash
cd frontend
npm install
npm start
```
