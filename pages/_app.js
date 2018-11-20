import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import {UserAgentProvider} from '@quentin-sommer/react-useragent'

const PageWrapper = Comp =>
  class extends React.Component {
    /*
     * Need to use args.ctx
     * See https://github.com/zeit/next.js#custom-document
     */
    static async getInitialProps (args) {
      return {
        ua: args.ctx.req
          ? args.ctx.req.headers['user-agent']
          : navigator.userAgent,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      }
    }

    render () {
      const {ua, ...props} = this.props
      return (
        <UserAgentProvider ua={ua}>
          <Comp {...props} />
        </UserAgentProvider>
      )
    }
  }

class MyApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css" />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default PageWrapper(MyApp)