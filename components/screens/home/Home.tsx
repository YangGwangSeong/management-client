import Layout from '@/components/ui/Layout/Layout';
import MovieItem from '@/components/ui/Movie-Item/MovieItem';
import { HomeInfo } from '@/screens/home/home.interface';
import React, { FC } from 'react';
import styles from './Home.module.scss';

const Home: FC<HomeInfo> = ({ newMoviews }) => {
	return (
		<Layout title="red">
			<h1 className={styles.heading}>Newest movies</h1>
			<div className={styles.catalog}>
				{newMoviews.length ? (
					newMoviews.map(movie => <MovieItem key={movie.id} movie={movie} />)
				) : (
					<div>movies not found</div>
				)}
			</div>
		</Layout>
	);
};

export default Home;
