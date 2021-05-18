import React from 'react'
import Header from 'components/core/Header'
import TextInput from 'components/core/inputs/TextInput'
import VerticalSpace from 'components/layout/VerticalSpace'
import HomeTopNavigator from 'navigators/HomeTopNavigator'
import MainScreenNoScroll from 'components/layout/MainScreenNoScroll'

const Home: React.FC = () => {
  return (
    <MainScreenNoScroll widthPercentage={1}>
      <Header />
      <MainScreenNoScroll>
        <TextInput placeholder={'Search Movies'} />
        <VerticalSpace height={8} />
        <HomeTopNavigator />
      </MainScreenNoScroll>
    </MainScreenNoScroll>
  )
}

export default Home
