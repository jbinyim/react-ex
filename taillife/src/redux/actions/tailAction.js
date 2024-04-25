const getTails = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/jbinyim/mydb-json/goolee?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "GET_TAIL_SUCCESS", payload: { data } });
  };
};

export const tailAction = { getTails };
