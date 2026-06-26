// Base de datos de productos
const productos = [
    { id: 1, nombre: "iPhone 14 Pro Max", precio: 18999, precioAnterior: 21999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1695048133142-1a20e04c0069?w=500", descripcion: "El iPhone más avanzado con cámara profesional y chip A16 Bionic", rating: 5, ventas: 245, envio: true, nuevo: false },
    { id: 2, nombre: "Laptop HP Pavilion 15", precio: 12499, precioAnterior: 14999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", descripcion: "Laptop potente para trabajo y entretenimiento con procesador Intel i7", rating: 4, ventas: 189, envio: true, nuevo: false },
    { id: 3, nombre: "Audífonos Sony WH-1000XM5", precio: 6999, precioAnterior: 8999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", descripcion: "Audífonos con cancelación de ruido líder en la industria", rating: 5, ventas: 312, envio: true, nuevo: true },
    { id: 4, nombre: "Tenis Nike Air Max", precio: 2499, precioAnterior: 2999, categoria: "Ropa", imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", descripcion: "Tenis cómodos y estilosos para uso diario", rating: 4, ventas: 156, envio: true, nuevo: false },
    { id: 5, nombre: "Smartwatch Apple Watch Series 9", precio: 8999, precioAnterior: 10999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", descripcion: "Reloj inteligente con monitoreo de salud avanzado", rating: 5, ventas: 278, envio: true, nuevo: true },
    { id: 6, nombre: "Mochila para Laptop", precio: 899, precioAnterior: 1299, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500", descripcion: "Mochila resistente al agua con compartimento para laptop", rating: 4, ventas: 89, envio: false, nuevo: false },
    { id: 7, nombre: "Cámara Canon EOS R6", precio: 45999, precioAnterior: 49999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500", descripcion: "Cámara mirrorless profesional con sensor full-frame", rating: 5, ventas: 67, envio: true, nuevo: false },
    { id: 8, nombre: "Silla Gamer Ergonómica", precio: 4599, precioAnterior: 5999, categoria: "Hogar", imagen: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500", descripcion: "Silla gamer con soporte lumbar y reposacabezas ajustable", rating: 4, ventas: 134, envio: true, nuevo: false },
    { id: 9, nombre: "Tablet Samsung Galaxy Tab S9", precio: 14999, precioAnterior: 17999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500", descripcion: "Tablet premium con pantalla AMOLED y S Pen incluido", rating: 5, ventas: 201, envio: true, nuevo: true },
    { id: 10, nombre: "Zapatos Adidas Ultraboost", precio: 3299, precioAnterior: 3999, categoria: "Ropa", imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500", descripcion: "Zapatos para correr con tecnología Boost", rating: 5, ventas: 167, envio: true, nuevo: false },
    { id: 11, nombre: "Televisor LG 55\" 4K OLED", precio: 24999, precioAnterior: 29999, categoria: "Electrónica", imagen: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500", descripcion: "Televisor OLED con negros perfectos y colores vibrantes", rating: 5, ventas: 145, envio: true, nuevo: false },
    { id: 12, nombre: "Balón de Fútbol Adidas", precio: 599, precioAnterior: 799, categoria: "Deportes", imagen: "https://images.unsplash.com/photo-1614632537190-23e4146777db?w=500", descripcion: "Balón oficial de match con tecnología termosoldada", rating: 4, ventas: 234, envio: false, nuevo: false },
    { id: 13, nombre: "Cafetera Nespresso", precio: 3999, precioAnterior: 4999, categoria: "Hogar", imagen: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500", descripcion: "Cafetera de cápsulas con sistema de extracción profesional", rating: 4, ventas: 178, envio: true, nuevo: false },
    { id: 14, nombre: "Lentes de Sol Ray-Ban", precio: 2799, precioAnterior: 3499, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500", descripcion: "Lentes clásicos con protección UV 100%", rating: 5, ventas: 289, envio: true, nuevo: false },
    { id: 15, nombre: "Bicicleta de Montaña", precio: 8999, precioAnterior: 11999, categoria: "Deportes", imagen: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500", descripcion: "Bicicleta con cuadro de aluminio y 21 velocidades", rating: 4, ventas: 92, envio: true, nuevo: true },
    { id: 16, nombre: "Aspiradora Robot", precio: 5999, precioAnterior: 7999, categoria: "Hogar", imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500", descripcion: "Aspiradora inteligente con mapeo láser", rating: 4, ventas: 156, envio: true, nuevo: false },
    { id: 17, nombre: "Guitarra Acústica", precio: 3499, precioAnterior: 4299, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500", descripcion: "Guitarra acústica de madera de abeto", rating: 5, ventas: 78, envio: true, nuevo: false },
    { id: 18, nombre: "Set de Pesas Ajustables", precio: 4999, precioAnterior: 6499, categoria: "Deportes", imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500", descripcion: "Set de mancuernas ajustables de 5 a 25 kg", rating: 4, ventas: 123, envio: true, nuevo: false },
    { id: 19, nombre: "Sartén de Hierro Fundido", precio: 899, precioAnterior: 1299, categoria: "Hogar", imagen: "https://images.unsplash.com/photo-1585441695325-21557ef66366?w=500", descripcion: "Sartén pre-curado de 12 pulgadas", rating: 5, ventas: 267, envio: false, nuevo: false },
    { id: 20, nombre: "Reloj Casio Vintage", precio: 1299, precioAnterior: 1599, categoria: "Accesorios", imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", descripcion: "Reloj digital retro con alarma y cronómetro", rating: 4, ventas: 345, envio: true, nuevo: false }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let listaDeseos = JSON.parse(localStorage.getItem('listaDeseos')) || [];
let comparar = JSON.parse(localStorage.getItem('comparar')) || [];
let vistaActual = 'grid';
let paginaActual = 1;
const productosPorPagina = 8;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderProductos(filtrarProductos());
    actualizarContadores();
    configurarEventListeners();
    iniciarCountdown();
    renderDeals();
});

// Renderizar productos
function renderProductos(productosAMostrar) {
    const grid = document.getElementById('productsGrid');
    const totalProductos = productosAMostrar.length;
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosAMostrar.slice(inicio, fin);
    
    if (productosPagina.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><h3>No se encontraron productos</h3></div>';
        document.getElementById('productsCount').textContent = '(0 productos)';
        return;
    }
    
    grid.innerHTML = productosPagina.map(producto => crearCardProducto(producto)).join('');
    document.getElementById('productsCount').textContent = `(${totalProductos} productos)`;
    renderPagination(totalProductos);
}

// Crear card de producto
function crearCardProducto(producto) {
    const descuento = Math.round(((producto.precioAnterior - producto.precio) / producto.precioAnterior) * 100);
    const enDeseos = listaDeseos.includes(producto.id);
    const enComparar = comparar.includes(producto.id);
    const estrellas = '⭐'.repeat(producto.rating);
    
    return `
        <div class="product-card ${vistaActual === 'list' ? 'list-view' : ''}">
            <div class="product-image-wrapper">
                <div class="product-badges">
                    ${descuento > 0 ? `<span class="badge badge-discount">-${descuento}%</span>` : ''}
                    ${producto.nuevo ? '<span class="badge badge-new">Nuevo</span>' : ''}
                    ${producto.ventas > 200 ? '<span class="badge badge-bestseller">Best Seller</span>' : ''}
                </div>
                <div class="product-actions-overlay">
                    <button class="action-overlay-btn" onclick="quickView(${producto.id})" title="Vista rápida">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-overlay-btn ${enDeseos ? 'active' : ''}" onclick="toggleWishlist(${producto.id})" title="Favoritos">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="action-overlay-btn ${enComparar ? 'active' : ''}" onclick="toggleCompare(${producto.id})" title="Comparar">
                        <i class="fas fa-exchange-alt"></i>
                    </button>
                </div>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" onclick="quickView(${producto.id})">
            </div>
            <div class="product-info">
                <div class="product-category">${producto.categoria}</div>
                <h3 class="product-title">${producto.nombre}</h3>
                <div class="product-rating">
                    <span class="stars">${estrellas}</span>
                    <span class="reviews">(${producto.ventas} vendidos)</span>
                </div>
                <div class="product-price-block">
                    <span class="current-price">$${producto.precio.toLocaleString()}</span>
                    ${producto.precioAnterior ? `<span class="old-price">$${producto.precioAnterior.toLocaleString()}</span>` : ''}
                    ${descuento > 0 ? `<span class="discount-percent">${descuento}% OFF</span>` : ''}
                </div>
                ${producto.envio ? '<div class="product-shipping"><i class="fas fa-truck me-1"></i>Envío gratis</div>' : ''}
                <button class="btn-add-cart" onclick="agregarAlCarrito(${producto.id})">
                    <i class="fas fa-shopping-cart me-2"></i>Agregar al carrito
                </button>
            </div>
        </div>
    `;
}

// Quick View
function quickView(id) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    
    document.getElementById('qvImage').src = producto.imagen;
    document.getElementById('qvCategory').textContent = producto.categoria;
    document.getElementById('qvTitle').textContent = producto.nombre;
    document.getElementById('qvRating').textContent = '⭐'.repeat(producto.rating);
    document.getElementById('qvPrice').textContent = `$${producto.precio.toLocaleString()} MXN`;
    document.getElementById('qvOldPrice').textContent = `$${producto.precioAnterior.toLocaleString()} MXN`;
    document.getElementById('qvDescription').textContent = producto.descripcion;
    
    const descuento = Math.round(((producto.precioAnterior - producto.precio) / producto.precioAnterior) * 100);
    document.getElementById('qvDiscount').textContent = `${descuento}% OFF`;
    
    document.getElementById('qvAddToCart').onclick = () => {
        agregarAlCarrito(id);
        bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();
    };
    
    document.getElementById('qvBuyNow').onclick = () => {
        agregarAlCarrito(id);
        toggleCart();
        bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();
    };
    
    new bootstrap.Modal(document.getElementById('quickViewModal')).show();
}

// Actualizar cantidad en quick view
function updateQty(cambio) {
    const input = document.getElementById('qvQuantity');
    let valor = parseInt(input.value) + cambio;
    if (valor < 1) valor = 1;
    input.value = valor;
}

// Agregar al carrito
function agregarAlCarrito(id, cantidad = 1) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad: cantidad });
    }
    
    guardarCarrito();
    actualizarContadores();
    showToast('✅ Producto agregado', `${producto.nombre} se agregó al carrito`);
}

// Toggle Wishlist
function toggleWishlist(id) {
    const index = listaDeseos.indexOf(id);
    if (index > -1) {
        listaDeseos.splice(index, 1);
        showToast('💔 Eliminado de favoritos');
    } else {
        listaDeseos.push(id);
        showToast('❤️ Agregado a favoritos');
    }
    
    localStorage.setItem('listaDeseos', JSON.stringify(listaDeseos));
    actualizarContadores();
    renderProductos(filtrarProductos());
}

// Toggle Compare
function toggleCompare(id) {
    const index = comparar.indexOf(id);
    if (index > -1) {
        comparar.splice(index, 1);
        showToast('Producto eliminado de comparación');
    } else {
        if (comparar.length >= 3) {
            showToast('⚠️ Máximo 3 productos para comparar');
            return;
        }
        comparar.push(id);
        showToast('✅ Agregado para comparar');
    }
    
    localStorage.setItem('comparar', JSON.stringify(comparar));
    actualizarContadores();
    renderProductos(filtrarProductos());
}

// Renderizar carrito
function renderCarrito() {
    const container = document.getElementById('cartItemsSidebar');
    
    if (carrito.length === 0) {
        container.innerHTML = '<div class="text-center py-5"><i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i><p>Tu carrito está vacío</p></div>';
        document.getElementById('cartTotalSidebar').textContent = '$0';
        return;
    }
    
    container.innerHTML = carrito.map(item => `
        <div class="cart-item">
            <img src="${item.imagen}" alt="${item.nombre}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nombre}</div>
                <div class="cart-item-price">$${item.precio.toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button class="btn-quantity" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button class="btn-quantity" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                    <button class="btn-remove-item" onclick="eliminarDelCarrito(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    document.getElementById('cartTotalSidebar').textContent = `$${total.toLocaleString()}`;
}

// Cambiar cantidad
function cambiarCantidad(id, cambio) {
    const item = carrito.find(item => item.id === id);
    if (!item) return;
    
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
        eliminarDelCarrito(id);
    } else {
        guardarCarrito();
        renderCarrito();
        actualizarContadores();
    }
}

// Eliminar del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    guardarCarrito();
    actualizarContadores();
    renderCarrito();
    showToast('🗑️ Producto eliminado');
}

// Guardar carrito
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Actualizar contadores
function actualizarContadores() {
    const cartCount = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('wishlistCount').textContent = listaDeseos.length;
    document.getElementById('compareCount').textContent = comparar.length;
}

// Toggle cart sidebar
function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
    if (document.getElementById('cartSidebar').classList.contains('active')) {
        renderCarrito();
    }
}

// Filtrar productos
function filtrarProductos() {
    let filtrados = [...productos];
    
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const search = searchInput.value.toLowerCase();
        if (search) {
            filtrados = filtrados.filter(p => 
                p.nombre.toLowerCase().includes(search) ||
                p.categoria.toLowerCase().includes(search) ||
                p.descripcion.toLowerCase().includes(search)
            );
        }
    }
    
    // Categorías
    const categorias = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
    if (categorias.length > 0) {
        filtrados = filtrados.filter(p => categorias.includes(p.categoria));
    }
    
    // Precio
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || 50000;
    filtrados = filtrados.filter(p => p.precio >= minPrice && p.precio <= maxPrice);
    
    // Rating
    const ratingFilter = document.querySelector('input[name="rating"]:checked');
    if (ratingFilter) {
        const minRating = parseInt(ratingFilter.value);
        filtrados = filtrados.filter(p => p.rating >= minRating);
    }
    
    // Envío gratis
    const freeShipping = document.getElementById('freeShipping');
    if (freeShipping && freeShipping.checked) {
        filtrados = filtrados.filter(p => p.envio);
    }
    
    // Ordenar
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sort = sortSelect.value;
        switch(sort) {
            case 'precio-asc': filtrados.sort((a, b) => a.precio - b.precio); break;
            case 'precio-desc': filtrados.sort((a, b) => b.precio - a.precio); break;
            case 'nombre': filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
            case 'ventas': filtrados.sort((a, b) => b.ventas - a.ventas); break;
        }
    }
    
    return filtrados;
}

// Filtrar por categoría
function filterByCategory(categoria) {
    document.querySelectorAll('.category-filter').forEach(cb => {
        cb.checked = cb.value === categoria;
    });
    paginaActual = 1;
    renderProductos(filtrarProductos());
    document.getElementById('pageTitle').textContent = categoria;
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Limpiar filtros
function clearAllFilters() {
    document.querySelectorAll('.category-filter').forEach(cb => cb.checked = false);
    document.getElementById('minPrice').value = 0;
    document.getElementById('maxPrice').value = 50000;
    const priceSlider = document.getElementById('priceSlider');
    if (priceSlider) priceSlider.value = 50000;
    document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
    const freeShipping = document.getElementById('freeShipping');
    if (freeShipping) freeShipping.checked = false;
    document.getElementById('searchInput').value = '';
    document.getElementById('sortSelect').value = 'relevancia';
    document.getElementById('pageTitle').textContent = 'Todos los Productos';
    paginaActual = 1;
    renderProductos(productos);
}

// Cambiar vista
function changeView(vista) {
    vistaActual = vista;
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.target.closest('.view-btn').classList.add('active');
    
    const grid = document.getElementById('productsGrid');
    if (vista === 'list') {
        grid.classList.add('list-view');
    } else {
        grid.classList.remove('list-view');
    }
    
    renderProductos(filtrarProductos());
}

// Pagination
function renderPagination(totalProductos) {
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    const pagination = document.getElementById('pagination');
    
    if (totalPaginas <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let html = '';
    for (let i = 1; i <= totalPaginas; i++) {
        html += `
            <li class="${i === paginaActual ? 'active' : ''}">
                <a href="#" onclick="cambiarPagina(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    pagination.innerHTML = html;
}

function cambiarPagina(pagina) {
    paginaActual = pagina;
    renderProductos(filtrarProductos());
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Countdown
function iniciarCountdown() {
    setInterval(() => {
        const ahora = new Date();
        const finDia = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate(), 23, 59, 59);
        const diferencia = finDia - ahora;
        
        const horas = Math.floor(diferencia / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (hoursEl) hoursEl.textContent = String(horas).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutos).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(segundos).padStart(2, '0');
    }, 1000);
}

// Render Deals
function renderDeals() {
    const deals = productos.filter(p => {
        const descuento = ((p.precioAnterior - p.precio) / p.precioAnterior) * 100;
        return descuento > 20;
    }).slice(0, 4);
    
    const dealsGrid = document.getElementById('dealsGrid');
    if (dealsGrid) {
        dealsGrid.innerHTML = deals.map(p => crearCardProducto(p)).join('');
    }
}

// Checkout
function checkout() {
    if (carrito.length === 0) {
        showToast('⚠️ Carrito vacío', 'Agrega productos antes de continuar');
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const codigoOrden = 'PM-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    
    showToast('✅ ¡Compra exitosa!', `Orden ${codigoOrden} - Total: $${total.toLocaleString()}`);
    
    carrito = [];
    guardarCarrito();
    actualizarContadores();
    renderCarrito();
    toggleCart();
}

// Chat
function toggleChat() {
    document.getElementById('chatBox').classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const mensaje = input.value.trim();
    
    if (!mensaje) return;
    
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML += `
        <div class="message user">
            <p>${mensaje}</p>
        </div>
    `;
    
    input.value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    setTimeout(() => {
        messagesDiv.innerHTML += `
            <div class="message bot">
                <p>Gracias por tu mensaje. Un asesor te atenderá pronto. 😊</p>
            </div>
        `;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000);
}

// Toast
function showToast(titulo, mensaje = '') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div>
            <strong>${titulo}</strong>
            ${mensaje ? `<br><small>${mensaje}</small>` : ''}
        </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Configurar event listeners
function configurarEventListeners() {
    // Búsqueda con sugerencias
    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const termino = e.target.value.toLowerCase();
            
            if (termino.length < 2) {
                suggestions.classList.remove('active');
                return;
            }
            
            const resultados = productos.filter(p => 
                p.nombre.toLowerCase().includes(termino)
            ).slice(0, 5);
            
            if (resultados.length > 0) {
                suggestions.innerHTML = resultados.map(p => `
                    <div class="suggestion-item" onclick="seleccionarSugerencia('${p.nombre.replace(/'/g, "\\'")}')">
                        ${p.nombre}
                    </div>
                `).join('');
                suggestions.classList.add('active');
            } else {
                suggestions.classList.remove('active');
            }
            
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            suggestions.classList.remove('active');
        }
    });
    
    // Filtros de categoría
    document.querySelectorAll('.category-filter').forEach(input => {
        input.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    });
    
    // Filtros de precio
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    
    if (minPrice) {
        minPrice.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    if (maxPrice) {
        maxPrice.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    const priceSlider = document.getElementById('priceSlider');
    if (priceSlider) {
        priceSlider.addEventListener('input', (e) => {
            document.getElementById('maxPrice').value = e.target.value;
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    // Filtros de rating
    document.querySelectorAll('input[name="rating"]').forEach(input => {
        input.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    });
    
    // Filtro envío gratis
    const freeShipping = document.getElementById('freeShipping');
    if (freeShipping) {
        freeShipping.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    // Ordenar
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            paginaActual = 1;
            renderProductos(filtrarProductos());
        });
    }
    
    // Botón carrito
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCart();
        });
    }
    
    // Botón wishlist
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (listaDeseos.length === 0) {
                showToast('💔 Lista vacía', 'No tienes productos en favoritos');
            } else {
                const productosDeseos = productos.filter(p => listaDeseos.includes(p.id));
                paginaActual = 1;
                renderProductos(productosDeseos);
                document.getElementById('pageTitle').textContent = 'Mis Favoritos';
                document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Botón comparar
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (comparar.length === 0) {
                showToast('⚠️ Sin productos', 'Selecciona productos para comparar');
                return;
            }
            
            const productosComparar = productos.filter(p => comparar.includes(p.id));
            let html = '<table class="table"><thead><tr><th>Característica</th>';
            productosComparar.forEach(p => {
                html += `<th>${p.nombre}</th>`;
            });
            html += '</tr></thead><tbody>';
            html += `<tr><td>Precio</td>${productosComparar.map(p => `<td>$${p.precio.toLocaleString()}</td>`).join('')}</tr>`;
            html += `<tr><td>Categoría</td>${productosComparar.map(p => `<td>${p.categoria}</td>`).join('')}</tr>`;
            html += `<tr><td>Calificación</td>${productosComparar.map(p => `<td>${'⭐'.repeat(p.rating)}</td>`).join('')}</tr>`;
            html += `<tr><td>Ventas</td>${productosComparar.map(p => `<td>${p.ventas}</td>`).join('')}</tr>`;
            html += '</tbody></table>';
            
            document.getElementById('compareGrid').innerHTML = html;
            new bootstrap.Modal(document.getElementById('compareModal')).show();
        });
    }
    
    // Enter en chat
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
}

function seleccionarSugerencia(nombre) {
    document.getElementById('searchInput').value = nombre;
    document.getElementById('searchSuggestions').classList.remove('active');
    paginaActual = 1;
    renderProductos(filtrarProductos());
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}