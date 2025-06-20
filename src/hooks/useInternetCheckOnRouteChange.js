// hooks/useInternetCheckOnRouteChange.js
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function useInternetCheckOnRouteChange() {
  const [isOnline, setIsOnline] = useState(true);
  const [isConnectionWeak, setIsConnectionWeak] = useState(false);
  const [showBackOnline, setShowBackOnline] = useState(false);
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    const checkStatus = () => {
      const online = navigator.onLine;
      setIsOnline(online);

      if (online) {
        const connection =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
        if (connection) {
          const effectiveType = connection.effectiveType;
          setIsConnectionWeak(["slow-2g", "2g", "3g"].includes(effectiveType));
        }
      }
    };

    checkStatus();

    const handleOnline = () => {
      setIsOnline(true);
      setShowBackOnline(true);
      setTimeout(() => setShowBackOnline(false), 3000);
    };

    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pathname]);

  return { isOnline, isConnectionWeak, showBackOnline };
}
