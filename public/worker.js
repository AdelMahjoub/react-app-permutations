
onmessage = function(e) {
    console.time("worker done");
    var response = {};
  var str = e.data;
  var arr = str.split('');
  var permutArr = [];
  var temp, position = 0, len = str.length - 1;
  function permutation(position, len){
      if(position === len){
          permutArr.push(arr.map(function(val){return val;}).join(''));
      }else{
          for(var i = position; i<= len; i++){
              temp = arr[i];
              arr[i] = arr[position];
              arr[position] = temp;
              permutation(position+1,len);
              temp = arr[i];
              arr[i] = arr[position];
              arr[position] = temp;
          }
      }
  }
  permutation(position,len);

  permutArr.forEach(function(value, i) {
    response[i+1] = value;
  });
  postMessage(response);
  console.timeEnd("worker done");
}