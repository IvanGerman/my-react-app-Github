import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div id = {s.first_image}>
          <img  alt = "" src = "https://ma3.su/images/easyblog_articles/4543/b2ap3_medium_Sunrise-dawn-mountains-grass-flowers_2560x1600.jpg" />
        </div>
        <div className = {s.descriptionBlock}>
          <img alt = "" src = "https://archilab.online/images/1/123.jpg" />
        </div>
      </div>
    )
};

export default ProfileInfo;