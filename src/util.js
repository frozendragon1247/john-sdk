export const makeFilter = ({
  limit,
  page,
  offset,
  sort,
  match,
  include,
  exists,
  regex,
  symbol,
}) => {
  return `?limit=${limit}&page=${page}&offset=${offset}${
    sort ? `&sort=${sort}` : ``
  }${match ? "&" + match : ""}${include ? "&" + include : ""}${
    exists ? "&" + exists : ""
  }${regex ? "&" + regex : ""}${symbol ? "&" + symbol : ""}`;
};
