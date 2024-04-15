import Country, { CreateCountryInput } from "../entities/country.entity";
import { Repository } from "typeorm";
import datasource from "../db";

export default class CountryService {
    db: Repository<Country>;
    constructor() {
      this.db = datasource.getRepository(Country);
    }
    async findCountry(code: string) {
        const country = await this.db.findOneBy({ code });
        if (!country) {
          throw new Error("Ce pays n'existe pas");
        }
        return country;
      }
    async listCountries() {
        return this.db.find();
      }
    async createCountry({ code, name, flag }: CreateCountryInput) {
        const newCountry = this.db.create({ code, name, flag});
        return await this.db.save(newCountry);
      }
  
  
  
    
  }
  