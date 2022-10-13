let sportsOne: string[]=['golf','crieket','tennis','swimming']
/*for(let i=0;i< sportsOne.length; i++){
    console.log(sportsOne[i]);
}
//let's use the simplied for loop dongu ikinci donuyor
for (let tempSport of sportsOne){
    console.log(tempSport);
}*/

for (let tempSport of sportsOne){
  if (tempSport=='crieket'){
    console.log(tempSport + '<< my favarite!');
  }
  else{
    console.log(tempSport);
  }
}
