import React, { useState } from 'react';
import './style.css';
import ProfileImageCircle from '../../assets/bighead.svg';
import { Grid3X3, Flag, SquareUser, Plus } from 'lucide-react';
import PostCard from './profilePost';
import PostModal from '../modal/postModal';
import { ProfilePostsData } from './data';

const ProfileContent: React.FC = () => {
  const [toggle, setToggle] = useState(1);
  const [activeLink, setActiveLink] = useState(1);

  function updateToggle(id: number) {
    setToggle(id);
    setActiveLink(id);
  }

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
          <span
            className={activeLink === 1 ? 'active text-profile' : 'text-profile'}
            onClick={() => updateToggle(1)}
          >
            <Grid3X3 className='profile-icon' />
            <p>Publicações</p>
          </span>
          <span
            className={activeLink === 2 ? 'active text-profile' : 'text-profile'}
            onClick={() => updateToggle(2)}
          >
            <Flag className='profile-icon' />
            <p>Preferidas</p>
          </span>
          <span
            className={activeLink === 3 ? 'active text-profile' : 'text-profile'}
            onClick={() => updateToggle(3)}
          >
            <SquareUser className='profile-icon' />
            <p>Marcadas</p>
          </span>
        </div>

        <div className={toggle === 1 ? 'show-first-line' : 'line'}>
          {[...Array(Math.ceil(ProfilePostsData.length / 3))].map((_, rowIndex) => (
            <div className="post-row" key={rowIndex}>
              {ProfilePostsData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((post, index) => (
                <div key={index} onClick={() => openModal(post)}>
                  <PostCard
                    key={index}
                    image={post.image}
                    commentsContent={''}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={toggle === 2 ? 'show-line' : 'line'}>
          {firstRowPosts.map((post, index) => (
            <div key={index} onClick={() => openModal(post)}>
              <PostCard
                key={index + 3}
                image={post.image}
             
                comments={post.comments} commentsContent={''} />
            </div>
          ))}

        </div>
        <div className={toggle === 3 ? 'show-line' : 'line'}>
          {secondRowPosts.map((post, index) => (
            <div key={index} onClick={() => openModal(post)}>
              <PostCard
                key={index + 3}
                image={post.image}
             
                comments={post.comments} commentsContent={''} />
            </div>
          ))}

        </div>
        {selectedPost && (
          <PostModal post={selectedPost} onClose={closeModal} />
        )}

      </div>
      <footer className='thirdy-part'>
        <span>Copyright@2024 Photogram.</span>
      </footer>
    </div>
  )
}

export default ProfileContent;
