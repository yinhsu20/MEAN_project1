/* globals _ */
function MyWorldService(p, t){
  this.people = p;
  this.things = t;
  this.getPeople = function(){
    return _.sortBy(this.people, "name");
    //return this.people.sort();
    /*var peopleName = [];
    for(var i=0; i<p.length; i++){
      peopleName.push(p[i].name);
    }
    peopleName.sort();
    return peopleName;*/
  },
  this.active = function(){
    
  }
};