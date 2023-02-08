import { MovieService } from '@/services/movie.service';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useMovie = () => {
	const { data: response, isLoading } = useQuery(['get all movies'], () =>
		MovieService.getAllMovie(),
	);

	const { mutate } = useMutation(['remove movie'], (id: number) =>
		MovieService.deleteMovie(id),
	);

	const { push } = useRouter();

	const { mutate: create } = useMutation(
		['create movie'],
		() => MovieService.createMovie(),
		{
			onSuccess: ({ data: id }) => {
				push(`/manage/movies/edit/${id}`);
			},
		},
	);
	return {
		response,
		isLoading,
		mutate,
		create,
	};
};
