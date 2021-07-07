import axios from 'axios';

async function getFileInfo<T>(fileName: string): Promise<T> {
  try {
    const response = await useAxios<T>({
      query: `
    query {
      file(name: "${fileName}") {
        name
        content
      }
    }
  `,
    });

    return response;
  } catch (err) {
    throw new Error(err);
  }
}

async function getFileList<T>(): Promise<T> {
  try {
    const response = await useAxios<T>({
      query: `
      query {
        info {
          list
          lastFile
        }
      }
    `,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

async function saveFile(fileName: string, content: string[]): Promise<void> {
  try {
    await useAxios({
      query: `
    mutation {
      updateFile(name: "${fileName}" content: ${JSON.stringify(content)}){
        msg
      }
    }
  `,
    });
  } catch (err) {
    throw new Error(err);
  }
}

async function saveAsFile(fileName: string, content: string[]): Promise<void> {
  try {
    await useAxios({
      query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify(content)}){
        msg
      }
    }
  `,
    });
  } catch (err) {
    throw new Error(err);
  }
}

async function addNewFile(fileName: string): Promise<void> {
  try {
    await useAxios({
      query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify([''])}){
        msg
      }
    }
  `,
    });
  } catch (err) {
    throw new Error(err);
  }
}
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
    throw new Error(err);
  }
}

export { useAxios, addNewFile, saveAsFile, saveFile, getFileList, getFileInfo };
