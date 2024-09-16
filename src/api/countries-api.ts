export const getAllCountries: () => Promise<any> = () => {
  return fetch("https://api-paises.pages.dev/paises.json")
    .then((res) => res.json())
    .then((res) => {
      return Object.values(res);
    });
};
