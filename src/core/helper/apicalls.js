export const getAllMembers = () => {
  return fetch(`https://ieee-srm-sb.herokuapp.com/api/member`)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.log(e));
};
