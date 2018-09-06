function onloadFunc(){
    $.ajax({
	url : "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fb4930a830f7494b94815394727f65f1",
	success: function(data){
		console.log(data)
	for (let i=0; i<10; i++) {
		document.querySelector(".main-div").innerHTML += 
		`<div class='news-div'>
                <a href='${data.articles[i].url}'>
		<div class='image-div'>
		<img src='${data.articles[i].urlToImage}'>
        <h1 class="news-title">${data.articles[i].title}</h1>
		</div>
		<p class='news-para'>${data.articles[i].description}</p>
		</div>`
	}
	
}
 })
}
