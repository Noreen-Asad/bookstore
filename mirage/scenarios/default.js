export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */


  const author1 = server.create('author', {name: 'DR.MC', country_of_birth: 'America', born:'1968'});
  const author2 = server.create('author', {name: 'Enid Blyton', country_of_birth: 'England', born:'1968'});
  const author3 = server.create('author', {name: 'J.K Rowling', country_of_birth: 'America', born:'1965'});
  const book1 = server.create('book', {image_url:"/assets/crabbythecrab.jpeg",title: 'Crabby The Crab',author: author1,type:'paperback', price:'20', numberinstock:'10'});
  const book2 = server.create('book', {image_url:"/assets/lili.jpeg",title: 'Lily The Little Mermaid', author:author2,type: 'paperback',price:'2', numberinstock:'10'});
  const book3 =server.create('book', {image_url:"/assets/somethingtogive.jpeg",title: 'EveryBody Has Something To Give',author:author3, type: 'paperback',price:'20', numberinstock:'10'});


  author1.book = book1;
  author2.book = book2;
  author3.book = book3;
  book1.author = author1;
  book2.author = author2;
  // author1.save();
}