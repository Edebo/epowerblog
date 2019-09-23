import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {loadPosts} from '../action'
import Loader from './Loader';
import PostItem from './PostItem';
class PostList extends Component{

  
    componentDidMount(){
          const page = this.props.page
     
            this.props.loadPosts(page)
            
    }
   
    componentDidUpdate(prevProps) {
        const page = parseInt(this.props.page.page)
        if (this.props.page !== prevProps.page) {
            
          this.props.loadPosts(page)
          
        }
      }

  
    render(){
       const disable = this.props.currentPage === 1 ? true: false
      const next = this.props.currentPage + 1
      const prev = this.props.currentPage - 1
        return(
            <div className="postlist container-fluid">
               {this.props.loading ? <Loader/>:<div className='row'>
                     
                    {this.props.posts.map(post=>{

                            return <PostItem key={post.id} post={post}/>
                  })}
                      
               </div>}
               <div className="row offset-md-3 my-4">
                   <button className='btn col-md-3 mx-4 my-3 prev' disabled={disable}><Link to={`/posts/prev/page/${prev}`} className="link">Previous</Link></button>
                  <button className="btn col-md-3 mx-4 my-3 next"><Link to={`/posts/next/page/${next}`} className="link">Next</Link></button>
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
