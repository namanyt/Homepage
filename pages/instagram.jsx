import Head from 'next/head'

class InstagramRedirect extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <meta http-equiv="refresh" content="0; URL=https://www.instagram.com/nnthegamer" />
        </Head>

      </div>
    )
  }
}

export default InstagramRedirect;