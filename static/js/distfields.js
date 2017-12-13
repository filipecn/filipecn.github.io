$( document ).ready(function() {
var $window = $(window);
// Make an instance of two and place it on the page.
var elem = document.getElementById('myCanvas');
var params = { width: 1000, height: 600, autostart: true };
var two = new Two(params).appendTo(elem);
var background = two.makeGroup();
var foreground = two.makeGroup();

var grid = new GRID.Grid(two, 50, two.width, two.height);

points = [];
points.push(two.makeCircle(400, 300, 5));
points[0].fill = '#FF0000';
points[0].noStroke();
points.push(two.makeCircle(600, 300, 5));
points[1].fill = '#FF0000';
points[1].noStroke();

two.update();

var pointsGroup = two.makeGroup(points);
_.each(points, function(p) {
  addInteractivity(p);
});

var levelSet = new LEVELSET.LevelSet(two, 50, two.width / 2, two.height / 2);

two.update();

var mSquares = new MSQUARES.MSquares(two);

  //levelSet.computeDistances(points);
  //mSquares.update(two, levelSet, [75]);
two.update();

two.bind('update', function(frameCount) {
  //background.remove(gjk.group);
  levelSet.computeDistances(points);
  mSquares.update(two, levelSet, [45, 85, 145, 198], [
    'rgba(255, 0, 0, 0.6)',
    'rgba(255, 128, 40, 0.4)',
    'rgba(255, 128, 40, 0.3)',
    'rgba(255, 128, 40, 0.2)'
  ], [8, 6, 5, 3]);
  //levelSet.computeDistances(points);
  //background.add(gjk.group);
}).play();

function addInteractivity(shape) {
  var offset = shape.parent.translation;
  var drag = function(e) {
    e.preventDefault();
    var x = e.pageX - offset.x - $('#myCanvas').offset().left;
    var y = e.pageY - offset.y - $('#myCanvas').offset().top;
    shape.translation.set(Math.round(x / levelSet.h) * levelSet.h, Math.round(y / levelSet.h) * levelSet.h);
  };
  var touchDrag = function(e) {
    e.preventDefault();
    var touch = e.originalEvent.changedTouches[0];
    drag({
      preventDefault: _.identity,
      clientX: touch.pageX,
      clientY: touch.pageY
    });
    return false;
  };
  var dragEnd = function(e) {
    e.preventDefault();
    $window
      .unbind('mousemove', drag)
      .unbind('mouseup', dragEnd);
  };
  var touchEnd = function(e) {
    e.preventDefault();
    $(window)
      .unbind('touchmove', touchDrag)
      .unbind('touchend', touchEnd);
    return false;
  };
  $(shape._renderer.elem)
    .css({
      cursor: 'pointer'
    })
    .bind('mousedown', function(e) {
      e.preventDefault();
      $window
        .bind('mousemove', drag)
        .bind('mouseup', dragEnd);
    })
    .bind('touchstart', function(e) {
      e.preventDefault();
      $(window)
        .bind('touchmove', touchDrag)
        .bind('touchend', touchEnd);
      return false;
    });
}

});
