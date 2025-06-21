// app/components/NetworkStatus.js
"use client";

import useInternetCheckOnRouteChange from "@/hooks/useInternetCheckOnRouteChange";

export default function NetworkStatus() {
  const { isOnline, isConnectionWeak, showBackOnline } =
    useInternetCheckOnRouteChange();

  const toastClasses =
    "transform transition-all duration-500 ease-in-out rounded-lg shadow-xl p-4 flex items-center gap-3 min-w-[300px] backdrop-blur-sm border";

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      {/* Offline Toast */}
      {!isOnline && (
        <div
          className={`${toastClasses} bg-red-500/90 text-white border-red-400 animate-pulse`}
        >
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636L5.636 18.364m0-12.728L18.364 18.364"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm">No Internet Connection</p>
            <p className="text-xs opacity-90">
              Please check your network settings
            </p>
          </div>
        </div>
      )}

      {/* Weak Connection Toast */}
      {isOnline && isConnectionWeak && (
        <div
          className={`${toastClasses} bg-amber-500/90 text-white border-amber-400`}
        >
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm">Slow Connection</p>
            <p className="text-xs opacity-90">
              Your internet connection is weak
            </p>
          </div>
        </div>
      )}

      {/* Back Online Toast */}
      {showBackOnline && (
        <div
          className={`${toastClasses} bg-emerald-500/90 text-white border-emerald-400 animate-bounce`}
        >
          <div className="flex-shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm">Connection Restored</p>
            <p className="text-xs opacity-90">you&apos;re back online!</p>
          </div>
        </div>
      )}
    </div>
  );
}
