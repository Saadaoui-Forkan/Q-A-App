// import "@/styles/globals.css";
import { IntlProvider } from "react-intl";
import messages from '../site-settings';
const locale = "ar"

export default function App({ Component, pageProps }) {
  return (
    <IntlProvider locale={locale} messages={messages['ar']}>
      <Component {...pageProps}/>
    </IntlProvider>
  );
}
