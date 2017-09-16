function theBeatlesPlay(mus,inst){
  var arrMusInst = []
  for (var i =0; i < mus.length; i++){
    arrMusInst.push(mus[i]+" plays "+inst[i])
  }
  return arrMusInst
}
