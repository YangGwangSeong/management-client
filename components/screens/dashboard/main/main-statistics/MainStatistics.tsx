import Heading from '@/components/ui/heading/Heading';
import StatisticItem from '@/components/ui/statistic-item/StatisticItem';
import React, { FC } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
const MainStatistics: FC = () => {
	return (
		<div>
			<Heading>Main Statistics</Heading>
			<div className="grid grid-cols-4 gap-8">
				<StatisticItem
					item={{
						Icon: AiOutlineEye,
						name: 'Views',
						value: 2000000,
					}}
				></StatisticItem>
				<StatisticItem
					item={{
						Icon: AiOutlineEye,
						name: 'Views',
						value: 2000000,
					}}
				></StatisticItem>
				<StatisticItem
					item={{
						Icon: AiOutlineEye,
						name: 'Views',
						value: 2000000,
					}}
				></StatisticItem>
				<StatisticItem
					item={{
						Icon: AiOutlineEye,
						name: 'Views',
						value: 2000000,
					}}
				></StatisticItem>
			</div>
		</div>
	);
};

export default MainStatistics;
