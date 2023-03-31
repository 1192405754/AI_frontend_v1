function display_chart_pie(){
        var chart_8f9962bdf6044158adb11a4fe5fe619a = echarts.init(
            document.getElementById('8f9962bdf6044158adb11a4fe5fe619a'), 'white', {renderer: 'canvas'});
        var option_8f9962bdf6044158adb11a4fe5fe619a = {
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
            "type": "gauge",
            "title": {
                "show": true,
                "offsetCenter": [
                    "0%",
                    "20%"
                ],
                "color": "#ffffff",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontFamily": "sans-serif",
                "fontSize": 24,
                "backgroundColor": "transparent",
                "borderColor": "transparent",
                "borderWidth": 0,
                "borderRadius": 0,
                "padding": 0,
                "shadowColor": "transparent",
                "shadowBlur": 0,
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "overflow": "none",
                "valueAnimation": true
            },
            "detail": {
                "show": true,
                "backgroundColor": "transparent",
                "borderWidth": 0,
                "borderColor": "transparent",
                "offsetCenter": [
                    "0%",
                    "40%"
                ],
                "formatter": "{value}%",
                "color": "#ffffff",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontFamily": "sans-serif",
                "fontSize": 24,
                "borderRadius": 0,
                "padding": 0,
                "shadowColor": "transparent",
                "shadowBlur": 0,
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "overflow": "none",
                "valueAnimation": true
            },
            "name": "\u4e1a\u52a1\u6307\u6807",
            "min": 0,
            "max": 100,
            "splitNumber": 10,
            "center": [
                "50%",
                "50%"
            ],
            "radius": "75%",
            "startAngle": 225,
            "endAngle": -45,
            "clockwise": true,
            "data": [
                {
                    "value": 6.25,
                    "name": "离群概率"
                }
            ],
            "axisLine": {
                "show": true,
                "onZero": true,
                "onZeroAxisIndex": 0,
                "lineStyle": {
                    "show": true,
                    "width": 30,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid",
                    "color": [
                        [
                            0.3,
                            "#67e0e3"
                        ],
                        [
                            0.7,
                            "#37a2da"
                        ],
                        [
                            1,
                            "#fd666d"
                        ]
                    ]
                }
            },
            "progress": {
                "show": false,
                "overlap": true,
                "width": 10,
                "roundCap": false,
                "clip": false
            },
            "anchor": {
                "show": true,
                "showAbove": false,
                "size": 6,
                "icon": "circle",
                "offsetCenter": [
                    0,
                    0
                ],
                "keepAspect": false
            },
            "pointer": {
                "show": true,
                "length": "80%",
                "width": 8
            }
        }
    ],
    "legend": [
        {
            "data": [
                "\u4e1a\u52a1\u6307\u6807"
            ],
            "selected": {
                "\u4e1a\u52a1\u6307\u6807": true
            },
            "show": false,
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
    // "title": [
    //     {
    //         "show": true,
    //         "text": "Gauge-\u4e0d\u540c\u989c\u8272",
    //         "target": "blank",
    //         "subtarget": "blank",
    //         "padding": 5,
    //         "itemGap": 10,
    //         "textAlign": "auto",
    //         "textVerticalAlign": "auto",
    //         "triggerEvent": false
    //     }
    // ]
};
        chart_8f9962bdf6044158adb11a4fe5fe619a.setOption(option_8f9962bdf6044158adb11a4fe5fe619a);
}