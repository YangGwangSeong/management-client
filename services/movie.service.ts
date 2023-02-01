import { Movie, MovieDto } from '@/shared/interfaces/movie.interface';
import { axiosClassic, instance } from 'api/interceptor';

export const MovieService = {
	async getMovieById(id: number) {
		return axiosClassic.get<Movie>(`/movies/${id}`);
	},

	async getAllMovie(searchTerm?: string) {
		return axiosClassic.get<Movie[]>(`/movies`, {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async createMovie() {
		return instance.post<string>('/movies');
	},

	async updateMovie(id: number, body: MovieDto) {
		return instance.put<Movie>(`/movies/${id}`, body);
	},

	async deleteMovie(id: number) {
		return instance.delete(`/movies/${id}`);
	},
};
