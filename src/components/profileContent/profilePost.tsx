import React from 'react';
import './style.css'

interface PostCardProps {
  image: string;
  commentsContent: {
    user: string;
    content: string;
  }[];
}

const PostCard: React.FC<PostCardProps> = ({ image }) => {
  return (
    <div className="photo">
      <img src={image} alt="" />
    </div>
  );
};

export default PostCard;
