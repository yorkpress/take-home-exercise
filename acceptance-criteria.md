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

### Look and feel
![image](https://user-images.githubusercontent.com/5136808/113701843-94dff000-96d0-11eb-8dde-0cb1772859a9.png)

