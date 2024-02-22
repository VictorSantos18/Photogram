import React, { useState } from "react";
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
  post_text,
}) => {
 
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleLike = () => {
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      } else {
        setLiked(true);
        setLikeCount(likeCount + 1);
      }
    };


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
              <Heart className={`icon ${liked ? 'liked' : ''}`} onClick={handleLike} />
              <MessageCircle className="icon" />
              <Send className="icon" />
            </div>
            <div>
              <Flag className="icon" />
            </div>
          </div>
          <div className="post-content">
            <h3> {likeCount === 0 ? 'Nenhuma curtida' : `Curtido por ${likeCount} pessoa${likeCount === 1 ? '' : 's'}`}</h3>
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
