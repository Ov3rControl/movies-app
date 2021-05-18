import React from 'react'
import debounce from 'debounce'
import Header from 'components/core/Header'
import TextInput from 'components/core/inputs/TextInput'
import VerticalSpace from 'components/layout/VerticalSpace'
import HomeTopNavigator from 'navigators/HomeTopNavigator'
import ScreenContainerNoScroll from 'components/layout/ScreenContainerNoScroll'
import useSearch from 'store/search'

const Home: React.FC = () => {
  const { searchTerm, setSearchTerm } = useSearch(state => state)
  return (
    <ScreenContainerNoScroll widthPercentage={1}>
      <Header />
      <ScreenContainerNoScroll>
        <TextInput
          placeholder={'Search Movies'}
          onChangeText={debounce(setSearchTerm, 500)}
          value={searchTerm}
        />
        <VerticalSpace height={8} />
        <HomeTopNavigator />
      </ScreenContainerNoScroll>
    </ScreenContainerNoScroll>
  )
}

export default Home
