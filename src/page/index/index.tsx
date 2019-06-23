import React from 'react';
import logo from '@/asset/images/xylink-logo.png'
import style from './style/index.scss';

const IndexView = () => {
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img src={logo} alt="xylink"/>
      </div>

      <p className={style.containerView}>
        xylink View
      </p>
    </div>
  )
}

export default IndexView;
