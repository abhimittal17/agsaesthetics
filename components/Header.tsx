"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, X, ArrowUpRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const treatmentsList = [
  { href: "/treatments/injectables", title: "Injectables", index: "01" },
  { href: "/treatments/skin-rejuvenation", title: "Skin Rejuvenation", index: "02" },
  { href: "/treatments/acne-and-scars", title: "Acne & Scars", index: "03" },
  { href: "/treatments/hair-rejuvenation", title: "Hair Rejuvenation", index: "04" },
  { href: "/treatments/tattoo-removal", title: "Tattoo Removal", index: "05" },
];

const wellnessHubItems = [
  { href: "/blogs", label: "Blogs", index: "01" },
  { href: "/reviews", label: "Testimonials", index: "02" },
  { href: "/faqs", label: "FAQs", index: "03" },
];

function AppSidebar() {
  const pathname = usePathname();
  const [treatmentsOpen, setTreatmentsOpen] = useState(() =>
    pathname.startsWith("/treatments")
  );
  const [wellnessOpen, setWellnessOpen] = useState(() =>
    pathname.startsWith("/wellness") ||
    pathname === "/blogs" ||
    pathname === "/reviews" ||
    pathname === "/faqs"
  );
  const { setOpenMobile } = useSidebar();

  const isActive = (path: string) => pathname === path;
  const treatmentsActive = pathname.startsWith("/treatments");
  const wellnessActive =
    pathname.startsWith("/wellness") ||
    pathname === "/blogs" ||
    pathname === "/reviews" ||
    pathname === "/faqs";

  return (
    <Sidebar className="border-r border-white/10 text-[#586454]">
      {/* Header */}
      <SidebarHeader className="border-b border-white/10 p-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpenMobile(false)}
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="AG Aesthetics & Wellness Clinic"
              width={140}
              height={36}
              priority
              className="h-8 w-auto object-contain"
            />
            <div className="border-l border-white/30 pl-3 text-[9px] font-medium uppercase leading-tight tracking-widest text-[#586454]">
              Aesthetics &<br />Wellness Clinic
            </div>
          </Link>

          <button
            onClick={() => setOpenMobile(false)}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#586454] text-white transition-colors hover:bg-[#465043]"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </SidebarHeader>

      {/* Nav items */}
      <SidebarContent className="px-4 py-5">
        <SidebarMenu className="space-y-1.5">
          {/* Home */}
          <SidebarMenuItem>
            <Link
              href="/"
              onClick={() => setOpenMobile(false)}
              className={`flex items-center rounded-2xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/")
                  ? "bg-[#586454]/15 font-semibold text-[#586454]"
                  : "text-[#586454] hover:bg-[#586454]/10"
              }`}
            >
              Home
            </Link>
          </SidebarMenuItem>

          {/* About */}
          <SidebarMenuItem>
            <Link
              href="/about-us"
              onClick={() => setOpenMobile(false)}
              className={`flex items-center rounded-2xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/about-us")
                  ? "bg-[#586454]/15 font-semibold text-[#586454]"
                  : "text-[#586454] hover:bg-[#586454]/10"
              }`}
            >
              About
            </Link>
          </SidebarMenuItem>

          {/* Treatments Collapsible */}
          <Collapsible
            open={treatmentsOpen || treatmentsActive}
            onOpenChange={setTreatmentsOpen}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  pathname.startsWith("/treatments") || treatmentsOpen
                    ? "bg-[#586454]/15 font-semibold text-[#586454]"
                    : "text-[#586454] hover:bg-[#586454]/10"
                }`}
              >
                <span>Treatments</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    treatmentsOpen || treatmentsActive ? "rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="pt-2">
                <div className="rounded-2xl border border-stone-200/60 bg-stone-50/50 p-2">
                  <SidebarMenuSub className="m-0 flex flex-col gap-1 border-none p-0">
                    {treatmentsList.map((treatment) => {
                      const isCurrent = pathname === treatment.href;
                      return (
                        <SidebarMenuSubItem key={treatment.href}>
                          <Link
                            href={treatment.href}
                            onClick={() => setOpenMobile(false)}
                            className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors ${
                              isCurrent
                                ? "bg-[#586454] font-medium text-white"
                                : "text-[#586454] hover:bg-[#586454]/10"
                            }`}
                          >
                            <span className="tracking-wide">
                              {treatment.title}
                            </span>
                          </Link>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </div>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          {/* Wellness Hub Collapsible */}
          <Collapsible
            open={wellnessOpen || wellnessActive}
            onOpenChange={setWellnessOpen}
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  pathname.startsWith("/wellness") || wellnessOpen
                    ? "bg-[#586454]/15 font-semibold text-[#586454]"
                    : "text-[#586454] hover:bg-[#586454]/10"
                }`}
              >
                <span>Wellness Hub</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    wellnessOpen || wellnessActive ? "rotate-180" : ""
                  }`}
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="pt-2">
                <div className="rounded-2xl border border-stone-200/60 bg-stone-50/50 p-2">
                  <SidebarMenuSub className="m-0 flex flex-col gap-1 border-none p-0">
                    {wellnessHubItems.map((item) => {
                      const isCurrent = pathname === item.href;
                      return (
                        <SidebarMenuSubItem key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMobile(false)}
                            className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors ${
                              isCurrent
                                ? "bg-[#586454] font-medium text-white"
                                : "text-[#586454] hover:bg-[#586454]/10"
                            }`}
                          >
                            <span className="tracking-wide">{item.label}</span>
                          </Link>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </div>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>

          {/* Contact */}
          <SidebarMenuItem>
            <Link
              href="/contact-us"
              onClick={() => setOpenMobile(false)}
              className={`flex items-center rounded-2xl px-4 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/contact-us")
                  ? "bg-[#586454]/15 font-semibold text-[#586454]"
                  : "text-[#586454] hover:bg-[#586454]/10"
              }`}
            >
              Contact
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Footer CTA */}
      <SidebarFooter className="border-t border-white/10 bg-[#586454] p-4 text-white">
        <Link
          href="/appointments"
          onClick={() => setOpenMobile(false)}
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/20"
        >
          <span>Book Now</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}

function DesktopNavbar() {
  const pathname = usePathname();
  const [treatmentOpen, setTreatmentOpen] = useState(false);
  const [wellnessOpen, setWellnessOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-full bg-[#586454] px-7 py-3.5 shadow-md">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/aglogo.png"
              alt="AG Aesthetics & Wellness Clinic"
              width={160}
              height={40}
              priority
              className="h-8 w-auto brightness-0 invert object-contain"
            />
            <div className="border-l border-white/30 pl-3 text-[10px] font-medium uppercase leading-tight tracking-widest text-white">
              Aesthetics &<br />Wellness Clinic
            </div>
          </Link>

          <nav className="flex items-center gap-1.5">
            <Link
              href="/"
              className={`rounded-2xl px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/")
                  ? "bg-white/15 font-semibold text-white"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`rounded-2xl px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/about-us")
                  ? "bg-white/15 font-semibold text-white"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              About
            </Link>

            {/* Treatments Menu */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentOpen(true)}
              onMouseLeave={() => setTreatmentOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  pathname.startsWith("/treatments") || treatmentOpen
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                <span>Treatments</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    treatmentOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {treatmentOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="w-64 rounded-3xl border border-stone-100 bg-white p-2.5 shadow-xl">
                    <div className="flex flex-col gap-1">
                      {treatmentsList.map((treatment) => {
                        const isCurrent = pathname === treatment.href;
                        return (
                          <Link
                            key={treatment.href}
                            href={treatment.href}
                            className={`group flex items-center justify-between rounded-2xl px-3.5 py-2.5 transition-all ${
                              isCurrent
                                ? "bg-[#586454] font-medium text-white"
                                : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                            }`}
                          >
                            <span className="text-xs tracking-wide">
                              {treatment.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wellness Menu */}
            <div
              className="relative"
              onMouseEnter={() => setWellnessOpen(true)}
              onMouseLeave={() => setWellnessOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-2xl px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                  pathname.startsWith("/wellness") || wellnessOpen
                    ? "bg-white/15 font-semibold text-white"
                    : "text-white/85 hover:bg-white/15 hover:text-white"
                }`}
              >
                <span>Wellness Hub</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    wellnessOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {wellnessOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                  <div className="w-64 rounded-3xl border border-stone-100 bg-white p-2.5 shadow-xl">
                    <div className="flex flex-col gap-1">
                      {wellnessHubItems.map((item) => {
                        const isCurrent = pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`group flex items-center justify-between rounded-2xl px-3.5 py-2.5 transition-all ${
                              isCurrent
                                ? "bg-[#586454] font-medium text-white"
                                : "text-stone-700 hover:bg-stone-100 hover:text-stone-950"
                            }`}
                          >
                            <span className="text-xs tracking-wide">
                              {item.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`rounded-2xl px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors ${
                isActive("/contact-us")
                  ? "bg-white/15 font-semibold text-white"
                  : "text-white/85 hover:bg-white/15 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <Link
              href="/appointments"
              className="group inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-stone-100"
            >
              <span>Book Now</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="flex min-h-screen flex-col">
      {/* Mobile Drawer Navigation */}
      <div className="lg:hidden">
        <AppSidebar />
      </div>

      <SidebarInset className="flex flex-1 flex-col bg-transparent">
        {/* Mobile Sticky Topbar */}
        <div className="sticky top-0 z-40 flex items-center justify-between border-b border-stone-200/80 bg-white px-5 py-3.5 lg:hidden">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="AG Aesthetics & Wellness Clinic"
              width={125}
              height={32}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-2.5">
            <Link
              href="/appointments"
              className="rounded-2xl bg-[#586454] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#465043]"
            >
              Book Now
            </Link>
            <SidebarTrigger />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:block">
          <DesktopNavbar />
        </div>

        {/* Page Content */}
        <main className="flex-1">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
