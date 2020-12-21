import db from './models/index.mjs';
import items from './controllers/items.mjs';
import selectedItem from './controllers/selectedItem.mjs';
import newItemsView from './controllers/newItemsView.mjs';
import mainPage from './controllers/mainPage.mjs';

export default function routes(app) {
  const ItemsController = items(db);
  app.get('/items', ItemsController.index);

  const newItemsViewController = newItemsView(db);
  app.get('/newItemsView', newItemsViewController.index);

  const mainPageController = mainPage(db);
  app.get('/', mainPageController.index);

  const selectedItemController = selectedItem(db);
  app.get('/items/:id', selectedItemController.index);
}
