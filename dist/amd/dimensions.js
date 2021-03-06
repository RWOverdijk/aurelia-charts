define(['exports', './aurelia-charts', 'typer'], function (exports, _aureliaCharts, _typer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.entityDimensions = entityDimensions;
  exports.objectDimensions = objectDimensions;

  var _typer2 = _interopRequireDefault(_typer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function entityDimensions(entity) {
    var metadata = entity.getMeta();
    var types = metadata.fetch('types') || {};

    return Object.keys(entity).map(function (key) {
      return {
        label: function label(datum) {
          return datum ? '' + datum.key + key : '' + key;
        },
        data: (0, _aureliaCharts.prop)(key),
        scale: (0, _aureliaCharts.typeScale)(types[key])
      };
    });
  }

  function objectDimensions(object) {
    return Object.keys(object).map(function (key) {
      return {
        label: function label(datum) {
          return datum ? '' + datum.key + key : '' + key;
        },
        data: (0, _aureliaCharts.prop)(key),
        scale: (0, _aureliaCharts.typeScale)(_typer2.default.detect(object[key]))
      };
    });
  }
});