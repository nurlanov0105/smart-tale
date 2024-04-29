import {NextPage} from "next";
import { CardsSection } from "@/widgets/user/cardsSection";
import { SkeletonTypes } from "@/shared/lib";
// import styles from "./styles.module.scss";

const PurchasesPage: NextPage = () => {
   return <CardsSection isLoading={false} isError={false} type={SkeletonTypes.standart} />;
};

export default PurchasesPage;
