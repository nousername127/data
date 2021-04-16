$(document).ready(function() {
			$('#fullpage').fullpage({
				//options here
				autoScrolling:true,
				scrollHorizontally: true,
				keyboardScrolling:true,
				paddingTop:0,
				navigation:true,
				loopBottom:true,
				loopTop:true
			});
		
			//methods
			//$.fn.fullpage.setAllowScrolling(false);
		});

// 指定图表的配置项和数据
// chart1.setOption({
// 	series: [{
// 		name: '国家级博士后工作站之三大科创高地分布',
// 		radius:"100%",
// 		type:"pie",
// 		data:[
// 		]
// 	}]
// })

function getPieData(url,title,subTitle,chart){
	$.get(url).done(function (data) {
		console.log(data);
		chart.setOption({
			title:{
				text:title,
				subtext:subTitle,
				x:'center',
				textStyle:{
					fontSize:15,
					fontWeight:'bold',
					color:'white'
				},
				subtextStyle:{
					color:'grey'
				}
			},
			// tooltip:{
			// 	trigger:'item',
			// 	formatter:"{a} <br/>{b} : {c} ({d}%)"
			// },
			// label:{
			// 	show:true,
			// 	textStyle:{
			// 		color:'red'
			// 	}
			// },
			tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			series: [{
				title:'title',
				radius:'70%',
				type:"pie",
				data:data,
				itemStyle:{ 
					normal:{ 
					    label:{ 
						  show: true,
						  formatter: '{b} : {c} ({d}%)' ,
						  textStyle:{
							  color:'white'
						  }
						}, 
						  labelLine :{show:true} 
					} 
				}
			}],
			lable:{
				textStyle:{
					fontSize:1
				}
			}
		})
	})
}

function getBarData(chart){
	chart.setOption({
		title:{
			text:'浙江省在站博士后为留学人员情况分布',
			x:'center',
			textStyle:{
				fontSize:15,
				fontWeight:'bold',
				color:'white'
			}
		},
		legend:{
			data:['人数'],
			x:'center',
			y:'bottom',
			textStyle:{
				color:'white'
			}
		},
		xAxis:{
			data:["美国","英国","日本","印度","澳大利亚","德国","法国","韩国","其他国家","中国澳门","中国台湾","中国香港"],
			axisLabel:{
				show:true,
				textStyle:{
					color:'white'
				},
				interval:0
			}
		},
		yAxis:{
			// show:true,
			// data:[66,61,60,60,32,31,31,29,210,6,2,32]
			axisLabel:{
				show:true,
				textStyle:{
					color:'white'
				}
			}
		},
		series: [{
			name:'人数',
			type:'bar',
			data:[66,61,60,60,32,31,31,29,210,6,2,32],
			textStyle:{
				color:'white'
			}
		}]
	})
}

// 基于准备好的dom，初始化echarts实例
var chart = echarts.init(document.getElementById('chart1'));
getPieData('./assets/json/chart1.json','国家级博士后工作站之三大科创高地分布','',echarts.init(document.getElementById('chart1')));
getPieData('./assets/json/chart2.json','浙江省博士后工作站之三大科创高地分布','',echarts.init(document.getElementById('chart2')));
getPieData('./assets/json/chart3.json','城西科创大走廊企业分布','总计31家（国家站10家，省站21家）',echarts.init(document.getElementById('chart3')));
getPieData('./assets/json/chart4.json','浙江省上市公司中工作站分布','',echarts.init(document.getElementById('chart4')));
getPieData('./assets/json/chart5.json','各地市企业博士后工作站招收人数','',echarts.init(document.getElementById('chart5')));
getPieData('./assets/json/chart6.json','浙江省目前在站博士后年龄结构分布','',echarts.init(document.getElementById('chart6')));
getPieData('./assets/json/chart7.json','浙江省在站博士后为外籍情况分布','',echarts.init(document.getElementById('chart7')));
getPieData('./assets/json/chart8.json','男女比例','',echarts.init(document.getElementById('chart8')));
getBarData(echarts.init(document.getElementById('chart9')))




