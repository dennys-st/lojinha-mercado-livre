// ============================================================================
// BANCO DE DADOS DE PRODUTOS COMPARTILHADO (CATÁLOGO)
// ============================================================================

const PRODUTOS = [
    {
        "title": "Kit 5pçs Toalhas de Rosto de 45x60cm 100% Algodão - Coleção",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/xkTKzsBw/Bath-towel-set-advertisement-202607201436.jpg",
        "images": [
            "https://i.postimg.cc/xkTKzsBw/Bath-towel-set-advertisement-202607201436.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/111TdBuvqr",
        "price": 38.99,
        "oldPrice": 58.99,
        "rating": 4.8,
        "ratingCount": 240,
        "description": "Kit com 5 toalhas de rosto 100% algodão. Tamanho 45x60cm, excelente absorção e super maciez para o dia a dia.",
        "specs": {
            "Tipo": "Toalha de Rosto",
            "Quantidade": "5 Peças",
            "Tamanho": "45x60cm",
            "Material": "100% Algodão"
        },
        "tag": "Oferta",
        "id": 1
    },
    {
        "title": "Espelho Grande Com Led 3 Cores e Botão Touch Jateado 90x40 Banheiro Quarto Sala",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/Px3D7QBc/Floor-mirror-with-LED-frame-202607201439.jpg",
        "images": [
            "https://i.postimg.cc/Px3D7QBc/Floor-mirror-with-LED-frame-202607201439.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/qi3QnbaTZ",
        "price": 187.9,
        "oldPrice": 207.9,
        "rating": 4.9,
        "ratingCount": 125,
        "description": "Espelho grande iluminado com LED em 3 cores de luz. Possui botão touch na própria tela. Ideal para decorar banheiros, quartos ou salas com muito luxo e requinte.",
        "specs": {
            "Tipo": "Espelho de Parede",
            "Tamanho": "90x40",
            "Recurso Especial": "Iluminação LED com botão touch"
        },
        "tag": "Premium",
        "id": 2
    },
    {
        "title": "Conjuntos 3 Tapete Jogo de Banheiro Antiderrapante 3 Peças Luxo Felpa Aveludada",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/G228vsHZ/Pink-bathroom-set-advertisement-202607201440.jpg",
        "images": [
            "https://i.postimg.cc/G228vsHZ/Pink-bathroom-set-advertisement-202607201440.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/18wRFalRm",
        "price": 19.99,
        "oldPrice": 39.99,
        "rating": 4.7,
        "ratingCount": 380,
        "description": "Jogo de banheiro luxo completo com 3 peças. Superfície em felpa super aveludada para máximo conforto e base totalmente antiderrapante, garantindo segurança no seu banheiro.",
        "specs": {
            "Tipo": "Jogo de Banheiro",
            "Quantidade": "3 Peças",
            "Material": "Felpa Aveludada Antiderrapante"
        },
        "tag": "Promoção",
        "id": 3
    },
    {
        "title": "Kit 7 ou 10 Calcinhas Fio Dental Suede Canelado Forro 100% Algodão",
        "category": "moda",
        "imagePath": "babydoll-rosa.jpg",
        "images": [
            "babydoll-rosa.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/111TcwwJh3",
        "price": 37.33,
        "oldPrice": 57.33,
        "rating": 4.8,
        "ratingCount": 510,
        "description": "Kit confortável de calcinhas fio dental em Suede Canelado. Contém forro 100% algodão que cuida da sua saúde íntima. Cores variadas para todos os dias.",
        "specs": {
            "Tipo": "Calcinha Fio Dental",
            "Forro": "100% Algodão",
            "Tecido": "Suede Canelado"
        },
        "tag": "Destaque",
        "id": 4
    },
    {
        "title": "Jogo De Panelas 10 Peças Antiaderente Conjunto Caçarola Frigideira Fervedor",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/FH4x3DNr/Cookware-set-on-kitchen-countertop-202607201441.jpg",
        "images": [
            "https://i.postimg.cc/FH4x3DNr/Cookware-set-on-kitchen-countertop-202607201441.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/6pzGZenqk2",
        "price": 179.0,
        "oldPrice": 199.0,
        "rating": 4.9,
        "ratingCount": 420,
        "description": "Renove sua cozinha com este Jogo de Panelas Completo com 10 Peças. Revestimento premium antiaderente (não gruda) na cor Coffee Cappuccino.",
        "specs": {
            "Tipo": "Jogo de Panelas",
            "Quantidade": "10 Peças",
            "Revestimento": "Antiaderente"
        },
        "tag": "Oferta",
        "id": 5
    },
    {
        "title": "Arranjo c/ 3 Trepadeira Folha de HERA + Vaso Trançado Marrom",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/grd6XtRT/Artificial-hanging-plant-in-basket-202607201441.jpg",
        "images": [
            "https://i.postimg.cc/grd6XtRT/Artificial-hanging-plant-in-basket-202607201441.jpg",
            "https://i.postimg.cc/hhg7zZxY/Artificial-hanging-plant-in-basket-202607201441-(1).jpg",
            "https://i.postimg.cc/QVsW9Y5n/Artificial-hanging-plant-in-basket-202607201441-(2).jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/9fJRwoePgy",
        "price": 16.8,
        "oldPrice": 36.8,
        "rating": 4.8,
        "ratingCount": 185,
        "description": "Lindo arranjo de decoração contendo 3 trepadeiras de folhas artificiais modelo HERA, acompanhado de um vaso trançado sofisticado na cor marrom.",
        "specs": {
            "Tipo": "Decoração de Interiores",
            "Planta": "Hera Artificial",
            "Vaso": "Trançado Marrom"
        },
        "tag": "Mais Vendido",
        "id": 6
    },
    {
        "title": "Tapete de Banheiro Absorvente Antiderrapante Secagem Rápida",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/TwzbG3PT/Mat-in-luxury-bathroom-202607201442.jpg",
        "images": [
            "https://i.postimg.cc/TwzbG3PT/Mat-in-luxury-bathroom-202607201442.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/903l9ZXJmn",
        "price": 27.9,
        "oldPrice": 45.0,
        "rating": 4.6,
        "ratingCount": 150,
        "description": "Mantenha o chão sempre seco com este tapete para banheiro ultra absorvente e antiderrapante. Facilita a limpeza e tem secagem instantânea.",
        "specs": {
            "Tipo": "Tapete Absorvente",
            "Característica Principal": "Super Antiderrapante",
            "Secagem": "Rápida"
        },
        "tag": "Oferta",
        "id": 7
    },
    {
        "title": "Bermuda Modeladora Anágua Cinta Short Feminino Alta Compressão",
        "category": "moda",
        "imagePath": "https://i.postimg.cc/cKyJq6B2/Female-adjusting-shapewear-waist-202607201443.jpg",
        "images": [
            "https://i.postimg.cc/cKyJq6B2/Female-adjusting-shapewear-waist-202607201443.jpg",
            "https://i.postimg.cc/Ff5Kt1Vq/Female-body-wearing-black-shapewear-202607201443.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/8fQukwnQZ8",
        "price": 20.9,
        "oldPrice": 40.9,
        "rating": 4.9,
        "ratingCount": 610,
        "description": "Bermuda e short modelador com cinta de altíssima compressão. Modela o corpo, reduz medidas imediatamente e é ótimo também para uso pós parto.",
        "specs": {
            "Tipo": "Cinta Modeladora / Short",
            "Compressão": "Alta",
            "Uso": "Estético e Pós Parto"
        },
        "tag": "Mais Vendido",
        "id": 8
    },
    {
        "title": "Capa Protetor de Colchão Matelado Impermeável Varias Cores Promoção",
        "category": "casa",
        "imagePath": "https://i.postimg.cc/r0hcppxj/Black-quilted-mattress-protector-202607201444.jpg",
        "images": [
            "https://i.postimg.cc/r0hcppxj/Black-quilted-mattress-protector-202607201444.jpg",
            "https://i.postimg.cc/7GBDLL0X/Blue-quilted-mattress-protector-202607201443.jpg",
            "https://i.postimg.cc/k6j955Kf/White-quilted-mattress-protector-202607201444.jpg"
        ],
        "affiliateUrl": "https://s.shopee.com.br/4qECBsAOHB",
        "price": 25.9,
        "oldPrice": 45.9,
        "rating": 4.8,
        "ratingCount": 355,
        "description": "Garanta maior durabilidade para sua cama! Capa protetora de colchão com estilo matelado, 100% impermeável contra líquidos.",
        "specs": {
            "Tipo": "Capa Protetora",
            "Material": "Matelado Impermeável",
            "Tamanhos Compatíveis": "Casal, Queen, King, Solteiro"
        },
        "tag": "Destaque",
        "id": 9
    },
    {
        "title": "Baby Doll Canelado de Coração – Confortável e Fresquinho 10",
        "category": "pijamas",
        "rating": 4.9,
        "ratingCount": 142,
        "oldPrice": 59.9,
        "price": 34.9,
        "imagePath": "babydoll-coracoes-pretos.jpg",
        "images": [
            "babydoll-coracoes-pretos.jpg",
            "babydoll-marrom.jpg",
            "babydoll-rosa.jpg",
            "babydoll-rosa-chiclete.jpg",
            "babydoll-vermelho.jpg",
            "babydoll-vermelho-coracoes.jpg"
        ],
        "description": "Durma com muito mais estilo, frescor e aconchego com o nosso Baby Doll Feminino Canelado de Coração. Confeccionado em malha canelada premium, ele oferece um toque suave sobre a pele e alta respirabilidade, sendo a escolha ideal para noites quentes de verão.",
        "specs": {
            "Composição": "Malha canelada leve (Poliéster e Elastano)",
            "Tamanhos": "P, M, G, GG",
            "Tipo": "Pijama baby doll feminino de verão",
            "Diferencial": "Alças ajustáveis e tecido com elasticidade"
        },
        "affiliateUrl": "https://s.shopee.com.br/8AUPhFsa9Y",
        "tag": "Destaque",
        "id": 10
    },
    {
        "title": "Baby Doll Canelado de Coração – Confortável e Fresquinho 11",
        "category": "pijamas",
        "rating": 4.9,
        "ratingCount": 142,
        "oldPrice": 59.9,
        "price": 34.9,
        "imagePath": "babydoll-coracoes-pretos.jpg",
        "images": [
            "babydoll-coracoes-pretos.jpg",
            "babydoll-marrom.jpg",
            "babydoll-rosa.jpg",
            "babydoll-rosa-chiclete.jpg",
            "babydoll-vermelho.jpg",
            "babydoll-vermelho-coracoes.jpg"
        ],
        "description": "Durma com muito mais estilo, frescor e aconchego com o nosso Baby Doll Feminino Canelado de Coração. Confeccionado em malha canelada premium, ele oferece um toque suave sobre a pele e alta respirabilidade, sendo a escolha ideal para noites quentes de verão.",
        "specs": {
            "Composição": "Malha canelada leve (Poliéster e Elastano)",
            "Tamanhos": "P, M, G, GG",
            "Tipo": "Pijama baby doll feminino de verão",
            "Diferencial": "Alças ajustáveis e tecido com elasticidade"
        },
        "affiliateUrl": "https://s.shopee.com.br/8AUPhFsa9Y",
        "tag": "Destaque",
        "id": 11
    },
    {
        "title": "Baby Doll Canelado de Coração – Confortável e Fresquinho 12",
        "category": "pijamas",
        "rating": 4.9,
        "ratingCount": 142,
        "oldPrice": 59.9,
        "price": 34.9,
        "imagePath": "babydoll-coracoes-pretos.jpg",
        "images": [
            "babydoll-coracoes-pretos.jpg",
            "babydoll-marrom.jpg",
            "babydoll-rosa.jpg",
            "babydoll-rosa-chiclete.jpg",
            "babydoll-vermelho.jpg",
            "babydoll-vermelho-coracoes.jpg"
        ],
        "description": "Durma com muito mais estilo, frescor e aconchego com o nosso Baby Doll Feminino Canelado de Coração. Confeccionado em malha canelada premium, ele oferece um toque suave sobre a pele e alta respirabilidade, sendo a escolha ideal para noites quentes de verão.",
        "specs": {
            "Composição": "Malha canelada leve (Poliéster e Elastano)",
            "Tamanhos": "P, M, G, GG",
            "Tipo": "Pijama baby doll feminino de verão",
            "Diferencial": "Alças ajustáveis e tecido com elasticidade"
        },
        "affiliateUrl": "https://s.shopee.com.br/8AUPhFsa9Y",
        "tag": "Destaque",
        "id": 12
    }
];
