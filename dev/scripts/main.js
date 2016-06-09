/*jslint browser: true, plusplus: true */
/*eslint-disable no-console  */
/*eslint-disable max-len  */
/*global window, document */



/** START
 * GLOBAL VARIABLES
 */

var useGrid = false;
//var body = null;

/** END
 * GLOBAL VARIABLES
 */ 
window.onload = function () {
    'use strict';
    
    if( useGrid ){
        gridHandler();
    }
    var facultyNavigation = document.querySelector('#sticky-navigation');
    var stickyNavigation,navOffsetTop,menuHeight;
    var menuButton = document.getElementsByClassName('menu-controls')[0];
    menuButton.addEventListener('click', function(event){
        toggleMenu(event);}, false);
    
    if( facultyNavigation ){
        stickyNavigation = document.querySelector('#sticky-navigation .navigation');
        navOffsetTop = facultyNavigation.offsetTop;
        menuHeight = 79 ;
        var last_known_scroll_position = 0;
        var ticking = false;

        window.addEventListener('scroll', function() {
            last_known_scroll_position = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    checkStickyNav(last_known_scroll_position);
                    ticking = false;
                });
            }
            ticking = true;
        });
    }

    function checkStickyNav(scroll_pos){
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
};




/** START
 * MENU SECTION
 */
function toggleMenu(){
    console.log('aa');
    var menuPanel = document.getElementsByClassName('menu-panel')[0];
    var menuContent = menuPanel.getElementsByClassName('menu-content')[0];
    var menuControls = menuPanel.getElementsByClassName('menu-controls')[0];

    var body = document.body;
    if( menuPanel.classList.contains('open') ){
        body.classList.remove('open');
        menuPanel.classList.remove('open');
        menuContent.classList.remove('open');
        menuControls.classList.remove('open');
    }else{
        body.classList.add('open');
        menuPanel.classList.add('open');
        menuContent.classList.add('open');
        menuControls.classList.add('open');
    }
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
/** END
* GRID HANDLER SECTION 
*/




