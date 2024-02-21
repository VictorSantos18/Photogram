import React from 'react';

interface AvatarProps {
    image: {
        img: string;
        name: string;
    };
    onClick?: () => void; // Adicionar onClick à interface AvatarProps
}

const Avatar: React.FC<AvatarProps> = ({ image, onClick }) => {
    return (
        <section className='avatar-detail' onClick={onClick}>
            <div className='avatar-box'>
                <img className="avatar-profile-image" src={image.img} alt="" />
            </div>
            <p className='avatar-name'>{image.name}</p>
        </section>
    );
}

export default Avatar;
