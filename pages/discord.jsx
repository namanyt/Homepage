import Head from 'next/head'

class DiscordRedirect extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta http-equiv="refresh" content="0; URL=https://discord.gg/eWVpMx6gcy" />
          <meta property="og:title" content="Discord" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://discord.ciderboi.xyz" />
          <meta property="og:image" content="https://discord.com/assets/f9bb9c4af2b9c32a2c5ee0014661546d.png" />
          <meta property="og:description" content="A Discord server for Cider" />
          <meta name="theme-color" content="#2f3136" />
        </Head>

      </div>
    )
  }
}

export default DiscordRedirect;