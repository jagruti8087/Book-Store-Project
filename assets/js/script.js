
// let arrow = document.querySelectorAll(".fa-angle-down");

// for (var i = 0; i < arrow.length; i++) {

// arrow[i].addEventListener("click", (e)=>{

// let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow

// arrowParent.classList.toggle("showMenu");

// });

// }



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let headerbar = document.querySelector(".header-bar");
let mainsection = document.querySelector(".main-section");
// let btn = document.querySelector("#btn");
btn.onclick = function(){
    sidebar.classList.toggle("active");
    headerbar.classList.toggle("active");
    mainsection.classList.toggle("active");
}



// var dropdown = document.querySelector(".dropdown-btn");
// var i;
// console.log(dropdownContent)
// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function(e) {
//     e.classList.toggle("active");
//     var dropdownContent = e.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }



// chart
// var options = {
//   series: [{
//   name: 'Males',
//   data: [0,10,20,30,40,50
//   ]
// },
// {
//   name: 'Females',
//   data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
    
//   ]
// }
// ],
//   chart: {
//   type: 'bar',
//   height: 340,
//   stacked: true,
//   toolbar: {
//     show: false
//   }
// },
// colors: ['#7b19ad', '#d192d1'],
// plotOptions: {
//   bar: {
//     horizontal: false,
//     barHeight: '80%',
//   },
// },
// dataLabels: {
//   enabled: false
// },
// stroke: {
//   width: 1,
//   colors: ["#fff"]
// },
// legend:{
//   offsetX: -200,
//   offsetY: 10,
//   position: 'top',
// },
// grid: {
//   xaxis: {
//     lines: {
//       show: false
//     }
//   }
// },
// yaxis: {
//   min: -5,
//   max: 5,
//   title: {
//     // text: 'Age',
//   },
// },
// tooltip: {
//   shared: false,
//   x: {
//     formatter: function (val) {
//       return val
//     }
//   },
//   y: {
//     formatter: function (val) {
//       return Math.abs(val) + "%"
//     }
//   }
// },
// // title: {
// //   text: 'Total Revenue',
// //   style: {
// //     // fontSize:  '14px',
// //     // fontWeight:  'bold',
// //     // fontFamily:  undefined,
// //     color:  '#000'
// //   },
// // },
// xaxis: {
//   categories: [
//     ['Jan'],
//     ['Feb'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//   ],
//   labels: {
//     style: {
//       colors: ['#7b19ad'],
//       fontSize: '12px'
//     }
//   }
// },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


var options = {
  series: [{
          name: "Last Year",
          data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5, 20.2]
      },
      {
          name: "Current Year",
          data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4, 38.2]
      },
  ],
  chart: {
      type: "bar",
      height: 310,
      stacked: !0,
      toolbar: {
          show: !1
      }
  },
  plotOptions: {
      bar: {
          horizontal: !1,
          columnWidth: "20%",
          borderRadius: 6
      }
  },
  dataLabels: {
      enabled: !1
  },
  legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      fontWeight: 400,
      fontSize: "8px",
      offsetX: 0,
      offsetY: 0,
      markers: {
          width: 9,
          height: 9,
          radius: 4
      }
  },
  stroke: {
      show: !0,
      width: 2,
      colors: ["transparent"]
  },
  grid: {
      show: !1
  },
  colors: ["#9767FD", "#dfe2e6"],
  // responsive: [{
  //   breakpoint: 480,
  //   options: {
  //     legend: {
  //       position: 'bottom',
  //       offsetX: -10,
  //       offsetY: 0
  //     }
  //   }
  // }],
  xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
          "Dec"
      ],
      axisTicks: {
          show: !1
      },
      axisBorder: {
          show: !0,
          strokeDashArray: 1,
          height: 1,
          width: "100%",
          offsetX: 0,
          offsetY: 0
      }
  },
  yaxis: {
      show: !1
  },
  fill: {
      opacity: 1
  },
};

var finaceChart = new ApexCharts(document.querySelector("#finaceState_bar"), options);
finaceChart.render();


// chart2
var options = {
  series: [78],
  chart: {
  height: 300,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -145,
    endAngle: 150,
    dataLabels: {
      name: {
        fontSize: '16px',
        color: '#7b19ad',
        offsetY: 20
      },
      value: {
        offsetY: -20,
        fontSize: '22px',
        color: '#7b19ad',
        formatter: function (val) {
          return val + "%";
        }
      }
     
    }
  }
},

fill: {
  colors: ['#7b19ad'],
  type: 'gradient',
  gradient: {
      shade: 'light',
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
  },
  background:{
    borderColor: '#fff',
  },
},

stroke: {
  show:true,
  colors: undefined,
  width: 9,
  dashArray: 9
},
labels: ['Growth'],
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();


// chart3
var options = {
  series: [35, 45, 10, 30],
  chart: {
  type: 'donut',
 width:200,
    size: '35%',

  toolbar: {
    show: false
  },
},
fill: {
  colors: ['#5ddb2b', '#7b19ad', 'grey','#c5ebed']
},
dataLabels: {
  enabled: false},
  legend: {
    show:false,
    showForSingleSeries: false,
    floating: false,
    labels: {
      colors: undefined,
      useSeriesColors: false
  },
  },
 
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 50
    },
   
    
  }
}],

};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();


function appendData() {
var arr = chart.w.globals.series.slice()
arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
return arr;
}

function removeData() {
var arr = chart.w.globals.series.slice()
arr.pop()
return arr;
}

function randomize() {
return chart.w.globals.series.map(function() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
})
}




//  profitreport
        var optionsSpark2 = {
          series: [{
            data: [25, 66, 41, 89, 63]
        }],
          chart: {
          type: 'area',
          height: 90,
          width:210,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          opacity: 0,
        },
        yaxis: {
          min: 0
        },
        colors: ['#7b19ad'],
        // title: {
        //   text: '$235,312',
        //   offsetX: 0,
        //   style: {
        //     fontSize: '24px',
        //   }
        // },
        // subtitle: {
        //   text: 'Expenses',
        //   offsetX: 0,
        //   style: {
        //     fontSize: '14px',
        //   }
        // }
        };

        var chartSpark2 = new ApexCharts(document.querySelector("#chart-spark2"), optionsSpark2);
        chartSpark2.render();



// revenue chart

        var options = {
          series: [{
          data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
          chart: {
          height:105,
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        colors: ['#7b19ad','#d192d1'],
        
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show:false
        },
        legend: {
          show: false
        },
        yaxis: {
          show:false
        },
        xaxis: {
          categories: [
            ['M'],
            ['T'],
            ['W'],
            ['T'],
            ['F'],
            ['S'],
            ['S'], 
          ],
          labels: {
            style: {
              colors: ['#7b19ad'],
              fontSize: '12px'
            }
          }
        },axisBorder: {
          show: true,
          color:'#fff'
      },
        };

        var revenuechart = new ApexCharts(document.querySelector("#revenuechart"), options);
        revenuechart.render();




        // totalbalanceChart
var options = {
  series: [{
      name: "Net Profit",
      data: [30, 25, 45, 30, 55, 55]
  }],
  chart: {
      type: "area",
      height: 270,
      offsetY: 0,
      toolbar: {
          show: false
      },
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {},
  legend: {
      show: false
  },
  dataLabels: {
      enabled: false
  },
  fill: {
      type: "solid",
      opacity: 0.2
  },
  stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: ["#9767FD", "#E5ECFF"]
  },
  xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
          show: false
      },
      axisTicks: {
          show:true
      },
      labels: {
          show: false,
          style: {
              fontSize: "12px"
          }
      },
      crosshairs: {
          show: false,
          position: "front",
          stroke: {
              color: ["#9767FD", "#E5ECFF"],
              width: 1,
              dashArray: 3
          }
      },
      tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
              fontSize: "12px"
          }
      },
  },
  yaxis: {
      min: 0,
      max: 60,
      labels: {
          show: false,
          style: {
              fontSize: "12px"
          }
      }
  },
  states: {
      normal: {
          filter: {
              type: "none",
              value: 0
          }
      },
      hover: {
          filter: {
              type: "none",
              value: 0
          }
      },
      active: {
          allowMultipleDataPointsSelection: false,
          filter: {
              type: "none",
              value: 0
          }
      }
  },
  tooltip: {
      style: {
          fontSize: "12px"
      },
      y: {
          formatter: function(val) {
              return "$" + val + " thousands";
          },
      },
  },
  colors: ["#9767FD", "#E5ECFF"],
  markers: {
      colors: ["#9767FD", "#E5ECFF"],
      strokeColor: ["#9767FD", "#E5ECFF"],
      strokeWidth: 3
  },
};
var totalbalanceChart = new ApexCharts(document.querySelector("#totalbalanceChart"), options);
totalbalanceChart.render();




// orderchart

var options = {
  series: [{
      name: "Net Profit",
      data: [30, 25, 45, 30, 55, 55]
  }],
  chart: {
      type: "area",
      height: 80,
      offsetY: 0,
      toolbar: {
          show: false
      },
      zoom: {
          enabled: false
      },
      sparkline: {
          enabled: true
      }
  },
  plotOptions: {},
  legend: {
      show: false
  },
  dataLabels: {
      enabled: false
  },
  fill: {
      type: "solid",
      opacity: 0.2
  },
  markers: {

   show:true,
    size: 5,
    
    discrete: [{
    
    seriesIndex: 0,
    
    // For dataPointIndex: 0 there is no discrete marker at all!
    
    dataPointIndex: 0,
    
    // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
    
    fillColor: "#fff",
    
    strokeColor: "#5055be",
    
    size: 5
    
    }
    
    ]
    
    },
  // stroke: {
  //     curve: "smooth",
  //     show: true,
  //     width: 3,
  //     colors: ["#9767FD", "#E5ECFF"]
  // },
  xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      },
      labels: {
          show: false,
          style: {
              fontSize: "12px"
          }
      },
      crosshairs: {
          show: false,
          position: "front",
          stroke: {
              color: ["#9767FD", "#E5ECFF"],
              width: 1,
              dashArray: 3
          }
      },
      tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
          style: {
              fontSize: "12px"
          }
      },
  },
  yaxis: {
      min: 0,
      max: 60,
      labels: {
          show: false,
          style: {
              fontSize: "12px"
          }
      }
  },
  states: {
      normal: {
          filter: {
              type: "none",
              value: 0
          }
      },
      hover: {
          filter: {
              type: "none",
              value: 0
          }
      },
      active: {
          allowMultipleDataPointsSelection: false,
          filter: {
              type: "none",
              value: 0
          }
      }
  },
  tooltip: {
      style: {
          fontSize: "12px"
      },
      y: {
          formatter: function(val) {
              return "$" + val + " thousands";
          },
      },
  },
  colors: ["#9767FD", "#E5ECFF"],
  markers: {
      colors: ["#9767FD", "#E5ECFF"],
      strokeColor: ["#9767FD", "#E5ECFF"],
      strokeWidth: 3
  },
};
var orderchart = new ApexCharts(document.querySelector("#orderchart"), options);
orderchart.render();


// expenses this week

var options7 = {
    series: [45],
    chart: {
    type: 'radialBar',
    width: 100,
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: false
      }
    }
  }
  };

  var expenses = new ApexCharts(document.querySelector("#expenses"), options7);
  expenses.render();





