import XBase from "@/layouts/XBase";
import { NextPageWithLayout } from "@/layouts/types";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import ClientOnly from "@/components/ClientOnly";
import { GetProfileQuery } from "@/gql/schema/graphql";
import { GET_PROFILE } from "@/gql/queries";

type ProfileProps = {
  country: Exclude<GetProfileQuery["country"], undefined | null>;
};

const Profile = ({ country }: ProfileProps) => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="hover: cursor-pointer rounded-md border-2 border-solid  border-green-800 bg-forestGreen p-5"
        onClick={() =>
          router.push({
            pathname: "/countries/[code]",
            query: { code: country.code.toLowerCase() },
          })
        }
      >
        <p>Name: {country.name}</p>
        <p>Code: {country.code}</p>
      </div>
    </div>
  );
};

/**
 * `useQuery` hook fetch the data from the GraphQL API.
 * If there's an error, show an error message.
 * If the data is loading, show a spinner.
 * If the data is loaded, show the `Profile` component.
 *
 */
const ProfileDataWrapper = () => {
  const { data, error } = useQuery(GET_PROFILE, {
    variables: { code: "PL" },
  });

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-5xl text-red-600">Error!</p>
      </div>
    );
  }

  if (!data?.country) {
    return <Spinner />;
  }

  return <Profile country={data.country} />;
};

const ProfileClientOnlyWrapper: NextPageWithLayout = () => (
  <ClientOnly>
    <ProfileDataWrapper />
  </ClientOnly>
);

ProfileClientOnlyWrapper.getLayout = (page) => {
  return <XBase>{page}</XBase>;
};

export default ProfileClientOnlyWrapper;
