/**
 * Created by mac on 2017/2/20.
 */
$(document).ready(function(){
    // 基于准备好的dom，初始化echarts实例
    var dayOrderChart = echarts.init(document.getElementById('dayOrderChart'));
    var dayHostChart = echarts.init(document.getElementById('dayHostChart'));
    var dayNumChart = echarts.init(document.getElementById('dayNumChart'));
    // 指定图表的配置项和数据
    //day order chart
    doc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:70,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '¥{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 11000, 15000, 13000, 12000, 13000, 10000],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    dhc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 2, 4, 2, 6, 12, 8],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    dnc = {
        title: {},
        tooltip: {
            trigger: 'axis'
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['20','21','22','23','24','25','26']
        },
        grid:{
            x:30,
            y:50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        },
        series: [
            {
                name:'信誉额度',
                type:'line',
                data:[0, 5, 6, 7, 4, 7, 8],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    dayOrderChart.setOption(doc,true);
    dayHostChart.setOption(dhc,true);
    dayNumChart.setOption(dnc,true);
})