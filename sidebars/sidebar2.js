/*
    Script description:
    This script provides the client-side functionality for the sidebar nav collapse.
*/

$(window).resize(function(){
    var viewportWidth = $(window).width();

    // hide sidebar on smaller than 769px
    if (viewportWidth < 769){
        $('#sidebar').addClass('inactive');
        $('#content').addClass('active');
    }
    else{
        $('#sidebar').removeClass('inactive');
        $('#content').removeClass('active');
    }
});

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('inactive'); // toggle sidebar
    $('#content').toggleClass('active'); // toggle full content
    $('.collapse.show').toggleClass('show'); // collapse submenus
    $('a[aria-expanded=true]').attr('aria-expanded', 'false'); // submenus closed
});
