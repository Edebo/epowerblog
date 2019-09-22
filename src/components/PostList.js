import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'
import {loadPosts} from '../action'
import Loader from './Loader';
import PostItem from './PostItem';
class PostList extends Component{

  
    componentDidMount(){
          const page = this.props.page
          console.log(page)
            this.props.loadPosts(page)
            console.log(this.props.currentPage)

    }

    redirect = (newPage)=>{
        if(newPage>this.props.currentPage){
            
        }
        else{
            return <Redirect to={`/posts/prev/page/${newPage}`}/>
        }
    }

    render(){
      
        return(
            <div className="postlist container-fluid">
               {this.props.loading ? <Loader/>:<div className='row'>
                     
                    {this.props.posts.map(post=>{

                            return <PostItem key={post.id} post={post}/>
                  })}
                      
               </div>}
               <div className="row offset-md-3 my-4">
                   <button className='btn col-md-3 mx-4 my-3 prev' disable={this.currentPage<=1}><Link to={`/posts/prev/page/${this.props.currentPage-1}`} className="link">Previous</Link></button>
                  <button className="btn col-md-3 mx-4 my-3 next"><Link to={`/posts/next/page/${this.props.currentPage + 1}`} className="link">Next</Link></button>
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
  // let page
  // console.log(ownProps.match)
  //   if(ownProps.match===undefined){
  //     page = ownProps.match.params.page
  //   } 
  //   else{
  //     page = 1
  //   }
    // console.log(page)
    const {posts,currentPage,error,isFetching} = state.postReducer
    return {
       
        posts,
        currentPage,
        error,
        loading:isFetching
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)
