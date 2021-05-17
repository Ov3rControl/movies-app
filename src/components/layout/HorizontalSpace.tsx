import React from 'react'
import styled from 'styled-components/native'
import { perfectWidth } from 'helpers/responsiveHelpers'

type HorizontalSpaceProps = {
  width: number
}

const HorizontalSpace: React.FC<HorizontalSpaceProps> = ({ width }: HorizontalSpaceProps) => {
  return <SpaceView width={perfectWidth(width)} />
}

export default HorizontalSpace

const SpaceView = styled.View<HorizontalSpaceProps>`
  width: ${props => props.width}px;
`
