module.exports = function(View) {

  View.mounted(function(){
    this.intervals = [];
  });

  View.unmounted(function(){
    this.intervals.map(clearInterval);
  });

  View.prototype.setInterval = function(){
    this.intervals.push(setInterval.call(null, arguments));
  };

};