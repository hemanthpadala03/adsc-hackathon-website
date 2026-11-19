"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";

import { BrandMark } from "@/components/shared/brand-mark";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation, participationNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <BrandMark className="size-8" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-foreground">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-muted-foreground">
              {siteConfig.organiser}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-rwth focus-visible:ring-3 focus-visible:ring-ring/50 outline-none",
                isActive(pathname, item.href) && "font-medium text-rwth",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={participationNav.href}
            className={cn(buttonVariants({ size: "lg" }), "ml-3")}
          >
            {participationNav.label}
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "lg:hidden",
            )}
            aria-label="Open menu"
          >
            <Menu aria-hidden />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="px-5 pt-5 font-serif text-xl">
              {siteConfig.name}
            </SheetTitle>
            <nav aria-label="Mobile" className="flex flex-col px-3 pb-6">
              {[...mainNavigation, participationNav].map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} />}
                  className={cn(
                    "rounded-md px-3 py-3 text-base text-foreground hover:bg-muted",
                    isActive(pathname, item.href) && "font-medium text-rwth",
                  )}
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
