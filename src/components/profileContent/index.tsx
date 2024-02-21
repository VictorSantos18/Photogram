import React, { useState } from 'react';
import './style.css';
import ProfileImageCircle from '../../assets/bighead.svg';
import { Grid3X3, Flag, SquareUser, Plus } from 'lucide-react';
import PostCard from './profilePost';
import PostModal from '../modal/postModal';
import { ProfilePostsData } from './data';

const ProfileContent: React.FC = () => {

  const [selectedPost, setSelectedPost] = useState<{ image: string; commentsContent: string[] } | null>(null); // Corrigindo o tipo de selectedPost

  // Função para abrir o modal com o post selecionado
  const openModal = (post: { image: string; commentsContent: string[] }) => { // Corrigindo o tipo do argumento
    setSelectedPost(post);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedPost(null);
  };

  const firstRowPosts = ProfilePostsData.slice(0, 3);
  const secondRowPosts = ProfilePostsData.slice(3, 6);

  return (
    <div className='profile-content'>
      <div className="first-part">
        <img src={ProfileImageCircle} alt="imagem de perfil" className='profile-image-circle' />
        <div className="profile-text">
          <div className="profile-name">
            <h2>DrawWithMe</h2>
          </div>
          <div className="profile-numbers">
            <div className="posts">
              <h2>6</h2>
              <p>Publicações</p>
            </div>
            <div className="followers">
              <h2>613</h2>
              <p>Seguidores</p>
            </div>
            <div className="following">
              <h2>1204</h2>
              <p>Seguindo</p>
            </div>
          </div>
          <div className="profile-bio">
            <h2>Leonardo</h2>
            <span className='text-profile'>Come and draw with me.🎨</span><br />
            <span className='text-profile'>here you can find some pictures that i drew.🖌️</span>
            
          </div>
        </div>
      </div>
      <div className="seccond-part">
        <div className="saves">
          <div className='saves-item'>
            <div className="saves-image">
              <img src="https://blog.icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg" alt="" />
            </div>
            <div className="saves-info">
              <p>2021</p>
            </div>
          </div>
          <div className='saves-item'>
            <div className="saves-image">
              <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-3-1024x768.jpg" alt="" />
            </div>
            <div className="saves-info">
              <p>2022</p>
            </div>
          </div>
          <div className='saves-item'>
            <div className="saves-image">
              <img src="https://i.pinimg.com/originals/7e/c4/7d/7ec47d07330d01054c47ba664a26a798.png" alt="" />
            </div>
            <div className="saves-info">
              <p>2023</p>
            </div>
          </div>
          <div className='saves-item'>
            <div className="saves-image">
              <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-20.jpg" alt="" />
            </div>
            <div className="saves-info">
              <p>2024</p>
            </div>
          </div>
          <div className='saves-item'>
            <div className="saves-image">
              <Plus className='saves-icon' />
            </div>
            <div className="saves-info">
              <p>Novo</p>
            </div>
          </div>
        </div>
        <div className="navigation-bar">
          <div>
            <Grid3X3 className='profile-icon' />
            <p>Publicações</p>
          </div>
          <div>
            <Flag className='profile-icon' />
            <p>Marcados</p>
          </div>
          <div>
            <SquareUser className='profile-icon' />
            <p>Salvos</p>
          </div>
        </div>
        <div className="line">
          {firstRowPosts.map((post, index) => (
            <div key={index} onClick={() => openModal(post)}>
              <PostCard
                key={index}
                image={post.image}
                likes={post.likes}
                comments={post.comments} commentsContent={''}              />
            </div>
          ))}
        </div>
        <div className="line">
          {secondRowPosts.map((post, index) => (
            <div key={index} onClick={() => openModal(post)}>
              <PostCard
                key={index + 3}
                image={post.image}
                likes={post.likes}
                comments={post.comments} commentsContent={''}              />
            </div>
          ))}
          {selectedPost && (
            <PostModal post={selectedPost} onClose={closeModal} />
          )}
        </div>

      </div>
      <footer className='thirdy-part'>
        <h2>Photogram</h2>
      </footer>
    </div>
  )
}

export default ProfileContent;
