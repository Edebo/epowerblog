import React,{Component} from 'react';
import {connect} from 'react-redux';
import {loadPosts} from '../action'
import PostItem from './PostItem';
class PostList extends Component{


    componentDidMount(){

            this.props.loadPosts(1)
            console.log(this.props.currentPage)

    }
   
    handleClick= (e)=>{

        console.log(e.target)
          if(e.target.value==='Previous'){
              console.log('about to do  previous dispatch')
           this.props.loadPosts(this.props.currentPage - 1)
           console.log(this.props.posts)
          } 
          else if(e.target.value === 'Next'){
            console.log('about to do next dispatch')
              this.props.loadPosts(this.props.currentPage + 1)
              console.log(this.props.posts)
          }
          return
    }
    render(){
      
        return(
            <div className="postlist container">
               <div className='row'>
               {this.props.posts.map(post=>{

                  return <PostItem key={post.id} post={post}/>
                })}
               </div>
               <div className="btn-group my-4">
                   <button className='btn btn-lg mx-4' onClick={this.handleClick}>Previous</button>
                  <button className="btn btn-lg mx-4" onClick={this.handleClick}>Next</button>
                </div>
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
    return {
        posts:state.postReducer.posts,
        currentPage:state.postReducer.currentPage
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
