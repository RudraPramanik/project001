import axios, { Method } from "axios";

const endpointUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const queyClientApiInternal = async <TData, TVariables>(
  path: string,
  variables?: TVariables,
  method: Method = "GET",
): Promise<TData> => {
  try {
    let queries = undefined;
    let headers = undefined;
    let url = `${path}`;
    let data = undefined;

    if (method === "POST") {
      data = variables;
    } else {
      if (variables) {
        queries = variables ? (variables as any).query : null;
        headers = variables ? (variables as any).header : null;
        url = `${endpointUrl}/${path}?${new URLSearchParams(
          queries,
        ).toString()}`;
      }
    }
    const res = await axios({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });

    return res.data;
  } catch (error) {}
};

export const queyClientApi = async <TData, TVariables>(
  path: string,
  variables?: TVariables,
  method: Method = "GET",
): Promise<TData> => {
  try {
    let queries = undefined;
    let headers = undefined;
    let url = `${endpointUrl}/${path}`;
    let data = undefined;

    if (method === "POST") {
      data = variables;
    } else {
      if (variables) {
        queries = variables ? (variables as any).query : null;
        headers = variables ? (variables as any).header : null;
        url = `${endpointUrl}/${path}?${new URLSearchParams(
          queries,
        ).toString()}`;
      }
    }
    const res = await axios({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
    });

    return res.data;
  } catch (error) {}
};

export const queyClient = <TData>(
  path: string,
  variables?: any,
): (() => Promise<TData>) => {
  return async () => {
    for (let param in variables) {
      /* You can get copy by spreading {...variables} */
      if (
        variables[param] === undefined /* In case of undefined assignment */ ||
        variables[param] === null ||
        variables[param] === "" ||
        variables[param]?.length === 0
      ) {
        delete variables[param];
      }
    }
    const res = await fetch(path, {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    return data;
  };
};

export const queyClientApiCustom = async <TData, TVariables>(
  endpointUrl: string,
  path: string,
  variables?: TVariables,
): Promise<TData> => {
  let queries = undefined;
  let headers = undefined;
  let url = `${endpointUrl}/${path}`;

  if (variables) {
    queries = variables ? (variables as any).query : null;
    headers = variables ? (variables as any).header : null;
    url = `${endpointUrl}/${path}?${new URLSearchParams(queries).toString()}`;
  }

  const res = await fetch(url, {
    method: "GET",
    headers,
  });

  const data = await res.json();
  return data;
};
