import http.server
import socketserver
import sys

PORT = 8080

class SafeHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Desativar cache para facilitar desenvolvimento e evitar carregamento de arquivos velhos
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

# Forçar o mapeamento correto de MIME types para evitar bloqueio do Chrome (comum no macOS/Windows)
SafeHTTPRequestHandler.extensions_map.update({
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
})

# Iniciar o servidor
socketserver.TCPServer.allow_reuse_address = True
try:
    with socketserver.TCPServer(("", PORT), SafeHTTPRequestHandler) as httpd:
        print(f"Servidor rodando em http://localhost:{PORT}")
        httpd.serve_forever()
except Exception as e:
    print(f"Erro ao iniciar o servidor: {e}", file=sys.stderr)
    sys.exit(1)
