import React from 'react'
import ScreenContainer from 'components/layout/ScreenContainer'
import Header from 'components/core/Header'
import TextInput from 'components/core/inputs/TextInput'
import VerticalSpace from 'components/layout/VerticalSpace'
import HomeTopNavigator from 'navigators/HomeTopNavigator'

const Home: React.FC = () => {
  return (
    <ScreenContainer widthPercentage={1}>
      <Header />
      <ScreenContainer>
        <TextInput placeholder={'Search Movies'} />
        <VerticalSpace height={8} />
        <HomeTopNavigator />
      </ScreenContainer>
    </ScreenContainer>
  )
}

export default Home
