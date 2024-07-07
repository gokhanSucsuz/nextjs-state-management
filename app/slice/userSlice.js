import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: ""
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userSet(state, action) {
			state.name = action.payload.name;
			state.email = action.payload.email;
			alert("Success!");
		}
	}
});

export const { userSet } = userSlice.actions;

export default userSlice.reducer;
