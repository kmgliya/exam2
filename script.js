`use strict`;
//1
// fetch('https://jsonplaceholder.typicode.com/posts', {
// method: 'POST',
// body: JSON.stringify({
// title: 'SailorMoon',
// body: 'Galiya',
// userId: 1,
// }),
// headers: {
// 'Content-type': 'application/json; charset=UTF-8',
// },
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

//2
//  async function getResponse(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//      let textContent = await response.text()
//
//
//      console.log(textContent)
// }
// getResponse()

//3
//  const isActivated = true
// const promise = new Promise((resolve,reject) => {
// if(isActivated){
// resolve('Активировано успешно :3 ♥')
// }
// else{
// reject('Произошла ошибка при активации :( ☻')
// }
// })
//
// promise.then( (message) => {
// console.log(message)
// })
//
// promise.catch((error) => {
// console.log(error)
// })
