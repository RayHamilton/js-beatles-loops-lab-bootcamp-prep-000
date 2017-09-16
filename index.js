function theBeatlesPlay(mus,inst){
  var arrMusInst = []
  for (var i =0; i < mus.length; i++){
    arrMusInst.push(mus[i]+" plays "+inst[i])
  }
  return arrMusInst
}

function johnLennonFacts(arr){
  var count =0
  while (count < arr.length){
    arr[count] = arr[count]+"!!!"
    count++
  }
  return arr
}
