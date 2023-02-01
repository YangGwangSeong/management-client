import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUserCircle } from 'react-icons/fa';
import Field from '@/components/ui/Field/Field';
import Button from '@/components/ui/Button/Button';
import { validEmail } from '@/components/ui/Layout/header/login-form/login-auth.constants';
import { AuthFields } from '@/components/ui/Layout/header/login-form/login-form.interface';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';
import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';
import styles from './LoginForm.module.scss';
import { FADE_IN, menuAnimation } from '@/utils/animation/fade';
import { motion } from 'framer-motion';
import { useMutation } from 'react-query';
import { AuthService } from '@/services/auth/auth.service';

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<AuthFields>({
		mode: 'onChange',
	});

	const { user, setUser } = useAuth();

	const { mutate: loginSync } = useMutation(
		['login'],
		(data: AuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user);
				reset();
				setIsShow(false);
			},
		},
	);

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: AuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user);
				reset();
				setIsShow(false);
			},
		},
	);

	const onSubmit: SubmitHandler<AuthFields> = data => {
		if (type === 'login') loginSync(data);
		else if (type === 'register') registerSync(data);

		reset();
		setIsShow(false);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar
					link="/dashboard"
					title="admin dashboard"
					avatarPath={user.avatarPath || ''}
				/>
			) : (
				<button
					type="button"
					onClick={() => setIsShow(!isShow)}
					className={styles.button}
				>
					<FaRegUserCircle />
				</button>
			)}
			{/* {isShow && ( */}
			<motion.div
				initial={false}
				animate={isShow ? 'open' : 'closed'}
				variants={menuAnimation}
			>
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
					<div className={styles.loginButton}>
						<Button onClick={() => setType('login')}>Login</Button>
					</div>
					<button
						className={styles.register}
						onClick={() => setType('register')}
					>
						Register
					</button>
				</form>
			</motion.div>
			{/* )} */}
		</div>
	);
};

export default LoginForm;
