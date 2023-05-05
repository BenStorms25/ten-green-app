# Getting Started with the 10Green Site

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is built using the React JavaScript framework. Documentation for learning react.js can be found [here](https://react.dev/learn).

### Helpful extensions to have installed:

Prettier - install through VSCode, then go to File -> Preferences -> Format On Save, and check the box to format with prettier every time the file is saved.

ES7 React snippets - install through VSCode, allows you to create basic react components with ease.

React Developer Tools - install via chrome extensions. Just google "react developer tools", and install to your broswer. This will help immensely when debugging the react app.

## Installation

In order to work on the site, you must have a couple things downloaded. First, you'll most likely need an IDE. Visual Studio Code is great for this, as it has many of the extensions mentioned previously available for download within its extensions tab.

Once you have a suitable IDE or similar development kit, you will want to install **Node.js** ([Found Here](https://nodejs.org/en/download)). Node.js provides the Node Package Manager (npm), which is responsible for the building and running of the application using the commands found in the 'Available Scripts' section of this page.

After installing Node.js, you can verify the version of node on your machine by running **'node -v'**

Once you have Node.js downloaded onto your machine and you have cloned the repository, in your terminal, run **'npm install'**. This command will install all of the necessary dependencies defined in the package.json file in the root of the repository. After necessary packages are installed, you should be up and running with the application, and can run **'npm start'** to view the site in your browser.

## Architecture

### React Components

Since 10Green is built using React, the elements of the site are grouped into nested 'components' that are rendered to the page starting from the <App /> component (App.js in the root directory). This project is exclusively built using react functional components, and mostly follow the structure of: import statements at the top, functional component definition (e.g function Pollutants() {} ), javascript logic for the component at the beginning of the functional component, including state variables, functions, and hooks, and then finally a 'return' statement from the functional component, which will return an HTML component embedded with the logic within the component.

A good example of a react component that features this format is CustomNav.js, shown below:

```
import React from "react";
import tenGreenLogo from "../images/10Green-Logo-Black-(1).png";
import umaineLogo from "../images/UMaine_fullcrest_logo4c_reverse.png";
import climateChangeLogo from "../images/climateChangeWhite.png";
import { HashLink } from "react-router-hash-link";
import "./styles/CustomNav.css";

function CustomNav() {
  // collapse nav bar links after certain screen width
  function collapseNav() {
    let navbarLinks = document.getElementsByClassName("navbar-links")[0];
    navbarLinks.classList.toggle("active");
  }

  return (
    <nav className="navbar" id="navID">
      <div className="mobile-header">
        <HashLink to="/">
          <img src={tenGreenLogo} alt="" className="navbar-logo"></img>
        </HashLink>
        <img className="mobile-logo" alt="" src={climateChangeLogo}></img>
        <img className="mobile-logo" alt="" src={umaineLogo}></img>
      </div>

      <a href className="toggle-button" onClick={collapseNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <HashLink to="/#interactive-map">Score Map</HashLink>
          </li>
          <li>
            <HashLink to="/pollutants-and-standards">
              Pollutants & Standards
            </HashLink>
          </li>
          <li>
            <HashLink to="/aq-forecast">AQ Forecast</HashLink>
          </li>
          <li>
            <HashLink to="/about">About</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CustomNav;
```

### Folder Structure

All of the react components as well as their styling files are located in the 'src' folder. Inside src, there is a 'components' folder and a 'pages' folder which house all of the react components for the site. The difference between the two is that the 'pages' folder holds the root components for each page on our site. Also inside of src, are an 'images' folder, and a 'content' folder. 'images' as you might expect, holds all of the images for the site. 'content' holds json data, such as the file that maps ZIP codes to counties.

### Technical Design

The majority of the technical aspects of the application involve the interactive map featured on the homepage. The map is an svg element that utilizes the javascript d3 library to visualize pollutant data across the U.S., using counties to display individual data points.

To achieve this, json data used to populate the map is pulled from an online location using the axios http request library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
