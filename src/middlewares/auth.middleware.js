import { getAuth } from "firebase/auth";
export default async function authUser(req, res, next){
    try {
      const currentUser =  getAuth().currentUser;
      req.uid = currentUser.uid;
      next();
    } catch(error) {
        console.log(error)
      res.status(500).send(error);
    }
  }