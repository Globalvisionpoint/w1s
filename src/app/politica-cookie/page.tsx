import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politica de Cookies',
  description: 'Detalii despre modulele cookie utilizate de digital-online.ro.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function PoliticaCookiePage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4 prose prose-invert max-w-3xl">
        <h1 className="font-headline text-4xl text-white">Politica de Utilizare a Modulelor Cookie</h1>
        <p>
          Această politică explică ce sunt modulele cookie și cum le folosim pe site-ul nostru, digital-online.ro. Vă recomandăm să citiți această politică pentru a înțelege ce tip de informații colectăm folosind modulele cookie și cum sunt utilizate aceste informații.
        </p>

        <h2 className="font-headline text-2xl text-white">Ce sunt modulele cookie?</h2>
        <p>
          Modulele cookie sunt fișiere text mici, stocate de browserul dvs. pe computer sau pe dispozitivul mobil. Acestea permit site-urilor web să stocheze lucruri precum preferințele utilizatorilor. Le puteți considera ca o "memorie" pentru site-ul web, permițându-i să recunoască un utilizator și să răspundă corespunzător.
        </p>

        <h2 className="font-headline text-2xl text-white">Cum folosim modulele cookie?</h2>
        <p>
          În prezent, site-ul nostru utilizează un singur tip de cookie, care este esențial pentru funcționarea bannerului de consimțământ.
        </p>
        <ul>
          <li>
            <strong>Cookie-uri esențiale:</strong> Acestea sunt necesare pentru funcționarea site-ului. Folosim un cookie local (în `localStorage`) pentru a stoca preferința dvs. privind consimțământul pentru cookie-uri (`cookie_consent`). Acesta ne ajută să nu vă mai afișăm bannerul de consimțământ la fiecare vizită, odată ce ați făcut o alegere.
          </li>
        </ul>

        <h2 className="font-headline text-2xl text-white">Opțiunile dumneavoastră</h2>
        <p>
          La prima vizită pe site-ul nostru, vi se va solicita consimțământul pentru utilizarea modulelor cookie. Puteți alege să acceptați sau să refuzați. Chiar dacă refuzați, cookie-ul esențial pentru stocarea acestei alegeri va fi setat pentru a ne aminti decizia dumneavoastră.
        </p>
        <p>
            Majoritatea browserelor web permit un anumit control al majorității modulelor cookie prin setările browserului. Pentru a afla mai multe despre modulele cookie, inclusiv cum să vedeți ce cookie-uri au fost setate, vizitați <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> sau <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
        </p>

        <h2 className="font-headline text-2xl text-white">Modificări ale politicii de cookie-uri</h2>
        <p>
            Putem actualiza această politică din când în când. Vă încurajăm să revizuiți periodic această pagină pentru orice modificări.
        </p>
      </div>
    </div>
  );
}
