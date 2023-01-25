import { Movie } from '@/shared/interfaces/movie.interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import cn from 'classnames';
import styles from './MovieItem.module.scss';

const MovieItem: FC<{ movie: Movie; variant?: 'sm' | 'md' }> = ({
	movie,
	variant = 'md',
}) => {
	return (
		<Link
			href={`/movie/${movie.id}`}
			className={cn(styles.item, {
				[styles.small]: variant === 'sm',
			})}
		>
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
		</Link>
	);
};

export default MovieItem;
