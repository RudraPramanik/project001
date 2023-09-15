export const contactDbId = process.env.CONTACT_DATABASE_ID;
export const notionApiKey = process.env.NOTION_API;

const notionBaseApi = "https://api.notion.com/v1";
const fetchConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    "Notion-Version": "2021-05-13",
  },
};

export const createPage = async (args) => {
  const res = await fetch(`${notionBaseApi}/pages`, {
    ...fetchConfig,
    headers: {
      ...fetchConfig.headers,
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(args),
  });
  const data = await res.json();
  return data;
};
