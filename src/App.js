import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // can use javascript before the return 
  // const title='Welcome to the new blog';
  // const likes=50;
  // // numbers, arrays and string can use {} format, booleans and objects cannot
  // const link="https://www.google.com";
  // App is the root of tree, treat components as class in java
  // After react is loaded into html, react will intercept all 
  // routing requests to other pages and load the requested page content
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* navbar is not part of route as it exist in all other pages */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              {/* id is a route parameter that can be changed */}
              <BlogDetails/>
            </Route>
            {/* this is to catch any invalid routes, must be at the bottom so that it does not interfere with valid routes */}
            <Route path="*">
              <NotFound/>
            </Route>

            {/* Switch ensures only one route exist on the webpage at a time, and see which path matches  */}
          </Switch>
          
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* jsx will convert whatever content inside {} to string */}
        {/* can also write javascript inside the {} */}

          {/* <p>{10}</p>
          <p>{'hello, ninjas'}</p>
          <p> { [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10}</p>

          <a href={link}>Google Site</a> */} 
      </div>
      </div>
    </Router>
  );
}
// must always return an app

// need to export app for other files to use
export default App;
