import '@/styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';


const queryClient = new QueryClient();

function App({Component, pageProps}){
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
export default App;
