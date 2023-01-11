import { Review } from '@/shared/interfaces/review.interface';

export interface Movie {
	id: number;
	name: string;
	rating: number;
	poster: string;
	views: number;
	reviews?: Review[];
}
