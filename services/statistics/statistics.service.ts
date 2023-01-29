import instance from 'api/interceptor';
import {
	MainStatisticsResponse,
	MiddleStatisticsResponse,
} from './statistics.interface';

export const StatisticsService = {
	async getMainStatistics() {
		return instance.get<MainStatisticsResponse>(`/statistics/main`);
	},

	async getMiddleStatistics() {
		return instance.get<MiddleStatisticsResponse>(`/statistics/middle`);
	},
};
