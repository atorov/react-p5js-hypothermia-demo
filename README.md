# Diagnosing Hypothermia Symptoms

![alt application screenshot](https://github.com/atorov/react-p5js-hypothermia-demo/blob/master/src/assets/demo/screencast.gif)

## Main goals of the project

This project demonstrates how to combine React (including the latest features such as **hooks and context**), p5.js and Web Workers:

1. Build a single page application (SPA) using the React and p5js libraries. Try to combine the React declarative programming approach and imperative one for direct DOM manipulation. Avoid any collisions, performance issues, and memory leaks. Use the best of the both approaches.

    - Multiple p5 sketches on a same screen;
    - Mount sketches in different points of the DOM tree;
    - Bidirectional communication between the main React app and sketches;
    - Using the latest React features.

2. Use Web Workers to run tasks in background threads. Everything that needs more time and hardware should be executed without interfering the main application performance and the user interface.

3. Hot Module Replacement (HMR): exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

    - Retain application state which is lost during a full reload;
    - Save valuable development time by only updating what's changed.

---

The basic idea is that the p5.js sketch is wrapped in a React component. The data that comes into the sketch is passed on to this component as props. Callbacks are used to return information back from the sketch to the application.

---

Check out the online version [here](http://hypothermia.surge.sh/).

:WARNING:
**This is a demo application. DO NOT use it in real situations to diagnose or treat hypothermia and frostbite!**

---

Another examples, build on the same concept, can be found [here](https://github.com/atorov/react-p5js), [here](https://github.com/atorov/react-hooks-p5js), and [here](https://github.com/atorov/fractal-tree-simulator).

![alt application screenshot](http://hypothermia.surge.sh/demo/screenshot.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:8080](http://localhost:8080) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Then the app is ready to be deployed.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.

## Syntax Highlighting and Displaying Lint Output in the Editor

Тhe most popular editors should be covered and your editor should report the linting warnings.

## Adding a Router and Redux

[React Router](https://reacttraining.com/react-router/) is the most popular option.

[Redux](https://redux.js.org/) is a predictable state container for JavaScript apps.

React Router and Redux can easily be added to the project.

---

[React](https://reactjs.org/) is one of the most popular JavaScript libraries for creating single page applications.

[p5.js](https://p5js.org/) is a JavaScript library with a full set of drawing functionality.

---
