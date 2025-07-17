
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Numele trebuie să aibă cel puțin 2 caractere." }),
  email: z.string().email({ message: "Te rugăm să introduci o adresă de email validă." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă cel puțin 10 caractere." }),
});

export type FormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    isSuccess: boolean;
};


export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Formularul conține erori. Te rugăm să le corectezi.',
      isSuccess: false,
    };
  }

  // In a real application, you would send an email or save the data to a database.
  // For this example, we'll just log the data to the console.
  console.log('Contact form submitted successfully:');
  console.log(validatedFields.data);

  return {
    message: 'Mesajul tău a fost trimis! Îți mulțumim și te vom contacta în cel mai scurt timp.',
    isSuccess: true,
  };
}
