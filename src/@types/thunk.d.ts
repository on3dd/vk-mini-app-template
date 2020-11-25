declare module '@test/thunk' {
  import { ThunkDispatch, ThunkAction } from 'redux-thunk';

  import { S } from './states';
  import A from './AsyncAction';

  export type Dispatch = ThunkDispatch<S, any, any>; // TODO: fix any

  export type Action = ThunkAction<void, S, any, A>; // TODO: fix any
}
