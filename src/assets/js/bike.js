export class Bike{
  constructor(){

  }
  getBikeData(make){
    return new Promise(function(resolve, reject){
      let req = new XMLHttpRequest();
      const bikeUrl = 'https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + '&location=IP&distance=10&stolenness=stolen';
      req.open('get',bikeUrl ,true);
      req.send();
      req.onload = function(){
        if (req.status === 200) {
          resolve(JSON.parse(req.response));
        } else {
          reject(JSON.parse(req.response));
        }
      };
    });
  }
}


// function getBikeByKeyWord(make){
//   let bikeData = new Promise(function(resolve, reject){
//     let req = new XMLHttpRequest();
//     const bikeUrl = 'https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + '&location=IP&distance=10&stolenness=stolen';
//     req.open('get',bikeUrl ,true);
//     req.send();
//     req.onload = function(){
//       if (req.status === 200) {
//         console.log(req.response);
//         resolve(JSON.parse(req.response));
//       } else {
//         reject(JSON.parse(req.response));
//       }
//     };
//   });
// }
//
// getBikeByKeyWord('Trek');
