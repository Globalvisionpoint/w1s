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
      <div className="space-y-2">
        <Label htmlFor="name">Nume</Label>
        <Input id="name" name="name" placeholder="Numele tău" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="adresa@email.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (Opțional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Numărul tău de telefon" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mesaj</Label>
        <Textarea id="message" name="message" placeholder="Spune-ne mai multe despre proiectul tău..." required rows={6} />
      </div>
      <Button type="submit" className="w-full" size="lg">Trimite Mesajul</Button>
    </form>
  );
}
