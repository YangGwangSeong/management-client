import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import Field from '@/ui/Field/Field';
import Button from '@/ui/Button/Button';
import { validEmail } from './login-auth.constants';
import { AuthFields } from './login-form.interface';
import UserAvatar from '@/components/ui/UserAvatar/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import styles from './LoginForm.module.scss';

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

	const { user, setUser } = useAuth();

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

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar avatarPath={user.avatarPath || ''} />
			) : (
				<button
					type="button"
					onClick={() => setIsShow(!isShow)}
					className={styles.button}
				>
					<FaRegUserCircle />
				</button>
			)}
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address',
							},
						})}
						placeholder="Email"
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols',
							},
						})}
						placeholder="Password"
						error={errors.password}
						type={'password'}
					/>
					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			)}
		</div>
	);
};

export default LoginForm;
