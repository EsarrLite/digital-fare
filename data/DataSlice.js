import { createSlice, current } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
    name: "students",
    initialState: [],
    reducers: {
        searchStudent: (state, action) => {
            state.push(action.payload);
            console.log("Student added:", current(state));
            
        }
    }
})

export const { searchStudent } = studentsSlice.actions;
export default studentsSlice.reducer;