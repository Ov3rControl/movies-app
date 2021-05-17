import React from 'react'
import Header from 'components/core/Header'
import TextInput from 'components/core/inputs/TextInput'
import VerticalSpace from 'components/layout/VerticalSpace'
import HomeTopNavigator from 'navigators/HomeTopNavigator'
import ScreenContainerNoScroll from 'components/layout/ScreenContainerNoScroll'

const Home: React.FC = () => {
  return (
    <ScreenContainerNoScroll widthPercentage={1}>
      <Header />
      <ScreenContainerNoScroll>
        <TextInput placeholder={'Search Movies'} />
        <VerticalSpace height={8} />
        <HomeTopNavigator />
      </ScreenContainerNoScroll>
    </ScreenContainerNoScroll>
  )
}

export default Home
