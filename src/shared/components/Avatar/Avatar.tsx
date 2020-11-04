import React, { useMemo } from 'react';
import styles from './Avatar.module.scss';
import { Videovisit } from '../../icons';

interface IAvatar {
  src: string;
  alt?: string;
  videovisit?: boolean;
}

/**
 * Avatars can be used to represent people.
 * @param {src} string Set url Imgae
 * @param {alt} string Set description Imgae
 * @param {videovisit} boolean There is a Videovisit
 */
const Avatar = ({ src, alt = '', videovisit = false }: IAvatar) => {
  const videChat = useMemo(
    () => (
      <>
        {videovisit && (
          <div className={styles.Videovisit}>
            <Videovisit />
          </div>
        )}
      </>
    ),
    [videovisit]
  );

  return (
    <>
      <img src={src} alt={alt} className={styles.Avatar} />
      {videChat}
    </>
  );
};

export default Avatar;
