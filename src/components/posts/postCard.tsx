import React from "react";
import { Heart, MessageCircle, Send, Flag } from 'lucide-react'
import './style.css'

interface PostCardProps {
  profile_img: string;
  profile_name: string;
  profile_nationality: string;
  post_image: string;
  post_likes: number,
  post_text: string
}

const PostCard: React.FC<PostCardProps> = ({
  profile_img,
  profile_name,
  profile_nationality,
  post_image,
  post_likes,
  post_text,
}) => {
  return (
    <div>
      <div className="post-card">
        <div className="profile-info">
          <img src={profile_img} alt="Profile" className="profile-image" />
          <div className="profile-text">
            <h2>{profile_name}</h2>
            <p>{profile_nationality}</p>
          </div>
        </div>
        <img src={post_image} alt="Post" className="post-image" />
        <div className="post-interact">
          <div className="main">
            <Heart className="icon" />
            <MessageCircle className="icon" />
            <Send className="icon" />
          </div>
          <div>
            <Flag className="icon" />
          </div>
        </div>
        <div className="post-content">
          <h3>{post_likes} curtidas</h3>
          <p>
            <b>{profile_name}</b> {post_text}
          </p>
          <div className="comment">
            <p>Ver todos os comentários</p>
            <p>Adicione um comentário...</p>
          </div>
        </div>
      </div>
      <hr className="divisor" />
    </div>


  );
};

export default PostCard;
