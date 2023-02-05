import XBase from "@/layouts/XBase";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextPageWithLayout } from "@/layouts/types";
import { graphQLClient } from "@/gql/client";
import { ALL_COUNTRIES_CODE, GET_COUNTRY_BY_CODE } from "@/gql/queries";
import { GetCountryByCodeQuery } from "@/gql/schema/graphql";

type CountryProps = {
  country: Exclude<GetCountryByCodeQuery["country"], undefined | null>;
};

const Country: NextPageWithLayout<CountryProps> = ({ country }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-md border-2 border-solid border-green-800 bg-forestGreen p-5">
        <p>Name: {country.name}</p>
        <p>Code: {country.code}</p>
        <p>Emoji: {country.emoji}</p>
        <div>
          {country.languages.length === 1 ? (
            <p>Language: {country.languages[0].name}</p>
          ) : (
            <>
              <p className="inline">Languages: </p>
              {country.languages.map((lang, index) => (
                <p className="inline" key={lang.name}>
                  {lang.name}
                  {index !== country.languages.length - 1 ? ", " : null}
                </p>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Country.getLayout = (page) => {
  return <XBase>{page}</XBase>;
};

/**
 * It fetches all the countries from the GraphQL API and returns an array of objects with the country
 * code as the parameter
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await graphQLClient.request(ALL_COUNTRIES_CODE);

  const paths = countries.map((country) => ({
    params: { code: country.code.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

/**
 * It fetches all country data from the GraphQL API using the country code as the parameter.
 * And return it as props
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const code = params!.code as string;

  const { country } = await graphQLClient.request(GET_COUNTRY_BY_CODE, {
    code: code.toUpperCase(),
  });

  return {
    props: {
      country,
    },
  };
};

export default Country;
