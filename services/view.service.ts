import { instance } from 'api/interceptor';

export const ViewService = {
	async updateView(movieId: string) {
		return instance.patch<void>(`/views/update/${movieId}`);
	},
};
