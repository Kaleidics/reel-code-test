# [Reel Code Test](https://eddiechu-reel-codetest.netlify.com/)

This is the repo for the Reel front end code test.

[Deployed live here](https://eddiechu-reel-codetest.netlify.com/)

## Introduction 
For this test, I will be using the design of Reel itself as the inspiration. I think that would be more appropriate than creating a completely new design.



## Technology
The live demo is made with the following tech-stack and methodologies.

- Mobile First
- React/Redux
- CSS3, SASS/SCSS
- [BEM naming convention](https://en.bem.info/methodology/)
- Based on [SASS 7-1 Pattern](https://gist.github.com/rveitch/84cea9650092119527bc)

I will be using React with Redux for this test. I will be writing the styling using SASS with the SCSS syntax. The class naming convention will be based on the Block-element-modifier methodology. The folder structure for the SASS files will be based on the SASS 7-1 pattern and include what is necessary.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What things you need to install the software and how to install them

- [npm](https://www.npmjs.com/get-npm)


### Installing

1. Clone or fork the repo

```
git clone https://github.com/Kaleidics/reel-code-test.git
```

2. Run npm install inside project root directory

```
npm install
```
3. Run npm start to start the project on localhost:3000

```
npm start
```
4. Go to localhost:3000 in your browser

## Development Process

1. Getting Started 7/15/19
- If I understand the prompt correctly, I will be using a seed JSON file to feed in data would usually come from a backend.
- I will base the design of the page on the "Want list" section from Reel. Other than the required tasks of the test, some of the UI components may not be functional.
- First thing I am going to do is grab the main colors and fonts using the Chrome Dev Tools from Reel
- Gotham is not available. I will be using Montserrat as it is the closest free font.
- I am going to replicate the header,navbar, and footer first.

2. Building the Progress UI 7/18/19
- Looked to [Dribbble.com]("https://dribbble.com/shots/6451667-SneakersCrush-App-Redesign") and found a design to use as inspiration.
- Using a [HeroPattern SVG](https://www.heropatterns.com/) for the progress bar fill instead of plain color.

3. Finishing Up with the Search and Filtering functionality 7/20/2019
- Most of the functional requirements for the code test are there: sort table based on the object fields, searching to find a specific item in the array by name
- I did a mobile first design as required by the assignment. I started in the iPhone 5/SE viewport and just adjusted the container's width as we size up to desktop.
- The filtering by object fields is with the `sort()` written in ES6 syntax. I referenced [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) for this implementation.
- The search functionality uses the `filter()` and `includes()` methods to implement the search. It basically takes an input then checks if the array contains the input string. I had done something similar before in an app.
- I tried to use redux as much as possible, but I had very sparingly use cases for it. There were not every opportunities or needs to use a global state. The actions, reducers, and stores are there and they work. I used redux management to store the reels, which come from a seed file, which is kind of redundant and roundabout. I also used redux to store the search input string.

## Conclusion
I wish I had more time to spend on this exercise since I know there is a heavy focus on styling. But unfortunately, I did not have as much time as I wanted this week. I received the test on Saturday evening and only noticed the email on Sunday. But I want to adhere to the one week deadline. Just to provide some perspective, for this exercise, I spent maybe 4-5 hours over the course of three days.

I'll give explanation of my UX/UI implementation. I'm assuming this is some sort of shopping cart, where we DON'T want users to pause their reels.
So I made the `Pause` button have a muted color like grey, to try to hide it and a warning red hover state. Then when a user does pause a `reel`, it creates a colorful overlay on the pause item. I did because we want to draw a user's attention to a `paused reel` as opposed to an active reel, which we do not want the user to change the status of. Hovering the `activate` state of the button doesn't trigger a hover state because we don't want to trigger a warning. Another feature to add would possibly a `Are you sure you want to pause? Modal`, when a user clicks pause. This is to prompt a second chance for the reel not to be paused.

Some limitations:
- The first sort of array by the `name` field, will not re-render a specific instance of a `reel` if its position in the array did not change.
- I implemented arrows which flip when clicked to indicate ascending or descending sorting order, but if you mix and match different sorting fields `name`, `status`, the arrows dont reflect the correct ascending or descending order
- Possibly overusing ternary operations to control styles of components depending on state: `button`, `overlay` mainly.

