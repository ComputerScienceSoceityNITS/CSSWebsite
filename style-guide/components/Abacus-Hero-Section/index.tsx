import React from 'react';
import styles from './styles.module.css';
// import Image from 'next/image';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.heroText}>ABACUS</h1>
            <p className={styles.heroDesc}>Lorem ipsum dolor sit amet consectetur. Odio non eu mi cursus arcu a non quis. Luctus nunc tellus sit arcu aliquam cursus auctor. Sed in risus accumsan facilisi feugiat vitae. Ridiculus mattis enim elementum vulputate porta. Mattis potenti donec sed a rutrum hac sapien. Velit mattis feugiat diam lacus fringilla. Id.</p>
            <img className={styles.heroLogo} src='/images/logo_compressed.png' />
        </div>
    )
}

export default Hero;