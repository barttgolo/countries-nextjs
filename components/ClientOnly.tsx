import { PropsWithChildren, useEffect, useState } from "react";

/**
 * It renders its children only after the component has been rendered on client side
 *
 *  @source https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
 */
const ClientOnly = ({ children, ...delegated }: PropsWithChildren) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
};

export default ClientOnly;
