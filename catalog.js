// ============================================================================
// BANCO DE DADOS DE PRODUTOS COMPARTILHADO (CATÁLOGO)
// ============================================================================

const PRODUTOS = [
    {
        id: 1,
        title: "Smartphone Premium 5G - Tela 120Hz, Câmera 108MP, 256GB",
        category: "tecnologia",
        rating: 4.8,
        ratingCount: 320,
        oldPrice: 3499.00,
        price: 2499.00,
        imageIcon: "fa-solid fa-mobile-screen-button",
        images: [
            "fa-solid fa-mobile-screen-button",
            "fa-solid fa-camera",
            "fa-solid fa-microchip",
            "fa-solid fa-battery-full"
        ],
        description: "Experimente a velocidade ultra-rápida do 5G com o novo Smartphone Premium. Equipado com uma tela AMOLED de 120Hz para navegação extremamente fluida, processador Octa-Core de última geração e uma incrível câmera tripla de 108MP para capturar cada detalhe com perfeição profissional. A bateria de 5000mAh dura o dia inteiro e possui suporte a carregamento rápido de 67W.",
        specs: {
            "Marca": "SmartTech",
            "Modelo": "Premium 5G",
            "Memória RAM": "8 GB",
            "Armazenamento": "256 GB (Expansível)",
            "Câmera Traseira": "108 MP + 8 MP + 2 MP",
            "Câmera Frontal": "32 MP",
            "Bateria": "5000 mAh",
            "Carregador": "67W Turbo incluso"
        },
        affiliateUrl: "https://www.mercadolivre.com.br",
        tag: "Mais Vendido"
    },
    {
        id: 2,
        title: "Fone de Ouvido Headphone Bluetooth com Cancelamento de Ruído Active Noise",
        category: "tecnologia",
        rating: 4.7,
        ratingCount: 154,
        oldPrice: 499.00,
        price: 299.00,
        imageIcon: "fa-solid fa-headphones",
        images: [
            "fa-solid fa-headphones",
            "fa-solid fa-volume-high",
            "fa-solid fa-bluetooth",
            "fa-solid fa-sliders"
        ],
        description: "Isole-se do barulho externo e foque apenas no som com este Headphone Bluetooth Premium. Equipado com a tecnologia Active Noise Cancelling (ANC), ele bloqueia ruídos externos indesejados. Possui drivers de som de 40mm para graves profundos e agudos cristalinos. Almofadas acolchoadas ultra macias garantem conforto por horas de uso, e a bateria oferece até 30 horas de reprodução contínua.",
        specs: {
            "Marca": "AcousticLab",
            "Tipo": "Over-Ear (Circumaural)",
            "Conexão": "Bluetooth 5.2 / P2 Auxiliar",
            "Cancelamento de Ruído": "Ativo (ANC) até 25dB",
            "Autonomia de Bateria": "Até 30 horas (ANC desligado)",
            "Tempo de Carga": "2 horas para carga completa",
            "Microfone": "Integrado com redução de eco",
            "Peso": "240g"
        },
        affiliateUrl: "https://www.mercadolivre.com.br",
        tag: "Frete Grátis"
    },
    {
        id: 3,
        title: "Relógio Inteligente Smartwatch Sport Amoled Impermeável",
        category: "acessorios",
        rating: 4.5,
        ratingCount: 210,
        oldPrice: 399.00,
        price: 199.00,
        imageIcon: "fa-solid fa-clock",
        images: [
            "fa-solid fa-clock",
            "fa-solid fa-heart-pulse",
            "fa-solid fa-person-running",
            "fa-solid fa-droplet"
        ],
        description: "Monitore sua saúde e atividades físicas em tempo real com o Smartwatch Sport. Com uma tela AMOLED colorida de alta resolução de 1.43 polegadas, ele oferece excelente visibilidade sob a luz do sol. Inclui sensores precisos de batimentos cardíacos, saturação de oxigênio no sangue (SpO2) e rastreamento de sono. Possui mais de 100 modos esportivos e resistência à água IP68.",
        specs: {
            "Marca": "FitTrack",
            "Tela": "AMOLED 1.43\" Circular",
            "Resistência à Água": "IP68 (Natação leve e respingos)",
            "Sensores": "Frequência Cardíaca, Oxímetro (SpO2), Acelerômetro",
            "Notificações": "Chamadas, WhatsApp, Instagram e e-mails",
            "Compatibilidade": "Android 6.0+ / iOS 9.0+",
            "Bateria": "Até 10 dias em uso normal",
            "Pulseira": "Silicone antialérgico removível"
        },
        affiliateUrl: "https://www.mercadolivre.com.br",
        tag: "50% OFF"
    },
    {
        id: 4,
        title: "Robô Aspirador de Pó Inteligente Wi-Fi Bivolt c/ Sensor antiqueda",
        category: "casa",
        rating: 4.6,
        ratingCount: 175,
        oldPrice: 1499.00,
        price: 999.00,
        imageIcon: "fa-solid fa-wind",
        images: [
            "fa-solid fa-wind",
            "fa-solid fa-house-laptop",
            "fa-solid fa-circle-dot",
            "fa-solid fa-rotate-left"
        ],
        description: "Mantenha sua casa sempre limpa sem esforço. Este Robô Aspirador Inteligente varre, aspira e passa pano automaticamente. Controle tudo através do aplicativo no smartphone ou por comando de voz (compatível com Alexa e Google Assistente). Ele conta com sensores inteligentes anti-colisão e antiqueda, contorna móveis com precisão e retorna sozinho para a base de carregamento quando a bateria está fraca.",
        specs: {
            "Marca": "CleanBot",
            "Poder de Sucção": "2000 Pa",
            "Capacidade do Reservatório": "400ml (Pó) / 150ml (Água)",
            "Conectividade": "Wi-Fi 2.4 GHz / Controle por App",
            "Sensores": "Anti-queda, Infravermelho anti-colisão",
            "Voltagem": "Bivolt automático",
            "Tempo de Funcionamento": "Até 120 minutos por carga",
            "Altura": "7.5 cm (entra embaixo de sofás e camas)"
        },
        affiliateUrl: "https://www.mercadolivre.com.br",
        tag: "Frete Grátis"
    }
];
