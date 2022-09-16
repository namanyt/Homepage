import Head from 'next/head'
import { HeaderSimple as Header } from '../../components/Webowser/Header'
import { Hero } from '../../components/Webowser/Hero';

class WebowserPage extends React.Component {
	render() {
		return (
			<>
				<Head>
					<title>Webowser</title>
				</Head>
				<Header links={[{ link: '/', label: 'Home' }]} />
				<Hero />
			</>
		);
	}
}

export default WebowserPage;
