import { nanoid } from "nanoid";
import slugify from "slugify";
import * as spinTax from "mel-spintax";
// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535

export const spinify = (
  content: string,
  {
    product_name,
    product_plural,
    product_count,
    post_title,
    category_name,
    author_name,
  }: {
    product_name?: string;
    product_plural?: string;
    product_count?: string;
    post_title?: string;
    category_name?: string;
    author_name?: string;
  },
) => {
  return spinTax.unspin(
    content
      .replace(/product.name/g, product_name)
      .replace(/product.plural/g, product_plural)
      .replace(/product.count/g, product_count)
      .replace(/date.year/g, new Date().getFullYear().toString())
      .replace(
        /date.month/g,
        new Date().toLocaleString("nl", { month: "short" }),
      )
      .replace(/post.title/g, post_title)
      .replace(/category.name/g, category_name)
      .replace(/author.name/g, author_name),
  );
};
export function stripHtml(html: any) {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export function insertToArray(arr, index, item) {
  arr.splice(index, 0, item);
}

export function isOdd(number: number) {
  return number % 2 == 0;
}

export function omitFromObject(obj, ...props) {
  const result = { ...obj };
  props.forEach(function (prop) {
    delete result[prop];
  });
  return result;
}

// a function that paginate a list of items into pages of a given size (default 10) and a given number of pages (default 5) and return a list of pages and the current page number (default 1) and the total number of pages (default 1) and the total number of items (default 0) and the current page items (default []) and the current page start index (default 0) and the current page end index (default 0) and the current page items count (default 0)

export function paginator<T>(
  items: T,
  pageSize = 10,
  pageNumber = 1,
  pageCount = 1,
) {
  const totalPages = Math.ceil((items as any).length / pageSize);
  const pages = [];
  const startPage = Math.max(pageNumber - Math.floor(pageCount / 2), 1);
  const endPage = Math.min(startPage + pageCount - 1, totalPages);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = Math.min(
    startIndex + pageSize - 1,
    (items as any).length - 1,
  );
  const currentPageItems = (items as any).slice(startIndex, endIndex + 1);
  const currentPageStartIndex = startIndex + 1;
  const currentPageEndIndex = endIndex + 1;
  const currentPageItemsCount = currentPageItems.length;
  for (let i = startPage; i <= endPage; i++) {
    pages.push({
      number: i,
      isCurrent: i === pageNumber,
      isFirst: i === 1,
      isLast: i === totalPages,
      isEllipsis: i > startPage && i < endPage,
    });
  }
  return {
    pages,
    pageNumber,
    totalPages,
    totalItems: (items as any).length,
    currentPageItems,
    currentPageStartIndex,
    currentPageEndIndex,
    currentPageItemsCount,
  };
}

export const jsxToString = (component: any, counter = 0) => {
  const type = component.type.name;
  const props = component.props;
  let propsString = "";
  for (const key in props) {
    if (key !== "children") {
      const propValue = props[key];
      let value = "";
      if (propValue instanceof Object) {
        value = `{${JSON.stringify(propValue).replace(/['"]+/g, "")}}`;
      } else {
        value = `"${propValue}"`;
      }
      propsString += ` ${key}=${value}`;
    }
  }
  if (props.children) {
    counter += 2;
    const children = jsxToString(props.children, counter);
    return `<${type}${propsString}>
${Array(counter).join(" ")}  ${children}
${Array(counter).join(" ")}</${type}>`;
  }
  return `<${type}${propsString} />`;
};

export const isExternal = (url: string) => {
  if (typeof window !== "undefined") {
    const host = window.location.host;

    const linkHost = (function (url) {
      if (/^https?:\/\//.test(url)) {
        // Absolute URL.
        // The easy way to parse an URL, is to create <a> element.
        // @see: https://gist.github.com/jlong/2428561
        const parser = document.createElement("a");
        parser.href = url;

        return parser.hostname;
      } else {
        // Relative URL.
        return window.location.hostname;
      }
    })(url);

    return host !== linkHost;
  }
};
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

export const dotify = (text: string, maxLimit: number) => {
  if (text.length > maxLimit) {
    return text.substring(0, maxLimit - 3) + "...";
  }
  return text;
};

export const removeDuplicates = (originalArray, prop) => {
  const newArray = [];
  const lookupObject = {};

  for (const i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (const i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
};

// a typescript helper function to map over an object
export const mapObject = <T, U>(
  obj: { [key: string]: T },
  callback: (value: T, key: string) => U,
) => {
  return Object.keys(obj).map((key) => callback(obj[key], key));
};
export const encodeGetParams = (p: any) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");
// sort array of objects by a number property called depth_level
export function sortByObjectProp<T>(arr: T[], key: keyof T): T[] {
  return arr.sort((a, b) => {
    return a[key as string] - b[key as string];
  });
}
// a function check if a percentage is between a range
export const isPercentageBetween = (
  percentage: number,
  min: number,
  max: number,
): boolean => {
  return percentage >= min && percentage <= max;
};

// a function that calculate the percentage of a number in a range of numbers
export const calculatePercentage = (
  number: number,
  range: number[],
): number => {
  const [min, max] = range;
  return ((number - min) / (max - min)) * 100;
};
// a function that calculate ten steps between two numbers
export const calculateSteps = (start: number, end: number) => {
  const steps = [];
  const step = (start - end) / 10;
  for (let i = 0; i < 10; i++) {
    steps.push(start - step * i);
  }
  return steps;
};

export const uniqueArray = (array: any[], key: any) => {
  return [...new Map(array.map((x) => [key(x), x])).values()];
};

export const filtredProducts = (items: any[], checked: any[]) => {
  return items.filter((item) =>
    checked.map((check) => check.merk).includes(item.merk),
  );
};

export const isEven = (num: number) => num % 2 === 0;

export const arrayRotate = <T>(array: T[]) => {
  return [...array.slice(1, array.length), array[0]];
};
// export const spinTax = (textData: string) => {
//   let text = textData;
//   let matches: any, options: any, random: any;
//   const regEx = new RegExp(/{([^{}]+?)}/);
//   while ((matches = regEx.exec(text)) !== null) {
//     options = matches[1].split("|");
//     random = Math.floor(Math.random() * options.length);
//     text = text.replace(matches[0], options[random]);
//     return text;
//   }
// };
export const splitMulti = (str, tokens): string[] => {
  const tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
};
export const nanofy = () => {
  return nanoid();
};
export const getStrapiImage = (url: string) => {
  // return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  return `${url}`;
};

export const mySlugify = (term: string) => {
  return slugify(term, {
    lower: true,
  });
};

export const findNestedObjectIndexes = (
  array: any[],
  searchTerm: string,
  firstNestedArr: string,
  secondNestedArr: string,
) => {
  let first: number, second: number, third: number;

  array.filter((cat, i) => {
    cat[firstNestedArr].filter((subcat: any, j: number) => {
      subcat[secondNestedArr].filter((subsubcat: any, k: number) => {
        if (subsubcat.name.toLowerCase() == searchTerm) {
          first = i;
          second = j;
          third = k;
          return true;
        } else {
          return false;
        }
      });
    });
  });

  return { first, second, third };
};

export const dateFormat = (date: Date) => {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export const capitalize = (text: string) => {
  const firstCodeUnit = text[0];

  if (firstCodeUnit < "\uD800" || firstCodeUnit > "\uDFFF") {
    return text[0].toUpperCase() + text.slice(1);
  }

  return text.slice(0, 2).toUpperCase() + text.slice(2);
};

export const paginate = (
  totalItems: number,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10,
) => {
  // calculate total pages
  const totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startPage: number, endPage: number;
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1;
    endPage = totalPages;
  } else {
    // total pages more than max so calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // calculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems);

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i,
  );

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > startPage;

  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  // return object with all pager properties required by the view
  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
    hasNext,
    hasPrev,
    nextPage,
    prevPage,
  };
};

function attrString(attrs) {
  const buff = [];
  for (let key in attrs) {
    buff.push(key + '="' + attrs[key] + '"');
  }
  if (!buff.length) {
    return "";
  }
  return " " + buff.join(" ");
}

function stringify(buff, doc) {
  switch (doc.type) {
    case "text":
      return buff + doc.content;
    case "tag":
      buff +=
        "<" +
        doc.name +
        (doc.attrs ? attrString(doc.attrs) : "") +
        (doc.voidElement ? "/>" : ">");
      if (doc.voidElement) {
        return buff;
      }
      return buff + doc.children.reduce(stringify, "") + "</" + doc.name + ">";
    case "comment":
      buff += "<!--" + doc.comment + "-->";
      return buff;
  }
}

export const stringifyHtml = (doc) => {
  return doc.reduce(function (token: any, rootEl: any) {
    return token + stringify("", rootEl);
  }, "");
};
