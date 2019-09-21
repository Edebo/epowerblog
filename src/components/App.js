import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/posts/:post_slug" exact component={Post}/>
        <Route path="/posts/next/:page" exact component={Post}/>
        <Route path="/posts/prev/:page" exact component={Post}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
