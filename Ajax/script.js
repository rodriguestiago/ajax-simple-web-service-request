
//window.onload =  function(){
//    displayQuote();
//    
//};



window.onload = getQuote;

//document.addEventListener('DOMContentLoaded', ()=>{ 

const endpoint = 'https://thatsthespir.it/api';

function getQuote() {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.quote);
      
    })
    .catch(function () {
      console.log("An error occurred");
    });
}


function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text'); //select quote-text div
    quoteText.textContent = quote; //write quote in quote-text div
}



//function myfunciop(){
//    getQuote;
//    displayAuthor
//    getAuthor;
//    displayQuote
//}
//window.onload = myfunciop();
////});

//window.onload = start;
//function start(){
//    getQuote();
//    getAuthor();
//}







//window.onload = myFunction;
//
//function myFunction() {
//            alert('ok');
//        }
//  --------------- --     


//--------------------------
//const Http = new XMLHttpRequest();
//const url='https://thatsthespir.it/api';
//Http.open("GET", url);
//Http.send();
//
//Http.onreadystatechange = (e) => {
//  console.log(Http.responseText)
//}----------------------




//  async function getData() 
//        {
//            //await the response of the fetch call
//           let response = await fetch('https://thatsthespir.it/api');
//            //proceed once the first promise is resolved.
//           let data = await response.json()
//            //proceed only when the second promise is resolved
//            return data;
//        }
////call getData function
//getData()
//.then(data => console.log(data));



//fetch('https://thatsthespir.it/api')
//      .then(response => response.json())
//      .then(json => {
//        var radr = JSON.stringify(json)
//        document.getElementById('test').innerHTML = radr;
//      });



//----------working code console log----------------
//document.addEventListener('DOMContentLoaded', ()=>{ 
//const Url = 'https://thatsthespir.it/api';
//
//fetch(Url)
//.then(data=>{return data.json()})
//.then(res=>{console.log(res)})
//
//
//const blockQuote = document.createElement('blockquote');
//document.body.appendChild(blockQuote);
//
//blockQuote.setAttribute("id", "quote");
////    
////    
//});
 //-------------------------   
    
    
    
    
//    
//    fetch('https://thatsthespir.it/api')
//        .then((res) => { return res.json() })
//        .then((data) => {
//            let result = ``;
//            data.forEach((id) => {
//                const { quote, author} = user
//                result +=
//                    `<div>
//                     <h5> ID: ${quote} </h5>
//                         <ul class="w3-ul">
//                             <li> Name : ${author}</li>
//                         </ul>
//                      </div>`;
//                        document.getElementById('quote').innerHTML = result;
//                    });
//                })
//
//})





//let source = document.getElementById("source")
//  let dataImage = source.getAttribute("data-image");
//  let image = document.createElement('blockquote');
//  image.src = dataImage;
//  document.getElementById("target").appendChild(image);
//  source.parentNode.removeChild(source);






















//document.getElementById('quote').addEventListener('onload', getData());


//window.onload=getData();
//
//    const blockQuote = document.createElement('blockquote');
//    document.body.appendChild(blockQuote);
//    blockQuote.setAttribute("id", "quote");
//    
//         function getData(){
//     
//     fetch('https://thatsthespir.it/api')
//        .then((res) => { return res.json() })
//        .then((data) => {
//            let result = ``;
//            data.forEach((id) => {
//                const { quote, author} = user
//                result +=
//                    `<div>
//                     <h5> ID: ${quote} </h5>
//                         <ul class="w3-ul">
//                             <li> Name : ${author}</li>
//                         </ul>
//                      </div>`;
//                        document.getElementById('quote').innerHTML = result;
//                    });
//                })
//   
//};





//-----------------------





//---------------
//document.addEventListener('DOMContentLoaded', ()=>{ 
//    function fetchData() {
//  fetch('https://thatsthespir.it/api')
//        .then( response => response.json() )
//        .then( data => renderQuotes(data) )
//}
//
//function renderQuotes(data) {
//      for (const q of data) {
//          
////Find the container where we attach everything to
//      const quoteUL = document.querySelector('#quote-list');
//          
////Create all necessary elements
//      const quoteLi = document.createElement('li');
//      const blockQuote = document.createElement('blockquote');
//      const p = document.createElement('p');
//      const footer = document.createElement('footer');
//  
////Add appropriate classes and ids. Grab data and insert if needed.
//      quoteLi.className = 'quote-card';          //for styling
//      blockQuote.className = 'blockquote';       //for styling
//      p.className = 'mb-0';                      //for styling
//      footer.className = 'blockquote-footer';    //for styling
//      quoteLi.dataset.id = q.id
//          
//          
////Grab data and insert it into created elements
//      p.innerHTML = q.quote;
//      footer.innerHTML = q.author;
//          
//          
////Append everything to main container
//      blockQuote.append(p, footer, br, hr);
//      quoteLi.append(blockQuote);
//      quoteUL.append(quoteLi);
//      }
//   }
////Call the function that will automatically run renderQuote() also 
//   fetchData();
//})
//-------------------------



//const quote = document.getElementById('quote');
//const author = document.getElementById('author');
//
//let url = 'https://thatsthespir.it/api';
//
//
//document.addEventListener('DOMContentLoaded', ()=>{ 
//    
//    
//    
//    fetch(url)
//        .then(function(data){
//        return data.json();
//    }).then(function(quotes){
//        
//        let number = Math.random(Math.random() * quotes.length);
//        
//        quote.innerHTML = '<span>"</span>' + quotes[number].quote+'<span>"</span>';
//        
//
//
//
//})
//})
//})