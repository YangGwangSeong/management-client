import instance from 'api/interceptor';
import { MainStatisticsResponse } from './statistics.interface';

export const StatisticsService = {
	async getMainStatistics() {
		return instance.get<MainStatisticsResponse>(`/statistics/main`);
	},
};
