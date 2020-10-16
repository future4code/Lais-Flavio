import {Request, Response} from "express";
import { BandDatabase } from "../data/BandDatabase";
import {BaseDatabase} from "../data/BaseDatabase";
import {Authenticator} from "../services/Authenticator";
import {IdGenerator} from "../services/IdGenerator";

export const createBand = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.verify(token);
    const userId = authenticationData.id;

    const idGenerator = new IdGenerator();
    const postId = idGenerator.generate();

    const {bandId, name, genero, nameResponser} = req.body;
    const creationDate = Date.now();

    const bandDatabase = new BandDatabase();
    await bandDatabase.createBand(
      bandId,
      name,
      genero,
      nameResponser,
    );
    res.status(200).send({
      message: 'Create band have sucess!'
    })
  } catch (e) {
    res.status(400).send({
      message: e.message
    })
  }
  await BaseDatabase.destroyConnection();
};