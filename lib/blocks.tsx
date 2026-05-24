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
import Stats1 from "@/registry/stats-1";
import Team1 from "@/registry/team-1";
import HowItWorks1 from "@/registry/how-it-works-1";
import Contact1 from "@/registry/contact-1";
import Blog1 from "@/registry/blog-1";
import Banner1 from "@/registry/banner-1";
import Navbar2 from "@/registry/navbar-2";
import Footer2 from "@/registry/footer-2";
import Cta2 from "@/registry/cta-2";
import Faq2 from "@/registry/faq-2";
import Testimonials2 from "@/registry/testimonials-2";

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
  "stats-1": Stats1,
  "team-1": Team1,
  "how-it-works-1": HowItWorks1,
  "contact-1": Contact1,
  "blog-1": Blog1,
  "banner-1": Banner1,
  "navbar-2": Navbar2,
  "footer-2": Footer2,
  "cta-2": Cta2,
  "faq-2": Faq2,
  "testimonials-2": Testimonials2,
};
