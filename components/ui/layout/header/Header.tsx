import React, { FC } from 'react';
import Logo from '@/components/ui/layout/header/Logo';
import LoginForm from '@/components/ui/layout/header/login-form/LoginForm';
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
