import connectMongo from "@/database/conn";
import Users from "@/model/user";
import { compare, hash } from "bcryptjs";
export default async function handler(req, res) {
  try {
    connectMongo().catch(error => res.json({error: 'conection failed..!'}));
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const { email, password } = req.body;
    const result = await Users.findOne({email: email});
    const checkPassword = await compare(password, result.password);
    if (!checkPassword || result.email !== email){
      throw new Error("Username or Password does't match!");
    }
    
    if (!result) {
      res.status(404).send({ message: 'User does not exit!' })
      return
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(405).send({ message: `{error.message}` })
    return
  }
};