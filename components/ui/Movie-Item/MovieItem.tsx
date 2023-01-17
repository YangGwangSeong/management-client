import { Movie } from '@/shared/interfaces/movie.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from './MovieItem.module.scss';

const MovieItem: FC<{ movie: Movie }> = ({ movie }) => {
	return (
		<Link href={`/movie/${movie.id}`}>
			<div className={styles.item}>
				{movie.rating && (
					<div className={styles.rating}>{movie.rating.toFixed(1)}</div>
				)}
				<div className={styles.poster}>
					<Image
						src={movie.poster}
						alt={movie.name}
						width={220}
						height={330}
					></Image>
				</div>
				<div className={styles.heading}>{movie.name}</div>
			</div>
		</Link>
	);
};

export default MovieItem;
