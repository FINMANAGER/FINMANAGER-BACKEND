import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();
export const signUp = async (req, res) => {
  const { username, password } = req.body;
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    username,
    password
  );
  const user = userCredentials.user;
  user.getIdToken(true).then((token) => {
    res.status(201).cookie("accessToken", token).json({ username: user.email });
  });
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      username,
      password
    );
    if (!userCredentials) throw Error("invalid username or password");
    const logedinUser = userCredentials.user;
    logedinUser.getIdToken(true).then((token) => {
      res
        .status(200)
        .cookie("accessToken", token)
        .json({ username: logedinUser.email });
    });
  } catch (error) {
    res.status(400).json({ errorMessage: "invalid username or password" });
  }
};

export const logOut = async (req, res) => {
  try {
    await signOut(auth).then(() => {
      res.status(204).json({});
    });
  } catch (error) {
    res.status(400).json({ errorMessage: "an error has occured" });
  }
};
