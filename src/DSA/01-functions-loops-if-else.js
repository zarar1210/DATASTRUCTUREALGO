function eligibleToVote(age){
  if(age<18){
    return false;
  } else{
    return true;
  }
}
console.log(eligibleToVote(22));