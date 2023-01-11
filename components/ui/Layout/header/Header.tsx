import React, { FC } from 'react';
import Logo from '@/ui/Layout/header/Logo';
import LoginForm from '@/ui/Layout/header/login-form/LoginForm';
import styles from '@/styles/Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	);
};

export default Header;
