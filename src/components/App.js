import React from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>       
        <Route path="/posts/next/page/:page" exact component={Home}/>
        <Route path="/posts/prev/page/:page" exact component={Home}/>
        <Route path="/posts/:post_slug" exact component={Post}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
