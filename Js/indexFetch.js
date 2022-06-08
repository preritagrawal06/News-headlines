let newsAccordian = document.getElementById('newsAccordian');


function getData() {
    let source = 'bbc-news'
    let key = '04bda2ce2f0f40598adeec2fbab8a707'
    url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let newsHTML = '';
        let articles = data.articles;
        articles.forEach((element,index) => {
            
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordian">
                                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a> </div>
                            </div>
                        </div>`
            newsHTML += news;
        });
        newsAccordian.innerHTML = newsHTML;
    });
    
}

getData();