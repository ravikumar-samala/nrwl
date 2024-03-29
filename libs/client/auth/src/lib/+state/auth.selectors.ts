import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const getLoggedInUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);
// const getError = createSelector(
//   getAuthState,
//   (state: AuthState) => state.error
// );

// const getAllAuth = createSelector(
//   getAuthState,
//   getLoaded,
//   (state: AuthState, isLoaded) => {
//     return isLoaded ? state.list : [];
//   }
// );
// const getSelectedId = createSelector(
//   getAuthState,
//   (state: AuthState) => state.selectedId
// );
// const getSelectedAuth = createSelector(
//   getAllAuth,
//   getSelectedId,
//   (auth, id) => {
//     const result = auth.find(it => it['id'] === id);
//     return result ? Object.assign({}, result) : undefined;
//   }
// );

export const authQuery = {
getLoggedInUser
};
