import { getAllProductGroups } from "@adapters/api";
import { Fzf } from "fzf";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const searchTerm = req.query.q as string;
    const products = await getAllProductGroups();

    const fzf = new Fzf(products.productgroups, {
      // With selector you tell FZF where it can find
      // the string that you want to query on
      selector: (item) => item.name,
    });
    const entries = fzf.find(searchTerm);
    res.status(200).json(entries);
  } catch (error) {
    res.status(400).json({ ok: false, message: "Something went wrong" });
  }
};

export default handler;
