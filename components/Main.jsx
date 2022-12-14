import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faDiscord from "@fortawesome/fontawesome-free-brands/faDiscord";
import faSpotify from "@fortawesome/fontawesome-free-brands/faSpotify";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faSoundcloud from "@fortawesome/fontawesome-free-brands/faSoundcloud";

class Main extends React.Component {
	render() {
		let close = (
			<div
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			></div>
		);

		return (
			<div
				id="main"
				style={this.props.timeout ? { display: "flex" } : { display: "none" }}
			>
				<article
					id="work"
					className={`${this.props.article === "work" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
						}`}
					style={{ display: "none" }}
				>
					<h2 className="major">Works</h2>
					<span className="image main">
						<img  src="/static/images/code.jpg" alt="" />
					</span>
					<ul className="actions vertical">
						<li>
							<strong>
								<a href="/webowser">Webowser</a>
							</strong>
							: {"\u00A0"}{" "}
							<span> Webowser a lightweight, fast and free web browser for Windows </span>
						</li>
						<li>
							<strong>
								<a href="/tech-preneur">Joyful Merger</a>
							</strong>
							: {"\u00A0"}{" "}
							<span> A solution to the problem of stubble farming </span>
						</li>
						<li>
							<strong>
								<a href="https://github.com/Ciderboi123/Flappy-Bird/releases/tag/v1.1">
									Flappy Bird
								</a>
							</strong>
							: {"\u00A0"} <span> A Simple Flappy Bird Game made in c++ </span>
						</li>
						<li>
							<strong>
								<a href="https://animebinge.xyz/">Anime Binge</a>
							</strong>
							: {"\u00A0"} <span> A Free and No Ad site to watch anime </span>
						</li>
						<li>
							<strong>
								<a href="https://chat.ciderboi.xyz">DChat App</a>
							</strong>
							: {"\u00A0"}{" "}
							<span> A Chat App made using React and Firebase </span>
						</li>
						<li>
							<strong>
								<a href="https://github.com/parafoxia/chatto">Chatto</a>
							</strong>
							: {"\u00A0"}{" "}
							<span> A Chat bot API for youtube and twitch bots </span>
						</li>
						<li>
							<strong>
								<a href="https://cavecraft.in">Cave Craft</a>
							</strong>
							: {"\u00A0"} <span> A Minecraft Server Network </span>
						</li>
					</ul>
					{close}
				</article>

				<article
					id="about"
					className={`${this.props.article === "about" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
						}`}
					style={{ display: "none" }}
				>
					<h2 className="major">About</h2>
					<span className="main">
						<img
							
							src="/static/images/cider.gif"
							style={{
								margin: "auto",
								marginBottom: "calc(30px - 1em)",
								marginLeft: "calc(50% - 50px)",
								borderRadius: "10px",
								boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
							}}
							alt=""
						/>
					</span>
					<p style={{ textAlign: "center" }}>
						Hello, I'm Cider aka "Naman", <br />
						I'm a Developer, Producer and a Student, currently in 10th
					</p>
					{close}
				</article>

				<article
					id="music"
					className={`${this.props.article === "music" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
						}`}
					style={{ display: "none" }}
				>
					<h2 className="major">Music</h2>

					<span
						style={{ marginLeft: "-2%" }}
					>
						<iframe
							style={{ borderRadius: "12px", marginBottom: '26px' }}
							src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1397990101&color=%235a5a5a&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=true&visual=true"
							width="50%"
							height="350"
							frameBorder="0"
							allowFullScreen=""
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							
						/>
					</span>

					<iframe
						style={{ borderRadius: "12px", marginLeft: "2%" }}
						src="https://open.spotify.com/embed/track/4vJQkoEERVm9mdd1JOks4n?utm_source=generator"
						width="50%"
						height="380"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						
					/>

					<iframe
						style={{ borderRadius: "12px", marginLeft: "-2%" }}
						src="https://open.spotify.com/embed/track/0zgtfQijIBkbSxVasftDzp?utm_source=generator"
						width="50%"
						height="380"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						
					/>

					<iframe
						style={{ borderRadius: "12px", marginLeft: "2%" }}
						src="https://open.spotify.com/embed/track/5Wuoe8VwPAxPYMpuxxfHEW?utm_source=generator"
						width="50%"
						height="380"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						
					/>

					<iframe
						style={{ borderRadius: "12px", marginLeft: "-2%" }}
						src="https://open.spotify.com/embed/track/2jS2ff1rtwWdJR9OvTtZxu?utm_source=generator"
						width="50%"
						height="380"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						
					/>

					<iframe
						style={{ borderRadius: "12px", marginLeft: "2%" }}
						src="https://open.spotify.com/embed/track/2a9CojkCOevzsLodWAzhW6?utm_source=generator"
						width="50%"
						height="380"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						
					/>

					{close}
				</article>

				<article
					id="contact"
					className={`${this.props.article === "contact" ? "active" : ""} ${this.props.articleTimeout ? "timeout" : ""
						}`}
					style={{ display: "none" }}
				>
					<h2 className="major">Links</h2>
					<ul className="icons">
						<li>
							<a href="/twitter">
								<FontAwesomeIcon icon={faTwitter} />
							</a>{" "}
							Twitter{" "}
						</li>
						<li>
							<a href="/discord">
								<FontAwesomeIcon icon={faDiscord} />
							</a>{" "}
							Discord{" "}
						</li>
						<li>
							<a href="/spotify">
								<FontAwesomeIcon icon={faSpotify} />
							</a>{" "}
							Spotify{" "}
						</li>
						<li>
							<a href="/instagram">
								<FontAwesomeIcon icon={faInstagram} />
							</a>{" "}
							Instagram{" "}
						</li>
						<li>
							<a href="/github">
								<FontAwesomeIcon icon={faGithub} />
							</a>{" "}
							Github{" "}
						</li>
						<li>
							<a href="/soundcloud">
								<FontAwesomeIcon icon={faSoundcloud} />
							</a>{" "}
							SoundCloud{" "}
						</li>
					</ul>
					{close}
				</article>
			</div>
		);
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
};

export default Main;
