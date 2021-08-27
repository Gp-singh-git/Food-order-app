## Royal Bakery (Food Pick up Ordering)

This is a full-stack website app for a fake take-out Bakery Shop, named "Royal Bakery". 

Why we picked this project:

- Better understanding of functionality and requirements of this project.
- Useful in real world to similar small startups, particularly in food industry.
- App acting as a Customer – Owner medium channel.

Features:

1.  SMS based notifications to both Client and Owner when order is placed and when it will be ready.
2.  Use of Bootstrap for styling responsive pages.
3.  Maintaining selected items for each user, so that on re-login, previous items are still shown in the account.
4.  Showing previous orders to clients and ability to give feedback for each order.
5.  Owner can see all relevant info of orders at one page to decide and update for “ready by” and “pick up” timings.
6.  Secure Login data and cookies, using bcrypt and cookie-session. 

]
## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- Express
- Bootstrap
- Twilio
- ejs
- morgan
- PG 6.x
- Bcrypt
- cookie-session
- Body-parser
