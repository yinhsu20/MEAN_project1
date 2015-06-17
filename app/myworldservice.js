function MyWorldService(p, t){
  this.getPeople = function(){
    var peopleName = [];
    for(var i=0; i<p.length; i++){
      peopleName.push(p[i].name);
    }
    peopleName.sort();
    return peopleName;
  },
  this.active = function(){
    
  }
};