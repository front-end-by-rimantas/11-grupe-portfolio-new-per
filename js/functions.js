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
function renderPortfolio( list ) {
    let HTML = '';
    let filterHTML = '';
    let galleryHTML = '';

    // surenkame unikalius tagus
    let uniqueTags = [];

    for ( let i=0; i<list.length; i++ ) {
        const tags = list[i].tags;
        for ( let t=0; t<tags.length; t++ ) {
            if ( uniqueTags.indexOf(tags[t].toLowerCase()) === -1 ) {
                uniqueTags.push(tags[t].toLowerCase());
            }
        }
    }

    // sugeneruoti filtravima
    filterHTML = `<div class="item active">All</div>`;
    for ( let i=0; i<uniqueTags.length; i++ ) {
        filterHTML += `<div class="item">${uniqueTags[i]}</div>`;
    }
    
    // sugeneruoti darbus
    for ( let i=0; i<list.length; i++ ) {
        const work = list[i];
        console.log(work);
        
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}"
                            data-tags="${work.tags}">
                            <img src="./img/work/${work.photo}"
                                alt="${work.title}">
                            <div class="hover">
                                <a href="${work.link ? work.link : '#'}">${work.title}</a>
                            </div>
                        </div>`;
    }

    // apjungti viska i vientisa HTML
    HTML += `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${galleryHTML}
                </div>
            </div>`;

    // pilna HMTL iterpiame i DOM'a
    const DOMgallery = document.querySelector('#portfolio_gallery');
    DOMgallery.innerHTML = HTML;

    // prikabinti event listenerius, kad galeti filtruoti darbus
    const filters = DOMgallery.querySelectorAll('.filter > .item');
    for (let i=0; i<filters.length; i++) {
        const element = filters[i];
        element.addEventListener('click', filterGallery);
    };
    return;
}

function filterGallery( event ) {
    document.querySelector('.filter > .item.active').classList.remove('active');
    event.target.classList.add('active');

    const filterTag = event.target.textContent.toLowerCase();
    const works = document.querySelectorAll('.gallery > .list > .item');
    if ( filterTag === 'all' ) {
        for (let i=0; i<works.length; i++) {
            works[i].classList.remove('hide');
        }
        return;
    }

    for (let i=0; i<works.length; i++) {
        const work = works[i];
        const hasTags = work.dataset.tags.toLowerCase().split(',').indexOf(filterTag);
        if ( hasTags >= 0 ) {
            work.classList.remove('hide');
        } else {
            work.classList.add('hide');
        }
    }
    
}
// testimonel

// Blog

// Contact


// footer


