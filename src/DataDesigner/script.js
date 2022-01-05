let parse = (response) => { return response.json(); }
let handle = (error) => { throw error; }

let html = (json) => {
   // this will be helpful for adding the side images let imgHTML = '<img src="' + img + '">';
    const upi         = json.userProfileInfo; // this is a list, will require index access with []
    const sbv = json.sideBarVideos;  // this is a list, will require index access with []

    let html = '';
    for(let i = 0; i < sbv.length; i++) {
        const videoNumberFromTop    = sbv[i].videoNumberFromTop;
        const videoName             = sbv[i].videoName;
        const videoImage            = sbv[i].videoImage;
        const amountOfViews         = sbv[i].amountOfViews;
        const artistName            = sbv[i].artistName;
        const dateReleased          = sbv[i].dateReleased;
        const videoLink             = sbv[i].videoLink;
        console.log(videoLink);
        html += '<div id="panel1">';
        html += '<a href="' + videoLink + '" >';
        html += '<img src="' + videoImage + '" id="image2">' + '</a>';
        // everything above is for the image and everything below is for the text
        html +=  '<div class="sideText">';
        html +=  '<div class="videoTitle">' + videoName + '</div>' + '<br>'; 
        html += '<div class="artistName">' + artistName + '</div>';
        html += '<div class="videoViews">' + amountOfViews  + ' views   '  + '  •' + '</div>';
        html += '<div class="videoDate">' + dateReleased + '</div>' + '<br>' + '<br>';
        html += '</div>' + '</div>';


    }
    document.getElementById('right-bar-container').innerHTML = html;
// VideoNumberFromTop
    for(let i = 0; i < sbv.length; i++) {
        let vNumFromTop = sbv[i].videoNumberFromTop;
    }
// VideoName
    for(let i = 0; i < sbv.length; i++) {
        let videoName = sbv[i].videoName;
    }
// VideoImage
    for(let i = 0; i < sbv.length; i++) {
        let videoImage = sbv[i].videoImage;
    }
// AmountOfViews
    for(let i = 0; i < sbv.length; i++) {
        let amountOfViews = sbv[i].amountOfViews;
    }
// artistName
    for(let i = 0; i < sbv.length; i++) {
        let artistName = sbv[i].artistName;
    }
// dateReleased
    for(let i = 0; i < sbv.length; i++) {
        let dateReleased = sbv[i].dateReleased;
    }
}

let subButton = document.getElementById("clicker");
let i = 0;
// this is the subscribe button
subButton.addEventListener('click', function(e) {
    i++;
    if(i%2 == 1) {
            document.getElementById("clicker").style.backgroundColor = "#E8E8E8";
            document.getElementById("clicker").innerText = 'SUBSCRIBED';
            document.getElementById("clicker").style.color = "#585858";
    }
    else {
        document.getElementById("clicker").style.backgroundColor = "#c4302b";
        document.getElementById("clicker").innerText = 'SUBSCRIBE';
        document.getElementById("clicker").style.color = "white";
    }
})

/*

let inverseColor = document.getElementById("inverse");
inverseColor.addEventListener('click', function(e) {
        i++;
    if(i%2 == 1) {
        // this is true
            document.getElementById("").style.backgroundColor = "lightblue";
   
    }
    else {
        // this is false;
        document.getElementById("clicker").style.backgroundColor = "#c4302b";
        document.getElementById("clicker").innerText = 'SUBSCRIBEㅤ';
    }
})


*/


// The invert() function accepts a decimal or percentage number value (from 0 to 1 and 0% to 100%)

fetch('script.json') 
.then(parse)
.then(html)
.catch(handle)
//    width:180px;