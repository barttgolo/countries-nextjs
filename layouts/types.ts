import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

/**
 *  @source https://nextjs.org/docs/basic-features/layouts#with-typescript
 */
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
