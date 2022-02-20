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
            country: "Malben",
            initialCost: 1000,
            costDetails: [
                {
                    reason: "Have many trees",
                    isPlus: true,
                    cost: 100
                },
                {
                    reason: "Have many trees",
                    isPlus: false,
                    cost: 200
                }
            ]

        }],
        keyCounter: 1 // notice,
    },
    reducers: {
        addProject(state, action) {

            state.projects.push({
                id: state.keyCounter,
                projectName: "",
                ownerName: "",
                phone: "",
                email: "",
                address: "",
                country: "",
                initialCost: 0,
                costDetails: []
            })

            state.keyCounter++;
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
            project.initialCost = parseFloat(action.payload.initialCost)

        },
        addDetailCost(state, action) {
            let projectID = action.payload.id


            let project = state.projects.find((obj) => {
                return obj.id == projectID
            }) || {}


            project.costDetails.push({
                reason: action.payload.reason,
                isPlus: action.payload.isPlus,
                cost: parseFloat(action.payload.quantiy) * parseFloat(action.payload.price)
            })

        },
        removeProject(state, action) {
            let projectID = action.payload.id
            state.projects = state.projects.filter((obj => obj.id != projectID))
        },
        removeDetailCost(state, action) {
            let projectID = action.payload.id
            let index = action.payload.detialIndex
            let project = state.projects.find(obj => obj.id===parseInt(projectID))

            project.costDetails.splice(index,1)
        }
    }
})

export const informationActions = informationSlice.actions;
export default informationSlice;