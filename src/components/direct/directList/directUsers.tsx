import React from 'react'
import './style.css'

interface AvatarProps {
  image: {
    img: string;
    name: string;
  };
}

const directUsers: React.FC<AvatarProps> = ({ image }) => {
  return (
    <div className='direct-detail'>
      <div className='direct-box'>
        <img className="direct-profile-image" src={image.img} alt="" />
        <div>
          <p className='direct-name'>{image.name}</p>
          <span className='text'>Online agora</span></div>
      </div>

    </div>
  );
}

export default directUsers