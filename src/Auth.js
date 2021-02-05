import { fireDb } from "./firebase";

export const isLoggedIn = () => {
  const user = fireDb.auth().currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
};
