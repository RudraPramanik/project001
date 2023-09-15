export const hostname = process.env.NEXT_PUBLIC_HOSTNAME;
export const strapiHostname = process.env.NEXT_PUBLIC_STRAPI_URL;
export const siteName = "tbeste";
export const environment = process.env.ENVIRONMENT;
export const strapiToken = process.env.PUBLIC_AUTH_TOKEN;
// export const globalRevalidateTiming = 24 * 60 * 60;
export const globalRevalidateTiming = 1;

export const categoriesData = [
  {
    name: "Elektronica",
    path: "/elektronica",
    slug: "elektronica",
    src: "/images/categories/elektronica.svg",
    className: "md:rounded-tl-3xl md:col-span-2",
    imgW: 315,
    imgH: 201,
  },
  {
    name: "Computer",
    path: "/computer",
    slug: "computer",
    src: "/images/categories/computer.svg",
    className: "md:col-span-1",
    imgW: 214,
    imgH: 174,
  },
  {
    name: "Dieren",
    path: "/dieren",
    slug: "dieren",
    src: "/images/categories/dieren.svg",
    className: "md:col-span-1",
    imgW: 176,
    imgH: 189,
  },
  {
    name: "Klussen",
    path: "/klussen",
    slug: "klussen",
    src: "/images/categories/klussen.svg",
    className: "md:rounded-tr-3xl md:row-span-2",
    imgW: 261,
    imgH: 500,
  },
  {
    name: "Kantoor",
    path: "/kantoor",
    slug: "kantoor",
    src: "/images/categories/kantoor.svg",
    className: "md:col-span-1",
    imgW: 167,
    imgH: 195,
  },
  {
    name: "Outdoor",
    path: "/outdoor",
    slug: "outdoor",
    src: "/images/categories/outdoor.svg",
    className: "md:col-span-1",
    imgW: 190,
    imgH: 182,
  },
  {
    name: "Tuin",
    path: "/tuin",
    slug: "tuin",
    src: "/images/categories/tuin.svg",
    className: "md:col-span-2",
    imgW: 364,
    imgH: 191,
  },
  {
    name: "Auto",
    path: "/auto",
    slug: "auto",
    src: "/images/categories/auto.svg",
    className: "md:rounded-bl-3xl md:col-span-1",
    imgW: 157,
    imgH: 165,
  },
  {
    name: "Keuken",
    path: "/keuken",
    slug: "keuken",
    src: "/images/categories/keuken.svg",
    className: "md:col-span-2",
    imgW: 339,
    imgH: 189,
  },
  {
    name: "Kinderen",
    path: "/kinderen",
    slug: "kinderen",
    src: "/images/categories/kinderen.svg",
    className: "md:rounded-br-3xl md:col-span-2",
    imgW: 368,
    imgH: 200,
  },
];

export const services = [
  { name: "Amazon", src: "/images/services/amazon.jpg" },
  { name: "Bol.com", src: "/images/services/bol.jpg" },
  { name: "Coolblue", src: "/images/services/coolblue.jpg" },
  { name: "Markt", src: "/images/services/markt.jpg" },
];
