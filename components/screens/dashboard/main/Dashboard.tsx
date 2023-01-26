import Heading from '@/components/ui/heading/Heading';
import Layout from '@/components/ui/Layout/Layout';
import React, { FC } from 'react';
import MainStatistics from './main-statistics/MainStatistics';

const Dashboard: FC = () => {
	return (
		<Layout title="Dashboard">
			<MainStatistics></MainStatistics>
		</Layout>
	);
};

export default Dashboard;
