// Parse the URL parameter
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    // Give the parameter a variable name
    var dynamicContent = getParameterByName('dynamicContent');
 
     $(document).ready(function() {
 
        // Check if the URL parameter is balahon
        if (dynamicContent == 'balahon') {
            $('li[data-type-folder="balahon"]').trigger('click');
            $('li[data-background="#D2D2D2"]').trigger('click');
        } 
        // Check if the URL parameter is hudi
        if (dynamicContent == 'hudi') {
            $('li[data-type-folder="hudi"]').trigger('click');            
        } 

        // Check if the URL parameter is new_year
        if (dynamicContent == 'new_year') {
            $('input[id="side-front"]').trigger('click');
            $('li[data-background="#C20B19"]').trigger('click');
            $('li.select-print-category').removeClass('active');
            $('li.select-print-category[data-category="Новогодние"]').trigger('click');
            $('img[data-dir="s_novym_godom"]').trigger('click');            
        } 

        // Check if the URL parameter is football
        if (dynamicContent == 'football') {
            $('input[id="side-front"]').trigger('click');
            $('li.select-print-category').removeClass('active');
            $('li.select-print-category[data-category="Футбол"]').trigger('click');
            $('img[data-dir="real"]').trigger('click');
        } 


    });