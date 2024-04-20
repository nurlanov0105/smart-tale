import React, {FC} from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx";
import {usePathname} from "next/navigation";

import Link from "next/link";
import {TypeAdminCategories} from "@/features/adminNavCategories/model/types";

const AdminItem:FC<TypeAdminCategories> = ({title, link, Icon, routes}) => {
    const pathname = usePathname();

    return (
        <Link href={link} className={styles.item}>
            <button
                className={clsx(styles.item__top, {
                    [styles.item__top_active]: link === pathname || routes.some(el => el === pathname),
                })}>
            <span className={styles.item__icon}>
               <Icon/>
            </span>
                <h3 className={styles.item__title}>{title}</h3>
            </button>
        </Link>
    );
};

export default AdminItem;