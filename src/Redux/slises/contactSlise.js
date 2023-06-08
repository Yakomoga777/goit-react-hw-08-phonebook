import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'Redux/slises/operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlise = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      });
  },
  reducers: {
    clearContactList(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  clearContactList,
} = contactSlise.actions;

// extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.rejected]: handleRejected,

//   [addContact.pending]: handlePending,
//   [addContact.rejected]: handleRejected,

//   [deleteContact.pending]: handlePending,
//   [deleteContact.rejected]: handleRejected,

//   //*redusers for GET
//   [fetchContacts.fulfilled](state, action) {
//     state.contacts = action.payload;
//     state.isLoading = false;
//     state.error = null;
//   },

//   //*redusers for POST
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.contacts = [...state.contacts, action.payload];
//   },

//   // *redusers for Delete
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     const index = state.contacts.findIndex(
//       contact => contact.id === action.payload.id
//     );
//     state.contacts.splice(index, 1);
//   },
// },
