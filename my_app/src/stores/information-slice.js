import { createSlice } from '@reduxjs/toolkit';

const informationSlice = createSlice({
    name: "information",
    initialState: {
        projects: [{
            id:   1,
            projectName: "New Yok House",
            fistName:"Jary",
            lastName: "Ford",
            phone: "090098621",
            email: "jary@gmail.com",
            address: "Sysney",
            country: "Malben"

        }]
    },
    reducers: {
        addProject(state, action) {
            const newProject = action.payload

            let lenght = state.projects.length
            state.projects.push({
                id: lenght + 1,
                projectName: newProject.projectName,
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

export const informationActions = informationSlice.actions;
export default informationSlice;