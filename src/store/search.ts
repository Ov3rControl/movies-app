import create from 'zustand'

type State = {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

const useSearch = create<State>(set => ({
  searchTerm: '',
  setSearchTerm: newVal => set(() => ({ searchTerm: newVal })),
}))

export default useSearch
