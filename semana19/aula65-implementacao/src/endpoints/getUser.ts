import {Request, Response} from "express";
import {BaseDataBase} from "../data/BaseDatabase";
import {UserDatabase} from "../data/UserDatabase";

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id as any;

    const userDataBase = new UserDatabase();
    const user = await userDataBase.getUserById(id);

    res.status(200).send(user
    )
  } catch (e) {
  res.status(400).send({
    message: e.message
  })
  }
  await BaseDataBase.destroyConnection();
};