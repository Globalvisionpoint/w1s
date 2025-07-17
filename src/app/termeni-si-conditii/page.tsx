import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Consultați termenii și condițiile pentru serviciile oferite de digital-online.ro.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function TermeniSiConditiiPage() {
  return (
    <div className="py-20 sm:py-24">
      <div className="container mx-auto px-4 prose prose-invert max-w-3xl">
        <h1 className="font-headline text-4xl text-white">Termeni și Condiții</h1>
        <p>
          Bine ați venit la Digital-Online.ro. Prin utilizarea acestui site, sunteți de acord să respectați și să fiți legat de următorii termeni și condiții de utilizare, care, împreună cu politica noastră de confidențialitate, guvernează relația Digital-Online.ro cu dumneavoastră în legătură cu acest site web.
        </p>
        
        <h2 className="font-headline text-2xl text-white">1. Utilizarea Serviciilor</h2>
        <p>
          Conținutul paginilor acestui site este pentru informarea și utilizarea dumneavoastră generală. Acesta poate fi modificat fără notificare prealabilă.
        </p>

        <h2 className="font-headline text-2xl text-white">2. Plata și Livrarea</h2>
        <p>
          Plata pentru serviciile de creare a site-urilor web se face o singură dată, conform prețurilor afișate. Livrarea produsului final (site-ul în format .zip) se va face după confirmarea plății.
        </p>
        
        <h2 className="font-headline text-2xl text-white">3. Proprietate Intelectuală</h2>
        <p>
            După plată și livrare, clientul devine proprietarul de drept al codului sursă al site-ului. Digital-Online.ro nu revendică niciun drept de proprietate asupra produsului final livrat.
        </p>

        <p className="mt-8">
          Această pagină este un exemplu. Un set complet de termeni și condiții va fi elaborat pentru a reflecta toate aspectele legale ale afacerii.
        </p>
      </div>
    </div>
  );
}
