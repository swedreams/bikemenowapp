"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { languages } from "./context/lib/translations";

export default function NavbarClient() {
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { href: "/", label: t.nav.home },
        { href: "/motorcycles", label: t.nav.motorcycles },
        { href: "/service", label: t.nav.service },
        { href: "/community", label: t.nav.community },
        { href: "/marketplace", label: t.nav.marketplace },
        { href: "/ai", label: t.nav.ai },
        { href: "/rides", label: t.nav.rides },
    ];

    const pillStyle = {
        height: "40px",
        padding: "0 14px",
        borderRadius: "999px",
        textDecoration: "none",
        color: "#d7e2f1",
        fontSize: "13px",
        fontWeight: 600,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        lineHeight: 1,
        boxSizing: "border-box",
        flexShrink: 0,
    };

    return (
        <>
            <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
        }

        select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        option {
          color: black;
        }

        .get-started-menu {
          position: relative;
        }

        .get-started-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 180px;
          padding: 8px;
          border-radius: 16px;
          background: rgba(8, 20, 37, 0.98);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.18s ease;
          z-index: 2000;
        }

        .get-started-menu:hover .get-started-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          display: block;
          padding: 11px 12px;
          border-radius: 12px;
          text-decoration: none;
          color: white;
          font-size: 14px;
          font-weight: 600;
          transition: background 0.18s ease;
          white-space: nowrap;
        }

        .dropdown-item:hover {
          background: rgba(255,255,255,0.06);
        }

        @media (max-width: 1180px) {
          .navbar-shell {
            flex-direction: column;
            align-items: stretch !important;
            gap: 14px !important;
          }

          .navbar-brand,
          .navbar-center,
          .navbar-right {
            justify-content: center !important;
          }

          .navbar-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 640px) {
          .brand-subtitle {
            display: none;
          }
        }
      `}</style>

            <header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                    padding: "10px 14px 0",
                    background: "rgba(6,16,29,0.72)",
                    backdropFilter: "blur(16px)",
                }}
            >
                <div
                    className="navbar-shell"
                    style={{
                        maxWidth: "1140px",
                        width: "100%",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        padding: "14px 16px",
                        borderRadius: "22px",
                        background: "rgba(5,12,22,0.92)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 12px 34px rgba(0,0,0,0.28)",
                    }}
                >
                    <div
                        className="navbar-brand"
                        style={{
                            width: "220px",
                            minWidth: "220px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            flexShrink: 0,
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="BikeMeNow logo"
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "12px",
                                    objectFit: "cover",
                                    background: "#081120",
                                    flexShrink: 0,
                                }}
                            />

                            <div>
                                <div
                                    style={{
                                        fontSize: "24px",
                                        fontWeight: 800,
                                        lineHeight: 1,
                                        letterSpacing: "-0.5px",
                                        color: "white",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    BikeMeNow
                                </div>

                                <div
                                    className="brand-subtitle"
                                    style={{
                                        fontSize: "12px",
                                        color: "#94a3b8",
                                        marginTop: "4px",
                                        lineHeight: 1.2,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Motorcycle platform
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="navbar-center"
                        style={{
                            flex: 1,
                            minWidth: 0,
                            display: "flex",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                    >
                        <nav
                            className="navbar-links"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                flexWrap: "nowrap",
                                minWidth: 0,
                            }}
                        >
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} style={pillStyle}>
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div
                        className="navbar-right"
                        style={{
                            width: "230px",
                            minWidth: "230px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: "10px",
                            flexShrink: 0,
                        }}
                    >
                        <div style={{ position: "relative", flexShrink: 0 }}>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                style={{
                                    height: "40px",
                                    padding: "0 34px 0 14px",
                                    borderRadius: "999px",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    background: "rgba(255,255,255,0.03)",
                                    color: "white",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    outline: "none",
                                    cursor: "pointer",
                                    lineHeight: 1,
                                }}
                            >
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.label}
                                    </option>
                                ))}
                            </select>

                            <span
                                style={{
                                    position: "absolute",
                                    right: "12px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    pointerEvents: "none",
                                    color: "white",
                                    fontSize: "11px",
                                    lineHeight: 1,
                                }}
                            >
                ▾
              </span>
                        </div>

                        <div className="get-started-menu" style={{ flexShrink: 0 }}>
                            <div
                                style={{
                                    height: "40px",
                                    padding: "0 18px",
                                    borderRadius: "999px",
                                    color: "#04111f",
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                    cursor: "pointer",
                                    userSelect: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "8px",
                                    whiteSpace: "nowrap",
                                    lineHeight: 1,
                                }}
                            >
                                <span>Get Started</span>
                                <span style={{ fontSize: "11px", lineHeight: 1 }}>▾</span>
                            </div>

                            <div className="get-started-dropdown">
                                <Link href="/signin" className="dropdown-item">
                                    {t.nav.signin}
                                </Link>
                                <Link href="/signup" className="dropdown-item">
                                    {t.nav.signup}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}