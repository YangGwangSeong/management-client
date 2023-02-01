import Field from '@/components/ui/Field/Field';
import MovieItem from '@/components/ui/Movie-Item/MovieItem';
import { menuAnimation } from '@/utils/animation/fade';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './Search.module.scss';
import { useSearch } from '@/hooks/useSearch';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();

	return (
		<div className={styles.search_top}>
			<label>
				<Field
					placeholder="Search movie"
					value={searchTerm}
					onChange={handleSearch}
					Icon={BiSearch}
				/>
			</label>
			{isSuccess && (
				<motion.div
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={menuAnimation}
					className={styles.result}
				>
					{data?.length ? (
						data.map(movie => (
							<MovieItem movie={movie} key={movie.id}></MovieItem>
						))
					) : (
						<div>Movie not found!</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export default Search;
