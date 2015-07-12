var MonsterDancer = function(top, left, timeBetweenSteps){
  // varpulsingyDancer = makeDancer(top, left, timeBetweenSteps);
  Dancer.apply(this, arguments);
  this.sizeState = 'inflate';
  this.timeBetweenSteps = Math.floor((Math.random() * 100) + 10);;
  // var borderColors = ['green', 'purple', 'grey', 'pink', 'orange'];
  // var randomNumber = Math.floor( Math.random() * borderColors.length);
  // this.$node.css('border-color', borderColors[randomNumber]);
  this.$node = $('<img class="monsterscale" src="monster1.png">');
  this.setPosition(top, left);

  // this.$node.css('background-image', 'url(monster1.png)');
};
MonsterDancer.prototype = Object.create(Dancer.prototype);
MonsterDancer.prototype.constructor = MonsterDancer;

MonsterDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var widthPace;
  var topPace;
  var width = this.$node.css('width').split('p')[0];

  if (width > 48) {
    this.sizeState = 'deflate';
  //min size
  } else if (width < 12) {
    this.sizeState = 'inflate';
  }
  if (this.sizeState === 'inflate') {
    widthPace = '+=1px';
    topPace = '-=0.5px'
  } else {
    widthPace = '-=1px';
    topPace = '+=0.5px'
  }
  
  var styleSettings = {
    width: widthPace,
    height: widthPace,
    top: topPace,
    left: topPace
  };
  
  this.$node.css(styleSettings);
  // console.log($('monsterscale');
};