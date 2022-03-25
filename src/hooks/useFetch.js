const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
  
  const config = {
    baseUrl: "https://jsonplaceholder.typicode.com/users",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const useFetch = (
    dispatch,
    success,
    failed,
    request,
    method,
    body = null,
  ) => {
  
    dispatch({
      type: request
    });
    fetch(config.baseUrl, {
      method: method, 
      headers: config.headers,
      body: body
    })
      .then(checkResponse)
      .then((data) => {
        dispatch({
          type: success,
          data: data,
        });
      }
      )
      .catch((err) => {
        dispatch({
          type: failed
        });
      }
      );
  };
  
  
  export default useFetch
  
  export {
    checkResponse,
    config
  }