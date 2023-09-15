import { SSRProvider } from "@react-aria/ssr";
import { useCookieConsent } from "@utils";
import { seoConfig } from "@utils/seo";
import "keen-slider/keen-slider.min.css";
import { NextQueryParamProvider } from "next-query-params";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/cookieconsent.css";
import "../styles/drawer.css";
import "../styles/globals.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <QueryClientProvider client={queryClient}>
        <NextQueryParamProvider>
          <DefaultSeo {...seoConfig} />
          <SSRProvider>
            <Component {...pageProps} />
          </SSRProvider>
        </NextQueryParamProvider>
      </QueryClientProvider>
    </Root>
  );
}

export default MyApp;

function Root({ children }) {
  useCookieConsent();
  const handleScroll = React.useCallback(() => {
    const ills = document.getElementsByClassName("para") as any;
    [].slice.call(ills).map((img: any) => {
      img.style.transform = "rotate(" + window.pageYOffset / 6 + "deg)";
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <>
      {/* <Script */}
      {/*   type="text/plain" */}
      {/*   data-src="https://www.googletagmanager.com/gtag/js?id=UA-143758916-1" */}
      {/*   data-cookiecategory="analytics" */}
      {/*   strategy="lazyOnload" */}
      {/* /> */}
      {/* <Script */}
      {/*   type="text/plain" */}
      {/*   data-cookiecategory="analytics" */}
      {/*   strategy="lazyOnload" */}
      {/* > */}
      {/*   {` */}
      {/*     window.dataLayer = window.dataLayer || []; */}
      {/*     function gtag(){dataLayer.push(arguments);} */}
      {/*     gtag('js', new Date()); */}
      {/*     gtag('config', 'UA-143758916-1', { */}
      {/*       page_path: window.location.pathname, */}
      {/*     }); */}
      {/*   `} */}
      {/* </Script> */}

      {children}
    </>
  );
}
