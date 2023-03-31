function display_chart() {
    var chart_cc993ae8a9d4410e8e91540ffb9c6ee9 = echarts.init(
        document.getElementById('cc993ae8a9d4410e8e91540ffb9c6ee9'), 'white', {renderer: 'canvas'});
    var option_cc993ae8a9d4410e8e91540ffb9c6ee9 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "aria": {
            "enabled": false
        },
        "color": [
            "#5470c6",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#73c0de",
            "#3ba272",
            "#fc8452",
            "#9a60b4",
            "#ea7ccc"
        ],
        "series": [
            {
                "type": "line",
                "name": "\u7528\u7535\u91cf",
                "connectNulls": false,
                "xAxisIndex": 0,
                "symbolSize": 4,
                "showSymbol": true,
                "smooth": true,
                "clip": true,
                "step": false,
                "data": [
                    [
                        "00:00",
                        300
                    ],
                    [
                        "01:15",
                        280
                    ],
                    [
                        "02:30",
                        250
                    ],
                    [
                        "03:45",
                        260
                    ],
                    [
                        "05:00",
                        270
                    ],
                    [
                        "06:15",
                        300
                    ],
                    [
                        "07:30",
                        550
                    ],
                    [
                        "08:45",
                        500
                    ],
                    [
                        "10:00",
                        400
                    ],
                    [
                        "11:15",
                        390
                    ],
                    [
                        "12:30",
                        380
                    ],
                    [
                        "13:45",
                        390
                    ],
                    [
                        "15:00",
                        400
                    ],
                    [
                        "16:15",
                        500
                    ],
                    [
                        "17:30",
                        600
                    ],
                    [
                        "18:45",
                        750
                    ],
                    [
                        "20:00",
                        800
                    ],
                    [
                        "21:15",
                        700
                    ],
                    [
                        "22:30",
                        600
                    ],
                    [
                        "23:45",
                        400
                    ]
                ],
                "hoverAnimation": true,
                "label": {
                    "show": false,
                    "margin": 8
                },
                "logBase": 10,
                "lineStyle": {
                    "show": true,
                    "width": 2,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                },
                "areaStyle": {
                    "opacity": 0
                },
                "zlevel": 0,
                "z": 0,
                "markArea": {
                    "silent": false,
                    "label": {
                        "show": true,
                        "margin": 8
                    },
                    "data": [
                        [
                            {
                                "name": "\u65e9\u9ad8\u5cf0",
                                "xAxis": "07:30"
                            },
                            {
                                "xAxis": "10:00"
                            }
                        ],
                        [
                            {
                                "name": "\u665a\u9ad8\u5cf0",
                                "xAxis": "17:30"
                            },
                            {
                                "xAxis": "21:15"
                            }
                        ]
                    ]
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "\u7528\u7535\u91cf"
                ],
                "selected": {
                    "\u7528\u7535\u91cf": true
                },
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14,
                "backgroundColor": "transparent",
                "borderColor": "#ccc",
                "borderWidth": 1,
                "borderRadius": 0,
                "pageButtonItemGap": 5,
                "pageButtonPosition": "end",
                "pageFormatter": "{current}/{total}",
                "pageIconColor": "#2f4554",
                "pageIconInactiveColor": "#aaa",
                "pageIconSize": 15,
                "animationDurationUpdate": 800,
                "selector": false,
                "selectorPosition": "auto",
                "selectorItemGap": 7,
                "selectorButtonGap": 10
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "axis",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "cross"
            },
            "showContent": true,
            "alwaysShowContent": false,
            "showDelay": 0,
            "hideDelay": 100,
            "enterable": false,
            "confine": false,
            "appendToBody": false,
            "transitionDuration": 0.4,
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            "padding": 5,
            "order": "seriesAsc"
        },
        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "boundaryGap": false,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": [
                    "00:00",
                    "01:15",
                    "02:30",
                    "03:45",
                    "05:00",
                    "06:15",
                    "07:30",
                    "08:45",
                    "10:00",
                    "11:15",
                    "12:30",
                    "13:45",
                    "15:00",
                    "16:15",
                    "17:30",
                    "18:45",
                    "20:00",
                    "21:15",
                    "22:30",
                    "23:45"
                ]
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLabel": {
                    "show": true,
                    "margin": 8,
                    "formatter": "{value} W"
                },
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
        "title": [
            {
                "show": true,
                "text": "\u4e00\u5929\u7528\u7535\u91cf\u5206\u5e03",
                "target": "blank",
                "subtext": "\u7eaf\u5c5e\u865a\u6784",
                "subtarget": "blank",
                "padding": 5,
                "itemGap": 10,
                "textAlign": "auto",
                "textVerticalAlign": "auto",
                "triggerEvent": false
            }
        ],
        "visualMap": {
            "show": true,
            "type": "piecewise",
            "min": 0,
            "max": 100,
            "inRange": {
                "color": [
                    "#50a3ba",
                    "#eac763",
                    "#d94e5d"
                ]
            },
            "calculable": true,
            "inverse": false,
            "splitNumber": 5,
            "dimension": 0,
            "hoverLink": true,
            "orient": "vertical",
            "padding": 5,
            "showLabel": true,
            "itemWidth": 20,
            "itemHeight": 14,
            "borderWidth": 0,
            "pieces": [
                {
                    "lte": 6,
                    "color": "green"
                },
                {
                    "gt": 6,
                    "lte": 8,
                    "color": "red"
                },
                {
                    "gt": 8,
                    "lte": 14,
                    "color": "green"
                },
                {
                    "gt": 14,
                    "lte": 17,
                    "color": "red"
                },
                {
                    "gt": 17,
                    "color": "green"
                }
            ]
        }
    };
    chart_cc993ae8a9d4410e8e91540ffb9c6ee9.setOption(option_cc993ae8a9d4410e8e91540ffb9c6ee9);
}

function display_bar_chart() {
    var chart_fd6321135971407eab7b7da325f341be = echarts.init(
        document.getElementById('fd6321135971407eab7b7da325f341be'), 'white', {renderer: 'canvas'});
    var option_fd6321135971407eab7b7da325f341be = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "aria": {
            "enabled": false
        },
        "color": [
            "#5470c6",
            "#91cc75",
            "#fac858",
            "#ee6666",
            "#73c0de",
            "#3ba272",
            "#fc8452",
            "#9a60b4",
            "#ea7ccc"
        ],
        "series": [
            {
                "type": "bar",
                "name": "\u5546\u5bb6A",
                "legendHoverLink": true,
                "data": [
                    10,
                    20,
                    30,
                    40,
                    50,
                    40
                ],
                "realtimeSort": false,
                "showBackground": false,
                "stackStrategy": "samesign",
                "cursor": "pointer",
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "margin": 8
                }
            },
            {
                "type": "bar",
                "name": "\u5546\u5bb6B",
                "legendHoverLink": true,
                "data": [
                    20,
                    10,
                    40,
                    30,
                    40,
                    50
                ],
                "realtimeSort": false,
                "showBackground": false,
                "stackStrategy": "samesign",
                "cursor": "pointer",
                "barMinHeight": 0,
                "barCategoryGap": "20%",
                "barGap": "30%",
                "large": false,
                "largeThreshold": 400,
                "seriesLayoutBy": "column",
                "datasetIndex": 0,
                "clip": true,
                "zlevel": 0,
                "z": 2,
                "label": {
                    "show": true,
                    "margin": 8
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "\u5546\u5bb6A",
                    "\u5546\u5bb6B"
                ],
                "selected": {
                    "\u5546\u5bb6A": true,
                    "\u5546\u5bb6B": true
                },
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14,
                "backgroundColor": "transparent",
                "borderColor": "#ccc",
                "borderWidth": 1,
                "borderRadius": 0,
                "pageButtonItemGap": 5,
                "pageButtonPosition": "end",
                "pageFormatter": "{current}/{total}",
                "pageIconColor": "#2f4554",
                "pageIconInactiveColor": "#aaa",
                "pageIconSize": 15,
                "animationDurationUpdate": 800,
                "selector": false,
                "selectorPosition": "auto",
                "selectorItemGap": 7,
                "selectorButtonGap": 10
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "showContent": true,
            "alwaysShowContent": false,
            "showDelay": 0,
            "hideDelay": 100,
            "enterable": false,
            "confine": false,
            "appendToBody": false,
            "transitionDuration": 0.4,
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            "padding": 5,
            "order": "seriesAsc"
        },
        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "axisLabel": {
                    "show": true,
                    "rotate": -15,
                    "margin": 8
                },
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": [
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e1",
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e2",
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e3",
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e4",
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e5",
                    "\u540d\u5b57\u5f88\u957f\u7684X\u8f74\u6807\u7b7e6"
                ]
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "show": true,
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
        "title": [
            {
                "show": true,
                "text": "Bar-\u65cb\u8f6cX\u8f74\u6807\u7b7e",
                "target": "blank",
                "subtext": "\u89e3\u51b3\u6807\u7b7e\u540d\u5b57\u8fc7\u957f\u7684\u95ee\u9898",
                "subtarget": "blank",
                "padding": 5,
                "itemGap": 10,
                "textAlign": "auto",
                "textVerticalAlign": "auto",
                "triggerEvent": false
            }
        ]
    };
    chart_fd6321135971407eab7b7da325f341be.setOption(option_fd6321135971407eab7b7da325f341be);
}

function display_pie_charts() {
    var chart_65b8d8879fa84faf94ccdead0c21a2b5 = echarts.init(
        document.getElementById('65b8d8879fa84faf94ccdead0c21a2b5'), 'white', {renderer: 'canvas'});
    var option_65b8d8879fa84faf94ccdead0c21a2b5 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "aria": {
            "enabled": false
        },
        "color": [
            "blue",
            "green",
            "yellow",
            "red",
            "pink",
            "orange",
            "purple"
        ],
        "series": [
            {
                "type": "pie",
                "colorBy": "data",
                "legendHoverLink": true,
                "selectedMode": false,
                "selectedOffset": 10,
                "clockwise": true,
                "startAngle": 90,
                "minAngle": 0,
                "minShowLabelAngle": 0,
                "avoidLabelOverlap": true,
                "stillShowZeroSum": true,
                "percentPrecision": 2,
                "showEmptyCircle": true,
                "emptyCircleStyle": {
                    "color": "lightgray",
                    "borderColor": "#000",
                    "borderWidth": 0,
                    "borderType": "solid",
                    "borderDashOffset": 0,
                    "borderCap": "butt",
                    "borderJoin": "bevel",
                    "borderMiterLimit": 10,
                    "opacity": 1
                },
                "data": [
                    {
                        "name": "\u5c0f\u7c73",
                        "value": 114
                    },
                    {
                        "name": "\u4e09\u661f",
                        "value": 123
                    },
                    {
                        "name": "\u534e\u4e3a",
                        "value": 94
                    },
                    {
                        "name": "\u82f9\u679c",
                        "value": 25
                    },
                    {
                        "name": "\u9b45\u65cf",
                        "value": 138
                    },
                    {
                        "name": "VIVO",
                        "value": 45
                    },
                    {
                        "name": "OPPO",
                        "value": 74
                    }
                ],
                "radius": [
                    "0%",
                    "75%"
                ],
                "center": [
                    "50%",
                    "50%"
                ],
                "label": {
                    "show": true,
                    "margin": 8,
                    "formatter": "{b}: {c}"
                },
                "labelLine": {
                    "show": true,
                    "showAbove": false,
                    "length": 15,
                    "length2": 15,
                    "smooth": false,
                    "minTurnAngle": 90,
                    "maxSurfaceAngle": 90
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "\u5c0f\u7c73",
                    "\u4e09\u661f",
                    "\u534e\u4e3a",
                    "\u82f9\u679c",
                    "\u9b45\u65cf",
                    "VIVO",
                    "OPPO"
                ],
                "selected": {},
                "show": true,
                "padding": 5,
                "itemGap": 10,
                "itemWidth": 25,
                "itemHeight": 14,
                "backgroundColor": "transparent",
                "borderColor": "#ccc",
                "borderWidth": 1,
                "borderRadius": 0,
                "pageButtonItemGap": 5,
                "pageButtonPosition": "end",
                "pageFormatter": "{current}/{total}",
                "pageIconColor": "#2f4554",
                "pageIconInactiveColor": "#aaa",
                "pageIconSize": 15,
                "animationDurationUpdate": 800,
                "selector": false,
                "selectorPosition": "auto",
                "selectorItemGap": 7,
                "selectorButtonGap": 10
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "showContent": true,
            "alwaysShowContent": false,
            "showDelay": 0,
            "hideDelay": 100,
            "enterable": false,
            "confine": false,
            "appendToBody": false,
            "transitionDuration": 0.4,
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0,
            "padding": 5,
            "order": "seriesAsc"
        },
        "title": [
            {
                "show": true,
                "text": "Pie-\u8bbe\u7f6e\u989c\u8272",
                "target": "blank",
                "subtarget": "blank",
                "padding": 5,
                "itemGap": 10,
                "textAlign": "auto",
                "textVerticalAlign": "auto",
                "triggerEvent": false
            }
        ]
    };
    chart_65b8d8879fa84faf94ccdead0c21a2b5.setOption(option_65b8d8879fa84faf94ccdead0c21a2b5);
}