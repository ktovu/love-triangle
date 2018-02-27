/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var keys = [];
  var result=0;
  for(var a=1;a<=preferences.length;a++){
      keys.push(a);
  }
  for(var a=0;a<preferences.length;a++){
      var k1=keys[a];
      var p1=preferences[a];
      if (p1==0) {continue;}
      var k2=keys[p1-1];
      var p2=preferences[k2-1];
      if (p2==0 || p2==p1) {continue;}
      var k3=keys[p2-1];
      var p3=preferences[k3-1];
      if (p3==0) {continue;}
      if (k1===p3){
          console.log(k1+' = '+p3 );
          preferences[a]=0;
          preferences[k2-1]=0;
          preferences[k3-1]=0;
          result++;
      }
  }
return result;
};
