import Header from '@/components/ui/layout/header/Header';
import Sidebar from '@/components/ui/layout/sidebar/Sidebar';
import { IMeta } from '@/utils/meta/meta.interface';
import Meta from '@/utils/meta/Meta';
import React, { FC, PropsWithChildren } from 'react';
import styles from '@/styles/Layout.module.scss';
import { useAuth } from '@/hooks/useAuth';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	const { user } = useAuth();
	return (
		<>
			<Meta {...meta} />
			<section className={user ? styles.wrapper : ''}>
				{user && <Sidebar></Sidebar>}
				<div>
					<Header />
					<main className={styles.main}>{children}</main>
				</div>
			</section>
		</>
	);
};

export default Layout;
