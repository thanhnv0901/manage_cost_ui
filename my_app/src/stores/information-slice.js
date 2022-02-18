import { createSlice } from '@reduxjs/toolkit';

const informationSlice = createSlice({
    name: "information",
    initialState: {
        projects: [{
            id: 0,
            projectName: "New Yok House",
            ownerName: "Jary",
            phone: "090098621",
            email: "jary@gmail.com",
            address: "Sysney",
            country: "Malben"

        }],
        counter: 1 // notice,
    },
    reducers: {
        addProject(state, action) {

            state.projects.push({
                id: state.counter,
                projectName: "",
                ownerName: "",
                phone: "",
                email: "",
                address: "",
                country: ""
            })

            state.counter++;
        },
        updateProject(state, action) {

            let projectID = action.payload.id
            let project = state.projects.find((obj) => {
                return obj.id == projectID
            }) || {}

            project.projectName = action.payload.projectName
            project.ownerName = action.payload.ownerName
            project.phone = action.payload.phone
            project.email = action.payload.email
            project.address = action.payload.address
            project.country = action.payload.country

        }
    }
})

export const informationActions = informationSlice.actions;
export default informationSlice;