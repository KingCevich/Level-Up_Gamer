$(document).ready(function(){

    // Se activa la categoria inicial
    $('.lista-categoria .categorias[category="all"]').addClass('ct_item-active');

    // Filtra productos - Los oculta
    $('.categorias').click(function(){
        var productCatag = $(this).attr('category');
        console.log(productCatag);

        // Solo categoria seleccionada
        $('.categorias').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        // OCULTA (según caso)
        $('.producto-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.producto-item').hide()
        } setTimeout(hideProduct,200);

        // MUESTRA (según caso)
        function showProduct(){
            $('.producto-item[category="'+productCatag+'"]').show();
            $('.producto-item[category="'+productCatag+'"]').css('transform','scale(1)');
        }setTimeout(showProduct,200);
    });

    // muestra todos
    $('.categorias[category="all"]').click(function(){
            function showAll(){
                $('.producto-item').show();
                $('.producto-item').css('transform','scale(1)');
            }setTimeout(showAll,200);
    });


});