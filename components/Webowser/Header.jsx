import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, Button, Title, Image, Tooltip, useMantineTheme, Menu, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandGithub, IconBrandGoogle, IconUser, IconBrandSpotify, IconHome, IconBrandDiscord } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import {
	IconSquareCheck,
	IconPackage,
	IconUsers,
	IconCalendar,
	IconChevronDown,
} from '@tabler/icons';

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import faDiscord from "@fortawesome/fontawesome-free-brands/faDiscord";
import faSpotify from "@fortawesome/fontawesome-free-brands/faSpotify";
import faInstagram from "@fortawesome/fontawesome-free-brands/faInstagram";
import faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import faSoundcloud from "@fortawesome/fontawesome-free-brands/faSoundcloud";

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 56,

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	social: {
		width: 260,

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
		},
	},
}));

const HeaderMiddleProps = {
	links: [{
		link: String,
		label: String
	}]
}

/**
 * 
 * @param {HeaderMiddleProps} links 
 * @returns 
 */
export function HeaderSimple({ links }) {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes, cx } = useStyles();

	const items = links.map((link, index) => {
		if (index > 0) {
			return <a
				key={link.label}
				href={link.link}
			>
				<Button variant='subtle' color={'green'} size={'lg'} compact style={{ marginLeft: '30px' }}>{link.label}</Button>
			</a>
		} else {
			return <a
				key={link.label}
				href={link.link}
			>
				<Button variant='subtle' color={'green'} size={'lg'} compact style={{ marginLeft: '-100px' }}>{link.label}</Button>
			</a>
		}
	});

	return (
		<Header withBorder={false} height={90} mb={120}>
			<Container mt={20} className={classes.inner}>
				<Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
				<Group className={classes.links}>
					{items}
				</Group>

				<Image
					src='/static/images/WebowserWebsiteBanner.png'
					width={'500px'}
				/>

				<Group spacing={5} className={classes.social} position="right" noWrap>
					<Tooltip label="Github">
						<a href='https://github.com/namanyt/Webowser'>
							<ActionIcon size="lg">
								<IconBrandGithub size={18} stroke={1.5} />
							</ActionIcon>
						</a>
					</Tooltip>
					<Tooltip label="Discord">
						<a href='/discord'>
							<ActionIcon size="lg">
								<IconBrandDiscord size={18} stroke={1.5} />
							</ActionIcon>
						</a>
					</Tooltip>
					<ButtonMenu />
				</Group>
			</Container>
		</Header>
	);
}

function ButtonMenu() {
	const theme = useMantineTheme();
	return (
		<Menu transition="pop-top-right" position="top-end" width={220}>
			<Menu.Target>
				<Button variant='subtle' rightIcon={<IconChevronDown size={18} stroke={1.5} />} pr={12}>
					Nitya Naman
				</Button>
			</Menu.Target>
			<Menu.Dropdown>
				<a href='/'>
					<Menu.Item
						icon={<IconHome size={16} color={theme.colors.blue[6]} stroke={1.5} />}
						rightSection={
							<Container size={90}>
								<FontAwesomeIcon icon={faSpotify} />
							</Container>
						}
					>
						Home
					</Menu.Item>
				</a>
				<a href='/spotify'>
					<Menu.Item
						icon={<IconBrandSpotify size={16} color={theme.colors.green[6]} stroke={1.5} />}
					>
						Spotify
					</Menu.Item>
				</a>
				<a href='/youtube'>
					<Menu.Item
						icon={<IconBrandYoutube size={16} color={theme.colors.red[6]} stroke={1.5} />}
					>
						Youtube
					</Menu.Item>
				</a>
				<a href='/github'>
					<Menu.Item
						icon={<IconBrandGithub size={16} color={theme.colors.gray[6]} stroke={1.5} />}
					>
						Github
					</Menu.Item>
				</a>
			</Menu.Dropdown>
		</Menu>
	);
}
