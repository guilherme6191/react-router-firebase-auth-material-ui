# Auth with React Router V4 and Firebase V3
This is an example repo for authenticating with Firebase and React Router using Material-UI.

*Using React 16.1.1, React Router 4, and Firebase 4.6.0*

CRA was used to setup this project so you might wanna go to [CRA's docs](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) to check how to setup other tools or just change configuration.

### [Live Demo](https://guilherme6191.github.io/react-router-firebase-auth-material-ui/#/)

#### Features:
* Protected Routes with React Router
* Register new users with Firebase
* Add new users to ```/users``` in your Firebase Firestore database
* Login/Logout Functionality
* Material UI
* Bootstrap v4 for some utilities via CDN ** should be included via yarn/npm or removed

#### Instructions:
* Swap out the firebase config in ```config/constants``` with your own
* ```npm install```
* ```npm start```
* Visit ```localhost:3000```

#### Others:
It's basically [react-router-firebase-auth](https://github.com/tylermcginnis/react-router-firebase-auth) with [Material-UI](https://github.com/callemall/material-ui) and [Firebase/Firestore](https://firebase.google.com/products/firestore/)
