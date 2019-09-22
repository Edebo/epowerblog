import React ,{Component} from 'react'
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Header from './Header';
import Footer from './Footer';

class Post extends Component{

  render(){
    const post = this.props.post
    return (
      <div>
          <Header title={post.title.rendered} date={post.date}/>
            <div className="container w-80 mx-auto my-5">
              <div className="img-cont my-3">
                <img alt={post.slug} src={post.featured_image} className="img-responsive"/>
              </div>
            
                <div >
                 {
                   ReactHtmlParser(post.content.rendered)
                   }
                </div>

            </div>
          <Footer post={true}/>
      </div>
    )
  }

}

function mapStateToProps(state,ownProps) {
  const paramSlug =ownProps.match.params.post_slug
  console.log(state)
  return {
      post: state.postReducer.posts.find(post=> post.slug === paramSlug)
  }
}

export default connect(mapStateToProps)(Post)

