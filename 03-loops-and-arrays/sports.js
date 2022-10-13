var sportsOne = ['golf', 'crieket', 'tennis', 'swimming'];
/*for(let i=0;i< sportsOne.length; i++){
    console.log(sportsOne[i]);
}
//let's use the simplied for loop dongu ikinci donuyor
for (let tempSport of sportsOne){
    console.log(tempSport);
}*/
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == 'crieket') {
        console.log(tempSport + '<< my favarite!');
    }
    else {
        console.log(tempSport);
    }
}
