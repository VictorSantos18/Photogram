import React from 'react'

interface ExplorePostsData {
  image: string;
  commentsContent: { user: string; content: string }[]; 
}


const ExplorePosts: React.FC<ExplorePostsData> = ({ image }) => {
  return (
    <div className="photo">
      <img src={image} alt="" />
    </div>
  )
}

export default ExplorePosts