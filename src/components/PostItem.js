import React from 'react'
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const PostItem = ({post}) => {

  return (
    
        <Card className="col-md-4 mt-2 mb-5 mx-3 card-deck p-0">
          <Link to={`/posts/${post.slug}`} className="link">
            <Card.Img variant="top" src={post.featured_image_thumbnail} />
            <Card.Body className="card-block">
              <Card.Title className="card-title">{post.title.rendered}</Card.Title>
              <Card.Text className="card-text">
                {post.excerpt.rendered}
              </Card.Text>
              
            </Card.Body>
          </Link>
    </Card>
   
  )
}

export default PostItem
