import React from 'react'
import ScreenContainer from 'components/layout/ScreenContainer'
import Header from 'components/core/Header'
import VerticalSpace from 'components/layout/VerticalSpace'
import Typography from 'components/core/typography/Typography'

const ProfileScreen: React.FC = () => {
  return (
    <ScreenContainer widthPercentage={1}>
      <Header />
      <VerticalSpace height={300} />
      <Typography text={'Not implemented Yet!'} textAlign={'center'} size={28} lineHeight={28} />
    </ScreenContainer>
  )
}

export default ProfileScreen
