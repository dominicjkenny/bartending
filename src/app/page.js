'use client';

import { Button, Card } from '@nextui-org/react';

export default function HomePage() {
  return (
    <section style={{ padding: '2rem', background: '#1E1E1E' }}>
      <div>
        <h1 style={{ textAlign: 'center', color: '#A67C52', marginBottom: '2rem' }}>
          Welcome to Elite Bartending
        </h1>
        <h3 style={{ textAlign: 'center', color: '#fff', marginBottom: '2rem' }}>
          Fresh Ingredients, Creative Cocktails, and Exclusive Events in Ann Arbor, MI
        </h3>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem'}}>
          <Card css={{ mw: '400px', p: '3rem', backgroundColor: '#320', color: '#fff' }}>
            <h4>Private Parties</h4>
            <p>Custom cocktail service for intimate gatherings.</p>
          </Card>
          <Card css={{ mw: '400px', p: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <h4>Corporate Events</h4>
            <p>Elevate your event with professional bartending.</p>
          </Card>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button css={{ backgroundColor: '#A67C52', color: '#fff' }}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
