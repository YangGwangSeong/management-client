import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const getContentType = () => ({
	'Content-Type': 'application/json',
});

export const API_URL = `${process.env.APP_URL}/api`;

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken) {
		// config.headers = { ...config.headers } as AxiosHeaders;
		// config.headers.set('Authorization', `Bearer ${accessToken}`);
		(config.headers as AxiosHeaders).set(
			'Authorization',
			`Bearer ${accessToken}`,
		);
	}

	return config;
});

export default instance;
