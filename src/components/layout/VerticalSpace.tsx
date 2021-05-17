import React from 'react'
import styled from 'styled-components/native'
import { perfectHeight } from 'helpers/responsiveHelpers'

type VerticalSpaceProps = {
  height: number
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({ height }) => {
  return <SpaceView height={perfectHeight(height)} />
}

export default VerticalSpace

const SpaceView = styled.View<VerticalSpaceProps>`
  height: ${props => props.height}px;
`
