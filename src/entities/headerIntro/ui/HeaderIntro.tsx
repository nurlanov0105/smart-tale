"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { PathData } from "../model/consts";

const HeaderIntro = () => {
   const pathname = usePathname() as string;

   const pathArray = pathname.split("/");
   const slug =
      pathname.includes("/order-details/") || pathname.includes("/card-details/")
         ? pathArray.pop()
         : "";

   const remainingPath = pathArray.join("/");

   return (
      <div className={styles.intro}>
         {!slug ? (
            <>
               <span>{PathData[pathname]?.path}</span>
               <h2 className="h2">{PathData[pathname]?.name}</h2>
            </>
         ) : (
            <>
               <span>{PathData[remainingPath]?.path}</span>
               <h2 className="h2">{PathData[remainingPath]?.name}</h2>
            </>
         )}
      </div>
   );
};

export default HeaderIntro;
