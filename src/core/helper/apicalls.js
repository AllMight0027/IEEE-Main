export const getAllMembers = () => {
  return fetch(`https://ieee-srm-sb.herokuapp.com/api/member`)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.log(e));
};

export const getAllUpcomingEvents = () => {
  return fetch(`https://ieee-srm-sb.herokuapp.com/api/upcomingevent`)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.log(e));
};

export const getUpcomingEvent = (eventId) => {
  return fetch(`https://ieee-srm-sb.herokuapp.com/api/upcomingevent/${eventId}`)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.log(e));
};
