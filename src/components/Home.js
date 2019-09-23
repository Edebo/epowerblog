import React from 'react'
import Header from './Header';
import _ from 'lodash'
import Footer from './Footer';
import PostList from './PostList';

const Home = (props) => {

 const getPage = ()=>{
   
    if(_.isEmpty(props.match.params)){
      return 1
    }
    else{
      return props.match.params
    }
  }
  return (
    <div>
        <Header/>
        <PostList page={getPage()}/>
        <Footer/>
    </div>
  )
}

export default Home

