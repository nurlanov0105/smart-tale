"use client";

import { StripePaymentForm, SubsribesData } from "@/features/payment";
import styles from "./styles.module.scss";
import { SubscribeCard, dataSubscribe } from "@/features/user/subscribeCard";
import { CookiesServices, EnumTokens } from "@/shared/lib";
import { useEffect, useState } from "react";
import { Select } from "@/shared/ui";

const StripPayment = () => {
   const isClient = typeof window === "object";
   const [type, setType] = useState("base");
   const [selected, setSelected] = useState(SubsribesData[type as keyof typeof SubsribesData]);

   useEffect(() => {
      if (isClient) {
         setType(CookiesServices.getCookiesValue(EnumTokens.SUBSCRIBE_TYPE) || "base");
         setSelected(SubsribesData[type as keyof typeof SubsribesData]);
      } else {
         setType("");
      }
   }, [isClient, type]);

   return (
      <section className={styles.section}>
         <h3 className="h3">Оплата картой</h3>
         <div className={styles.section__content}>
            <div>
               <Select
                  selected={selected}
                  setSelected={setSelected}
                  title="Подписки"
                  data={Object.values(SubsribesData)}
                  classname={styles.section__select}
               />
               <SubscribeCard type={selected.postValue} isPayment={true} />
            </div>
            <StripePaymentForm />
         </div>
      </section>
   );
};

export default StripPayment;