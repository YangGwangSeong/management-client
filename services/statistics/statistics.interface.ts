export interface ViewsByMonth {
	views: string;
	month: Date;
}

export interface MiddleStatisticsResponse {
	totalFees: number;
	viewsByMonth: ViewsByMonth[];
}
