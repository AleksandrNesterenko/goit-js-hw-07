const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const getGalleryContainer = document.querySelector('#gallery');
  const imageNewArray =[];
  
  images.forEach( function(image) {
   const imageVariable = `<li><img src = "${image.url}" alt = "${image.alt}"  width = "400" height = "250"/></li>`;
   imageNewArray.push(imageVariable);
  });
  // console.log( imageNewArray.join(' '))
  getGalleryContainer.insertAdjacentHTML('afterbegin',imageNewArray.join(' '))
  getGalleryContainer.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-around;");