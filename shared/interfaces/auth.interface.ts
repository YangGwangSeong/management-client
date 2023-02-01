import { User } from '@/shared/interfaces/user.interface';
import { Dispatch, SetStateAction } from 'react';

export type TypeUserState = User | null;

export interface Context {
	user: TypeUserState;
	setUser: Dispatch<SetStateAction<TypeUserState>>;
}
