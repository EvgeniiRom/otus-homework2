import GlobalStyle from '@/components/styled/GlobalStyle';
import { setupStore } from '@/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}
