// Make a request for all the items
// axios.get('/newItemsView')
//   .then((response) => {
//     // handle success
//     console.log('axios response');
//     console.log(response);
//   })
//   .then(() => {
//     const displayContentBtn = document.body.querySelector('.displayButton');
//     displayContentBtn.addEventListener('click', () => {
//       const content = document.body.querySelector('.displayUponClick');
//       console.log(content, 'content');
//       content.classList.remove('displayUponClick');
//     });
//   })
//   .catch((error) => {
//     // handle error
//     console.log(error);
//   });

// const arrayOfDisplayDivs = document.querySelectorAll('.displayDiv');
// console.log(arrayOfDisplayDivs, 'arrayOfDisplayDivs');
// arrayOfDisplayDivs.forEach((displayDiv) => {
//   // Toggle between showing all the item name complete with show description button
//   displayDiv.classList.toggle('displayDivShow');
//   // For showing description of each item
//   const showDescriptionBtn = document.createElement('BUTTON');
//   showDescriptionBtn.innerHTML = 'Show Description';
//   showDescriptionBtn.addEventListener('click', (event) => {
//     event.target.parentNode.querySelector('.descriptionDiv').classList.toggle('descriptionDivShow');
//     console.log(div.id, 'div');
//   });
//   displayDiv.append(showDescriptionBtn);
// });

const displayBtn = document.querySelector('.displayBtn');
// Click me button
displayBtn.addEventListener('click', () => {
  axios.get('/items')
    .then((response) => {
    // handle success
      response.data.items.forEach((item) => {
        const displayDiv = document.createElement('div');
        displayDiv.classList.add('displayDiv');
        displayDiv.classList.toggle('displayDivShow');
        // For showing description of each item
        const showDescriptionBtn = document.createElement('BUTTON');
        showDescriptionBtn.innerHTML = 'Show Description';
        showDescriptionBtn.addEventListener('click', (event) => {
          console.log(item.id, 'item-id');
          const specificDiv = event.target.parentNode.querySelector('.descriptionDiv');
          if (specificDiv) {
            specificDiv.classList.toggle('descriptionDivShow');
          } else {
            axios.get(`/items/${item.id}`)
              .then((newResponse) => {
                const descriptionDiv = document.createElement('div');
                descriptionDiv.classList.add('descriptionDiv');

                // Append the description to the displayDiv
                descriptionDiv.append(newResponse.data.items[item.id].description);
                displayDiv.append(descriptionDiv);

                console.log(event.target.parentNode.querySelector('.descriptionDiv'));
                console.log(event.target.parentNode.childNodes, 'parentNode');
                console.log(event.target.parentNode.lastChild.text, 'parentNode-2');
              });
          }
        });
        displayDiv.append(showDescriptionBtn);
        const nameDiv = document.createElement('div');
        nameDiv.append(item.name);
        displayDiv.append(nameDiv);
        document.body.append(displayDiv);
      });
    // response.data.items[index].description
    // getElementById = 0
    // append
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
});
