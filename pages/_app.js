import '../styles/globals.scss'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { AnimatePresence } from 'framer-motion';
import {useRouter} from 'next/router';
import ContextWrapper from '../context/ContextWrapper';
import { useEffect } from 'react';
import { fixTimeoutTransition } from '../util/fixTimeoutTransition';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  fixTimeoutTransition(1000);

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
