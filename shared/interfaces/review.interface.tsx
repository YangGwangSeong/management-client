import { User } from '@/shared/interfaces/user.interface';
import { Movie } from '@/shared/interfaces/movie.interface';

export interface Review {
	id: number;
	user: User;
	movie: Movie;
	description: string;
}
