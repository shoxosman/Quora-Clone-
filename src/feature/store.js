import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import QuestionSlice from './QuestionSlice'

const store = configureStore({
    reducer: {user:UserSlice,
             question:QuestionSlice
    }
})

export default store