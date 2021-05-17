// Code your solution in this file!
const distanceFromHqInBlocks = (num) => {
    const distance =  num > 42 ? num - 42 : 42 - num;
    return distance; 
}

const distanceFromHqInFeet = (num) => distanceFromHqInBlocks(num) * 264;

const distanceTravelledInFeet = (num1, num2) => {
   const distance = num1 > num2 ? num1 - num2 : num2-num1;  
   return distance * 264;
}

const calculatesFarePrice = (start, end) =>{
  let cost = distanceTravelledInFeet(start, end);
  if (cost < 400){
      return 0;
  }
  else if (cost >= 400 && cost <= 2000){
     cost = (cost - 400) * 0.02;
     return cost;
  } else if (cost > 2000 && cost <= 2500 ){
      cost = 25;
      return cost;
  } else {
    return `cannot travel that far`
  }
} 