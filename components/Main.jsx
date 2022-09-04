import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import faSpotify from '@fortawesome/fontawesome-free-brands/faSpotify'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faSoundcloud from '@fortawesome/fontawesome-free-brands/faSoundcloud'

class Main extends React.Component {
	render() {

		let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

		return (
			<div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
				<article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">Works</h2>
					<span className="image main"><img loading='lazy' src="/static/images/code.jpg" alt="" /></span>
					<ul className='actions vertical'>
						<li><strong><a href="/bot">Bucky</a></strong>:  {'\u00A0'} <span> An Activity Discord Generator Bot </span></li>
						<li><strong><a href="https://github.com/Ciderboi123/Flappy-Bird/releases/tag/v1.1">Flappy Bird</a></strong>:  {'\u00A0'} <span> A Simple Flappy Bird Game made in c++ </span></li>
						<li><strong><a href="https://animebinge.xyz/">Anime Binge</a></strong>:  {'\u00A0'} <span> A Free and No Ad site to watch anime </span></li>
						<li><strong><a href="https://chat.ciderboi.xyz">DChat App</a></strong>:  {'\u00A0'} <span> A Chat App made using React and Firebase </span></li>
						<li><strong><a href="https://github.com/parafoxia/chatto">Chatto</a></strong>:  {'\u00A0'} <span> A Chat bot API for youtube and twitch bots </span></li>
						<li><strong><a href="https://cavecraft.in">Cave Craft</a></strong>:  {'\u00A0'} <span> A Minecraft Server Network </span></li>
					</ul>
					{close}
				</article>

				<article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">About</h2>
					<span className="main"><img loading='lazy' src="/static/images/cider.gif" style={{ margin: 'auto', marginBottom: 'calc(30px - 1em)', marginLeft: 'calc(50% - 50px)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }} alt="" /></span>
					<p style={{ textAlign: 'center' }}>
						Hello, I'm Cider aka "Naman", <br />
						I'm a Developer, Producer and a Student, currently in 10th
					</p>
					{close}
				</article>

				<article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
					<h2 className="major">Links</h2>
					<ul className="icons">
						<li><a href="/twitter">
							<FontAwesomeIcon icon={faTwitter} />
						</a> Twitter </li>
						<li><a href="/discord">
							<FontAwesomeIcon icon={faDiscord} />
						</a> Discord </li>
						<li><a href="/spotify">
							<FontAwesomeIcon icon={faSpotify} />
						</a> Spotify </li>
						<li><a href="/instagram">
							<FontAwesomeIcon icon={faInstagram} />
						</a> Instagram </li>
						<li><a href="/github">
							<FontAwesomeIcon icon={faGithub} />
						</a> Github </li>
						<li><a href="/soundcloud">
							<FontAwesomeIcon icon={faSoundcloud} />
						</a> SoundCloud </li>
					</ul>
					{close}
				</article>

			</div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool
}

export default Main