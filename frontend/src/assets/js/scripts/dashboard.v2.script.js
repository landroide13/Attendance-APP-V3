"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
$(document).ready(function () {
  $('#user_table').DataTable();
  $('#sales_table').DataTable();

  // Chart in Dashboard version 2
  var echartElem4 = document.getElementById('echart4');
  if (echartElem4) {
    var echart4 = echarts.init(echartElem4);
    echart4.setOption(_objectSpread(_objectSpread(_objectSpread({}, echartOptions.lineNoAxis), {
      series: [{
        data: [40, 80, 20, 90, 30, 80, 40],
        lineStyle: {
          color: 'rgba(102, 51, 153, .86)',
          width: 3,
          shadowColor: 'rgba(0, 0, 0, .2)',
          shadowOffsetX: -1,
          shadowOffsetY: 8,
          shadowBlur: 10
        },
        label: {
          show: true,
          color: '#212121'
        },
        type: 'line',
        smooth: true,
        itemStyle: {
          borderColor: 'rgba(69, 86, 172, 0.86)'
        }
      }]
    }), {}, {
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    }));
    $(window).on('resize', function () {
      setTimeout(function () {
        echart4.resize();
      }, 500);
    });
  }
  // Chart in Dashboard version 2
  var echartElem5 = document.getElementById('echart5');
  if (echartElem5) {
    var echart5 = echarts.init(echartElem5);
    echart5.setOption(_objectSpread(_objectSpread({}, echartOptions.defaultOptions), {
      legend: {
        show: true,
        bottom: 0
      },
      series: [_objectSpread(_objectSpread({
        type: 'pie'
      }, echartOptions.pieRing), {}, {
        label: echartOptions.pieLabelCenterHover,
        data: [{
          name: 'Completed',
          value: 80,
          itemStyle: {
            color: '#663399'
          }
        }, {
          name: 'Pending',
          value: 20,
          itemStyle: {
            color: '#ced4da'
          }
        }]
      })]
    }));
    $(window).on('resize', function () {
      setTimeout(function () {
        echart5.resize();
      }, 500);
    });
  }
});