import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
    // Verifica se a URL acessada é "/"
    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/home', req.url))
    }

    return NextResponse.next()
}

// Configuração para definir quais rotas devem passar pelo middleware
export const config = {
    matcher: ['/'], // Executa o middleware apenas na raiz "/"
}
