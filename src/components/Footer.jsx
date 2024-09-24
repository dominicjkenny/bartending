'use client';

import{ Divider } from '@nextui-org/divider';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '2rem', background: '#1E1E1E', color: '#fff', textAlign: 'center' }}>
        <p>© 2024 Elite Bartending</p>
        <div style={{ marginTop: '1rem' }}>
          <Link href="https://instagram.com" target="_blank" style={{ color: '#A67C52', marginRight: '1rem' }}>
            Instagram
          </Link>
          <Link href="tel:+1234567890" style={{ color: '#A67C52' }}>
            Call Us: +1 (234) 567-890
          </Link>
        </div>
    </footer>
  );
}
