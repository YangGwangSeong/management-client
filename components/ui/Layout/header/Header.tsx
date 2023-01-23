import React, { FC } from 'react';
import Logo from '@/ui/Layout/header/Logo';
import LoginForm from '@/ui/Layout/header/login-form/LoginForm';
import styles from '@/styles/Header.module.scss';
import Search from './search/Search';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<LoginForm />
		</header>
	);
};

export default Header;
