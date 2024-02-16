import React from 'react';
import Modal from './modal';
import ProfileImageCircle from '../../assets/bighead.svg';
import './style.css'

interface PostModalProps {
  post: {
    image: string;
    commentsContent: { user: string; content: string }[];
  };
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  return (
    <Modal onClose={onClose} imageComponent={<img src={post.image} alt="" />} commentsComponent={
      <div className='post-modal'>
        <div className='post-modal-nav'>
          <img src={ProfileImageCircle} alt="imagem de perfil" className='post-modal-image-circle' />
          <h2>DrawWithMe</h2>
        </div>
        <div className='map-content'>
          {/* Mapeamento dos comentários */}
          {post.commentsContent.map((comment, index) => (
            <div key={index} className='map-comment'>
              <img src={ProfileImageCircle} alt="imagem de perfil" className='post-modal-image-circle' />
              <h2 className='map-comment-username'>{comment.user}</h2> 
              <p className='map-comment-text'>{comment.content}</p> 
            </div>
          ))}
        </div>
        <div className='map-comment-input'>
          <input type="text" placeholder='Adicione um comentário'/>
        </div>
      </div>
    } />
  );
};


export default PostModal;
