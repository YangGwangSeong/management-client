export interface User {
	id: number;
	name: string;
	email: string;
	avatarPath: string;
}

export interface AuthResponse {
	user: User;
	accessToken: string;
}
