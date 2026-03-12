"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/motorcycles", label: "Motorcycles" },
    { href: "/service", label: "Service" },
    { href: "/community", label: "Community" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/ai", label: "AI" },
    { href: "/rides", label: "Rides" },
];

function NavItem({ href, label, active }) {
    return (
        <Link
            href={href}
            style={{
                textDecoration: "none",
                color: active ? "#052e16" : "#e2e8f0",
                padding: "11px 16px",
                borderRadius: "999px",
                background: active
                    ? "linear-gradient(135deg, #22c55e, #38bdf8)"
                    : "rgba(255,255,255,0.03)",
                border: active
                    ? "1px solid rgba(56,189,248,0.35)"
                    : "1px solid #334155",
                fontSize: "14px",
                fontWeight: 700,
                boxShadow: active ? "0 10px 24px rgba(34,197,94,0.22)" : "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease, background 0.2s ease",
                display: "inline-block",
            }}
            onMouseEnter={(e) => {
                if (!active) {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.border = "1px solid #475569";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }
            }}
            onMouseLeave={(e) => {
                if (!active) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.border = "1px solid #334155";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }
            }}
        >
            {label}
        </Link>
    );
}

export function NavBar() {
    const pathname = usePathname();

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
            }}
        >
            <nav
                style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                }}
            >
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        active={pathname === item.href}
                    />
                ))}
            </nav>

            <Link
                href="/service"
                style={{
                    textDecoration: "none",
                    background: "white",
                    color: "#0f172a",
                    padding: "11px 17px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "14px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    display: "inline-block",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 10px 24px rgba(255,255,255,0.14)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                }}
            >
                Get Started
            </Link>
        </div>
    );
}