"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const TawkToScript = dynamic(() => import("@/app/components/TawkToScript"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    return () => {
      window.Tawk_API && window.Tawk_API.hideWidget();
    };
  }, []);

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <h1
        data-cy="title"
        className="text-4xl font-bold uppercase tracking-wide"
      >
        Do you need help?
      </h1>
      <TawkToScript />
    </div>
  );
}
