import { createPage, contactDbId } from "@adapters/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { Name, Email, Content } = req.body;
  const newContact = await createPage({
    parent: { database_id: contactDbId },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: Name,
            },
          },
        ],
      },
      Email: {
        rich_text: [
          {
            text: {
              content: Email,
            },
          },
        ],
      },
      Content: {
        rich_text: [
          {
            text: {
              content: Content,
            },
          },
        ],
      },
    },
  });

  if (newContact.object === "error") {
    return res.status(200).json({
      ok: false,
      data: newContact,
    });
  } else {
    return res.status(200).json({
      ok: true,
      data: newContact,
    });
  }
}
