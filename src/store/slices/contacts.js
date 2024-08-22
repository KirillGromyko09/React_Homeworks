import { createSlice } from "@reduxjs/toolkit";

const contact = createSlice({
  name: "contact",
  initialState: {},
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: Date.now() });
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const index = state.findIndex((contact) => contact.id === action.payload);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});
export const { addContact, deleteContact, updateContact } = contact.actions;
export default contact.reducer;
