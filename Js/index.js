//07c5a5df16944341a074805b7681060c

let newsAccordian = document.getElementById('newsAccordian');

let source = 'bbc-news'
let key = '04bda2ce2f0f40598adeec2fbab8a707'

let xhr = new XMLHttpRequest();

 xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        console.log(this)
        let json = JSON.parse(this.responseText);
        console.log(this)
        let newsHTML = '';
        let articles = json.articles;
        articles.forEach(function(element,index) {
            
        
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
    }
}

xhr.send();
