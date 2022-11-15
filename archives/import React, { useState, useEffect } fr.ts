var canvas = new fabric.Canvas('cvs');
 
canvas.on('mouse:down', function(options) {
  if (options.target) {
    $('#res').text(options.target.type);
  }
});