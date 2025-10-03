export type ToolItem = {
  id: string;
  name: string;
  subdomain: string;
  tagline: string;
  description: string;
  ctaLabel: string;
  url: string;
  icon?: string;
};

export const TOOLS: readonly ToolItem[] = [
  {
    id: "captionit",
    name: "CaptionIt",
    subdomain: "caption.doozl.com",
    tagline: "Smart AI captions for your photos.",
    description:
      "CaptionIt helps users generate engaging, creative, and social-media-ready captions for their photos. Whether it’s for Instagram, Twitter, or LinkedIn, CaptionIt adapts tone and style to fit your audience. Just upload a photo, and get multiple caption options instantly.",
    ctaLabel: "Try CaptionIt",
    url: "https://caption.doozl.com",
    icon: "🖼️",
  },
  {
    id: "support",
    name: "Custom Support AI",
    subdomain: "support.doozl.com",
    tagline: "AI-driven support that never sleeps.",
    description:
      "Our AI-powered support assistant helps businesses handle customer queries 24/7. It can answer FAQs, provide personalized responses, and seamlessly hand off complex cases to humans. Designed to reduce support costs while improving customer experience.",
    ctaLabel: "Explore Support",
    url: "https://support.doozl.com",
    icon: "🤖",
  },
  {
    id: "revoice",
    name: "ReVoice",
    subdomain: "revoice.doozl.com",
    tagline: "Change your voice. Speak any language.",
    description:
      "ReVoice allows you to transform video voices in real-time. Change tone, style, or even translate speech into multiple languages while keeping lip-sync natural. Perfect for creators, educators, and global teams who want their content to reach a wider audience.",
    ctaLabel: "Try ReVoice",
    url: "https://revoice.doozl.com",
    icon: "🎙️",
  },
];
