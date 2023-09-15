import { strapiToken } from "@utils";

export const endpointUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`;

export const queryClientGraphql = async <TData, TVariables>(
  variables?: TVariables,
  query?: string,
): Promise<TData> => {
  const res = await fetch(endpointUrl, {
    method: "POST",
    body: JSON.stringify({ query, variables }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${strapiToken}`,
    },
  });

  const data = await res.json();
  return data.data;
};

export const rqClient = <TData, TVariables>(
  query: string,
  variables?: TVariables,
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(endpointUrl, {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    return data.data;
  };
};
