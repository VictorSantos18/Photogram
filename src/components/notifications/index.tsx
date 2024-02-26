import React from 'react';
import { LikedNotification } from './data';
import './style.css';

const NotificationList: React.FC = () => {
  // Filtrar notificações para hoje
  const todayNotifications = LikedNotification.filter(notification => notification.day === 'today');
  // Filtrar notificações para ontem
  const yesterdayNotifications = LikedNotification.filter(notification => notification.day === 'yesterday');
    // Filtrar notificações para anteontem
  const beforeYesterdayNotifications = LikedNotification.filter(notification => notification.day === 'beforeYesterday');

  return (
    <div className='notification-list-container'>
      <div className="notification-list-content">
        <div className="notification-list-head">
          <h2>Notificações</h2>
        </div>
        <div className="notification-list-content-head">
          <h2>Hoje</h2>
        </div>
        {todayNotifications.map(notification => (
          <div key={notification.id} className="notification-list-content-item">
            <div className="notification-list-content-image">
              <img src={notification.image} alt="" />
            </div>
            <div className="notification-list-content-info">
              <p className='notify-text'><b>{notification.name}</b> e outras pessoas {notification.action}</p>
            </div>
            <div className="notification-list-content-post">
              <img src={notification.postImage} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="notification-list-content">
        <div className="notification-list-content-head">
          <h2>Ontem</h2>
        </div>
        {yesterdayNotifications.map(notification => (
          <div key={notification.id} className="notification-list-content-item">
            <div className="notification-list-content-image">
              <img src={notification.image} alt="" />
            </div>
            <div className="notification-list-content-info">
              <p className='notify-text'><b>{notification.name}</b> e outras pessoas {notification.action}</p>
            </div>
            <div className="notification-list-content-post">
              <img src={notification.postImage} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="notification-list-content">
        <div className="notification-list-content-head">
          <h2>Ante-Ontem</h2>
        </div>
        {beforeYesterdayNotifications.map(notification => (
          <div key={notification.id} className="notification-list-content-item">
            <div className="notification-list-content-image">
              <img src={notification.image} alt="" />
            </div>
            <div className="notification-list-content-info">
              <p className='notify-text'><b>{notification.name}</b> e outras pessoas {notification.action}</p>
            </div>
            <div className="notification-list-content-post">
              <img src={notification.postImage} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationList;
