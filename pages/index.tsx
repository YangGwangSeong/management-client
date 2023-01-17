import Home from '@/components/screens/home/Home';
import { HomeInfo } from '@/components/screens/home/home.interface';
import Layout from '@/components/ui/Layout/Layout';
import { MovieService } from '@/services/movie.service';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage<HomeInfo> = (props) => {
	return <Home {...props}></Home>;
};

export const getStaticProps: GetStaticProps<HomeInfo> = async () => {
	try {
		const { data: newMoviews } = await MovieService.getAllMovie();

		return {
			props: {
				newMoviews,
			},
			revalidate: 60,
		};
	} catch (e) {
		return {
			props: {
				newMoviews: [],
			},
		};
	}
};

export default HomePage;
