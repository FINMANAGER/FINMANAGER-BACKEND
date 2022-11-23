import { getAuth } from "firebase/auth";
export default async function authUser(req, res, next){
    try {
      const currentUser =  await getAuth().currentUser;
      req.uid = currentUser.uid;
      req.email = currentUser.email;
      next();
    } catch(error) {
        console.log(error)
      res.status(500).send(error);
    }
  }