import type { AuthOptions, User } from "next-auth";

import GogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

const user = [
    {
        email: 'aaaaaa@s.ru',
        password: 'test',
    },
    {
        email: 'test2',
        password: 'test',
    },
    {
        email: 'test3',
        password: 'test',
    },
]

export const authConfig: AuthOptions = {
    providers: [
        GogleProvider(
            {
                clientId: process.env.GOOGLE_SECRET_ID as string,
                clientSecret: process.env.GOOGLE_SECRET!,
            }
        ),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                debugger
                
                if (!credentials?.email || !credentials?.password) return null;
                

                /* Что то делать с базой данных */
                const currentUser = user.find(user => {
                    console.log(`user: ${user}`)

                    const res = user.email === credentials?.email;

                    return res 
                });

                if (currentUser && currentUser.password === credentials?.password) {
                    const { password, ...userWithoutPass } = currentUser;

                    return userWithoutPass as User;
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/login'
    },
};