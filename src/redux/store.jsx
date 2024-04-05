import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./feature/counter/counterSlice"
import logger from "./middlewares/logger"

const store = configureStore({
    reducer: {
        counter: counterSlice
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
}) 


export default store