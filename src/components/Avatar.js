import React from 'react'
import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, text, height = 45 }) => {
    return (
        <span>
          <img
            className={styles.Avatar}
            src={src}
            height={height}
            width={height}
            alt="avatar"
          />
          {text}
        </span>
      );
    
  }
  
  

export default Avatar
