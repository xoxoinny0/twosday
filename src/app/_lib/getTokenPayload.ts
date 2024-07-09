// url token에서 session을 가져오는 함수
export const getSessionByToken = async (token: string): Promise<Session> => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/was/auth/session", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const body = await res.json();

  if (!res.ok) throw new Error(body.message);

  return body;
};