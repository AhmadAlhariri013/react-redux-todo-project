import { applyMiddleware, compose, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";

// Middleware to save state to localStorage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  const stateToSave = {
    ...state,
    searchTerm: "", // Reset searchTerm when saving
  };
  localStorage.setItem("reduxState", JSON.stringify(stateToSave));
  return result;
};

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

const persistedState = loadState();

// Compose enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  todoReducer,
  persistedState,
  composeEnhancers(applyMiddleware(localStorageMiddleware))
  //   applyMiddleware(localStorageMiddleware),
  //   composeWithDevTools()
);

export default store;
