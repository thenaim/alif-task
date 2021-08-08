import { ActionReducer } from '@ngrx/store';

import { AppState } from '../store/store.state.model';

export const debug = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => (state, action) => {
  const newState = reducer(state, action);
  console.log(`[DEBUG] action: ${action.type}`, {
    payload: (<any>action).payload,
    oldState: state,
    newState,
  });
  return newState;
};
