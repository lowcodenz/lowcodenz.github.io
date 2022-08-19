console.log('medium.js initialised');


const RSS_URL = 'https://medium.com/feed/@jasonteunissen';

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
        title = el.querySelector("title").innerHTML;
        title =  title.replace("<![CDATA[", "").replace("]]>", "");
        console.log(title);

        pubDate = el.querySelector("pubDate").innerHTML;
        console.log(pubDate);

        

      html += `
        <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
          <article class="medium">
            <img src="${el.querySelector("image")}" alt="">
            <h3>
              
                ${title}
                
              
            </h2>
            ${pubDate}
            <p class="link">Read this blog on Medium.com</p>
          </article>
        </a>
      `;
      
    });
    // document.body.insertAdjacentHTML("beforeend", html);
    var insertjs = document.getElementById('js-blogs');
    insertjs.insertAdjacentHTML("beforeend", html);
  });


console.log('medium.js finished');