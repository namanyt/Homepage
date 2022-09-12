// _app.jsx
import React from 'react'
import App from 'next/app'
import { MantineProvider } from '@mantine/core'
import IndexPage from './index'
import '../styles/main.scss'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme: 'dark' }}
			>
				<Component {...pageProps} />
			</MantineProvider>
		)
	}
}
