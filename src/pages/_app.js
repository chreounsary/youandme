import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';

// import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { SessionProvider, useSession } from 'next-auth/react';
import Layout from './layout';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import "regenerator-runtime/runtime"

const queryClient = new QueryClient();
const supportedCgainsIds = [1, 4, 137];
const connectors = {
  injected: {}
}
function App({Component, pageProps}){
  
  return (
    <ThirdwebWeb3Provider
      supportedCgainsIds={supportedCgainsIds}
      connectors={connectors}
    >
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* <Layout/> */}
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
    </ThirdwebWeb3Provider>
  );
}
export default App;


export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  console.log(session, 'che');
  return {
    props: {session}
  }
}
