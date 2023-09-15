import fs from "fs";
import fetch from "node-fetch";
import axios from "axios";

export const endpointUrl = `https://strapi.tbeste.nl/graphql`;
export const strapiToken =
  "9d2bb017d92addd19a86d5ed86b72ae38245b97b194536e1ba9a7ec56237071d092a564193aeb2fa4d0f48289d15934991edb04aa8f6ba99480cd6a2bfe689dcb6977e83884bb785bbdf4a3ddcfb4b0c9531f6d12732d276efb01ad4b9299b2c077acda538c2ca5b59f6db265bdb826ddfdbd56c2bfc8733e23eb5b38429732c";

export const GetArticlesDocument = `
query getArticles {
  articles {
    data {
      id
      attributes {
        slug
      }
    }
  }
}`;
const getArticles = async () => {
  const res = await fetch(endpointUrl, {
    method: "POST",
    body: JSON.stringify({ query: GetArticlesDocument }),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${strapiToken}`,
    },
  });

  const data = await res.json();
  return data.data;
};

export const getAllProductGroups = async () => {
  try {
    let url = `http://104.248.200.94/product-group`;

    const res = await axios({
      url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductGroupBySlug = async (slug) => {
  try {
    let url = `http://104.248.200.94/product-group/${slug}/vergelijken?limit=200&offset=0&min_price=0&max_price=99999`;

    const res = await axios({
      url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
function addSitemap(page) {
  const route = page;

  return `<sitemap>
    <loc>${`https://tbeste.nl/${route}`}</loc>
  </sitemap>`;
}
function addPage(page) {
  const route = page;

  return `<url>
    <loc>${`https://tbeste.nl/${route}/`}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
}

async function generateSitemap() {
  if (process.env.ENVIRONMENT === "prod") {
    const blogSlugs = [];
    const postsTable = await getArticles();
    postsTable.articles.data.map((post) =>
      blogSlugs.push(`${post.attributes.slug}`),
    );
    const blogSitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogSlugs.map(addPage).join("\n")}
</urlset>`;

    const productGroupSlugs = [];
    const productGroups = await getAllProductGroups();
    productGroups.map((productGroup) =>
      productGroupSlugs.push(`products-${productGroup.slug}.xml`),
    );
    const productGroupsSitemap = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${productGroupSlugs.map(addSitemap).join("\n")}
</sitemapindex>`;

    fs.writeFileSync("public/blog_1.xml", blogSitemap);
    fs.writeFileSync("public/products_1.xml", productGroupsSitemap);

    for (const [, prodGrp] of productGroups.entries()) {
      const productsSlugs = [];
      const productGroup = await getProductGroupBySlug(prodGrp.slug);
      productGroup.products.map((product) =>
        productsSlugs.push(`${product.slug}`),
      );
      const productSitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${productsSlugs.map(addPage).join("\n")}
</urlset>`;

      fs.writeFileSync(`public/products-${prodGrp.slug}.xml`, productSitemap);
    }
  }
}

generateSitemap();
