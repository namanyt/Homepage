import Head from 'next/head'
import { HeaderSimple as Header } from '../../components/Webowser/Header'

class WebowserPage extends React.Component {
	render() {
		return (
			<>
				<Head>
					<title>Webowser</title>
				</Head>
				<Header links={[{ link: '/', label: 'Home' }, { link: 'webowser/downloads', label: 'Downloads' }]} />
			</>
		);
	}
}

export default WebowserPage;
