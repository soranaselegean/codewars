//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//P: array of numbers and a number, positive?, can it be zero?
//R: list with only number of duplicates for each instance
//E: ([1,2,3,1,2,1,2,3], 2) >> [1,2,3,1,2,3]

function deleteNth(arr,n){
    let short = []
    arr.forEach(e => short.filter(el => el === e).length < n ? short.push(e) : short)
    
    return n === 0 ? [] : short
}

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
}