Documentation of API. This repo contains code for backend server based on RESTAPIs with the help of expressjs for handling of routes and creation of server.The Techstack for this project is
- Express.js 
- Prisma (ORM)
- Postgres(database)
- typescript(language)

This api is live at https://coralrestaurant.onrender.com
| HTTP Verb  | API Endpoint  |  Description |  
|---|---|---|
| GET  |  / | Fetches all the restaurants in json format with the address  |
| GET |  /restaurant_detail/:id |  Fetches all details about a specific restaurant id based on the passed id as query params |  
| GET | /reviews/:id  | Fetches all review details for a restaurant id based on id passed as query params  |
| POST | /edit_review | Makes an update operation on db by taking the "reviewId" and "content" to be updated in body of request |
| POST | /post_review | Makes an create operation on db by adding a review with params like "restaurantId", "content" in request body |
| POST | /login | Makes an post request to authenticate user by checking against the data present in db expects params "email" and "params" |


To test login api use - ranjeet123@gmail.com and ranjeet123 
