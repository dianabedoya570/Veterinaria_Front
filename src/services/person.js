export const registerPersonAPI = async (body) => {
  console.log("body Api**", body);
  try {
    const req = await fetch("http://localhost:4000/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${body.token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
