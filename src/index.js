exports.min = function min (arr) {
  if(arr === undefined || arr.length === 0) {return 0;}
  else{
    var min = arr[0];
    arr.forEach(function(item){
      if (item < min)
        min = item;
    });
    return min;
  }
}

exports.max = function max (arr) {
  if(arr === undefined || arr.length === 0) {return 0;}
  else{
    var max = arr[0];
    arr.forEach(function(item){
      if (item > max)
        max = item;
    });
    return max;
  }
}

exports.avg = function avg (arr) {
  return (arr === undefined || arr.length === 0) ? 0 : arr.reduce((summ,item) => summ+item, 0) / arr.length;
}
