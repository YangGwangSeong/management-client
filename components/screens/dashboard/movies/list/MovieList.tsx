import Button from '@/components/ui/Button/Button';
import Heading from '@/components/ui/heading/Heading';
import Layout from '@/components/ui/Layout/Layout';
import Table from '@/components/ui/table/Table';
import { useMovie } from '@/hooks/useMovie';
import { MovieService } from '@/services/movie.service';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useMutation, useQuery } from 'react-query';

const MovieList: FC = () => {
	const { response, isLoading, mutate, create } = useMovie();

	return (
		<Layout title="Movie list">
			<div className={'flex-center-between relative'}>
				<Heading isMargin={false}>Movie list</Heading>
				<Button onClick={() => create()}>Create movie</Button>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map(movie => ({
								id: movie.id,
								name: movie.name,
								image: movie.poster,
								viewLink: `/movie/${movie.id}`,
								editLink: `/manage/movies/edit/${movie.id}`,
								removeHandler: () => mutate(movie.id),
						  }))
						: []
				}
				isLoading={isLoading}
			></Table>
		</Layout>
	);
};

export default MovieList;
