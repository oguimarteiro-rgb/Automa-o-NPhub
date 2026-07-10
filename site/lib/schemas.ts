import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string({ required_error: "diga o seu nome." })
    .min(2, "diga o seu nome completo.")
    .max(120),
  company: z
    .string({ required_error: "qual o nome da empresa?" })
    .min(1, "qual o nome da empresa?")
    .max(160),
  email: z
    .string({ required_error: "precisamos do seu email." })
    .email("um email válido, por favor."),
  message: z
    .string({ required_error: "conte um pouco sobre o desafio." })
    .min(10, "conte um pouco mais — pelo menos uma frase.")
    .max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
