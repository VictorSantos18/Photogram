import React, { useState } from 'react'
import ExplorePosts from './explorePosts';
import PostModal from '../modal/postModal';
import { ExplorePostsData } from './data'
import './style.css'

const ExploreContent: React.FC = () => {

  const [selectedPost, setSelectedPost] = useState<{ image: string; commentsContent: string[] } | null>(null); // Corrigindo o tipo de selectedPost

  // Função para abrir o modal com o post selecionado
  const openModal = (post: { image: string; commentsContent: string[] }) => { // Corrigindo o tipo do argumento
    setSelectedPost(post);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setSelectedPost(null);
  };

  const firstRowPosts = ExplorePostsData.slice(0, 3);
  const secondRowPosts = ExplorePostsData.slice(3, 6);

  return (
    <div className='explore-content'>
      <div className="line">
        {firstRowPosts.map((post, index) => (
          <div key={index} onClick={() => openModal(post)}>
            <ExplorePosts
              key={index}
              image={post.image}
              likes={post.likes}
              comments={post.comments} commentsContent={''} />
          </div>
        ))}
      </div>
      <div className="line">
        {secondRowPosts.map((post, index) => (
          <div key={index} onClick={() => openModal(post)}>
            <ExplorePosts
              key={index + 3}
              image={post.image}
              likes={post.likes}
              comments={post.comments} commentsContent={''} />
          </div>
        ))}
        {selectedPost && (
          <PostModal post={selectedPost} onClose={closeModal} />
        )}
      </div>
      <div className="line">
        {firstRowPosts.map((post, index) => (
          <div key={index} onClick={() => openModal(post)}>
            <ExplorePosts
              key={index}
              image={post.image}
              likes={post.likes}
              comments={post.comments} commentsContent={''} />
          </div>
        ))}
      </div>
      <div className="line">
        {secondRowPosts.map((post, index) => (
          <div key={index} onClick={() => openModal(post)}>
            <ExplorePosts
              key={index + 3}
              image={post.image}
              likes={post.likes}
              comments={post.comments} commentsContent={''} />
          </div>
        ))}
        {selectedPost && (
          <PostModal post={selectedPost} onClose={closeModal} />
        )}
      </div>
    </div>
  )
}

export default ExploreContent