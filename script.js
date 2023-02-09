var url = 'https://inshorts.deta.dev/news?category=all';
var req = new Request(url);
let getNews = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        const mainDiv = document.getElementById("main");
        for(let d of item.data){
        let tag = `<div class="header"><div class="image-header"><img src="${d.imageUrl}" alt="he-he"></div><div class="text-header"><h2 class="title">${d.title}</h2><p class="date">By, ${d.author} | Time: ${d.time} | Date: ${d.date}</p><p class="content">${d.content}</p><a class="a-tag" href="${d.readMoreUrl}">Read More!</a></div></div><hr>`;
        mainDiv.insertAdjacentHTML("afterend",tag);
        }
        
    })
}
getNews();
