# take-home-exercise

```
TIMEBOX:    3 hours max
LANGUAGES:  Javascript or Typescript
FRAMEWORKS: React and any libraries you want
TESTS:      nice to have, but not mandatory
DOCS:       nice to have, but not mandatory
```

## The brief

You have been charged with creating an app for teachers to create homework. The teacher needs to assign the homework to the students and particular resources for their study.

In this take home exercise, you will use the following skills
* Calling API's and parsing responses
* CSS Styling
* Stateful application design
* Building an application according to acceptance criteria

The styling doesn't have to be spot on. But, we do want to see how good you are at styling your own applications. Feel free to use styling libraries (tailwind, bootstrap, etc) for quickness, but we **recommend** you do your own styling as the projects you will be working on is all custom styling.

## User stories
Please make sure your application fulfills the following acceptance criteria.

## Create homework
```
As a teacher
I want to be able to create a piece of homework
So I can assess my students

Given I am on the dashboard page
When I click on "Create homework"
Then I am taken to the Create Homework page

Given I am on the Create Homework page
When I look at the page
Then I see an input field for the title of the homework
AND an "Add Questions & Answers" area below

Given I am on the Create Homework page
When I look at the "Add Questions & Answers" area
Then I see an input field for the question with some placeholder text: "Enter question text"
AND a dropdown for question types
AND a disabled "Confirm" button at the bottom of the page

Given I am creating a question
When I click on the question type dropdown
Then I see "Multiple Choice" as an option

Given I am creating a question
When I select Multiple Choice as the option in the question type dropdown
Then I see 2 text input fields appear below
AND 2 "Correct" checkboxes next to each input field
AND an "Add answer" button below the input fields

Given I am creating a Multiple Choice question
When I look at the input fields
Then I see placeholder text "Enter answer text"

Given I am creating a Multiple Choice question
When I click on the "Add answer" button
Then a new row of 1 input and one "Correct?" checkbox is created

Given I have not entered any text in any of the answer inputs
When I look at the Confirm button
Then I see it is disabled

Given I have entered text in all answer inputs but haven't checked any "Correct?" checkboxes
When I look at the Confirm button
Then I see it is disabled

Given I have entered text in all answer inputs but have checked all "Correct?" checkboxes
When I look at the Confirm button
Then I see it is disabled

Given I have entered text in all answer inputs and have checked at least 1 "Correct?" checkbox
When I look at the Confirm button
Then I see it is Enabled

Given I have entered all relevant info
When I click on the Confirm button
Then the homework is created
AND I am taken back to the dashboard page
```

![image](https://user-images.githubusercontent.com/5136808/113701843-94dff000-96d0-11eb-8dde-0cb1772859a9.png)

## Assign homework to classroom
```
As a teacher
I want to be able to assign homework to my students
So that I can assess how they are learning

Given I am on the dashboard page
When I click on "Assign homework"
Then I am taken to the classroom page

Given I am on the classroom page
When I look at the page
Then I see the name of the classroom
AND a list of all students in that classroom
AND an "assign homework" button

Given I am on the classroom page
When I click on the "Assign homework" button
Then a modal opens showing the available homework

Given I have selected the homework to assign
When I look below the name of the homework
Then I see a "Assign" button

Given I have selected the homework to assign
When I clicked "Assign" button
Then I am taken back to the classroom page
AND I see the current homework assigned below the classroom name
```

## Assign book to specific student
```
As a teacher
I want to be able to assign a book to a specific student
So I can help them with their specific learning needs

Given I am on classroom page
When I click on a specific student
Then I am taken to a student page

Given I am on a student page
When I look at the page
Then I see the students name, profile picture
AND an "Assign book" button

Given I am on the student page
When I click on the "Assign book" button
Then a modal opens with a list of available books

Given I have selected the book to assign
When I look at the bottom of the modal
Then I see an "Assign" button

Given I have selected the book to assign
When I click the "Assign" button
Then I am taken back to the student page
AND I see the current book assigned below their name
```
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
