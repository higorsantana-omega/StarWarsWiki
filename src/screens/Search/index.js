import React, { useState, useEffect } from 'react'
import {
  CustomText,
  GridList,
  Input,
  ScreenScrollContainer,
} from '~/components'
import { useGetData } from '~/services/hooks'

export const SearchScreen = () => {
  const { getSearchResult } = useGetData()
  const [loading, setLoading] = useState()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const callGetSearchResult = async () => {
    setLoading(true)
    const result = await getSearchResult(query)
    console.log(result)
    if (!result.error) {
      setResults(result)
    }
    setLoading(false)
  }
  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <ScreenScrollContainer withPadding>
      <CustomText fontFamily="bold" size={28} mb={24}>
        Pesquisar
      </CustomText>
      <Input
        mb={24}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Pesquise por filme ou personagem"
      />
      <GridList loading={loading} type="search" data={results} />
    </ScreenScrollContainer>
  )
}
