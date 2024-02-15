import React from 'react'
import { PostInfo } from './data'
import PostCard from './postCard'
import './style.css'
import Carousel from '../storys'

const Posts:React.FC = () => {
  return (
    <div className='flex'>
      <div className="carroussel">
        <Carousel />
      </div>
      <div className='posts'>
        {PostInfo.map((post, index) => (
          <PostCard
            key={`${post.profile_name}_${index}`} // Usando uma chave única
            profile_img={post.profile_img}
            profile_name={post.profile_name}
            profile_nationality={post.profile_nationality}
            post_likes={post.post_likes}
            post_image={post.post_image}
            post_text={post.post_text}
          />
        ))}

      </div>
      
    </div>
  )
}

export default Posts