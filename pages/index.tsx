import XBase from "@/layouts/XBase";
import { NextPageWithLayout } from "@/layouts/types";
import { useRouter } from "next/router";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="inline-flex">
        <button
          className="rounded-l bg-forestGreen py-2 px-4 font-bold text-gray-800 hover:bg-green-300"
          onClick={() => router.push("/countries")}
        >
          Countries
        </button>
        <button
          className="rounded-r bg-forestGreen py-2 px-4 font-bold text-gray-800 hover:bg-green-300"
          onClick={() => router.push("/profile")}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <XBase>{page}</XBase>;
};

export default Home;
