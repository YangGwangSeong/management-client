import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './Heading.module.scss';

const Heading: FC<PropsWithChildren<{ isMargin?: boolean }>> = ({
	children,
	isMargin = true,
}) => {
	return (
		<div className={cn(styles.heading, isMargin ? styles.isMargin : '')}>
			{children}
		</div>
	);
};

export default Heading;
