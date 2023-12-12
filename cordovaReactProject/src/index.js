
import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
const renderReactDom = () => {
  root.render(<App />);
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    root.render(<App />);
  }, false);
} else {
  renderReactDom();
}





// the above code may not work. The original code looked like this: (default react app code)

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// const renderReactDom = () => {
//   ReactDOM.render(<App />, document.getElementById('root'));
// };

// if (window.cordova) {
//   document.addEventListener('deviceready', () => {
//     renderReactDom();
//   }, false);
// } else {
//   renderReactDom();
// }


// https://medium.com/@pshubham/using-react-with-cordova-f235de698cc3



// used the code below to help replace the code above

// import * as ReactDOM from 'react-dom';
// import App from 'App';

// const container = document.getElementById('app');

// // Initial render.
// ReactDOM.render(<App tab="home" />, container);

// // During an update, React would access
// // the root of the DOM element.
// ReactDOM.render(<App tab="profile" />, container);
// In the New Root API, the caller creates a root and then calls render on it:

// import * as ReactDOMClient from 'react-dom/client';
// import App from 'App';

// const container = document.getElementById('app');

// // Create a root.
// const root = ReactDOMClient.createRoot(container);

// // Initial render: Render an element to the root.
// root.render(<App tab="home" />);

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);