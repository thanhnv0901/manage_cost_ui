import { createSlice } from "@reduxjs/toolkit";

const detailCostSlice = createSlice({
    name: "detail_cost",
    initialState: {
        projectId: 0,
        details: []
    }
})