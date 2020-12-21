export default function mainPage(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        response.render('index', { items });
      })
      .catch((error) => console.log(error));
  };

  return {
    index,
  };
}
