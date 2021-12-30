import GlobalStyles from '../styles/global'
import Container from '../components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyles />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
