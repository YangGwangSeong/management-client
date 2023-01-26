import React, { FC } from 'react';
import { StatisticItemType } from './statistic-item.interface';
import styles from './StatisticItem.module.scss';

const StatisticItem: FC<{ item: StatisticItemType }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.icon}>
				<item.Icon />
			</div>
			<div className={styles.name}>{item.name}</div>
			<div className={styles.value}>{item.value.toLocaleString('ru-RU')}</div>
		</div>
	);
};

export default StatisticItem;
