import React, { useState } from 'react';
import Modal from './modal';
import ProfileImageCircle from '../../assets/bighead.svg';
import { Heart, MessageCircle, Send, Flag } from 'lucide-react';
import './style.css';

interface PostModalProps {
  post: {
    image: string;
    commentsContent: { user: string; content: string }[];
  };
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
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
    <Modal onClose={onClose} imageComponent={<img src={post.image} alt="" />} commentsComponent={
      <div className='post-modal'>
        <div className='post-modal-nav'>
          <img src={ProfileImageCircle} alt="imagem de perfil" className='post-modal-image-circle' />
          <h2>DrawWithMe</h2>
        </div>
        <div className='map-content'>
          <div className='user-comment'>
            <div className="user-comment-image">
              <img src={ProfileImageCircle} alt="imagem de perfil" className='post-modal-image-circle' />
            </div>
            <div className="user-comment-text">
              <h2 className='map-comment-username'>DrawWithMe</h2>
              <p className='map-comment-text'>
                One of my favorite arts
                <br />.
                <br />.
                <br />
                <span className='hashtag'>#arts #drawing #webart</span>
              </p>
            </div>
          </div>
          {/* Mapeamento dos comentários */}
          {post.commentsContent.map((comment, index) => (
            <div key={index} className='map-comment'>
              <img src={ProfileImageCircle} alt="imagem de perfil" className='post-modal-image-circle' />
              <h2 className='map-comment-username'>{comment.user}</h2>
              <p className='map-comment-text'>{comment.content}</p>
            </div>
          ))}
        </div>
        <div className="total-likes">
          <div className="total-likes-icon">
            <div className="right">
              <Heart className={`icon ${liked ? 'liked' : ''}`} onClick={handleLike} />
              <MessageCircle className='icon' />
              <Send className='icon' />
            </div>
            <div className="left">
              <Flag />
            </div>
          </div>
          <div className="total-likes-text">
            <p className='text'>
              {likeCount === 0 ? 'Nenhuma curtida' : `Curtido por ${likeCount} pessoa${likeCount === 1 ? '' : 's'}`}
            </p>
          </div>
          <div className='map-comment-input'>
            <input type="text" placeholder='Adicione um comentário' />
          </div>
        </div>
      </div>
    } />
  );
};

export default PostModal;