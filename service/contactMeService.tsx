export const sendMessageToMe = async (data: any) => {
  return await fetch("/api/contactMe", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      contentType: "application/json",
    },
  });
};
