import Layout from '@/components/ui/Layout/Layout';
import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Movie.module.scss';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { MovieService } from '@/services/movie.service';
import Reviews from './reviews/Reviews';
const Movie: FC = () => {
	const { query } = useRouter();
	const movieId = Number(query?.id);

	const {
		refetch,
		data: movie,
		isLoading,
	} = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			select: ({ data }) => data,
		},
	);
	return (
		<Layout title={`${movie?.name} - Cinema`}>
			<div className={styles.wrapper}>
				<div className={styles.poster}>
					{movie?.poster && (
						<Image
							src={movie?.poster}
							alt={movie?.name}
							width={220}
							height={330}
							className={styles.image}
						></Image>
					)}
				</div>

				<div className={styles.detail}>
					<h1 className={styles.heading}>{movie?.name}</h1>
					<div className={styles.rating}>{movie?.rating?.toFixed(1)}</div>
					<div className={styles.title}>About movie</div>
					<ul>
						<li>
							<span>Fees in the world</span>
							<span>${movie?.fees.toLocaleString()}</span>
						</li>
					</ul>
					<Reviews
						movieId={movieId}
						reviews={movie?.reviews || []}
						isLoading={isLoading}
					></Reviews>
				</div>
			</div>
		</Layout>
	);
};

export default Movie;
