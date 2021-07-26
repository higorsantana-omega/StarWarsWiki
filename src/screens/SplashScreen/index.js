import React, { useEffect } from 'react'
import { Container, CustomText, Logo } from '../../components'

export const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }, [navigation])

  return (
    <Container align="center" justify="center">
      <Logo />
      <CustomText color="">StarWars - Wiki</CustomText>
    </Container>
  )
}
