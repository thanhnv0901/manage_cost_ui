import { configureStore } from "@reduxjs/toolkit";

import informationSlice from "./information-slice";

const store = configureStore(
    {
        reducer:{
            informations: informationSlice.reducer
        }
    }
)

export default store