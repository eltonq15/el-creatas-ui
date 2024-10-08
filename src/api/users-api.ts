export type UserParams = {
  email: string;
  fullName: string;
  phone: string;
  phoneCountry: string;
};

export type UserData = {
  createdAt: string;
  email: string;
  fullName: string;
  id: string;
  phone: string;
  phoneCountry: string;
};

export const getUserByEmail = (email: string): Promise<UserData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/users?email=${email}`).then(
    (res) => res.json()
  );
};

export const getUserById = (id: string): Promise<UserData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/users/${id}`).then((res) =>
    res.json()
  );
};

export const createUser = (data: UserParams): Promise<UserData> => {
  return fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((res) => res.json())
    .catch((err) => new Error(err));
};
