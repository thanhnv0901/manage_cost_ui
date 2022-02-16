import { createSlice } from '@reduxjs/toolkit';

const informationSlice = createSlice({
    name: "information",
    initialState: {
        projects: []
    },
    reducers: {
        addProject(state, action) {
            const newProject = action.payload

            let lenght = state.projects.length
            state.projects.push({
                id: lenght + 1,
                fistName: newProject.firstName,
                lastName: newProject.lastName,
                phone: newProject.phone,
                email: newProject.email,
                address: newProject.address,
                country: newProject.country
            })

        }
    }
})