import Layout from '@/components/ui/Layout/Layout';
import { MovieService } from '@/services/movie.service';
import { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
	return <Layout title="RED Cinema">hello</Layout>;
};

// export const getStaticProps: GetStaticProps = async () => {
// 	try {
// 		const { data: newVideos } = await MovieService.getAllMovie()

// 		return {
// 			props:{
// 				newVideos
// 			}
// 		}
// 	} catch (e){
// 		console.log(e)
// 	}
// }

export default Home;
