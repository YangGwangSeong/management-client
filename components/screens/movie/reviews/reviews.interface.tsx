import { Review } from '@/shared/interfaces/review.interface';

export interface Reviews {
	movieId: number;
	reviews: Review[];
	isLoading: boolean;
}
