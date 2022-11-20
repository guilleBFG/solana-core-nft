import { type AppType } from "next/dist/shared/lib/utils";
import WalletContextProvider from "../components/walletcontextprovider";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  );
};

export default MyApp;
