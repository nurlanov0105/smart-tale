"use client";

import { FC } from "react";
import Image from "next/image";

import commerceBox from "@@/imgs/commerce/01.png";
import { Button } from "@/shared/ui";
import { ROUTES, formattingDate } from "@/shared/lib";
import type { Props } from "../model/types";

import checkIcon from "@@/imgs/commerce/check.svg";
import styles from "./styles.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { useThemeStore } from "@/shared/store/themeStore";
import { useSubscribeStore } from "@/shared/store/subscribeStore/subscribeStore";

const SubscribeCommerce: FC<Props> = () => {
   const theme = useThemeStore((state) => state.theme);

   const isSubscribe = useSubscribeStore((state) => state.isSubscribe);
   const subscribedData = useSubscribeStore((state) => state.data);

   if (!subscribedData) {
      return <div></div>;
   }

   return (
      <>
         {!isSubscribe ? (
            <div className={clsx(styles.commerce, styles[theme])}>
               <div className={styles.commerce__box}>
                  <Image src={commerceBox} alt="commercial box" />
                  <div className={styles.commerce__text}>
                     <p>Оформите подписку, чтобы получить больше возможностей</p>
                     <p>С вами свяжется наш администратор 😉</p>
                  </div>
               </div>
               <Link href={ROUTES.SUBSCRIBE}>
                  <Button classType="btn_white">Оформить подписку</Button>
               </Link>
            </div>
         ) : (
            <div className={clsx(styles.box, styles[theme])}>
               <Image src={checkIcon} alt="check icon" width={20} height={20} />
               <div className={styles.box__col}>
                  <h4>Подписка оформлена</h4>
                  {subscribedData && (
                     <>
                        {!!subscribedData?.subscription ? (
                           <p>Срок: до {formattingDate(subscribedData?.subscription)}</p>
                        ) : (
                           <p>Срок: Навсегда</p>
                        )}
                     </>
                  )}
               </div>
            </div>
         )}
      </>
   );
};
export default SubscribeCommerce;
