const parsingQuery = (filters, url) => {
  const addParams = [];
  for (let item in filters) {
    addParams.push(`${item}=${filters[item]}`);
  }

  return url + addParams.join("&");
};

export default parsingQuery;
