var FollowingDancer = function(top, left, timeBetweenSteps) {
// varpulsingyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this, arguments);
  this.timeBetweenSteps = 60; 
};

FollowingDancer.prototype = Object.create(Dancer.prototype);
FollowingDancer.prototype.constructor = FollowingDancer;

FollowingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var styleSettings = {
    top :'' + window.currentMousePos.y + 'px',
    left :'' + window.currentMousePos.x + 'px'
  };
  
  this.$node.animate(styleSettings, 60);
};

