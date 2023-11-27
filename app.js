function create_item(text, subtext, link){
    mainList = document.getElementById("mainlist");
    listItem = document.createElement("li");
    if(link!=""){
        listLink = document.createElement("a",{href: link});
    }
    else{
        listLink = document.createElement("a").appendChild(document.createTextNode(text));
    }
    // var content = document.createTextNode(text);
    // listLink.appendChild(content);
    if(subtext!=""){
        subtextelem = document.createElement("small").appendChild(document.createTextNode(subtext));
        listItem.appendChild(document.createElement("br"));
        listItem.appendChild(subtextelem);
    }
}

function main(){
    const TOPICS = [
        ["A Message from Warren E. Buffett"],
        ["News Releases from Berkshire Hathaway and from Warren Buffett","Updated November 21, 2023"],
        ["Annual & Interim Reports", "Updated November 4, 2023"],
        ["Annual Meeting Information", "Updated February 28, 2023"],
        ["Link to SEC Filings"],
        ["Berkshire Hathaway Energy Investor Presentations"],
        ["Special Letters from Warren & Charlie RE:Past, Present and Future"],
        

    ]
}

