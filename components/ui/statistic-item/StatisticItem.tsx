import React, { FC } from 'react';
import { StatisticItemType } from './statistic-item.interface';
import styles from './StatisticItem.module.scss';
import cn from 'classnames';
import { getIcon } from './statistics.util';
import AnimatedCounter from '../AnimatedCounter';

const StatisticItem: FC<{ item: StatisticItemType }> = ({ item }) => {
	const Icon = getIcon(item.id);
	return (
		<div className={cn(styles.item, styles[`color_${item.id}`])}>
			<div className={styles.icon}>
				<Icon />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>
				<AnimatedCounter to={item.value} />
			</div>
		</div>
	);
};

export default StatisticItem;
