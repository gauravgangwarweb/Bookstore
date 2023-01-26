export const sendData = async (url, data = {}) => {
  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };

  await fetch(url, post);
};

export const deleteData = async (url, id) => {
  const delMethod = {
    method: 'DELETE',
  };
  await fetch(`${url}/${id}`, delMethod);
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};
