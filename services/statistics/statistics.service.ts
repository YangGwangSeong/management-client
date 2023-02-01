import { StatisticItemType } from '@/components/ui/statistic-item/statistic-item.interface';
import instance from 'api/interceptor';
import { MiddleStatisticsResponse } from './statistics.interface';

export const StatisticsService = {
	async getMainStatistics() {
		return instance
			.get<StatisticItemType[]>(`/statistics/main`)
			.then(({ data }) => data);
	},

	async getMiddleStatistics() {
		return instance
			.get<MiddleStatisticsResponse>(`/statistics/middle`)
			.then(({ data }) => data);
	},
};
