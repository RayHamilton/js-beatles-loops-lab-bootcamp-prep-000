function theBeatlesPlay(mus,inst){
  var arrMusInst = []
  for (var i =0; i < mus.length-1; i++){
    arrMusInst.push(mus[i]+" plays "+inst[i])
  }
  return arrMusInst
}
