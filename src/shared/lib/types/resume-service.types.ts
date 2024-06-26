import { CurrencyType } from "@/shared/lib";

export type ResumeType = {
   job_title: string;
   min_salary: string;
   max_salary: string;
   currency: CurrencyType;
   // organization: OrganizationType;
   // location: string;
   experience: string;
   description?: string;
};

export type UpdateResumeTypes = {
   data: ResumeType;
   slug: string;
};
