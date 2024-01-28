import XBase from "@/layouts/XBase";
import { NextPageWithLayout } from "@/layouts/types";
import Link from "next/link";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="inline-flex">
        <Link
          className="rounded-l bg-forestGreen px-4 py-2 font-bold text-gray-800 hover:bg-green-300"
          href="/countries"
        >
          Countries
        </Link>
        <Link
          className="rounded-r bg-forestGreen px-4 py-2 font-bold text-gray-800 hover:bg-green-300"
          href="/profile"
        >
          Profile
        </Link>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <XBase>{page}</XBase>;
};

export default Home;
