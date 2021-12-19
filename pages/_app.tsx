import { FC, useState } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
        <Global
      styles={css`
        body {
          background-color: #121214eb;
        }
      `}
    />
          <Component {...pageProps} />
        </Hydrate>
    </QueryClientProvider>
}

export default App