import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';
import { useMantineTheme } from '@mantine/core';


const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: 80,
		paddingBottom: 80,
	},

	label: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 220,
		lineHeight: 1,
		marginBottom: theme.spacing.xl * 1.5,
		color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

		[theme.fn.smallerThan('sm')]: {
			fontSize: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 38,

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 500,
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
	},
}));

export function NotFoundTitle() {
	const { classes } = useStyles();

	return (
		<>
			<Head>
				<title>404 - Not Found</title>
			</Head>
			<Container className={classes.root}>
				<div className={classes.label}>404</div>
				<Title className={classes.title}>You have found a secret place.</Title>
				<Text color="dimmed" size="lg" align="center" className={classes.description}>
					Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
					been moved to another URL.
				</Text>
				<Group position="center">
					<Link href="/webowser" passHref>
						<Button variant="subtle" size="md">
							Take me back to home page
						</Button>
					</Link>
				</Group>
			</Container>
		</>
	);
}

const useStyles2 = createStyles((theme) => ({
	root: {
		paddingTop: 80,
		paddingBottom: 120,
		backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
	},

	label: {
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 220,
		lineHeight: 1,
		marginBottom: theme.spacing.xl * 1.5,
		color: theme.colors[theme.primaryColor][3],

		[theme.fn.smallerThan('sm')]: {
			fontSize: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 38,
		color: theme.white,

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 540,
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
		color: theme.colors[theme.primaryColor][1],
	},
}));

function ServerError() {
	const { classes } = useStyles2();

	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.label}>500</div>
				<Title className={classes.title}>Something bad just happened...</Title>
				<Text size="lg" align="center" className={classes.description}>
					Our servers could not handle your request. Don&apos;t worry, our development team was
					already notified. Try refreshing the page.
				</Text>
				<Group position="center">
					<Link href='#' passHref>
						<Button variant="white" size="md">
							Refresh the page
						</Button>
						</Link>
				</Group>
			</Container>
		</div>
	);
}

const useStyles3 = createStyles((theme) => ({
	root: {
		paddingTop: 120,
		paddingBottom: 120,
		backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
	},

	inner: {
		position: 'relative',
	},

	image: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		zIndex: 0,
		opacity: 0.65,
	},

	content: {
		paddingTop: 220,
		position: 'relative',
		zIndex: 1,

		[theme.fn.smallerThan('sm')]: {
			paddingTop: 120,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: 38,
		color: theme.white,

		[theme.fn.smallerThan('sm')]: {
			fontSize: 32,
		},
	},

	description: {
		maxWidth: 460,
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl * 1.5,
		color: theme.colors[theme.primaryColor][1],
	},
}));

export function ServerOverload() {
	const { classes } = useStyles3();

	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.inner}>
					<Illustration className={classes.image} />
					<div className={classes.content}>
						<Title className={classes.title}>All of our servers are busy</Title>
						<Text size="lg" align="center" className={classes.description}>
							We cannot handle your request right now, please wait for a couple of minutes and
							refresh the page. Our team is already working on this issue.
						</Text>
						<Group position="center">
							<Link href='#' passHref>
								<Button size="md" variant="white">
									Refresh the page
								</Button>
							</Link>
						</Group>
					</div>
				</div>
			</Container>
		</div>
	);
}

export function Illustration(props) {
	const theme = useMantineTheme();
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 332 145" {...props}>
			<path
				fill={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 9 : 7]}
				d="M43.4 144.6c-10.4 0-19.333-2.2-26.8-6.6-7.467-4.533-12.867-9.8-16.2-15.8-.8-2-.267-3.733 1.6-5.2l18-13.6c1.867-1.467 3.6-1.2 5.2.8 4.667 6.4 10.533 9.6 17.6 9.6 6.267 0 11.133-1.867 14.6-5.6 3.6-3.867 5.4-8.4 5.4-13.6 0-5.333-1.867-9.8-5.6-13.4-3.733-3.733-8.467-5.6-14.2-5.6-4.8 0-9.4 1.8-13.8 5.4-1.867 1.867-3.533 2.467-5 1.8L4.8 75.2c-1.733-.8-2.4-2-2-3.6l15.4-67c.4-1.733 1.467-2.6 3.2-2.6h61.8c.933 0 1.733.333 2.4 1 .667.533 1 1.267 1 2.2v22c0 .933-.333 1.733-1 2.4-.667.533-1.467.8-2.4.8H42.8L38.4 49c.8 0 2.6-.2 5.4-.6 2.933-.4 5.533-.6 7.8-.6 12.8 0 23.267 4.6 31.4 13.8 8.267 9.2 12.4 20.467 12.4 33.8 0 14.667-5 26.533-15 35.6-9.867 9.067-22.2 13.6-37 13.6zM167.389 144.6c-7.333 0-14.333-1.333-21-4s-12.867-6.733-18.6-12.2c-5.733-5.467-10.267-13-13.6-22.6-3.333-9.6-5-20.667-5-33.2 0-12.533 1.667-23.6 5-33.2 3.333-9.6 7.867-17.133 13.6-22.6 5.733-5.467 11.933-9.533 18.6-12.2 6.667-2.8 13.667-4.2 21-4.2 7.467 0 14.533 1.4 21.2 4.2 6.667 2.667 12.8 6.733 18.4 12.2 5.733 5.467 10.267 13 13.6 22.6 3.333 9.6 5 20.667 5 33.2 0 12.533-1.667 23.6-5 33.2-3.333 9.6-7.867 17.133-13.6 22.6-5.6 5.467-11.733 9.533-18.4 12.2-6.667 2.667-13.733 4-21.2 4zm0-31c9.067 0 15.6-3.733 19.6-11.2 4.133-7.6 6.2-17.533 6.2-29.8s-2.067-22.2-6.2-29.8c-4.133-7.6-10.667-11.4-19.6-11.4-8.933 0-15.467 3.8-19.6 11.4-4 7.6-6 17.533-6 29.8s2 22.2 6 29.8c4.133 7.467 10.667 11.2 19.6 11.2zM283.234 144.6c-10.133 0-18.933-2.067-26.4-6.2-7.466-4.133-13.333-9.467-17.6-16-1.066-1.867-.866-3.333.6-4.4l16.8-15.2c1.467-1.467 3-1.333 4.6.4 6 7.067 12.6 10.6 19.8 10.6 5.334 0 9.467-1.467 12.4-4.4 2.934-3.067 4.4-6.667 4.4-10.8 0-3.733-1.266-7.133-3.8-10.2-2.533-3.067-6.8-4.6-12.8-4.6h-6c-2.266 0-3.4-1.133-3.4-3.4V60.2c0-2.133 1.134-3.2 3.4-3.2h5.8c4.8 0 8.267-1.267 10.4-3.8 2.134-2.533 3.2-5.4 3.2-8.6 0-4-1.466-7.2-4.4-9.6-2.8-2.533-6.266-3.8-10.4-3.8-7.2 0-12.733 3.333-16.6 10-1.066 2-2.6 2.133-4.6.4l-15.6-15.4c-1.733-1.333-2-2.8-.8-4.4 4.134-6.4 9.8-11.533 17-15.4 7.2-4 15.334-6 24.4-6 12 0 22.267 3.4 30.8 10.2 8.534 6.8 12.8 16.067 12.8 27.8 0 7.6-1.866 13.933-5.6 19-3.6 4.933-8.066 8.533-13.4 10.8 6.8 2.8 12.4 7.067 16.8 12.8 4.534 5.6 6.8 12.8 6.8 21.6 0 12.533-4.666 22.667-14 30.4-9.333 7.733-20.866 11.6-34.6 11.6z"
			/>
		</svg>
	);
}

function Error({ statusCode }) {
	return (
		<>
			{statusCode === 404 && <NotFoundTitle />}
			{statusCode === 500 && <ServerError />}
			{statusCode === 503 && <ServerOverload />}
		</>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error;
export { NotFoundTitle, ServerError, ServerOverload };