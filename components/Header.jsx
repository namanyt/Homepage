import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            {/* <span className="icon fa-diamond"></span> */}
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
            <img loading='lazy' src='../static/images/pfp-circle.png' width={'50vw'} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Cider Boi</h1>
                <p>A Developer, Producer, Student</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Links</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
