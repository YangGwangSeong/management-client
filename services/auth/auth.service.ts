import { AuthResponse } from '@/shared/interfaces/user.interface';
import { axiosClassic } from 'api/interceptor';
import {
	saveToStorage,
	removeTokenFromStorage,
} from '@/services/auth/auth.helper';

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<AuthResponse>('/auth/login', {
			email,
			password,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<AuthResponse>('/auth/register', {
			email,
			password,
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	logout() {
		removeTokenFromStorage();
		localStorage.removeItem('user');
	},
};
