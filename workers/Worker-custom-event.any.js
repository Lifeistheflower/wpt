// META: global=!default,worker
test(() => {
  var target = self;
  target.addEventListener('custom-event', function(e) {
    done();
  }, true);

  var event = new Event('custom-event');
  target.dispatchEvent(event);
}, 'Test CustomEvents on workers.');
