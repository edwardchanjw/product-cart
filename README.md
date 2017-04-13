
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I have removed the Documentation of the [Create React App], hopefully i will able to use Webpack 2 and Babel for manage the React project as simplicity either conventional by default, or common settings by default.

Like all Create-React-App, running under port 3000 or prompt changed port if port 3000 is used
1. npm install
2. npm start

Already tested with all minimum feature, able to migrate to WebPack 2 Config, with support for more configured feature (which create-react-app contributors would not want user to change without mess their hand in the node_modules etc)
- WebPack HMR, CSS Module, Loader


==About the product-cart
- Unpolished Experiment with React
- Although React-Router 4 is heavily API Change for declarative, however no much documentation about the usage of the Router, thus setup simple example for able to pass two page for redirection in success and failure. Please see src/containers/App.js. 
- Compose Components using ItemsSection.js for List and Card View
- Reuse the CartButton across two or three components (No sure the DetailContainer is refering too)
- Still feel the Redux part of Action and reducer are still unpolished
- Not using any React UI Library, I still prefer to use CSS Framework like BulmaCSS with Pure HTML+CSS to be wrapped under JSX as Components, thus not vendor binding. JSX having HTMLElements which just need to change the class to className and style inlining. (This Demo using Bootstrap v4 CSS only). Note that even all framework just wrap HTML elements like div, img to <Media> etc, we still require to support current browser, as the transpiler still will convert Components to HTML+CSS+ES5 in browser environment. Same go to the say of ES6, but ES6 is new standard. However, JSX is not yet in HTML6+CSS4, and another decade for all the browser not following the design markup.


==TO-DO
- Reuse as many code as possible, if render in WebView/Cordova Web, All components should be able to reuse, or else swap by using React library like material-ui tag vs React-Native Tag (<ScrollView ...props>, <Button ...props /> etc). 
- Router code can be reuse by using MemoryRouter or following link, but require bridging additional require on both native and web https://github.com/Chion82/react-native-web-extended
- Experiement more Data Flow architecture like Reduct, Setup Redux with BrowsingHistory vs using React-Training's library (React Router's Owner and Contributors, previously seem to known as Rackt as org)








