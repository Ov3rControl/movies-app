import React from 'react'
import { ViewStyle } from 'react-native'
import styled from 'styled-components/native'

const Row: React.FC<ViewStyle> = ({ alignItems, justifyContent, children, flexWrap, ...props }) => {
  return (
    <RowView
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      style={{ ...props }}
    >
      {children}
    </RowView>
  )
}

export default Row

const RowView = styled.View<ViewStyle>`
  flex-direction: row;
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`};
`
