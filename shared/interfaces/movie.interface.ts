import { Review } from '@/shared/interfaces/review.interface';

export interface Movie {
	id: number;
	name: string;
	rating: number | null;
	poster: string;
	views: number;
	reviews?: Review[];
	fees: number;
}

export interface MovieDto extends Pick<Movie, 'name' | 'fees' | 'poster'> {}
