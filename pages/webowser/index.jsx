import Head from 'next/head'
import { HeaderSimple as Header } from '../../components/Webowser/Header'
import { Hero } from '../../components/Webowser/Hero';

class WebowserPage extends React.Component {
	render() {
		return (
			<>
				<Head>
					<title>Webowser</title>
					<link
						rel="shortcut icon"
						href="/static/images/WebowserLogo.png"
						type='image/x-icon'
					/>

					{/* og: header tags */}
					<meta property="og:title" content="Webowser" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://ciderboi.xyz/webowser" />
					<meta property="og:image" content="https://ciderboi.xyz/static/images/WebowserLogo.png" />
					<meta property="og:description" content="Webowser is a web browser that is designed to be fast, secure, and easy to use." />
					<meta property="og:site_name" content="Webowser" />

					{/* twitter: header tags */}
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@ciderboi123" />
					<meta name="twitter:title" content="Webowser" />
					<meta name="twitter:description" content="Webowser is a web browser that is designed to be fast, secure, and easy to use." />
					<meta name="twitter:image" content="https://ciderboi.xyz/static/images/WebowserLogo.png" />

					{/* other header tags */}
					<meta name="description" content="Webowser is a web browser that is designed to be fast, secure, and easy to use." />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Header links={[{ link: '/', label: 'Home' }]} />
				<Hero />
			</>
		);
	}
}

export default WebowserPage;
