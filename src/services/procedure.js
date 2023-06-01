export const getProceduresApi = async (token, idhistory) => {
  try {
    const request = await fetch(
      `https://vetapp-backend-production.up.railway.app/procedure/history/${idhistory}`,
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

export const createProcedureAPI = async (body) => {
  try {
    const req = await fetch(
      "https://vetapp-backend-production.up.railway.app/procedure",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${body.token}`,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await req.json();
    console.log("data", data);
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.resolve(error);
  }
};
