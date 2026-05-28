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
import Logos2 from "@/registry/logos-2";
import Stats2 from "@/registry/stats-2";
import Banner2 from "@/registry/banner-2";
import Blog2 from "@/registry/blog-2";
import Contact2 from "@/registry/contact-2";
import Team2 from "@/registry/team-2";
import HowItWorks2 from "@/registry/how-it-works-2";
import Changelog1 from "@/registry/changelog-1";
import Integrations1 from "@/registry/integrations-1";
import Comparison1 from "@/registry/comparison-1";
import Gallery1 from "@/registry/gallery-1";
import NotFound1 from "@/registry/404-1";
import Login1 from "@/registry/login-1";
import Pricing3 from "@/registry/pricing-3";
import Hero6 from "@/registry/hero-6";
import Cta3 from "@/registry/cta-3";
import Testimonials3 from "@/registry/testimonials-3";
import Features3 from "@/registry/features-3";
import Footer3 from "@/registry/footer-3";
import About3 from "@/registry/about-3";
import Navbar3 from "@/registry/navbar-3";
import Faq3 from "@/registry/faq-3";
import Waitlist1 from "@/registry/waitlist-1";
import Careers1 from "@/registry/careers-1";
import CookieBanner1 from "@/registry/cookie-banner-1";
import Roadmap1 from "@/registry/roadmap-1";
import Logos3 from "@/registry/logos-3";
import Stats3 from "@/registry/stats-3";
import Team3 from "@/registry/team-3";
import Contact3 from "@/registry/contact-3";
import Hero7 from "@/registry/hero-7";
import Pricing4 from "@/registry/pricing-4";
import Contact4 from "@/registry/contact-4";
import Footer4 from "@/registry/footer-4";
import Hero8 from "@/registry/hero-8";
import Login2 from "@/registry/login-2";
import Login3 from "@/registry/login-3";
import Dashboard1 from "@/registry/dashboard-1";
import Onboarding1 from "@/registry/onboarding-1";
import Settings1 from "@/registry/settings-1";
import Notification1 from "@/registry/notification-1";
import Changelog2 from "@/registry/changelog-2";
import Integrations2 from "@/registry/integrations-2";
import Comparison2 from "@/registry/comparison-2";
import Gallery2 from "@/registry/gallery-2";
import Dashboard2 from "@/registry/dashboard-2";
import Notification2 from "@/registry/notification-2";
import Blogpost1 from "@/registry/blogpost-1";
import Blogpost2 from "@/registry/blogpost-2";
import Hero9 from "@/registry/hero-9";
import Hero10 from "@/registry/hero-10";
import Hero11 from "@/registry/hero-11";
import NotFound2 from "@/registry/404-2";
import Waitlist2 from "@/registry/waitlist-2";
import Onboarding2 from "@/registry/onboarding-2";
import Careers2 from "@/registry/careers-2";
import Settings2 from "@/registry/settings-2";
import CookieBanner2 from "@/registry/cookie-banner-2";
import Roadmap2 from "@/registry/roadmap-2";
import EmptyState1 from "@/registry/empty-state-1";
import Profile1 from "@/registry/profile-1";
import Payment1 from "@/registry/payment-1";
import Signup1 from "@/registry/signup-1";
import Signup2 from "@/registry/signup-2";
import ForgotPassword1 from "@/registry/forgot-password-1";
import Maintenance1 from "@/registry/maintenance-1";
import Pricing5 from "@/registry/pricing-5";
import HowItWorks3 from "@/registry/how-it-works-3";
import Banner3 from "@/registry/banner-3";
import Blog3 from "@/registry/blog-3";
import Sidebar1 from "@/registry/sidebar-1";
import Contact5 from "@/registry/contact-5";
import Features4 from "@/registry/features-4";
import Testimonials4 from "@/registry/testimonials-4";
import Faq4 from "@/registry/faq-4";
import Cta4 from "@/registry/cta-4";
import Footer5 from "@/registry/footer-5";
import Hero12 from "@/registry/hero-12";
import Navbar4 from "@/registry/navbar-4";
import Stats4 from "@/registry/stats-4";
import Team4 from "@/registry/team-4";
import Sidebar2 from "@/registry/sidebar-2";
import Login4 from "@/registry/login-4";
import Login5 from "@/registry/login-5";
import Signup3 from "@/registry/signup-3";
import Signup4 from "@/registry/signup-4";
import Testimonials5 from "@/registry/testimonials-5";
import Dashboard3 from "@/registry/dashboard-3";
import Gallery3 from "@/registry/gallery-3";
import Comparison3 from "@/registry/comparison-3";
import About4 from "@/registry/about-4";
import HowItWorks4 from "@/registry/how-it-works-4";
import Blogpost3 from "@/registry/blogpost-3";
import Footer6 from "@/registry/footer-6";
import Footer7 from "@/registry/footer-7";
import Footer8 from "@/registry/footer-8";
import Footer9 from "@/registry/footer-9";

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
  "logos-2": Logos2,
  "stats-2": Stats2,
  "banner-2": Banner2,
  "blog-2": Blog2,
  "contact-2": Contact2,
  "team-2": Team2,
  "how-it-works-2": HowItWorks2,
  "changelog-1": Changelog1,
  "integrations-1": Integrations1,
  "comparison-1": Comparison1,
  "gallery-1": Gallery1,
  "404-1": NotFound1,
  "login-1": Login1,
  "pricing-3": Pricing3,
  "hero-6": Hero6,
  "cta-3": Cta3,
  "testimonials-3": Testimonials3,
  "features-3": Features3,
  "footer-3": Footer3,
  "about-3": About3,
  "navbar-3": Navbar3,
  "faq-3": Faq3,
  "waitlist-1": Waitlist1,
  "careers-1": Careers1,
  "cookie-banner-1": CookieBanner1,
  "roadmap-1": Roadmap1,
  "logos-3": Logos3,
  "stats-3": Stats3,
  "team-3": Team3,
  "contact-3": Contact3,
  "hero-7": Hero7,
  "pricing-4": Pricing4,
  "contact-4": Contact4,
  "footer-4": Footer4,
  "hero-8": Hero8,
  "login-2": Login2,
  "login-3": Login3,
  "dashboard-1": Dashboard1,
  "onboarding-1": Onboarding1,
  "settings-1": Settings1,
  "notification-1": Notification1,
  "changelog-2": Changelog2,
  "integrations-2": Integrations2,
  "comparison-2": Comparison2,
  "gallery-2": Gallery2,
  "dashboard-2": Dashboard2,
  "notification-2": Notification2,
  "blogpost-1": Blogpost1,
  "blogpost-2": Blogpost2,
  "hero-9": Hero9,
  "hero-10": Hero10,
  "hero-11": Hero11,
  "404-2": NotFound2,
  "waitlist-2": Waitlist2,
  "onboarding-2": Onboarding2,
  "careers-2": Careers2,
  "settings-2": Settings2,
  "cookie-banner-2": CookieBanner2,
  "roadmap-2": Roadmap2,
  "empty-state-1": EmptyState1,
  "profile-1": Profile1,
  "payment-1": Payment1,
  "signup-1": Signup1,
  "signup-2": Signup2,
  "forgot-password-1": ForgotPassword1,
  "maintenance-1": Maintenance1,
  "pricing-5": Pricing5,
  "how-it-works-3": HowItWorks3,
  "banner-3": Banner3,
  "blog-3": Blog3,
  "sidebar-1": Sidebar1,
  "contact-5": Contact5,
  "features-4": Features4,
  "testimonials-4": Testimonials4,
  "faq-4": Faq4,
  "cta-4": Cta4,
  "footer-5": Footer5,
  "hero-12": Hero12,
  "navbar-4": Navbar4,
  "stats-4": Stats4,
  "team-4": Team4,
  "sidebar-2": Sidebar2,
  "login-4": Login4,
  "login-5": Login5,
  "signup-3": Signup3,
  "signup-4": Signup4,
  "testimonials-5": Testimonials5,
  "dashboard-3": Dashboard3,
  "gallery-3": Gallery3,
  "comparison-3": Comparison3,
  "about-4": About4,
  "how-it-works-4": HowItWorks4,
  "blogpost-3": Blogpost3,
  "footer-6": Footer6,
  "footer-7": Footer7,
  "footer-8": Footer8,
  "footer-9": Footer9,
};
