import { create } from "zustand";
import type { SearchState } from "./types";
import {persist} from "zustand/middleware";
import {ThemeState} from "@/shared/themeStore";

// export const useSearchStore = create<SearchState>((set) => ({
//     searchValue: "",
//     setSearch: (value) => set(() => ({searchValue: value}))
// }))

export const useSearchStore = create(persist<SearchState>((set) => ({
    searchValue: "",
    setSearch: (value) => set(() => ({searchValue: value}))}),
    //localstorage
    {name: "searchValue"})
)


