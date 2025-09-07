document.addEventListener('DOMContentLoaded', function(){

    // Se activa la categoria inicial
    const categorias = document.querySelectorAll('.lista-categoria .categorias');
    categorias.forEach(cat => {
        if(cat.getAttribute('category') === 'all') {
            cat.classList.add('ct_item-active');
        }
    });

    // Filtra productos - Los oculta
    function hideProducts(){
        const productos = document.querySelectorAll('.producto-item');
        productos.forEach(prod => {
            prod.style.display = 'none';
            prod.style.transform = 'scale(0)';
        });
    }

    // Filtra productos - Los muestra
    function showProducts(category){
        const productos = document.querySelectorAll(`.producto-item[category="${category}"]`);
        productos.forEach(prod => {
            prod.style.display = 'block';
            setTimeout(() => {
                prod.style.transform = 'scale(1)';
            }, 10); 
        });
    }

    // MUESTRA (según caso)
    categorias.forEach(cat =>{
        cat.addEventListener('click', function(){
            const productCatag = this.getAttribute('category');
            
            // Activar categoría seleccionada
            categorias.forEach(c => c.classList.remove('ct_item-active'));
            this.classList.add('ct_item-active');

            if(productCatag === 'all'){
                // muestra todos
                hideProducts();
                setTimeout(() => {
                    const productos = document.querySelectorAll('.producto-item');
                    productos.forEach(prod => {
                        prod.style.display = 'block';
                        prod.style.transform = 'scale(1)';
                    });
                }, 200);
            } else {
                // Solo categoria seleccionada
                hideProducts();
                setTimeout(() => {
                    showProducts(productCatag);
                }, 200);
            }
        });
    });
});