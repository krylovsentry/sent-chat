export interface UserState {
  uid: string;
  displayName: string;
}

export const initialUserState: UserState = {
  uid: '',
  displayName: '',
};
