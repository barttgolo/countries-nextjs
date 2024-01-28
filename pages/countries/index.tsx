import XBase from "@/layouts/XBase";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "@/layouts/types";
import { graphQLClient } from "@/gql/client";
import { ALL_COUNTRIES } from "@/gql/queries";
import { AllCountriesQuery } from "@/gql/schema/graphql";
import Link from "next/link";

type CountriesProps = {
  countries: AllCountriesQuery["countries"];
};

const Countries: NextPageWithLayout<CountriesProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {countries.map((country) => (
        <Link
          className="rounded-md border-2 border-solid border-green-800 bg-forestGreen p-5 hover:cursor-pointer"
          key={country.code}
          href={`/countries/${country.code.toLowerCase()}`}
        >
          <p>Name: {country.name}</p>
          <p>Code: {country.code}</p>
        </Link>
      ))}
    </div>
  );
};

Countries.getLayout = (page) => {
  return <XBase>{page}</XBase>;
};

/**
 * It fetches countries data from the GraphQL API and returns it as props
 */
export const getStaticProps: GetStaticProps = async () => {
  const { countries } = await graphQLClient.request(ALL_COUNTRIES);

  return {
    props: { countries },
  };
};

export default Countries;
