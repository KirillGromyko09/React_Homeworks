import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const contact = createSlice({
  name: "contact",
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    updateContact: (state, action) => {
      const { id, ...updates } = action.payload;
      const index = state.findIndex((contact) => contact.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updates };
      }
    },
  },
});
export const { addContact, deleteContact, updateContact } = contact.actions;
export default contact.reducer;
