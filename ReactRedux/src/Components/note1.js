// Reducers use Immer to turn mutations into immutability (via drafts).
// Selectors need stable state references → createDraftSafeSelector (inside RTK’s createSelector) fixes draft issues.
// Result: You write simple "mutable" code, and Redux stays immutable automatically.
// "Immer lets you cheat. RTK cleans up the mess." 🚀