import React from 'react';

interface AvatarProps {
    image: {
        img: string;
        name: string;
    };
}

const Avatar: React.FC<AvatarProps> = ({ image }) => {
    return (
        <section className='avatar-detail'>
            <div className='avatar-box'>
                <img className="avatar-profile-image" src={image.img} alt="" />
            </div>
            <p className='avatar-name'>{image.name}</p>
        </section>
    );
}

export default Avatar;
