import React, { FC, createContext, PropsWithChildren, useState } from 'react';
import { Context, TypeUserState } from '@/shared/interfaces/auth.interface';

export const AuthContext = createContext({} as Context);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
