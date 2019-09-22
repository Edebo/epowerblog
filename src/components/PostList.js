import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {loadPosts} from '../action'
import Loader from './Loader';
import PostItem from './PostItem';
class PostList extends Component{


    componentDidMount(){

            this.props.loadPosts(1)
            console.log(this.props.currentPage)

    }

    redirect = (newPage)=>{
        if(newPage>this.props.currentPage){
            
        }
        else{
            return <Redirect to={`/posts/prev/page/${newPage}`}/>
        }
    }
   
    handleClick= (e)=>{
        let newPage
        console.log(e.target)
          if(e.target.innerHTML==='Previous'){
              console.log('about to do  previous dispatch')
              newPage = this.props.currentPage - 1
              return <Redirect to={`/posts/prev/page/${newPage}`}/>
          
          } 
          else if(e.target.innerHTML === 'Next'){
            console.log('about to do next dispatch')
            newPage = this.props.currentPage - 1
            return <Redirect to={`/posts/next/page/${newPage}`}/>
          }
          return ''
    }
    render(){
      
        return(
            <div className="postlist container">
               {this.props.loading ? <Loader/>:<div className='row'>
               {this.props.posts.map(post=>{

                  return <PostItem key={post.id} post={post}/>
                })}
               </div>}
               <div className="btn-group my-4">
                   <button className='btn mx-4 prev' onClick={this.handleClick}>Previous</button>
                  <button className="btn mx-4 next" onClick={this.handleClick}>Next</button>
                </div>
                {this.handleClick}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
      loadPosts:(page)=> dispatch(loadPosts(page))
    }
}    


function mapStateToProps(state) {
    console.log(state)
    const {posts,currentPage,error,isFetching} = state.postReducer
    return {
        posts,
        currentPage,
        error,
        loading:isFetching
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
