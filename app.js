// catalog.js já carregado globalmente contendo PRODUTOS

// ==========================================
// ESTADO DA APLICAÇÃO
// ==========================================
let filterCategory = "todos";
let searchQuery = "";
let sortBy = "default";

// ==========================================
// SELETORES DOM
// ==========================================
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const emptyState = document.getElementById("empty-state");
const clearSearchBtn = document.getElementById("clear-search");

// ==========================================
// FUNÇÕES DE FORMATO & AUXILIARES
// ==========================================
function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calculateDiscount(oldPrice, price) {
    if (!oldPrice) return 0;
    return Math.round(((oldPrice - price) / oldPrice) * 100);
}

// Criação de efeito de redirect com notificação flutuante
function showRedirectNotification(productTitle, targetUrl) {
    const notification = document.createElement("div");
    notification.className = "toast-notification";
    notification.innerHTML = `
        <div class="toast-content">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            <div>
                <h5>Redirecionando para a Shopee</h5>
                <p>Aplicando cupom de afiliado e abrindo página...</p>
            </div>
        </div>
    `;
    
    // Adiciona estilos da notificação de forma dinâmica para manter isolamento
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#1E293B',
        color: '#FFFFFF',
        padding: '16px 24px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        zIndex: '9999',
        borderLeft: '5px solid #FFDB15',
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

    // Redireciona de fato após 1.5s (dá tempo do usuário ver a interação premium)
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(20px)';
        setTimeout(() => notification.remove(), 300);
        window.open(targetUrl, '_blank');
    }, 1500);
}

// ==========================================
// RENDERIZAÇÃO DE PRODUTOS
// ==========================================
function renderProducts() {
    // 1. Filtrar
    let filtered = PRODUTOS.filter(p => {
        const matchesCategory = filterCategory === "todos" || p.category === filterCategory;
        return matchesCategory;
    });

    // Busca por termo (searchQuery)
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(query) || 
            (p.description && p.description.toLowerCase().includes(query)) ||
            p.category.toLowerCase().includes(query)
        );
    }

    // 2. Atualizar contagem
    if (filtered.length === 0) {
        productGrid.style.display = "none";
        emptyState.style.display = "flex";
        return;
    } else {
        productGrid.style.display = "grid";
        emptyState.style.display = "none";
    }

    // 4. Montar HTML dos Cards
    productGrid.innerHTML = filtered.map(product => {
        const discountPercent = calculateDiscount(product.oldPrice, product.price);
        const starsHtml = Array.from({ length: 5 }, (_, i) => {
            if (i < Math.floor(product.rating)) {
                return '<i class="fa-solid fa-star"></i>';
            } else if (i < product.rating) {
                return '<i class="fa-solid fa-star-half-stroke"></i>';
            }
            return '<i class="fa-regular fa-star"></i>';
        }).join('');

        return `
            <article class="product-card" data-id="${product.id}" onclick="goToProduct(${product.id})" style="cursor: pointer;">
                ${product.tag ? `<span class="product-tag ${product.tag.toLowerCase().includes('frete') ? 'free-shipping' : ''}">${product.tag}</span>` : ''}
                <div class="product-image-container">
                    <img src="${product.imagePath}" alt="${product.title}" class="product-real-img" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title" title="${product.title}">${product.title}</h3>
                    <div class="product-rating">
                        ${starsHtml}
                        <span>(${product.ratingCount})</span>
                    </div>
                    <div class="product-price-box">
                        ${product.oldPrice ? `<p class="product-old-price">${formatCurrency(product.oldPrice)}</p>` : ''}
                        <div class="product-new-price">
                            ${formatCurrency(product.price)}
                            ${discountPercent > 0 ? `<span>(${discountPercent}% OFF)</span>` : ''}
                        </div>
                    </div>
                    <button class="product-action-btn" onclick="event.stopPropagation(); showRedirectNotification('${product.title.replace(/'/g, "\\'")}', '${product.affiliateUrl}')">
                        Comprar <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </article>
        `;
    }).join('');
}

// Redireciona para a página de detalhes na mesma aba
window.goToProduct = function(productId) {
    window.location.href = `product.html?id=${productId}`;
};

// ==========================================
// GERENCIADORES DE EVENTOS
// ==========================================



// Busca em tempo real
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// Botão de busca (apenas melhora a usabilidade de clique)
searchButton.addEventListener("click", () => {
    searchQuery = searchInput.value;
    renderProducts();
});

// Limpar busca no estado vazio
clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    filterCategory = "todos";
    
    renderProducts();
});

// ==========================================
// INICIALIZAÇÃO DA PÁGINA
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
    // Adicionar um pequeno delay para simular o carregamento premium de dados
    setTimeout(() => {
        renderProducts();
    }, 400);
});

// ==========================================
// WHATSAPP E DETECÇÃO DE WEBVIEW (TIKTOK)
// ==========================================
const btnsWhatsapp = document.querySelectorAll(".btn-whatsapp-channel");
const tiktokModal = document.getElementById("tiktok-modal");
const closeModal = document.getElementById("close-modal");

function isTikTokBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    // Permite testar pelo PC adicionando ?tiktok=true na URL
    const isTestMode = window.location.search.includes("tiktok=true");
    return isTestMode || ua.includes("tiktok") || ua.includes("musical_ly") || ua.includes("bytedance");
}

// Verifica no carregamento da página
window.addEventListener("DOMContentLoaded", () => {
    if (isTikTokBrowser() && tiktokModal) {
        tiktokModal.style.display = "flex";
    }
});

if (btnsWhatsapp.length > 0) {
    btnsWhatsapp.forEach(btn => {
        btn.addEventListener("click", () => {
            const whatsappUrl = "https://whatsapp.com/channel/0029VbDSNdaHltY6Omi6rV1r";
            
            if (isTikTokBrowser()) {
                // Se estiver no TikTok, mostra o modal
                tiktokModal.style.display = "flex";
            } else {
                // Senão, redireciona pro WhatsApp direto
                const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (isMobile) {
                    window.location.href = whatsappUrl;
                } else {
                    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }
            }
        });
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        tiktokModal.style.display = "none";
    });
}
