module.exports = function(View) {

  View.created(function(){
    this.intervals = [];
  });

  View.unmounted(function(){
    this.intervals.map(clearInterval);
  });

  View.prototype.setInterval = function(){
    this.intervals.push(setInterval.apply(null, arguments));
  };

};