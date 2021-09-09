# BookAppUpdating

# MERN: Book Search Engine


Most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

Took starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It was already set up to allow users to save book searches to the back end. 

Did the following:

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Created an Apollo Provider so that requests can communicate with an Apollo Server.



## User Story

```md
AS AN avid reader
I search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md


    When user enters site, they will have the option to search for books, Login/Signup and an input field to search for books and a submit button.
    If the user wants to save a book, they will need to log in or sign up, then are presented with an input field to search for books and a submit button.
    The user can add books to be saved; featuring a book’s title, author, description, image, and a link to that book on the Google Books site.
    The user can go to saved books and see all books that they have saved.
    The user can also remove books from the saved list, click on the Remove button on a book then that book is deleted from my saved books list.
    Clicking on the Login/Signup menu option causes a modal appears on the screen with a toggle between the option to log in or sign up



Assistance recieved From Malcom Mason and Pratik Patel


* Satisfies all of the preceding  criteria plus the following:

	* Has an Apollo Server that uses GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

	* Use an Apollo Server and apply it to the Express.js server as middleware.

	* Include schema settings for resolvers and typeDefs as outlined in the homework instructions.

	* Modify the existing authentication middleware to work in the context of a GraphQL API.

	* Use an Apollo Provider so that the application can communicate with the Apollo Server.

	* Application must be deployed to Heroku.



---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
