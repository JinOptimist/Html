window.addEventListener("load", function() {
    var menu = document.getElementsByClassName('menu')[0];
    var menuItems = this.document.getElementsByClassName('menu-text');
    menu.addEventListener('mouseover', function(){
        changeDisplay(menuItems, 'block');
    });

    menu.addEventListener('mouseleave', function(){
        changeDisplay(menuItems, 'none');
    });

    function changeDisplay(menuItems, newDisplay) {
        for(var i =0; i<menuItems.length; i++){
            menuItems[i].style.display = newDisplay;
        }
    }
  });
  
