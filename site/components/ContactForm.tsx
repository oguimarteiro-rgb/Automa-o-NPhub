"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "../lib/schemas";
import { MagneticButton } from "./MagneticButton";

type FieldProps = {
  label: string;
  name: keyof ContactInput;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
  register: ReturnType<typeof useForm<ContactInput>>["register"];
  error?: string;
};

function Field({
  label,
  name,
  placeholder,
  type = "text",
  as = "input",
  register,
  error,
}: FieldProps) {
  const baseClasses =
    "w-full border-0 border-b border-graphite/25 bg-transparent py-3 text-[1rem] text-graphite placeholder-graphite-soft/70 outline-none transition-colors duration-500 ease-premium focus:border-olive";

  return (
    <label className="block">
      <span className="editorial-credit mb-2 block">{label}</span>
      {as === "textarea" ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          {...register(name)}
          className={baseClasses + " resize-none py-3"}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={baseClasses}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="serif-italic mt-2 block text-sm text-olive"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (_data: ContactInput) => {
    // Mock submission. Replace with real API call (Resend, etc.) later.
    await new Promise((r) => setTimeout(r, 900));
    reset();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[clamp(1.3rem,2.2vw,1.85rem)] leading-[1.4] text-graphite">
          <span className="serif-italic">
            recebemos. a gente entra em contato em até 24 horas. obrigado por
            chegar até aqui.
          </span>
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-7 sm:grid-cols-2"
    >
      <Field
        label="Nome"
        name="name"
        placeholder="seu nome completo"
        register={register}
        error={errors.name?.message}
      />
      <Field
        label="Empresa"
        name="company"
        placeholder="onde você atua"
        register={register}
        error={errors.company?.message}
      />
      <div className="sm:col-span-2">
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="email@empresa.com.br"
          register={register}
          error={errors.email?.message}
        />
      </div>
      <div className="sm:col-span-2">
        <Field
          label="Mensagem"
          name="message"
          as="textarea"
          placeholder="conte um pouco sobre o seu desafio."
          register={register}
          error={errors.message?.message}
        />
      </div>

      <div className="sm:col-span-2 mt-2 flex justify-start">
        <MagneticButton
          type="submit"
          disabled={isSubmitting}
          className="relative overflow-hidden bg-graphite px-9 py-5 text-cream"
        >
          <span className="relative z-10 flex items-center gap-3 text-[0.95rem] font-medium tracking-[0.16em]">
            {isSubmitting ? "ENVIANDO..." : "COMEÇAR A CONVERSA"}
            <motion.span
              aria-hidden
              animate={{ x: [0, 4, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </span>
        </MagneticButton>
      </div>
    </form>
  );
}
