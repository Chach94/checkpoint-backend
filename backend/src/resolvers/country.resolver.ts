import Country from "../entities/country.entity";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import CountryService from "../services/country.service";
import { CreateCountryInput } from "../entities/country.entity";

@Resolver()
export default class CountryResolver {

    @Query(() => [Country])
    async countries() {
      const country = await new CountryService().listCountries();
      return country;
    }
  

    @Query(() => Country)
    async findCountry(@Arg("code") code: string) {
    return await new CountryService().findCountry(code);
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CreateCountryInput) {
    const newCountry = await new CountryService().createCountry({ ...data });
    return newCountry;
  }

  
}
