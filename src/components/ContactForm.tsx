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
    <form action="https://formsubmit.co/globalvisionpoint@gmail.com" method="POST">
      <input type="text" name="name" placeholder="Numele tău" required />
      <input type="email" name="email" placeholder="adresa@email.com" required />
      <button type="submit">Trimite Mesajul</button>
    </form>
  );
}
