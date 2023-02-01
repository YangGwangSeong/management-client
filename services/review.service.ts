import { Review, ReviewDto } from '@/shared/interfaces/review.interface';
import { instance } from 'api/interceptor';

export const ReViewService = {
	async createReview(body: ReviewDto) {
		return instance.post<Review>(`/reviews`, body);
	},
};
