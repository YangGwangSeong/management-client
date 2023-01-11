import Header from '@/ui/Layout/header/Header';
import { IMeta } from '@/utils/meta/meta.interface';
import Meta from '@/utils/meta/Meta';
import React, { FC, PropsWithChildren } from 'react';
import styles from '@/styles/Layout.module.scss';
const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
