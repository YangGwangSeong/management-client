import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ProgressBar from '@/components/ui/progress-bar/ProgressBar';
import React, { FC } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';

import styles from './TotalFees.module.scss';

const TotalFees: FC<{ total: number }> = ({ total }) => {
	return (
		<div className={styles.fees}>
			<ProgressBar
				percent={Math.round((total * 100) / 3000000000)}
			></ProgressBar>
			<div className={styles.icon}>
				<MdOutlineQueryStats />
			</div>
			<div className={styles.name}>Total fees</div>
			<div className={styles.total}>
				$<AnimatedCounter to={total} />
				{/* {total.toLocaleString()} */}
			</div>
		</div>
	);
};

export default TotalFees;
