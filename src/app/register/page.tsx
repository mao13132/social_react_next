import { Auth } from '@/components/screens/auth/Auth';
import { NO_INDEX_PAGE } from '@/constants/seo.constatnts';
import type { Metadata } from 'next';

export const meradata: Metadata = {
    title: 'login',
    ...NO_INDEX_PAGE
}

export default function RegisterPage() {
    return <Auth type='register' />
}