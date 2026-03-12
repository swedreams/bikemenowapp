import Link from "next/link";

export const metadata = {
    title: "BikeMeNow",
    description: "The all-in-one motorcycle platform",
};

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/motorcycles", label: "Motorcycles" },
    { href: "/service", label: "Service" },
    { href: "/community", label: "Community" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/ai", label: "AI" },
    { href: "/rides", label: "Rides" },
];

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            style={{
                margin: 0,
                fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                background: "#06101d",
            }}
        >
        <style>{`
          * {
            box-sizing: border-box;
          }

          html, body {
            margin: 0;
            padding: 0;
          }

          input::placeholder,
          textarea::placeholder {
            color: #9fb0c6;
            opacity: 1;
          }

          select {
            color: white;
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
            min-width: 190px;
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
          }

          .dropdown-item:hover {
            background: rgba(255,255,255,0.06);
          }
        `}</style>

        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                padding: "20px 20px 0",
                background: "rgba(6,16,29,0.72)",
                backdropFilter: "blur(16px)",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: "14px 18px",
                    borderRadius: "22px",
                    background: "rgba(5,12,22,0.92)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 12px 34px rgba(0,0,0,0.28)",
                    flexWrap: "wrap",
                }}
            >
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        textDecoration: "none",
                        color: "white",
                        minWidth: "fit-content",
                    }}
                >
                    <img
                        src="/logo.png"
                        alt="BikeMeNow logo"
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "14px",
                            objectFit: "cover",
                            boxShadow: "0 10px 24px rgba(0,0,0,0.28)",
                            background: "#081120",
                        }}
                    />

                    <div>
                        <div
                            style={{
                                fontSize: "28px",
                                fontWeight: 800,
                                lineHeight: 1,
                                letterSpacing: "-0.5px",
                                color: "white",
                            }}
                        >
                            BikeMeNow
                        </div>
                        <div
                            style={{
                                fontSize: "13px",
                                color: "#94a3b8",
                                marginTop: "5px",
                            }}
                        >
                            Motorcycle platform
                        </div>
                    </div>
                </Link>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                        justifyContent: "flex-end",
                    }}
                >
                    <nav
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    padding: "11px 16px",
                                    borderRadius: "999px",
                                    textDecoration: "none",
                                    color: "#d7e2f1",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="get-started-menu">
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "11px 18px",
                                borderRadius: "999px",
                                color: "#04111f",
                                fontSize: "14px",
                                fontWeight: 800,
                                background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                        >
                            <span>Get Started</span>
                            <span style={{ fontSize: "12px" }}>▾</span>
                        </div>

                        <div className="get-started-dropdown">
                            <Link href="/signin" className="dropdown-item">
                                Sign In
                            </Link>
                            <Link href="/signup" className="dropdown-item">
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {children}
        </body>
        </html>
    );
}