// 1. What is Hydration?
// Hydration = Saving Redux state to storage (e.g., localStorage).
// Happens automatically when state changes.

// 2. What is Rehydration?
// Rehydration = Loading saved state back into Redux when the app starts.
// Restores data after a page refresh or app restart.

// 3. How Redux-Persist Handles This
// Step-by-Step Flow
// App Starts
// PersistGate pauses UI rendering.
// Redux-Persist Checks Storage
// Looks for saved state in localStorage (or AsyncStorage in React Native).
// Rehydration
// If data exists → merges it into Redux.
// If no data → uses initial state.
// UI Renders
// PersistGate releases the UI with the correct state.