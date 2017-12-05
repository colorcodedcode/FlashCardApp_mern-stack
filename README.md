# Final Project Spec
## Flash Card App

There are a lot of resources on coding languages, but not many that allow for repeated testing of your knowledge. It’s not that massive of a problem, however flash cards have been proven to be a useful testing mechanic. The app is aimed at beginning developers and people who generally want to test their skill level.

The app will be free of charge but is relatively low cost as well. Testing technology itself has applications for schools and other organisations and the technology can ideally easily be ported for other organisations as well and monetised.

The product is meant to be a more fun testing mechanic than most other tools which offer sometimes offer one-time quizzes but never test retention. It also isn’t as formal as sitting through a video tutorial for example. The app is meant to track users’ progress and motivate them throughout.

#### General Idea of the App
- Tests users for HTML, CSS, JavaScript knowledge through a series of card
- Each card gives three possible answers but true/false and complete-this cards should be possible as well
- Correct and false answers are tracked and questions with false errors should appear more frequently

### Timeline
- [05-12] Rough draft of spec
- [08-12] Finish Codecademy and part of Treehouse courses on React and Mongo
- [08-12] Revisit spec and determine feasibility of using new tech vs. say Express/PG
- [09-12] Rough design of app implemented
- [14-12] MVP: Functionally working with one user and a hand full of cards

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
