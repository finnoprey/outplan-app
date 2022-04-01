import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div>
        <Header />
      </div>
    </>
    
  )
}
