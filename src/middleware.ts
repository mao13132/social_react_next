/* Защищает пути от несканкционированно входе неавторизованных пользователей */

export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/profile', '/protected/:path*'
    ]
}
