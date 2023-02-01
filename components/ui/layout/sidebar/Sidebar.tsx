import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { menu } from './menu.data';

const Sidebar: FC = () => {
	const { asPath } = useRouter();
	return (
		<aside className={styles.sidebar}>
			<div>
				<Link href="/" className={styles.logo}>
					R
				</Link>
				<nav className={styles.menu}>
					<ul>
						{menu.map(item => (
							<li
								key={item.link}
								className={cn(styles.item, {
									[styles.active]: item.link === asPath,
								})}
							>
								<Link href={item.link}>
									<item.Icon />
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
};

export default Sidebar;
