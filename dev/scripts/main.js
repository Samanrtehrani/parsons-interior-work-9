/*jslint browser: true, plusplus: true */
/*eslint-disable no-console  */
/*eslint-disable max-len  */
/*global window, document */



/** START
 * GLOBAL VARIABLES
 */

var useGrid = false;
//var body = null;
var sliders = new Array();
var paginationArray = [
    {
        pageName: 'Introduction',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/'
    },
    {
        pageName: 'Featured Faculty',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/featured-faculty/'
    },
    {
        pageName: 'Design Works',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/projects-directory/'
    },
    {
        pageName: 'Embrace Refugee Center',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/embrace-refugee-center/'
    },
    {
        pageName: 'Chaos to Clarity',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/chaos-to-clarity/'
    },
    {
        pageName: 'New York is a Friendly Town',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/friendly-new-york/'
    },
    {
        pageName: 'In the Middle',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/in-the-middle/'
    },
    {
        pageName: 'Learning to Live Refugee Again Center',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/learning-to-live-again-refugee-center/'
    },
    {
        pageName: 'The Quadrant',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/welcome-center/'
    },
    {
        pageName: 'Pier in the Pier',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/pier-in-the-pier/'
    },
    {
        pageName: 'The Urban Theater',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/the-urban-theater/'
    },
    {
        pageName: 'The Aux House',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/the-aux-house/'
    },
    {
        pageName: 'Nara',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/nara/'
    },
    {
        pageName: 'King\'s Arms',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/kings-arms/'
    },
    {
        pageName: 'The Misselthwaite Hotel',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/the-misselthwaite-hotel/'
    },
    {
        pageName: 'Hotel One Madison',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/hotel-one-madison/'
    },
    {
        pageName: 'Hotel Catalogue 19',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/hotel-catalogue-19/'
    },
    {
        pageName: 'InterMIX Hotel',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/intermix-hotel/'
    },
    {
        pageName: 'The Portal',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/the-portal/'
    },
    {
        pageName: 'Detroit Community Kitchen',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/detroit-community-kitchen/'
    },
    {
        pageName: 'Jenga!',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/jenga-2/'
    },
    {
        pageName: 'Refracted Passage',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/refracted-passage-2/'
    },
    {
        pageName: 'Nola Food Hall',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/nola-food-hall/'
    },
    {
        pageName: 'Craft Restaurant and Community Kitchen',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/craft-restaurant-and-community-kitchen/'
    },
    {
        pageName: 'RIBBON FARM',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/ribbon-farm/'
    },
    {
        pageName: 'Rain Stop',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/rain-stop/'
    },
    {
        pageName: 'Live House/Work House',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/live-work-house-3/'
    },
    {
        pageName: 'Cycling Club',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/cycling-club/'
    },
    {
        pageName: 'Cafe Moto',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/cafe-moto/'
    },
    {
        pageName: 'Craved Sneaker Shop',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/project/carved-sneaker-shop/'
    },
    {
        pageName: 'Featured Alumna',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/featured-alumna/'
    },
    {
        pageName: 'Academic Text',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/ornament-and-the-mind/'
    },
    {
        pageName: 'Faculty Directory',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/faculty-directory/'
    },
    {
        pageName: 'Past Issues of Work',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/past-issues/'
    },
    {
        pageName: 'Awards & Recognitions',
        url: 'http://wpdeve.parsons.edu/parsonsinteriorwork/awards-recognitions/'
    }
];
paginationArray.handler = function(evnt){
    var currentPage = window.location.href;
    var currentIndex= -1;
    var nextIndex;
    for( var i =0 ; i < paginationArray.length ; i++ ){
        if( currentPage === paginationArray[i].url ){
            currentIndex = i;
            break;
        }
    }
    if( evnt.target.dataset.direction === 'l'){
        nextIndex = currentIndex - 1;
    }else if( evnt.target.dataset.direction === 'r'){
        nextIndex = currentIndex + 1;
    }

    if( nextIndex < -1 ){
        console.log( 'we don\'t know wihch page we r in' );
    }else if( nextIndex == -1 ){
        nextIndex = paginationArray.length - 1 ;
    }else if( nextIndex >= paginationArray.length ){
        nextIndex = 0;
    }
    window.location.href = paginationArray[nextIndex].url;
};

/** END
 * GLOBAL VARIABLES
 */
/*
 var slider= function(sliderWidth,slideCount,currentSlide,slideHolderSelector, slideSelector ) {
    this.sliderWidth =  sliderWidth;
    this.slideCount = slideCount;
    this.currentSlide = currentSlide || 0;
    this.slideHolderSelector = slideHolderSelector;
    this .slideSelector = slideSelector;
 }

 */
window.onload = function () {
    'use strict';

    if( useGrid ){
        gridHandler();
    }
    var options = {
        transitionTime:500,
        touchTransitionTime:300
    };
    var slidersElements = document.querySelectorAll('.slider');

    for(var i = 0 ; i < slidersElements.length ; i++) {
        sliders.push( new simpleCarousel(i,slidersElements[i],options) );
        sliders[sliders.length-1].initialize();
    }
    var navControls = document.querySelectorAll('.nav-controls');
    for( var it = 0 ; it < navControls.length ; it++){
        if( navControls[it].dataset.direction ){
            navControls[it].addEventListener('click', paginationArray.handler, false);
        }
    }
    var facultyNavigation = document.querySelector('#sticky-navigation');
    var stickyNavigation,navOffsetTop,menuHeight;

    var menuButton = document.querySelector('.menu-panel .menu-controls');
    var header = document.querySelector('header');


    menuButton.addEventListener('click', function(event){
        toggleMenu(event);}, false);
    var subMenuButton = document.querySelector('.menu-grid .menu-item .arrow-in');
    subMenuButton.removeEventListener('click',openSubMenu,false);
    subMenuButton.addEventListener('click',openSubMenu,false);

    if( facultyNavigation ){
        stickyNavigation = document.querySelector('#sticky-navigation .navigation');
        navOffsetTop = facultyNavigation.offsetTop;
        menuHeight = 79 ;
        var last_known_scroll_position = 0;
        var ticking = false;
        console.log(last_known_scroll_position);
        window.addEventListener('scroll', function() {
            console.log(last_known_scroll_position);
            last_known_scroll_position = window.scrollY;
            console.log(last_known_scroll_position);
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    checkStickyNav(last_known_scroll_position);
                    ticking = false;
                });
            }
            ticking = true;
        });
    }else{
        var menuButtonWhite = document.querySelector('.menu-panel .menu-controls.white');
        if( menuButtonWhite ){
            window.addEventListener('scroll', function() {
                last_known_scroll_position = window.scrollY;
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        if( last_known_scroll_position > header.offsetHeight -30){
                            if( !menuButtonWhite.classList.contains('black') ){
                                menuButtonWhite.classList.remove('white');
                                menuButtonWhite.classList.add('black');
                            }
                        }else{
                            if( !menuButtonWhite.classList.contains('white') ){
                                menuButtonWhite.classList.add('white');
                                menuButtonWhite.classList.remove('black');
                            }
                        }

                        ticking = false;
                    });
                }
                ticking = true;
            });
        }
    }

    function checkStickyNav(scroll_pos){
        navOffsetTop = facultyNavigation.offsetTop;
        if( (scroll_pos + menuHeight ) >= navOffsetTop ){
            if( !stickyNavigation.classList.contains('sticked') ){
                stickyNavigation.classList.add('sticked');
            }
        }else{
            if( stickyNavigation.classList.contains('sticked') ){
                stickyNavigation.classList.remove('sticked');
            }
        }

    }

    var readMoreButtons = document.querySelectorAll('.rdmb');
    for(i=0 ; i < readMoreButtons.length ; i++ ){
        readMoreButtons[i].addEventListener('click',function(evnt){
            evnt.preventDefault();
            var targetElement = document.getElementsByClassName(this.dataset.target);
            var readMoreText = this.parentNode.querySelector('a:nth-of-type(1)');
            var readMoreArrow = this.parentNode.querySelector('a:nth-of-type(2)');
            for( var j =0 ; j < targetElement.length ; j++){
                if( targetElement[j].classList.contains('close') ){
                    targetElement[j].classList.remove('close');
                    readMoreText.innerText = 'Read Less';
                    readMoreArrow.classList.add('arrow-up');
                    readMoreArrow.classList.remove('arrow-down');
                }else{
                    targetElement[j].classList.add('close');
                    readMoreText.innerText = 'Read More';
                    readMoreArrow.classList.remove('arrow-up');
                    readMoreArrow.classList.add('arrow-down');
                }
            }


        },false);
    }
};




/** START
 * MENU SECTION
 */
function toggleMenu(){
    var menuPanel = document.getElementsByClassName('menu-panel')[0];
    var menuContent = menuPanel.getElementsByClassName('menu-content')[0];
    var menuControls = menuPanel.getElementsByClassName('menu-controls')[0];
    var menuGrid = document.querySelector('.menu-grid');
    var subMenuGrid = document.querySelector('.sub-menu-grid');

    var body = document.body;

    if( menuPanel.classList.contains('open') ){
        body.classList.remove('open');
        menuPanel.classList.remove('open');
        menuContent.classList.remove('open');
        menuControls.classList.remove('open');
        menuGrid.classList.remove('close');
        subMenuGrid.classList.add('close');
        menuGrid.style.display = 'flex';
    }else{
        body.classList.add('open');
        menuPanel.classList.add('open');
        menuContent.classList.add('open');
        menuControls.classList.add('open');
        menuGrid.classList.remove('close');
        subMenuGrid.classList.add('close');
        menuGrid.style.display = 'flex';
    }
}
function closeSubMenu(){
    var menuGrid = document.querySelector('.menu-grid');
    var subMenuGrid = document.querySelector('.sub-menu-grid');
    menuGrid.style.display = 'flex';
    subMenuGrid.classList.add('close');
    setTimeout(function(){
        menuGrid.classList.remove('close');
    },30);

}
function openSubMenu(){
    var menuGrid = document.querySelector('.menu-grid');
    var subMenuGrid = document.querySelector('.sub-menu-grid');
    var backButton = subMenuGrid.querySelector('.back-nav');

    console.log('clicked');
    menuGrid.classList.add('close');
    setTimeout(function(){
        subMenuGrid.classList.remove('close');
        menuGrid.style.display = 'none';
    },200);
    backButton.removeEventListener('click',closeSubMenu,false);
    backButton.addEventListener('click',closeSubMenu,false);


}
/** END
 * MENU SECTION
 */

/** START
 * GRID HANDLER SECTION
 */
function gridHandler(){
    var body = document.querySelector('body'),
        firstChildOfBody = body.firstElementChild,
        gridLayer = document.createElement('div'),
        gridChoice = 0;

    gridLayer.setAttribute('id', 'column-baseline-grid');

    if (null !== firstChildOfBody) {
       // body.insertBefore(gridLayer, firstChildOfBody);
    } else {
        body.textContent = 'The body element does not have a child element.';
    }

    document.onkeydown = function (evnt) {
        if (27 === evnt.keyCode){

            switch (gridChoice) {
            case 0:
                gridLayer.classList.add('column-grid');
                gridLayer.classList.remove('user-supplied-bg-image');

                break;

            case 1:
                gridLayer.classList.remove('column-grid');
                gridLayer.classList.add('modular-grid');

                break;

            case 2:
                gridLayer.classList.remove('modular-grid');
                gridLayer.classList.add('baseline-grid');

                break;

            case 3:
                gridLayer.classList.remove('baseline-grid');
                gridLayer.classList.add('all-grids');

                break;

            case 4:
                gridLayer.classList.remove('all-grids');
                gridLayer.classList.add('user-supplied-bg-image');

                break;

            case 5:
                gridLayer.classList.remove('user-supplied-bg-image');
                break;
            }

            if (gridChoice++ === 5) {
                gridChoice = 0;
            }
        }
    };

}

function simpleCarousel(id,carouselElement, options){
    this.id = id;
    if ( (function(){
        //validate options
        return true;
    })(options) ){
        this.options = options;
    }else{
        this.options = {// set defaults
            transitionTime : 500,
            touchTransitionTime : 300
        };
    }
    this.carousel = carouselElement;
    this.slides = [];
    this.sliderFrame = this.carousel.querySelector('.slider-frame');
    this.sliderContentHolder = this.sliderFrame.querySelector('.slider-content');
    this.sliderFrameWidth = this.sliderFrame.clientWidth;
    this.currentSlideIndex = 0;

    this.isLongTouch = 0;
    this.touchStartPosition = {};
    this.touchLatestPosition = {};
    this.dragDistance = {};

}

simpleCarousel.prototype.initialize= function(){

    if( this.evaluateSlides() > 0 ){
        this.registerClickHandlers();
        this.registerTouchHandlers();
    }

    this.setOptions();
};
simpleCarousel.prototype.setOptions = function(){

};
simpleCarousel.prototype.evaluateSlides = function(){
    var self = this;

    var slideElements = this.sliderFrame.querySelectorAll('.slider-content > img');
    var sliderControlsListElement = this.carousel.querySelector('.slider-controls > ul');
    sliderControlsListElement.innerHTML = '';
    if( !slideElements ){
        console.warn('Slides couldn\'t be found! in Carousel #'+this.id);
        return -1;
    }
    if( slideElements.length > 1){
        for(var i = 0; i < slideElements.length; i++) {
            var liControl = document.createElement('li');

            var reference = i;
            liControl.dataset.slideId = reference;
            slideElements[i].dataset.controlId = reference;

            if( i === 0 )
                liControl.classList.add('current');

            sliderControlsListElement.appendChild(liControl);
            self.slides.push({el:slideElements[i],c:liControl,ref:reference});
        }
        this.sliderContentHolder.style.transition = 'transform '+this.options.transitionTime+'ms';

        return 1;
    }
    console.warn('No more than 1 slide found! in Carousel #'+this.id);
    return 0;
};

simpleCarousel.prototype.registerClickHandlers= function(){
    var self = this;
    for(var i = 0 ; i< this.slides.length ; i++) {
        this.slides[i].c.addEventListener('click',function(evnt){
            evnt.stopPropagation();
            self.moveToIndex(parseInt(evnt.target.dataset.slideId));
        },false);
    }
};
simpleCarousel.prototype.registerTouchHandlers = function(){
    var self = this;
    this.sliderFrame.addEventListener('touchstart',function(evnt){
        evnt.stopPropagation();
        //evnt.preventDefault();
        self.startTouch(evnt);
    },false);
    this.sliderFrame.addEventListener('touchmove',function(evnt){
        evnt.stopPropagation();
        //evnt.preventDefault();

        self.moveTouch(evnt);
    },false);
    this.sliderFrame.addEventListener('touchend',function(evnt){
        evnt.stopPropagation();
        //evnt.preventDefault();
        self.endTouch(evnt);
    },false);
};

simpleCarousel.prototype.startTouch = function(evnt){
    var self = this;

    this.isLongTouch = false;
    window.setTimeout(function(){
        self.isLongTouch = true;
    }, 250);

    this.touchStartPosition.x = evnt.touches[0].pageX;
    this.touchStartPosition.y = evnt.touches[0].pageY;
};
simpleCarousel.prototype.moveTouch = function(evnt){

    this.touchLatestPosition.x =  evnt.touches[0].pageX;
    this.touchLatestPosition.y =  evnt.touches[0].pageY;

    this.dragDistance.x = this.touchLatestPosition.x - this.touchStartPosition.x;

    var newLeftMargin = this.currentSlideIndex * this.sliderFrameWidth - this.dragDistance.x;
    this.sliderContentHolder.style.transition = 'none';
    this.sliderContentHolder.style.transform = 'translateX(-'+newLeftMargin+'px)';
};
simpleCarousel.prototype.endTouch = function(){
    var self = this;
    var nextIndex = this.currentSlideIndex;
    if(Math.abs(this.dragDistance.x) > this.sliderFrameWidth/2 || this.isLongTouch === false) {
        if(this.dragDistance.x > 0 &&  this.currentSlideIndex > 0) {
            nextIndex = this.currentSlideIndex - 1;
        }else if(this.dragDistance.x < 0 && this.currentSlideIndex < this.slides.length - 1) {
            nextIndex = this.currentSlideIndex + 1;
        }
    }
    this.sliderContentHolder.style.transition = 'transform '+this.options.touchTransitionTime+'ms';
    window.setTimeout(function(){
        self.slides[self.currentSlideIndex].c.classList.remove('current');
        self.slides[nextIndex].c.classList.add('current');
        self.currentSlideIndex= nextIndex;
        self.sliderContentHolder.style.transition = 'transform '+self.options.transitionTime+'ms';
    },this.options.touchTransitionTime);
    this.sliderContentHolder.style.transform = 'translateX(-'+nextIndex*this.sliderFrameWidth+'px)';
};
simpleCarousel.prototype.moveToIndex = function(nextIndex){
    var self = this;
    var sliderWidth = this.sliderFrameWidth;

    window.setTimeout(function(){
        self.slides[self.currentSlideIndex].c.classList.remove('current');
        self.slides[nextIndex].c.classList.add('current');
        self.currentSlideIndex= nextIndex;
    },this.options.transitionTime);
    this.sliderContentHolder.style.transform = 'translateX(-'+nextIndex*sliderWidth+'px)';
};

/** END
* GRID HANDLER SECTION
*/
