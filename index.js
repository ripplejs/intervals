module.exports = function(View) {

  View.on('before mount', function(){
    this.intervals = [];
  });

  View.on('unmount', function(){
    this.intervals.map(clearInterval);
  });

  View.prototype.setInterval = function(){
    this.intervals.push(setInterval.call(null, arguments));
  };

};