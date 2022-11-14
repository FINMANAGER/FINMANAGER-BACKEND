import { auth } from "firebase";

export const signIn = async (req, res) => {
  const { username, password } = req.body;
  const user = await firestore
    .auth()
    .signInWithEmailAndPassword(username, password);
  const token = user.getIdToken();
  res.status(200).cookie(accessToken, token);
};

export const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userResponse = await auth.createUserWithEmailAndPassword(
      username,
      password
    );
  } catch (error) {
    res.status(400).json({ errorMessage: "an error has occured" });
  }
};

export const signOut = async (req, res) => {
  try {
    await auth.signOut();
  } catch (error) {
    res.status(400).json({ errorMessage: "an error has occured" });
  }
};
