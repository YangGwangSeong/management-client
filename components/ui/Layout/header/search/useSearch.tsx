import { useDebounce } from '@/hooks/useDebounce';
import { MovieService } from '@/services/movie.service';
import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debounceSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		['search movies', debounceSearch],
		() => MovieService.getAllMovie(debounceSearch),
		{
			select: ({ data }) => data.slice(0, 4),
			enabled: !!debounceSearch,
		},
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return {
		handleSearch,
		isSuccess,
		data,
		searchTerm,
	};
};
