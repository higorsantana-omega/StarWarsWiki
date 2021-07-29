import React from 'react'
import { CustomText } from '~/components'
import {
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
  FavoriteImage,
} from './styles'
import favoriteAdd from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export const FavoritesStateModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdd : favoriteRemoved}
          />
          <CustomText mt={24} align="center" size={28} fontFamily="bold">{`Favorito ${
            type === 'added' ? 'adicionado' : 'removido'
          } com sucesso!`}</CustomText>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
