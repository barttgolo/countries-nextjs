import { graphql } from "./schema";

/* A GraphQL queries. */

export const ALL_COUNTRIES = graphql(`
  query AllCountries {
    countries {
      code
      name
    }
  }
`);

export const ALL_COUNTRIES_CODE = graphql(`
  query AllCountriesCode {
    countries {
      code
    }
  }
`);

export const GET_COUNTRY_BY_CODE = graphql(`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      name
      code
      emoji
      languages {
        name
      }
    }
  }
`);

export const GET_PROFILE = graphql(`
  query GetProfile($code: ID!) {
    country(code: $code) {
      name
      code
    }
  }
`);
