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

// My Portfolio

// testimonel

// Blog

// Contact

// footer


