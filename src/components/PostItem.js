import React from 'react'
import {Card} from 'react-bootstrap';
const PostItem = ({post}) => {
  return (
    
        <Card className="col-md-4 mt-2 mb-1 card h-100 p-0">
          <Card.Img variant="top" src={post.featured_image_thumbnail} />
          <Card.Body className="p-2">
            <Card.Title className="card-title">{post.title.rendered}</Card.Title>
            <Card.Text className="card-text">
              {post.excerpt.rendered}
            </Card.Text>
            
          </Card.Body>
    </Card>
   
  )
}

export default PostItem
