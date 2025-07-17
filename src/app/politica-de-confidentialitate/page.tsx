import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate',
  description: 'Detalii despre cum digital-online.ro colectează, utilizează și protejează datele dumneavoastră cu caracter personal.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function PoliticaDeConfidentialitatePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4 prose prose-invert max-w-3xl">
        <h1 className="font-headline text-4xl text-white">Politica de Confidențialitate</h1>
        <p>
          Această politică de confidențialitate stabilește modul în care digital-online.ro utilizează și protejează orice informație pe care o oferiți atunci când utilizați acest site web.
        </p>

        <h2 className="font-headline text-2xl text-white">Ce colectăm</h2>
        <p>
          Putem colecta următoarele informații prin intermediul formularului de contact:
        </p>
        <ul>
            <li>Nume</li>
            <li>Informații de contact, inclusiv adresa de email și numărul de telefon</li>
            <li>Alte informații relevante pentru proiectul dumneavoastră</li>
        </ul>

        <h2 className="font-headline text-2xl text-white">Ce facem cu informațiile pe care le adunăm</h2>
        <p>
          Avem nevoie de aceste informații pentru a înțelege nevoile dumneavoastră și pentru a vă oferi un serviciu mai bun, și în special din următoarele motive:
        </p>
        <ul>
            <li>Menținerea evidențelor interne.</li>
            <li>Pentru a vă contacta în legătură cu solicitarea dumneavoastră.</li>
            <li>Putem folosi informațiile pentru a ne îmbunătăți produsele și serviciile.</li>
        </ul>

        <h2 className="font-headline text-2xl text-white">Securitate</h2>
        <p>
            Ne angajăm să asigurăm că informațiile dumneavoastră sunt în siguranță. Pentru a preveni accesul sau divulgarea neautorizată, am implementat proceduri fizice, electronice și manageriale adecvate pentru a proteja și securiza informațiile pe care le colectăm online.
        </p>
        
        <p className="mt-8">
            Aceasta este o versiune simplificată. O politică de confidențialitate completă și conformă cu GDPR va fi implementată.
        </p>
      </div>
    </div>
  );
}
