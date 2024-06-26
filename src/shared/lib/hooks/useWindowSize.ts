"use client";
import { useState, useEffect } from "react";

export const useWindowSize = () => {
   const isClient = typeof window === "object";

   function getSize() {
      return {
         width: isClient ? window.innerWidth : undefined,
         height: isClient ? window.innerHeight : undefined,
      };
   }

   const [windowSize, setWindowSize] = useState(getSize);

   useEffect(() => {
      if (!isClient) return;

      function handleResize() {
         setWindowSize(getSize());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);

      // eslint-disable-next-line
   }, [isClient]);

   return windowSize;
};
