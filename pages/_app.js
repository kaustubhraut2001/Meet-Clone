import '@/styles/globals.css'

import { SocketProvide } from '@/context/socket'

export default function App({ Component, pageProps }) {
  return(


    <SocketProvide>
      <Component {...pageProps} />
    </SocketProvide>
  )







}
