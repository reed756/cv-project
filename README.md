# React 

A web application which shows a preview of a what a CV would look like based on what the user puts in. Features create-react-app as well as Hooks to achieve this. 

## Lessons Learned

My first real React project after following a tutuorial on creating a todo list as well as a meme generator app. Iinitially used class based components in the first version of this, then decided to go away and learn Hooks for the later versions.

First experience of using Hooks, can definitely see why people are doing away with class based components - removes the hassle of binding to this and being able to pass the setState method as props makes updating global state a lot easier.

## Potential Future Features

- Editing components to allow the user to put in more than one Education or Work section.

- Adding features that allow the user to actually print off or download the CV as a PDF. 

## Deployment

Deployed with [github pages](https://pages.github.com/).

## Get started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/reed756/cv-project

# Go into the repository
$ cd cv-project

# Remove current origin repository
$ git remote remove origin
```
Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```
You should now have a development server running in your default browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.