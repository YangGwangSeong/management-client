export interface MainStatisticsResponse {
	countReviews: number;
	countMovies: number;
	views: number;
	averageRating: number;
}

export interface ViewsByMonthType {
	views: string;
	month: Date;
}

export interface MiddleStatisticsResponse {
	totalFees: number;
	viewsByMonth: ViewsByMonthType[];
}
