import Field from '@/components/ui/Field/Field';
import MovieItem from '@/components/ui/Movie-Item/MovieItem';
import { menuAnimation } from '@/utils/animation/fade';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './Search.module.scss';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();

	return (
		<motion.div
			initial={false}
			animate={isSuccess ? 'open' : 'closed'}
			variants={menuAnimation}
			className={styles.search_top}
		>
			<label>
				<Field
					placeholder="Search movie"
					value={searchTerm}
					onChange={handleSearch}
					Icon={BiSearch}
				/>
			</label>
			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(movie => (
							<MovieItem movie={movie} key={movie.id}></MovieItem>
						))
					) : (
						<div>Movie not found!</div>
					)}
				</div>
			)}
		</motion.div>
	);
};

export default Search;
