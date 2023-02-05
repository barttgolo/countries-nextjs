import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com",
  generates: {
    "./gql/schema/": {
      preset: "client",
      documents: "gql/queries.ts",
      plugins: [],
    },
  },
};

export default config;
