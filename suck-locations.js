let cheerio = require('cheerio')
let fs = require('fs');


// Syncronously read html in
try {  
    var data = fs.readFileSync('data/view-source_https___tacotimenw.com_find-us_.html', 'utf8');    
} catch(e) {
    console.log('Error:', e.stack);
}


let $ = cheerio.load(data)
let locationList = []; 


// Grab .location-items from dom and capture critical taco details
$('.location-item .caption').each(function(index, element){
   let locationName = $(element).find('h5').text();
   let address = $(element).find('p.small').first().text();
   let hours = $(element).find('p.small').eq(1).text();
   
   locationList.push({
     locationName,
     address,
     hours
   })
});

// Write to timestamped file
fs.writeFileSync(`data/clean-locations.${Date.now()}.json`, JSON.stringify(locationList));
