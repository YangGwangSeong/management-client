import Field from '@/components/ui/Field/Field';
import Heading from '@/components/ui/heading/Heading';
import Layout from '@/components/ui/Layout/Layout';
import Loader from '@/components/ui/Loader';
import { MovieService } from '@/services/movie.service';
import { MovieDto } from '@/shared/interfaces/movie.interface';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

const MovieEdit: FC = () => {
	const { query } = useRouter();
	const movieId = Number(query.id);

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue,
	} = useForm<MovieDto>({
		mode: 'onChange',
	});

	const { data, isLoading } = useQuery(
		['get movie private by id', movieId],
		() => MovieService.getMovieById(movieId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name);
				setValue('fees', data.fees);
				setValue('poster', data.poster);
			},
			enabled: !!movieId,
		},
	);

	const { mutate } = useMutation(['update movie', movieId], (data: MovieDto) =>
		MovieService.updateMovie(movieId, data),
	);

	const onSubmit: SubmitHandler<MovieDto> = data => {
		mutate(data);
	};

	return (
		<Layout title="Movie edit">
			<Heading>Edit movie</Heading>
			{isLoading ? (
				<Loader count={4} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={'flex flex-wrap'}>
					<Field
						{...register('name', {
							required: 'Name is required',
						})}
						placeholder="Name"
						error={errors.name}
					></Field>
					<Field
						{...register('fees', {
							required: 'Fees is required',
						})}
						placeholder="Fees ($)"
						error={errors.fees}
					></Field>
				</form>
			)}
		</Layout>
	);
};

export default MovieEdit;
