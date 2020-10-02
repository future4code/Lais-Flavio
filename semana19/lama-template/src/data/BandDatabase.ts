import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "";

  public async createBand(
    id: string,
    name: string,
    genero: string,
    nameResponser: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          genero,
          nameResponser
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByName(name: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(BandDatabase.TABLE_NAME)
      .where({ name });

    return User.toUserModel(result[0]);
  }

}
