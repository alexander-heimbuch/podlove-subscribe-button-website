'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

$(document).ready(function () {

  var $button = $('#live-button'),
      buttonConfig = {
    'data-json-data': 'podcastData',
    'data-language': 'de',
    'data-size': 'big',
    'data-color': '#75ad91',
    'data-format': 'cover',
    'data-style': 'filled'
  };

  function changeButtonStyle(style) {
    buttonConfig['data-style'] = style;
    addButton();
  }

  function changeButtonColor(color) {
    buttonConfig['data-color'] = color;
    addButton();
  }

  function changeButtonFormat(format) {
    buttonConfig['data-format'] = format;
    addButton();
  }

  function changeButtonSize(size) {
    buttonConfig['data-size'] = size;
    addButton();
  }

  function eventTargetHandler(e) {
    var target, value;

    if (_typeof(e.target) === 'object') {
      target = e.target;
      if (typeof target.value === 'string') {
        value = target.value;
      }
    } else {
      throw new Error('Input Event erroneous.');
    }

    return value;
  }

  function addButton() {
    var script = generateScript(buttonConfig);
    $button.html(script);
  }

  function generateScript(object) {
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = 'https://cdn.podlove.org/subscribe-button/javascripts/app.js';
    script.className = 'podlove-subscribe-button';

    $.each(object, function (key, value) {
      script.setAttribute(key, value);
    });
    return script;
  }

  function addColorListener() {
    var $colorInput = $('#color');

    $colorInput.bind('input', function (e) {
      var color = eventTargetHandler(e);
      changeButtonColor(color);
    });
  }

  function addFormatListener() {
    var $formatInput = $('input[name=format]');

    $formatInput.on('change', function (e) {
      var format = eventTargetHandler(e);
      changeButtonFormat(format);
    });
  }

  function addSizeListener() {
    var $sizeInput = $('input[name=size]');

    $sizeInput.on('change', function (e) {
      var size = eventTargetHandler(e);
      changeButtonSize(size);
    });
  }

  function addStyleListener() {
    var $styleInput = $('input[name=style]');

    $styleInput.on('change', function (e) {
      var style = eventTargetHandler(e);
      changeButtonStyle(style);
    });
  }

  function init() {
    addButton('red');
    addColorListener();
    addStyleListener();
    addFormatListener();
    addSizeListener();
  }

  init();
});
//# sourceMappingURL=main.js.map
