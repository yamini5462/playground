const fs= require('fs');
// const book = {
//  title:"RRR",
//  author:"Rajamouli"
// }

// const jsonBook=JSON.stringify(book);
// fs.writeFileSync("1-json.json",jsonBook)
// console.log(jsonBook)

// const parseData=JSON.parse(jsonBook);
// console.log(parseData.title);


 const dataBuffer=fs.readFileSync('1-json.json');
 const dataJSON= dataBuffer.toString()
 const user=JSON.parse(dataJSON)

 user.name="kalyani",
 user.age=26

 const userJSON= JSON.stringify(user)
 fs.writeFileSync("1-json.json",userJSON)
