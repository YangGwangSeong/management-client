import React, { FC } from 'react';
import { motion } from 'framer-motion';

import styles from './ProgressBar.module.scss';
import { useProgressAnimate } from '@/hooks/useProgressAnimate';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = useProgressAnimate(percent);
	return (
		<div className={styles.progress}>
			<div className={styles.overflow}>
				<motion.div {...variants} className={styles.bar}></motion.div>
			</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	);
};

export default ProgressBar;
