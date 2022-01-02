export async function getProperties() {
  let res;

  await fetch('/properties.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      res = json;
    })
    .catch(err => {
      console.log(err);
      res = null;
    });

  return res;
}