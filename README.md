# FUTURE NOW!

## We Take Showers (Team 24) Final Project

### What is this app?

<!--Name/Title, Main Purpose, Features, Screenshots, Videos -->

FUTURE NOW! is an app created for entertainment purposes, allowing users a quick and fun way to get a read on their future. Our application has two main components to it that users can use to tell their future: 8 ball and tarot card readings.

### How do I use this app?
- ~~App is live here!: https://cse110-sp23-group24-final-project.vercel.app/~~ **This link is no longer working after school ends in 2023/06**
- In root directory, run `npm i`. Make sure everything installed properly.
- Then run `npm run dev`. 

### Documentation
https://cse110-sp23-group24.github.io/cse110-sp23-group24-Final-Project/specs/docs


### Possible Features

-   [ ] Change history to be what your past readings were
-   [ ] Have it read out the tarot readings in a voice


### How was this app built?

 <!-- How Well Built, including quality indicators, badges, coverage, etc.
  Quality Indicators tools: www.codefactor.io
  Talk about how this app was built -->
- While we were going to initally use Electron to create a desktop app, the Professor suggested that we should go for a mobile-first approach as most users will be engaging with our content via their phone. Thus, we instead decided to build a progressive web application with vite. It allows us to create a web application that scales perfectly between phone and laptop and provide support for both. 

-   While we were going to initally use Electron to create a desktop app, the Professor suggested that we should go for a mobile-first approach as most users will be engaging with our content via their phone. Thus, we instead went to go with vite. It allows us to create a web application that scales perfectly between phone and laptop.

### Guidelines for merging/pushing

-   Make Issue for every new feature/page
-   Make a branch for that specific issue/page
-   Push to that Branch
-   Write THOUGHTFUL commit messages

### Coding Guidelines

-   Comment every function
-   Use proper styling
-   4 spaces for tabs
-   only have a new line between functions
-   use prettier

### Folders + Repository Organization
  - .github/workflows: yml files for eslint and jsdoc
  - admin 
    - cipipeline: cypress files, node_modules, test files for code climate and eslint, ci/cd pipeline essentials
    - meetings: meeting notes
  - node_modules
  - pages (html and js and css files)
    - 8ball: 8ball features
    - about-us: about us page
    - components: backend for card choosing
    - constants: card data
    - instructions: instructions page
    - select-cards: select cards page
    - result-page: result display page
  - public: public images and fonts
  - specs: pitch 
  - index.js and index.html: front page
  - package.json: dependencies

### App Creators

Hi! We are undergraduate students currently attending University of California, San Diego. We are enrolled in CSE 110, a class about software engineering and this is our final project. We came up with the idea of tarot cards and 8 ball because we are passionate about using our software engineering skills to create forms of entertainment and add some fun to fortune telling in a creative way.

Authors and Contact Info:

-   Benjamin Liang (bzliang@ucsd.edu)
-   Bingyang Yu (b9yu@ucsd.edu)
-   Haoyang Guo (h1guo@ucsd.edu)
-   Kartik Gugnani (kgugnani@ucsd.edu)
-   Linda Wu (lwwu@ucsd.edu)
-   Maanasa Prasad (mmprasad@ucsd.edu)
-   Nathan Huey (nhuey@ucsd.edu)
-   Nick Ho (niho@ucsd.edu)
-   Sholehani Hafezi (shafezi@ucsd.edu)
-   Sumit Shetye (sshetye@ucsd.edu)

TA:

-   Grishma Gurbani
