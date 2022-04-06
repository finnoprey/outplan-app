import '../styles/globals.scss'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { AnimatePresence } from 'framer-motion';
import {useRouter} from 'next/router';
import ContextWrapper from '../context/ContextWrapper';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
    <ContextWrapper>
      <Header />
      <AnimatePresence
        exitBeforeEnter>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <BottomNavBar active="calendar" />
    </ContextWrapper>
    </>
  );
}

export default MyApp
