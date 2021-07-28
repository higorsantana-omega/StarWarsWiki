import React from 'react'
import { FlatList } from 'react-native'
import { CustomText, Container } from '~/components/atoms'
import { Card } from '~/components/molecules'
import { SeparatorView, NoDataImage } from './styles'
import noDataFavorites from '../../../../assets/no-data-favorite.png'
import noDataSearch from '../../../../assets/no-data-search.png'

export const GridList = ({ data, loading, type }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <CustomText fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado.`}
          </CustomText>
        </Container>
      )}
    />
  )
}
