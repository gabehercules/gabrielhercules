import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Social from '../components/Social'
import Footer from '../components/Footer'
import TechStack from '../components/TechStack'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Hercules | Front End Developer</title>
        <meta name="description" content="Meu nome é Gabriel Hercules, sou um front end dev em formação mas com muita experiência em desenvolvimento web e 100% full learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Social />
      <TechStack />
      <Footer />
    </>
  )
}
