import React from 'react'
import './style.css'
import ProfileImageCircle from '../../assets/bighead.svg'
import { Heart, MessageCircleMore, Grid3X3, Flag, SquareUser, Plus } from 'lucide-react'

const ProfileContent: React.FC = () => {
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
              <Plus className='saves-icon'/>
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
          <div className="photo">
            <img src="https://blog.icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>99999</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-17.jpg" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>1043</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-20.jpg" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>1043</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="photo">
            <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-1.jpg" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>1043</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src="https://bst.icons8.com/wp-content/themes/icons8/app/uploads/2019/06/digital-illustration-brian-edward-miller-3-1024x768.jpg" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>1043</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
          <div className="photo">
            <img src="https://i.pinimg.com/originals/7e/c4/7d/7ec47d07330d01054c47ba664a26a798.png" alt="" />
            <div className='photo-info'>
              <div>
                <Heart />
                <p>1043</p>
              </div>
              <div>
                <MessageCircleMore />
                <p>183</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='thirdy-part'>
        <h2>Photogram</h2>
      </footer>
    </div>
  )
}

export default ProfileContent