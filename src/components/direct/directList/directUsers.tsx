import React from 'react'
import './style.css'

interface AvatarProps {
  image: {
    img: string;
    name: string;
    status: string;
  };
}
interface Props {
  image: User | undefined;
}

const DirectUsers: React.FC<Props> = ({ image }) => {
  if (!image) {
    return null; // Retorna nulo se a imagem for indefinida
  }
  return (
    <div className='direct-detail'>
      <div className='direct-box'>
        <img className="direct-profile-image" src={image.img} alt="" />
        <div>
          <p className='direct-name'>{image.name}</p>
          <span className='text'>{image.status}</span></div>
      </div>

    </div>
  );
}

export default DirectUsers