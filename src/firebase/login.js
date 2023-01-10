import firebase from "./firebase";
const login = async (email, password) => {
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => alert(err));
  return response.user;
};

export { login };
