import type { ComponentType } from "react";

import Hero1 from "@/registry/hero-1";
import Hero2 from "@/registry/hero-2";
import Hero3 from "@/registry/hero-3";
import Hero4 from "@/registry/hero-4";
import About1 from "@/registry/about-1";
import About2 from "@/registry/about-2";
import Pricing1 from "@/registry/pricing-1";
import Navbar1 from "@/registry/navbar-1";
import Footer1 from "@/registry/footer-1";
import Features1 from "@/registry/features-1";
import Cta1 from "@/registry/cta-1";
import Faq1 from "@/registry/faq-1";
import Testimonials1 from "@/registry/testimonials-1";
import Logos1 from "@/registry/logos-1";
import Hero5 from "@/registry/hero-5";
import Features2 from "@/registry/features-2";
import Pricing2 from "@/registry/pricing-2";

export const blockComponents: Record<string, ComponentType> = {
  "hero-1": Hero1,
  "hero-2": Hero2,
  "hero-3": Hero3,
  "hero-4": Hero4,
  "hero-5": Hero5,
  "about-1": About1,
  "about-2": About2,
  "pricing-1": Pricing1,
  "pricing-2": Pricing2,
  "navbar-1": Navbar1,
  "footer-1": Footer1,
  "features-1": Features1,
  "features-2": Features2,
  "cta-1": Cta1,
  "faq-1": Faq1,
  "testimonials-1": Testimonials1,
  "logos-1": Logos1,
};
