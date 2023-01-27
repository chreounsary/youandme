import connectMongo from "../../../database/conn";
import Users from "../../../model/user";
import { hash } from "bcryptjs";

export default async function handler(req, res){
  connectMongo().catch(error => res.json({error: 'conection failed..!'}));
  if (req.method === 'POST'){
    if (!req.body) return res.status(404).json({error: "Don't have form data"});
    const { name, email, password, is_active, role } = req.body;
    const checkexisting = await Users.findOne({email});
    if (checkexisting) return res.status(422).json({message: 'User Already Exists..!'});

    //hash password
    Users.create({name, email, password: await hash(password, 12), is_active, role}, function(err, data){
      if (err) return res.status(404).json({error: err.message});
      res.status(201).json({status: true, user: data});
    });
  }else{
    res.status(500).json({message: 'HTTP method not valid only post Accepted'});
  }
}
