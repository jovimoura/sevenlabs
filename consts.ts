import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 20;
export const MAX_PRO_COUNTS = 1000;

export const tools = [
  {
    description:
      "A versão mais atual e potente do Chat-GPT! A versão 4 está disponível num preço super acessível junto dela diversas outras, confira!",
    label: "Chat-GPT 4",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    description:
      "Transforme suas palavras em imagens com nossa IA mais potente! Precisa criar imagens para seu trabalho ou apresentação? Sem problemas! Nossa iA desenha para você, basta descrever a imagem para ela!",
    label: "Gerador de Imagens",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    description:
      "Transforme suas ideias em vídeo com frases descriptivas e otimizadas! Crie Gifs e vídeos para facilitar seu trabalho!",
    label: "Gerador de Vídeos",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    description:
      "Precisa criar um som especifíco? Sem problemas! Nossa IA consegue fazer para você, basta você descrever para ela!",
    label: "Gerador de Música",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    description:
      "Gere códigos e algoritmos com nossa IA mais potente! Aprenda e desenvolva muito mais rápido com nossa IA voltada para códigos!",
    label: "Programação",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/chat-code",
  },
];

export const premiumTools = [
  {
    description:
      "A versão mais atual e potente do Chat-GPT! A versão 4 está disponível num preço super acessível junto dela diversas outras, confira!",
    label: "Chat-GPT 4",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    description:
      "Transforme suas palavras em imagens com nossa IA mais potente! Precisa criar imagens para seu trabalho ou apresentação? Sem problemas! Nossa iA desenha para você, basta descrever a imagem para ela!",
    label: "Gerador de Imagens",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    description:
      "Transforme suas ideias em vídeo com frases descriptivas e otimizadas! Crie Gifs e vídeos para facilitar seu trabalho!",
    label: "Gerador de Vídeos",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    description:
      "Precisa criar um som especifíco? Sem problemas! Nossa IA consegue fazer para você, basta você descrever para ela!",
    label: "Gerador de Música",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    description:
      "Gere códigos e algoritmos com nossa IA mais potente! Aprenda e desenvolva muito mais rápido com nossa IA voltada para códigos!",
    label: "Programação",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/chat-code",
  },
];

export const prices = [
  {
    label: "Premium",
    price: 50,
    at: 79,
    infos: [
      {
        label: "IAs de Vídeo, Imagem e Chat-GPT4 Ilimitado!",
        status: true,
      },
      {
        label: "Suporte exclusivo da nossa equipe!",
        status: true,
      },
      {
        label: "Menor tempo de carregamento!",
        status: true,
      },
      {
        label: "Número de tentativas ILIMITADO!",
        status: true,
      },
    ],
    color: "violet-500",
    borderColor: "border-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Pro",
    price: 25,
    at: 40,
    infos: [
      {
        label: "IAs de Vídeo, Imagem e Chat-GPT4 Ilimitado!",
        status: true,
      },
      {
        label: "Suporte exclusivo da nossa equipe!",
        status: true,
      },
      {
        label: "Número de tentativas: 1000!",
        status: true,
      },
      {
        label: "Número de tentativas ILIMITADO!",
        status: false,
      },
    ],
    color: "emerald-500",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Gratuito",
    price: 0,
    at: 0,
    infos: [
      {
        label: "IAs de Vídeo, Imagem e Chat-GPT4 Ilimitado!",
        status: true,
      },
      {
        label: "Suporte exclusivo da nossa equipe!",
        status: false,
      },
      {
        label: "Menor tempo de carregamento!",
        status: false,
      },
      {
        label: "Número de tentativas ILIMITADO!",
        status: false,
      },
    ],
    color: "orange-700",
    borderColor: "border-orange-700",
    bgColor: "bg-orange-700/10",
  },
];
