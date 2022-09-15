// _app.jsx
import React from 'react'
import App from 'next/app'
import { MantineProvider } from '@mantine/core'
import IndexPage from './index'
import '../styles/main.scss'
import ErrorBoundary from '../components/ErrorBoundary'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ErrorBoundary>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{ colorScheme: 'dark' }}
				>
					<Component {...pageProps} />
				</MantineProvider>
			</ErrorBoundary>
		)
	}
}
