import { FC, useState } from "react"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import { AppProps } from 'next/app'

const App: FC<AppProps> = ({ Component, pageProps }) => {
    const [queryClient] = useState(() => new QueryClient())

    return <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
         <Component {...pageProps} />
       </Hydrate>
        
    </QueryClientProvider>
}

export default App