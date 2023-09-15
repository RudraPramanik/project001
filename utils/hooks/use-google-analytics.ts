import React from "react";
import { useRouter } from "next/router";
import { pageview } from "@utils";

function useGoogleAnalytics() {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default useGoogleAnalytics;
