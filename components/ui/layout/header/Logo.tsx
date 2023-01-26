import React, { FC } from 'react';
import styles from '@/styles/Header.module.scss';
import Link from 'next/link';
const Logo = () => {
	return (
		<Link href="/">
			<div className={styles.logo}>Logo</div>
		</Link>
	);
};

export default Logo;
