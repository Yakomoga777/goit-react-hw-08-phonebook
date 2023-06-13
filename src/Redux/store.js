import { configureStore } from '@reduxjs/toolkit';
import { contactSlise } from './slises/contactSlise';
import { filterSlise } from './slises/filterSlise';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const reducer = combineReducers({
//   auth: authSlice.reducer,
//   contacts: contactSlise.reducer,
//   filter: filterSlise.reducer,
// });

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactSlise.reducer,
    filter: filterSlise.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
