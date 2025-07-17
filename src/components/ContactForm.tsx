'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const { toast } = useToast();

  useEffect(() => {
    // The form submission logic is now handled by formsubmit.co
    // We can still show a success toast if the form is submitted successfully
    // but the state management is removed.
  }, [toast]);

  return (
    <form action="https://formsubmit.co/globalvisionpoint@gmail.com" method="POST" className="space-y-6">
      <input type="hidden" name="_next" value="/multumim" />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <div className="space-y-2">
        <label htmlFor="name">Nume</label>
        <input id="name" name="name" placeholder="Numele tău" required className="w-full px-3 py-2 rounded border bg-background" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="adresa@email.com" required className="w-full px-3 py-2 rounded border bg-background" />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone">Telefon (Opțional)</label>
        <input id="phone" name="phone" type="tel" placeholder="Numărul tău de telefon" className="w-full px-3 py-2 rounded border bg-background" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message">Mesaj</label>
        <textarea id="message" name="message" placeholder="Spune-ne mai multe despre proiectul tău..." required rows={6} className="w-full px-3 py-2 rounded border bg-background" />
      </div>
      <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 rounded">Trimite Mesajul</button>
    </form>
  );
}
