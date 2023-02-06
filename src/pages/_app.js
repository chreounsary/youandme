import "bootstrap/dist/css/bootstrap.css";
import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { SessionProvider, useSession } from 'next-auth/react';
import Layout from './layout';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import "regenerator-runtime/runtime"

const queryClient = new QueryClient();
const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
const connectors = {
  injected: {}
}

function App({Component, pageProps}){
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
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
