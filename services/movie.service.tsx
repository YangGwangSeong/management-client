import { Movie, MovieDto } from '@/shared/interfaces/movie.interface';
import { axiosClassic } from 'api/interceptor';

export const MovieService = {
	async getMovieById(id: string) {
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
		return axiosClassic.post<string>('/movies');
	},

	async updateMovie(id: string, body: MovieDto) {
		return axiosClassic.put<Movie>(`/movies/${id}`, body);
	},

	async deleteMovie(id: string) {
		return axiosClassic.delete(`/movies/${id}`);
	},
};
