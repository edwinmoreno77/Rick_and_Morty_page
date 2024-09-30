const baseUrl = "https://rickandmortyapi.com/api";

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/character/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error capturado en el fetch", error);
  }
};

export const getPagesRickAndMorty = async (page) => {
  try {
    const response = await fetch(`${baseUrl}/character/?page=${page}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("Error capturado en el fetch", error);
  }
};

export const getCharacterByName = async (name) => {
  try {
    const response = await fetch(`${baseUrl}/character/?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log("Error capturado en el fetch", error);
  }
};
