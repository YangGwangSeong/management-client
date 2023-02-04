import Heading from '@/components/ui/heading/Heading';
import Layout from '@/components/ui/Layout/Layout';
import React, { FC } from 'react';
import MainStatistics from '@/components/screens/dashboard/main/MainStatistics';
import MiddleStatistics from '../middle-statistics/MiddleStatistics';

const Dashboard: FC = () => {
	return (
		<Layout title="Dashboard">
			<MainStatistics></MainStatistics>
			<MiddleStatistics></MiddleStatistics>
		</Layout>
	);
};

export default Dashboard;
