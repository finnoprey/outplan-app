import '../styles/globals.scss'
import Header from '../components/Header/Header'
import BottomNavBar from '../components/Nav/BottomNavBar'
import { AnimatePresence } from 'framer-motion';
import {useRouter} from 'next/router';
import ContextWrapper from '../context/ContextWrapper';
import { useEffect } from 'react';
import { routeChange } from '../util/routeChange';
import Router from 'next/router';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', routeChange);
    router.events.on('routeChangeStart', routeChange);

    return;
  }, [router.events]);

  return (
    <>
    <ContextWrapper>
      <Header />
      <AnimatePresence
        exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
      <BottomNavBar active="calendar" />
    </ContextWrapper>
    </>
  );
}

export default MyApp
