import axios from 'axios';

interface dataType {
  query: string;
}

async function useAxios<T>(data: dataType): Promise<T> {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.request({
      method: 'post',
      baseURL: 'https://localhost:8000/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      data,
    });
    return response.data;
  } catch (err) {
    localStorage.removeItem('token');
    throw new Error(err);
  }
}

export { useAxios };
