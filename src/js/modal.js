(() => {
  var modal = document.getElementById('tableOrderModal');
  var btn = document.getElementsByClassName('tableOrderBtn');
  var span = document.getElementsByClassName('tableOrderClose')[0];

  [].forEach.call(btn, function (el) {
    el.onclick = function () {
      modal.style.display = 'block';
    };
  });

  span.onclick = function () {
    modal.style.display = 'none';
  };
})();
(() => {
  var modal = document.getElementById('roomOrderModal');
  var btn = document.getElementsByClassName('roomOrderBtn');
  var span = document.getElementsByClassName('roomOrderClose')[0];

  [].forEach.call(btn, function (el) {
    el.onclick = function () {
      modal.style.display = 'block';
    };
  });

  span.onclick = function () {
    modal.style.display = 'none';
  };
})();
(() => {
  var modal = document.getElementById('roomPriceModal');
  var btn = document.getElementsByClassName('roomPriceBtn');
  var span = document.getElementsByClassName('roomPriceClose')[0];

  [].forEach.call(btn, function (el) {
    el.onclick = function () {
      modal.style.display = 'block';
    };
  });

  span.onclick = function () {
    modal.style.display = 'none';
  };
})();
