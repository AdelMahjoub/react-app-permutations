
onmessage = function(e) {
  var str = e.data;
  var arr = str.split('');
  var permutArr = [];
  var temp, position = 0, len = str.length - 1;
  function permutation(position, len){
      if(position === len){
          permutArr.push(arr.map(function(val){return val;}).join('') + "\n");
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
  postMessage(permutArr);
}