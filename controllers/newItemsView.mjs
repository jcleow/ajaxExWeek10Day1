export default function items(db) {
  const index = (request, response) => {
    db.Item.findAll()
      .then((items) => {
        // console.log(items, 'items-1 returns an array');
        // console.log({ items }, 'items-2');
        response.render('newItemsView', { items });
      })
      .catch((error) => console.log(error));
  };

  return {
    index,
  };
}
