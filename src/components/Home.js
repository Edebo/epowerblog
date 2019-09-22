import React from 'react'
import Header from './Header';
import Footer from './Footer';
import PostList from './PostList';

const Home = (props) => {

 const getPage = ()=>{
    if(props.match===undefined){
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

