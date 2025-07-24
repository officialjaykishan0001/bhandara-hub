import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'



// Define a type for the slice state
interface navState {
    listEvent: boolean,
    isProfile: boolean,
    hamburger: boolean,
    isEditProfile: boolean
}

// Define the initial state using that type
const initialState: navState = {
  listEvent: false,
  isProfile: false,
  hamburger: false,
  isEditProfile: false
}

export const navSlice = createSlice({
  name: 'nav',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setListEvent: (state, action: PayloadAction<boolean>) => {
      state.listEvent = action.payload
    },
    setIsProfile: (state, action: PayloadAction<boolean>) => {
        state.isProfile = action.payload
    },
    setHamburger: (state, action: PayloadAction<boolean>) =>{
      state.hamburger = action.payload
    },
    setIsEditProfile: (state, action: PayloadAction<boolean>) => {
      state.isEditProfile = action.payload
    }
  },
})

export const { setListEvent, setIsProfile, setHamburger, setIsEditProfile} = navSlice.actions;


export default navSlice.reducer