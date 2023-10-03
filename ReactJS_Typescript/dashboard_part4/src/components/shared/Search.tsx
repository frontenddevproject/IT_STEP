import React, { FC, useCallback, useContext, useState } from 'react'
import { FlexRow } from './flex'
import { FcClearFilters } from "react-icons/fc"
import { SearchContext } from '../../contexts/SearchContext'

interface PropsInterface {

}

export const Search: FC<PropsInterface> = () => {

   const {value, setValue} = useContext(SearchContext)!;

   const onChange = useCallback((event: { target: { value: string } })=> {
      setValue(event.target.value);
   }, [setValue]);

   const clearSearch = useCallback(()=> {
      setValue("");
   }, [setValue]);

  return (
    <FlexRow width="100%" justifyContent="center" gap="10px" margin="15px">
      <input type="text" placeholder="Search" value={value} onChange={onChange}/>
      <FcClearFilters size="20px" onClick={clearSearch} />
    </FlexRow>
  )
}
