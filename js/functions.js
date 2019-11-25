"use strict";

// header

// hero

// about me

// My skills

// My Resume

// counter section
function renderAchievements( list ) {
    let HTML = '';

    for ( let i=0; i<list.length; i++ ) {
        const item = list[i];

        HTML += `<div class="achievement col-3 col-md-6 col-xs-12">
                    <div class="center">
                        <i class="fa fa-${item.icon}"></i>
                        <div class="texts">
                            <div class="number">${item.number}</div>
                            <br>
                            <h5 class="title">${item.title}</h5>
                        </div>
                    </div>
                </div>`
        
    }
    
    return document.querySelector('#achievements').innerHTML = HTML;
}
// My services
function renderServices( serviceList ) {
    let HTML = '';

    for ( let i=0; i<serviceList.length; i++ ) {
        const service = serviceList[i];
        HTML += `<div class="service col-4 col-md-6 col-xs-12">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
    
    return document.querySelector('#services_list').innerHTML = HTML;
}
// My Portfolio

// testimonel

// Blog

// Contact


// footer


