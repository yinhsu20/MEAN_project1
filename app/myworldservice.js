/* globals _ */
function MyWorldService(p, t){
  this.people = p;
  this.things = t;
  this.getPeople = function(active){
    if(active){
      var activePpl = [];
      for(i = 0; i < this.people.length; i++){
        if(this.people[i].active){
          activePpl.push(this.people[i]);
        }
      }
      return _.sortBy(activePpl, "name");
    }else{
      return _.sortBy(this.people, "name");
    }
  },
  this.getPerson = function(name){
    for(i = 0; i < this.people.length; i++){
      if(this.people[i].name == name){
        return this.people[i];
      }
    }
  },
  this.getThings = function(thing){
    return _.sortBy(this.things, "name");
  },
  this.getThing = function(thing){
    for(i = 0; i < this.things.length; i++){
      if(this.things[i].name == thing){
        return this.things[i];
      }
    }
  }
};