// ============================================================================
// LÓGICA DA PÁGINA DE DETALHES DO PRODUTO
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Obter ID do produto pela URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // 2. Buscar o produto no banco de dados compartilhado (PRODUTOS carregado de catalog.js)
    const produto = PRODUTOS.find(p => p.id === productId);

    const container = document.getElementById("product-detail-container");

    if (!produto) {
        // Redirecionar para home se produto não existe
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <h3>Produto não encontrado</h3>
                <p>O produto solicitado não existe ou foi removido do catálogo.</p>
                <a href="index.html" class="btn btn-primary">Voltar para a Vitrine</a>
            </div>
        `;
        return;
    }

    // 3. Definir o título da página com o nome do produto para SEO
    document.title = `${produto.title} - Promoções`;

    // 4. Renderizar a página de detalhes do produto
    renderProductDetails(container, produto);
});

// ==========================================
// RENDERIZADORES DE LAYOUT
// ==========================================
function renderProductDetails(container, product) {
    const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
    
    // Gerar estrelas de avaliação
    const starsHtml = Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(product.rating)) {
            return '<i class="fa-solid fa-star"></i>';
        } else if (i < product.rating) {
            return '<i class="fa-solid fa-star-half-stroke"></i>';
        }
        return '<i class="fa-regular fa-star"></i>';
    }).join('');

    // Gerar linhas da tabela de especificações
    const specsRows = Object.entries(product.specs).map(([key, value]) => `
        <tr>
            <th>${key}</th>
            <td>${value}</td>
        </tr>
    `).join('');

    // Montar miniaturas da galeria com imagens reais
    const galleryThumbs = product.images && product.images.length > 0 ? product.images.map((imgUrl, index) => `
        <button class="thumb-btn ${index === 0 ? 'active' : ''}" onclick="switchMainImage(this, '${imgUrl}')" aria-label="Visualizar foto ${index + 1}">
            <img src="${imgUrl}" alt="Miniatura ${index + 1}" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-sm);">
        </button>
    `).join('') : '';

    // Renderizar HTML dinâmico
    container.innerHTML = `
        <div class="product-detail-layout">
            
            <!-- Coluna Esquerda: Galeria de Imagens -->
            <div class="product-gallery">
                <div class="main-image-box" id="main-image-box" onclick="nextImage()" style="position: relative; cursor: pointer;">
                    <!-- Seta Esquerda -->
                    <button class="nav-arrow-btn prev" onclick="event.stopPropagation(); prevImage()" aria-label="Imagem Anterior">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    
                    <img src="${product.imagePath}" alt="${product.title}" class="product-detail-real-img" id="main-image-pic">
                    
                    <!-- Seta Direita -->
                    <button class="nav-arrow-btn next" onclick="event.stopPropagation(); nextImage()" aria-label="Próxima Imagem">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>

                    <!-- Indicadores de Pontos -->
                    <div class="carousel-indicators">
                        ${product.images.map((_, idx) => `
                            <span class="indicator-dot ${idx === 0 ? 'active' : ''}" onclick="event.stopPropagation(); goToImageIndex(${idx})"></span>
                        `).join('')}
                    </div>
                </div>
                ${galleryThumbs ? `<div class="gallery-thumbs">${galleryThumbs}</div>` : ''}
            </div>

            <!-- Coluna Direita: Informações e Compra -->
            <div class="product-main-info">
                ${product.tag ? `<span class="product-tag ${product.tag.toLowerCase().includes('frete') ? 'free-shipping' : ''}">${product.tag}</span>` : ''}
                
                <h1 class="detail-title">${product.title}</h1>
                
                <div class="detail-rating">
                    <div class="stars">${starsHtml}</div>
                    <span class="rating-count">(${product.ratingCount} avaliações de compradores)</span>
                </div>

                <div class="detail-price-box">
                    ${product.oldPrice ? `<p class="detail-old-price">R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</p>` : ''}
                    <div class="detail-new-price">
                        R$ ${product.price.toFixed(2).replace('.', ',')}
                        ${discountPercent > 0 ? `<span class="discount-badge">${discountPercent}% OFF</span>` : ''}
                    </div>
                </div>

                <!-- Botão de Compra Direta -->
                <button class="detail-buy-btn" id="buy-button" onclick="handleBuyClick(${product.id})">
                    <i class="fa-solid fa-cart-shopping"></i> Comprar na Shopee
                </button>

                <!-- Descrição Curta -->
                <div class="detail-description">
                    <h3>Descrição do Produto</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        </div>

        <!-- Seção Ficha Técnica (Abaixo das colunas em dispositivos móveis) -->
        <div class="detail-specs">
            <h3>Ficha Técnica / Especificações</h3>
            <table class="specs-table">
                <tbody>
                    ${specsRows}
                </tbody>
            </table>
        </div>
    `;
}

// ==========================================
// GERENCIADORES DE INTERAÇÃO
// ==========================================

let currentImageIndex = 0;

window.goToImageIndex = function(index) {
    const product = PRODUTOS[0];
    if (!product || !product.images || product.images.length === 0) return;
    
    // Rotação circular de índice
    if (index >= product.images.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = product.images.length - 1;
    } else {
        currentImageIndex = index;
    }
    
    const nextImgUrl = product.images[currentImageIndex];
    
    // Transição suave da imagem principal
    const mainPic = document.getElementById("main-image-pic");
    if (mainPic) {
        mainPic.style.opacity = '0';
        mainPic.style.transform = 'scale(0.97)';
        
        setTimeout(() => {
            mainPic.src = nextImgUrl;
            mainPic.style.opacity = '1';
            mainPic.style.transform = 'scale(1)';
        }, 120);
    }
    
    // Atualizar miniaturas da galeria
    const thumbs = document.querySelectorAll(".thumb-btn");
    thumbs.forEach((t, idx) => {
        if (idx === currentImageIndex) {
            t.classList.add("active");
            t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            t.classList.remove("active");
        }
    });
    
    // Atualizar pontos indicadores
    const dots = document.querySelectorAll(".indicator-dot");
    dots.forEach((d, idx) => {
        if (idx === currentImageIndex) {
            d.classList.add("active");
        } else {
            d.classList.remove("active");
        }
    });
};

window.nextImage = function() {
    goToImageIndex(currentImageIndex + 1);
};

window.prevImage = function() {
    goToImageIndex(currentImageIndex - 1);
};

// Alternar imagem principal ao clicar na miniatura da galeria
window.switchMainImage = function(button, imgUrl) {
    const product = PRODUTOS[0];
    const index = product.images.indexOf(imgUrl);
    if (index > -1) {
        goToImageIndex(index);
    }
};

// Manipular o clique de compra (exibe toast e redireciona na MESMA aba)
window.handleBuyClick = function(productId) {
    const product = PRODUTOS.find(p => p.id === productId);
    if (!product) return;

    const notification = document.createElement("div");
    notification.className = "toast-notification";
    notification.innerHTML = `
        <div class="toast-content">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            <div>
                <h5>Redirecionando para a Loja Oficial</h5>
                <p>Aplicando o melhor desconto de parceiro...</p>
            </div>
        </div>
    `;
    
    // Estilos dinâmicos da notificação flutuante de carregamento
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        left: '30px', /* Ocupa largura cheia no mobile com margens */
        backgroundColor: '#1E293B',
        color: '#FFFFFF',
        padding: '16px 20px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        zIndex: '9999',
        borderLeft: '5px solid #FF4D97',
        fontFamily: 'Inter, sans-serif',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 10);

    // Redireciona na MESMA aba após 1.2 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
        window.location.href = product.affiliateUrl; // Redirecionamento sem abrir nova aba!
    }, 1200);
};
