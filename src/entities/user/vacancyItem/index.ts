import VacancyItem from "./ui/VacancyItem";
import { useGetVacancies, useAddVacancy, useAddResumeQuery } from "./model/useQueries";
import type { CurrencyType } from "./model/types";
import type { OrganizationType } from "./model/types";
import type { VacancyCardType } from "./model/types";
import { useGetVacancySlug } from "./model/useQueries";

export {
   VacancyItem,
   useGetVacancies,
   useAddVacancy,
   CurrencyType,
   OrganizationType,
   VacancyCardType,
   useAddResumeQuery,
   useGetVacancySlug,
};
