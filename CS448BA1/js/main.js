var SVG_WIDTH = 1200
var WIDTH = 1000;
var HEIGHT = 700;
var CHART_WIDTH = WIDTH - 100;
var CHART_HEIGHT = HEIGHT - 100;
var HORIZONTAL_OFFSET = 100;
var LEGEND_OFFSET_Y = 60;
var TEXT_HEIGHT = 20;
var svg = d3.select("#container").append("svg:svg")
			    .attr("width", SVG_WIDTH)
			    .attr("height", HEIGHT);
var colorScale = d3.scale.category20();
data = [{"ISO_country_code": "USA","Country_name": "US","GDP": 15094000000000.00,"population": 309349000,"Female_count": 271,"Male_count": 260,"Gold_medals": 46,"Silver_medals": 29,"Bronze_medals": 29},
{"ISO_country_code": "CHN","Country_name": "China","GDP": 7298100000000.00,"population": 1338300000,"Female_count": 208,"Male_count": 163,"Gold_medals": 38,"Silver_medals": 27,"Bronze_medals": 23},
{"ISO_country_code": "JPN","Country_name": "Japan","GDP": 5867150000000.00,"population": 127451000,"Female_count": 162,"Male_count": 141,"Gold_medals": 7,"Silver_medals": 14,"Bronze_medals": 17},
{"ISO_country_code": "DEU","Country_name": "Germany","GDP": 3570560000000.00,"population": 81777000,"Female_count": 176,"Male_count": 219,"Gold_medals": 11,"Silver_medals": 19,"Bronze_medals": 14},
{"ISO_country_code": "FRA","Country_name": "France","GDP": 2773030000000.00,"population": 64895000,"Female_count": 148,"Male_count": 187,"Gold_medals": 11,"Silver_medals": 11,"Bronze_medals": 12},
{"ISO_country_code": "BRA","Country_name": "Brazil","GDP": 2476650000000.00,"population": 194946000,"Female_count": 128,"Male_count": 138,"Gold_medals": 3,"Silver_medals": 5,"Bronze_medals": 9},
{"ISO_country_code": "GBR","Country_name": "UK","GDP": 2431590000000.00,"population": 62232000,"Female_count": 269,"Male_count": 287,"Gold_medals": 29,"Silver_medals": 17,"Bronze_medals": 19},
{"ISO_country_code": "ITA","Country_name": "Italy","GDP": 2194750000000.00,"population": 60483000,"Female_count": 122,"Male_count": 159,"Gold_medals": 8,"Silver_medals": 9,"Bronze_medals": 11},
{"ISO_country_code": "RUS","Country_name": "Russia","GDP": 1857770000000.00,"population": 141750000,"Female_count": 227,"Male_count": 208,"Gold_medals": 24,"Silver_medals": 26,"Bronze_medals": 32},
{"ISO_country_code": "IND","Country_name": "India","GDP": 1847980000000.00,"population": 1224615000,"Female_count": 23,"Male_count": 60,"Gold_medals": 0,"Silver_medals": 2,"Bronze_medals": 4},
{"ISO_country_code": "JAM","Country_name": "Jamaica","GDP": 15069767442.00,"population": 2702000,"Female_count": 25,"Male_count": 25,"Gold_medals": 4,"Silver_medals": 4,"Bronze_medals": 4},
{"ISO_country_code": "GEO","Country_name": "Georgia","GDP": 14366566609.00,"population": 4452000,"Female_count": 6,"Male_count": 29,"Gold_medals": 1,"Silver_medals": 3,"Bronze_medals": 3},
{"ISO_country_code": "PRK","Country_name": "North Korea","GDP": 12280000000.00,"population": 24589122,"Female_count": 40,"Male_count": 15,"Gold_medals": 4,"Silver_medals": 0,"Bronze_medals": 2},
{"ISO_country_code": "ARM","Country_name": "Armenia","GDP": 10247788877.00,"population": 3092000,"Female_count": 4,"Male_count": 21,"Gold_medals": 0,"Silver_medals": 1,"Bronze_medals": 2},
{"ISO_country_code": "MNG","Country_name": "Mongolia","GDP": 8557529910.00,"population": 2756000,"Female_count": 13,"Male_count": 16,"Gold_medals": 0,"Silver_medals": 2,"Bronze_medals": 3},
{"ISO_country_code": "BHS","Country_name": "Bahamas","GDP": 7787514000.00,"population": 343000,"Female_count": 11,"Male_count": 15,"Gold_medals": 1,"Silver_medals": 0,"Bronze_medals": 0},
{"ISO_country_code": "MDA","Country_name": "Moldova","GDP": 7000318677.00,"population": 3562000,"Female_count": 10,"Male_count": 12,"Gold_medals": 0,"Silver_medals": 0,"Bronze_medals": 2},
{"ISO_country_code": "TJK","Country_name": "Tajikistan","GDP": 6522200291.00,"population": 6879000,"Female_count": 3,"Male_count": 13,"Gold_medals": 0,"Silver_medals": 0,"Bronze_medals": 1},
{"ISO_country_code": "MNE","Country_name": "Montenegro","GDP": 4550463278.00,"population": 632000,"Female_count": 16,"Male_count": 18,"Gold_medals": 0,"Silver_medals": 1,"Bronze_medals": 0},
{"ISO_country_code": "GRD","Country_name": "Grenada","GDP": 816054092.20,"population": 104000,"Female_count": 4,"Male_count": 6,"Gold_medals": 1,"Silver_medals": 0,"Bronze_medals": 0}];

var id = 0;
for (var i = 0; i < data.length; i++) data[i].id = id++;

function getGDP(d){
    return d.GDP/d.population;
}

function countryCMP(a,b){
    return getMedals(a) > getMedals(b);
}

function getMedals(d){
    return 4*d.Gold_medals + 2*d.Silver_medals + d.Bronze_medals;
}

rectData = [{x:HORIZONTAL_OFFSET , y:0 ,color: "#93B7D1"}]

var x = d3.scale.linear()
         .domain([0, d3.max(data, getGDP)*1.05])
         .rangeRound([HORIZONTAL_OFFSET, CHART_WIDTH]);
var y = d3.scale.linear()
         .domain([0, d3.max(data, getMedals)*1.05])
         .rangeRound([CHART_HEIGHT,0])
         

    
//svg.selectAll("background")
//    .data(data)
//    .enter().append("circle")
//    .attr("cx", function(d){return x(getGDP(d))})
//    .attr("cy", function(d){return y(getMedals(d))})
//    .attr("data-gdp", function(d){return getGDP(d)})
//    .attr("data-medals", function(d){return getMedals(d)})
//    .attr("data-name", function(d){ return d.Country_name})
//    .attr("r", 160)
//    .style("fill", function(d,i){return colorScale(i)});    

svg.selectAll("rect")
    .data(rectData)
    .enter().append("rect")
    .attr("x", function(d){ return d.x})
    .attr("y", function(d){ return d.y})
    .attr("fill", function(d){ return '#F5FFFA'})
    .attr("width", CHART_WIDTH - HORIZONTAL_OFFSET)
    .attr("height", CHART_HEIGHT)
    .style("opacity", .1);
    
svg.selectAll("line")
    .data(x.ticks(10))
    .enter().append("line")
    .attr("class", "cols")
    .attr("x1", x)
    .attr("x2", x) 
    .attr("y1", 0)
    .attr("y2", CHART_HEIGHT)
    .style("stroke", "#ccc");
svg.append("text")
    .text("Gross Domestic Product per Capita")
    .attr("x", 500)
    .attr("y", 660)
    .attr("text-anchor", "middle")
    .attr("class", "axisLabel");

svg.append("text")
    .text("Weighted Medal Count")
    .attr("x", -50)
    .attr("y", 200)
    .attr("class", "axisLabel")
    .attr("transform", "rotate(-90, 50, 200)");
    
svg.selectAll(".rows")
    .data(y.ticks(10))
    .enter().append("line")
    .attr("class", "rows")
    .attr("x1", HORIZONTAL_OFFSET)
    .attr("x2", CHART_WIDTH)
    .attr("y1", y)
    .attr("y2", y)
    .style("stroke", "#ccc");
svg.selectAll(".x-axis")
    .data(x.ticks(10))
    .enter().append("text")
    .attr("class", "x-axis")
    .attr("x", x)
    .attr("y", CHART_HEIGHT)
    .attr("dy", 25)
    .attr("text-anchor", "middle")
    .text(String);
svg.selectAll(".y-axis")
    .data(y.ticks(10))
    .enter().append("text")
    .attr("class", "y-axis")
    .attr("x", HORIZONTAL_OFFSET)
    .attr("y", y)
    .attr("dy", 5)
    .attr("dx", -20)
    .attr("text-anchor", "middle")
    .text(String);
svg.selectAll(".entry")
    .data(data)
    .enter().append("circle")
    .attr("class", "entry")
    .attr("cx", function(d){return x(getGDP(d))})
    .attr("cy", function(d){return y(getMedals(d))})
    .attr("data-gdp", function(d){return getGDP(d)})
    .attr("data-medals", function(d){return getMedals(d)})
    .attr("data-name", function(d){ return d.Country_name})
    //.attr("r", function(d){return Math.sqrt(d.population/Math.PI)/500})
    .attr("r", 9)
    .style("fill", function(d,i){return colorScale(i)});
    
var $legend = svg.selectAll(".legendEl")
        .data(data)
        .enter().append("g")
        .attr("class", "legendEl")
        .attr("transform", function(d, i) { return "translate(950," + (LEGEND_OFFSET_Y + TEXT_HEIGHT * i) + ")"; });
    $legend.append("circle")
        .attr("r", 9)
        .attr("dx", -20)
        .attr("x", -10)
        .attr("y", 0)
        .style("fill", function(d,i){return colorScale(i)});
    $legend.append("text")
        .attr("text-anchor", "left")
        .attr("dx", 0)
        .attr("x",  12)
        .attr("y", 6)
        .text(function(d){ return d.Country_name});

/*d3.json("data/olympics.json", function(d) {
    
});*/
