export const getProceduresApi = async (token, idhistory) => {
  try {
    const request = await fetch(
      `http://localhost:4000/procedure/history/${idhistory}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await request.json();
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
  }
};
