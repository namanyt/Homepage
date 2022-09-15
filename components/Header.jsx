import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

import { IconApps } from '@tabler/icons'
import { faSpotify, } from '@fortawesome/fontawesome-free-brands'
import { faFolder } from '@fortawesome/fontawesome-free-regular';
import { HoverCard, Text, Tooltip, Transition } from '@mantine/core'

let topMargin = 70.9

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			{/* <span className="icon fa-diamond"></span>
			<FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
			<img
				loading="lazy"
				src="../static/images/pfp-circle.png"
				width={`${topMargin}px`}
				style={{ marginTop: `${topMargin / 10}px` }}
			// className='icon'
			/>
		</div>
		<div className="content">
			<div className="inner">
				<h1>Cider Boi</h1>
				<p>A Developer, Producer, Student</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<a
						style={{ cursor: 'pointer', }}
						onClick={() => {
							props.onOpenArticle('about')
						}}
					>
						About
					</a>
				</li>

				<Tooltip position='bottom' transition={'scale-y'} transitionDuration={'300'} label={['New App: Webowser', "⠀", <FontAwesomeIcon icon={faFolder} />]} >
					<li>
						<a
							style={{ cursor: 'pointer', }}
							onClick={() => {
								props.onOpenArticle('work')
							}}
						>
							Projects
						</a>
					</li>
				</Tooltip>

				<Tooltip position='bottom' transition={'scale-y'} transitionDuration={'300'} label={['New Release on Spotify', "⠀", <FontAwesomeIcon icon={faSpotify} />]} >
					<li>							<a
						style={{ cursor: 'pointer', }}
						onClick={() => {
							props.onOpenArticle('music')
						}}
					>
						Music
					</a>

					</li>
				</Tooltip>

				<li>
					<a
						style={{ cursor: 'pointer', }}
						onClick={() => {
							props.onOpenArticle('contact')
						}}
					>
						Links
					</a>
				</li>
			</ul>
		</nav>
	</header>
)

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
}

export default Header
