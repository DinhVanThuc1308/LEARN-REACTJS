import React from 'react';
import styles from './styles.module.css';

export default function Component() {
    return <div className={styles.container}>
        <div className={styles.sidebar}>Leftside</div>
        <div className={styles.content}>Rightside</div>
    </div>;
}