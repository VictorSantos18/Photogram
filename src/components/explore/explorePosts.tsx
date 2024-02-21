import React from 'react'
import { Heart, MessageCircleMore } from 'lucide-react';

interface ExplorePostsData {
  image: string;
  likes: number;
  comments: number;
  commentsContent: string;
}


const ExplorePosts: React.FC<ExplorePostsData> = ({ image, likes, comments }) => {
  return (
    <div className="photo">
      <img src={image} alt="" />
      <div className='photo-info'>
        <div>
          <Heart />
          <p>{likes}</p>
        </div>
        <div>
          <MessageCircleMore />
          <p>{comments}</p>
        </div>
      </div>
    </div>
  )
}

export default ExplorePosts