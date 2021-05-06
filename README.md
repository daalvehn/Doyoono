# Doyoono, this incredible Quiz App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

This project use the following additional modules :
* use-screenshot-hook
* use-sound
* canvas-confetti
* axios

### You may have trouble with one module.
If this happens, please run the following command :
### `npm install --force`

## Component hierarchy
All the App starts with MainContainer.
Then the 3 main pages of our App are displayed, contained in :
* HomepageContainer
  * The user can set the quiz
  * Then press Go to launch it, and lands in Quiz page :
* QuizContainer
  * The user can answer questions
  * At the end, Score page is displayed :
* ScoreContainer
  * Score, difficulty and category are displayed
  * The user can push Retry to restart the Quiz, at Homepage

The Footer component is also in MainContainer, to be displayed in all pages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
