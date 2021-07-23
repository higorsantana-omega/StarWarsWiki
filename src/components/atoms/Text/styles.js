/* eslint-disable prettier/prettier */

import styled from 'styled-components/native'

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ color, theme }) => color || theme.colors.light};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: 'SourceSansPro_700Bold';
  font-size: ${({ theme, size }) => theme.metrics.px(size || 24)}px;
  color: ${({ color, theme }) => theme.colors[color || 'white']};
  margin-top: ${({ theme, mt }) => theme.metrics.px(mt || 0)}px;
  margin-bottom: ${({ theme, mb }) => theme.metrics.px(mb || 0)}px;
  margin-left: ${({ theme, ml }) => theme.metrics.px(ml || 0)}px;
  margin-right: ${({ theme, mr }) => theme.metrics.px(mr || 0)}px;
  font-family: ${({ theme, fontFamily }) =>
    theme.fonts[fontFamily || 'regular']};
`
