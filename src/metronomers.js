var Metronomers = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('metro');
  // this.synced = false;
  // this.begin = (new Date().getTime()) - window.hist;
  this.sizeState = 'inflate';
  this.timeBetweenSteps = 1000;
  this.trans = this.timeBetweenSteps,
  this.transBig = 1300;
  this.transSmall = 700;
  this.minSize = '20px'
  this.maxSize = '80px';
  this.$node.css('width', this.minSize);
  this.$node.css('height', this.minSize);
  this.$node.css('background-color', 'black');
};

Metronomers.prototype = Object.create(Dancer.prototype);
Metronomers.prototype.constructor = Metronomers;

Metronomers.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var styleSettings = {
    'transition-duration': '' + (this.trans/1000) + 's',
    width: this.minSize,
    height: this.minSize,
  };

  // this.transDefault = this.timeBetweenSteps;
  // this.timeStart = new Date();

  if (this.sizeState === 'inflate') {
    styleSettings.width = this.maxSize;
    styleSettings.height = this.maxSize;
    this.sizeState = 'deflate';
  } else {
    styleSettings.width = this.minSize;
    styleSettings.height = this.minSize;
    this.sizeState = 'inflate';
  }

  // var mod = this.timeStart.getTime() % this.transDefault;
  var begin = (new Date().getTime()) - window.hist;
  console.log('begin', begin);
  var mod = begin % this.timeBetweenSteps;
  console.log('mod', mod);
  console.log('trans', this.trans);

  // if (!this.synced) { // if they are not synced
  if ((mod > 50) && (mod < this.timeBetweenSteps / 2)) {
    this.trans = this.transSmall;
    if (this.$node.css('background-color') === 'white'){
      this.$node.css({backgroundColor: 'red'});
    } else {
      this.$node.css({backgroundColor: 'violet'});
    }
  } else if ((mod > this.timeBetweenSteps / 2) && (this.timeBetweenSteps - mod) > 50) {
    this.trans = this.transBig;
    if (this.$node.css('background-color') === 'white') {  
    this.$node.css({backgroundColor: 'red'});
    } else {
      this.$node.css({backgroundColor: 'orange'});
    }
    // this.synced = true; // dancer's period should not be adjusted again 
  } else {
    // change the css transition time to timebetween steps
    this.trans = this.timeBetweenSteps;
    this.$node.css({backgroundColor: 'white'});
  }
  // }
  // this.$node.css('transition-duration', this.trans);
  this.$node.css(styleSettings);
};

