# Flash Card App
An application that tests users' knowledge on a series of topics, in this case HTML/CSS/JS. The app uses a flash-card structure, tracks stats and through an algorithm serves cards that the user is weak in more often. This is my first React project.

##### Technologies
HTML5 | CSS3 | JavaScript | Node.js | Express | React | MongoDB
| JWT | Body-Parser | Mongoose

### Scope
##### What it was designed to do
+ Tests users for knowledge through series of cards, each gives two answers.
+ Correct and false answers are tracked, user is given feedback and through the API, false questionss are served more often.
+ Be a healthy challenge coming out of the bootcamp, a first test to see if I could pick up React and MongoDB.

##### What it wasn't designed to do
- User registration, just a simple single user to test login and authorisation was a good challenge
- Encryption, as there's a single user this was not implemented, focus was more on the algorithm and the front-end.

### Installation Notes
Please feel free to download or clone the repository. Modules are all included in the package.json. MongoDB is used for database and locally installed (no Atlas/cloud). The application also uses Mongoose to connect, please make sure your connection string on line 15 of app.js is correct, then run the scripts on lines 24 and 25 consecutively. This will gerenate a dummy user with pre-filled dummy-stats, before creating the actual questions. The login details are on line 24 of populate.js in the models folder.

---

# Original NYCDA Final Project Spec
There are a lot of resources on coding languages, but not many that allow for repeated testing of your knowledge. It’s not that massive of a problem, however flash cards have been proven to be a useful testing mechanic. The app is aimed at beginning developers and people who generally want to test their skill level.

The app will be free of charge but is relatively low cost as well. Testing technology itself has applications for schools and other organisations and the technology can ideally easily be ported for other organisations as well and monetised.

The product is meant to be a more fun testing mechanic than most other tools which offer sometimes offer one-time quizzes but never test retention. It also isn’t as formal as sitting through a video tutorial for example. The app is meant to track users’ progress and motivate them throughout.

#### General Idea of the App
- Tests users for HTML, CSS, JavaScript knowledge through a series of card
- Each card gives three possible answers but true/false and complete-this cards should be possible as well
- Correct and false answers are tracked and questions with false errors should appear more frequently

### Timeline
- [05-12] [v] Rough draft of spec
- [08-12] [v] Finish Codecademy and part of Treehouse courses on React and Mongo
- [08-12] [v] Revisit spec and determine feasibility of using new tech vs. say Express/PG
- [09-12] [v] Rough design of app implemented
- [14-12] [v] MVP: Functionally working with one user and a hand full of cards

### Broad Design Spec
- Signup and login page with remember and i-forgot options
- A single page which just starts with cards immediately if user is logged in
- A profile page or ideally overlay that paints stats.

#### Technologies
- JavaScript / Node / Express at the Core
- Ideally React to build the app
- Ideally MongoDB to manage data
- If not possible fallback to known technologies should be possible
- Try different code editor: Visual Studio Code

#### Research Needs
- React, Redux, MongoDB
- Algorithm for card selection

#### Table setup
Users
- id, username, password, passphrase, response
- answers storage on profile to be determined, join table might be too big however would allow for easier manipulation of global stats

#### Questions
- id, category, questiontype (y/n, abc, complete), answers
- questions and answers could be stored in a field or saved as a JSON string to be served
- link to users table entirely dependent on how MongoDB would deal with this

#### Algorithm for checking which cards to serve
- Cards are checked for right or wrong
- Either a simple point tracker and something that tracks how many times the question has been answered correctly by the user, and incorrectly. Depending on the ratio ‘false’ cards should come up more often but it shouldn’t be a pure ranking (i.e. user shouldn’t continuously be tested on ‘false’ cards)
