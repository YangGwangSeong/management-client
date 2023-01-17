import { Movie, MovieDto } from '@/shared/interfaces/movie.interface';
import { axiosClassic } from 'api/interceptor';

export const MovieService = {
	async getMovieById(id: string) {
		return axiosClassic.get<Movie>(`/movie/${id}`);
	},

	async getAllMovie(searchTerm?: string) {
		return axiosClassic.get<Movie[]>(`/movie`, {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async createMovie() {
		return axiosClassic.post<string>('/movie');
	},

	async updateMovie(id: string, body: MovieDto) {
		return axiosClassic.put<Movie>(`/movie/${id}`, body);
	},

	async deleteMovie(id: string) {
		return axiosClassic.delete(`/movie/${id}`);
	},
};
