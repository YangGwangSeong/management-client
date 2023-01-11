import React, { FC, useState } from 'react';
import { useOutside } from '@/hooks/useOutside';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AuthFields } from '@/shared/interfaces/auth.interface';
import { useAuth } from '@/hooks/useAuth';
import styles from '@/styles/LoginForm.module.scss';

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthFields>({
		mode: 'onChange',
	});

	const { setUser } = useAuth();

	const onSubmit: SubmitHandler<AuthFields> = (data) => {
		if (type === 'login')
			setUser({
				id: 1,
				email: 'test@test.com',
				avatarPath: '',
				name: 'Max Dev',
			});
		//else if (type === 'register') registerSync(data);
	};

	return <div>LoginForm</div>;
};

export default LoginForm;
