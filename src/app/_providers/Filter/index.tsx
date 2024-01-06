'use client'
import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface IConextType{
    categoryFilters:string[]
    setCategoryFilters:React.Dispatch<SetStateAction<string[]>>
    sort:string
    setSort:React.Dispatch<SetStateAction<string[]>>
}
export const INITIAL_FILTER_DATE={
    categoryFilters:[],
    setCategoryFilters:()=>[],
    sort:'',
    setSort:()=>'',
}

const FilterContext= createContext<IConextType>(INITIAL_FILTER_DATE);

export const FilterProvider =({children}:{children:React.ReactNode})=>{
    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort, setSort] = useState('-createdAt')

    return (
        <FilterContext.Provider 
          value={{
           categoryFilters,
           setCategoryFilters,
           sort,
           setSort,
        }}>

            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = ()=>useContext(FilterContext)      