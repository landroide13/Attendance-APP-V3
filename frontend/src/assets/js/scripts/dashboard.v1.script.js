"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
$(document).ready(function () {
  // Chart in Dashboard version 1
  var echartElemBar = document.getElementById('echartBar');
  if (echartElemBar) {
    var echartBar = echarts.init(echartElemBar);
    echartBar.setOption({
      legend: {
        borderRadius: 0,
        orient: 'horizontal',
        x: 'right',
        data: ['Online', 'Offline']
      },
      grid: {
        left: '8px',
        right: '8px',
        bottom: '0',
        containLabel: true
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },
      xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisTick: {
          alignWithLabel: true
        },
        splitLine: {
          show: false
        },
        axisLine: {
          show: true
        }
      }],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '${value}'
        },
        min: 0,
        max: 100000,
        interval: 25000,
        axisLine: {
          show: false
        },
        splitLine: {
          show: true,
          interval: 'auto'
        }
      }],
      series: [{
        name: 'Online',
        data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
        label: {
          show: false,
          color: '#0168c1'
        },
        type: 'bar',
        barGap: 0,
        color: '#bcbbdd',
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        }
      }, {
        name: 'Offline',
        data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
        label: {
          show: false,
          color: '#639'
        },
        type: 'bar',
        color: '#7569b3',
        smooth: true,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: -2,
            shadowColor: 'rgba(0, 0, 0, 0.3)'
          }
        }
      }]
    });
    $(window).on('resize', function () {
      setTimeout(function () {
        echartBar.resize();
      }, 500);
    });
  }

  // Chart in Dashboard version 1
  var echartElemPie = document.getElementById('echartPie');
  if (echartElemPie) {
    var echartPie = echarts.init(echartElemPie);
    echartPie.setOption({
      color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },
      series: [{
        name: 'Sales by Country',
        type: 'pie',
        radius: '60%',
        center: ['50%', '50%'],
        data: [{
          value: 535,
          name: 'USA'
        }, {
          value: 310,
          name: 'Brazil'
        }, {
          value: 234,
          name: 'France'
        }, {
          value: 155,
          name: 'BD'
        }, {
          value: 130,
          name: 'UK'
        }, {
          value: 348,
          name: 'India'
        }],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    });
    $(window).on('resize', function () {
      setTimeout(function () {
        echartPie.resize();
      }, 500);
    });
  }

  // Chart in Dashboard version 1
  var echartElem1 = document.getElementById('echart1');
  if (echartElem1) {
    var echart1 = echarts.init(echartElem1);
    echart1.setOption(_objectSpread(_objectSpread({}, echartOptions.lineFullWidth), {
      series: [_objectSpread(_objectSpread({
        data: [30, 40, 20, 50, 40, 80, 90]
      }, echartOptions.smoothLine), {}, {
        markArea: {
          label: {
            show: true
          }
        },
        areaStyle: {
          color: 'rgba(102, 51, 153, .2)',
          origin: 'start'
        },
        lineStyle: {
          color: '#663399'
        },
        itemStyle: {
          color: '#663399'
        }
      })]
    }));
    $(window).on('resize', function () {
      setTimeout(function () {
        echart1.resize();
      }, 500);
    });
  }
  // Chart in Dashboard version 1
  var echartElem2 = document.getElementById('echart2');
  if (echartElem2) {
    var echart2 = echarts.init(echartElem2);
    echart2.setOption(_objectSpread(_objectSpread({}, echartOptions.lineFullWidth), {
      series: [_objectSpread(_objectSpread({
        data: [30, 10, 40, 10, 40, 20, 90]
      }, echartOptions.smoothLine), {}, {
        markArea: {
          label: {
            show: true
          }
        },
        areaStyle: {
          color: 'rgba(255, 193, 7, 0.2)',
          origin: 'start'
        },
        lineStyle: {
          color: '#FFC107'
        },
        itemStyle: {
          color: '#FFC107'
        }
      })]
    }));
    $(window).on('resize', function () {
      setTimeout(function () {
        echart2.resize();
      }, 500);
    });
  }
  // Chart in Dashboard version 1
  var echartElem3 = document.getElementById('echart3');
  if (echartElem3) {
    var echart3 = echarts.init(echartElem3);
    echart3.setOption(_objectSpread(_objectSpread({}, echartOptions.lineNoAxis), {
      series: [{
        data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
        lineStyle: _objectSpread({
          color: 'rgba(102, 51, 153, 0.8)',
          width: 3
        }, echartOptions.lineShadow),
        label: {
          show: true,
          color: '#212121'
        },
        type: 'line',
        smooth: true,
        itemStyle: {
          borderColor: 'rgba(102, 51, 153, 1)'
        }
      }]
    }));
    $(window).on('resize', function () {
      setTimeout(function () {
        echart3.resize();
      }, 500);
    });
  }
});