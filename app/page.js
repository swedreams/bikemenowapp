import Link from "next/link";

const quickActions = [
    {
        title: "Find a Bike",
        subtitle: "Browse motorcycles now",
        href: "/motorcycles",
        icon: "🏍️",
    },
    {
        title: "Book Service",
        subtitle: "Schedule maintenance fast",
        href: "/service",
        icon: "🔧",
    },
    {
        title: "Track Rides",
        subtitle: "View routes and stats",
        href: "/rides",
        icon: "📍",
    },
    {
        title: "Ask AI",
        subtitle: "Get smart recommendations",
        href: "/ai",
        icon: "🤖",
    },
];

const featuredBikes = [
    {
        name: "Yamaha MT-07",
        info: "2022 • 6,200 km • Stockholm",
        price: "€7,900",
        href: "/motorcycles/yamaha-mt07",
    },
    {
        name: "BMW R1250 GS",
        info: "2021 • 11,800 km • Malmö",
        price: "€15,900",
        href: "/motorcycles/bmw-r1250-gs",
    },
    {
        name: "Kawasaki Z900",
        info: "2022 • 5,400 km • Uppsala",
        price: "€10,200",
        href: "/motorcycles/kawasaki-z900",
    },
];

export default function HomePage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(47,178,255,0.12), transparent 28%), linear-gradient(180deg, #06101d 0%, #081425 55%, #09182b 100%)",
                color: "white",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "28px 20px 80px",
                }}
            >
                {/* HERO */}
                <section
                    style={{
                        padding: "30px",
                        borderRadius: "28px",
                        background:
                            "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
                        marginBottom: "24px",
                    }}
                >
                    <div
                        style={{
                            maxWidth: "760px",
                            marginBottom: "22px",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "14px",
                                color: "#8fa2bf",
                                fontWeight: 700,
                                marginBottom: "10px",
                            }}
                        >
                            BikeMeNow
                        </div>

                        <h1
                            style={{
                                fontSize: "56px",
                                lineHeight: 1.02,
                                margin: "0 0 14px",
                                fontWeight: 800,
                                letterSpacing: "-1.2px",
                                color: "white",
                            }}
                        >
                            One platform for bikes, service, and rides.
                        </h1>

                        <p
                            style={{
                                margin: 0,
                                fontSize: "21px",
                                lineHeight: 1.6,
                                color: "#cfd9ea",
                            }}
                        >
                            Find motorcycles, book service, track rides, and get AI help —
                            all in one place.
                        </p>
                    </div>

                    <div
                        style={{
                            marginBottom: "22px",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search motorcycles, service, or rides..."
                            style={{
                                width: "100%",
                                padding: "16px 18px",
                                borderRadius: "16px",
                                border: "1px solid rgba(255,255,255,0.10)",
                                background: "rgba(255,255,255,0.03)",
                                color: "white",
                                fontSize: "16px",
                                outline: "none",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            gap: "16px",
                        }}
                    >
                        {quickActions.map((action) => (
                            <Link
                                key={action.title}
                                href={action.href}
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    padding: "20px",
                                    borderRadius: "22px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    display: "block",
                                }}
                            >
                                <div
                                    style={{
                                        width: "54px",
                                        height: "54px",
                                        borderRadius: "16px",
                                        background:
                                            "linear-gradient(135deg, rgba(47,178,255,0.30), rgba(39,224,167,0.20))",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "24px",
                                        marginBottom: "14px",
                                    }}
                                >
                                    {action.icon}
                                </div>

                                <div
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: 800,
                                        marginBottom: "6px",
                                        color: "white",
                                    }}
                                >
                                    {action.title}
                                </div>

                                <div
                                    style={{
                                        fontSize: "15px",
                                        color: "#cfd9ea",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {action.subtitle}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* FEATURED */}
                <section
                    style={{
                        padding: "24px",
                        borderRadius: "24px",
                        background:
                            "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                        border: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "12px",
                            flexWrap: "wrap",
                            marginBottom: "18px",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "34px",
                                fontWeight: 800,
                                color: "white",
                                letterSpacing: "-0.8px",
                            }}
                        >
                            Featured Bikes
                        </h2>

                        <Link
                            href="/motorcycles"
                            style={{
                                textDecoration: "none",
                                color: "#2FB2FF",
                                fontWeight: 700,
                                fontSize: "14px",
                            }}
                        >
                            View all
                        </Link>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                            gap: "14px",
                        }}
                    >
                        {featuredBikes.map((bike) => (
                            <div
                                key={bike.name}
                                style={{
                                    padding: "18px",
                                    borderRadius: "18px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: 800,
                                        color: "white",
                                        marginBottom: "6px",
                                    }}
                                >
                                    {bike.name}
                                </div>

                                <div
                                    style={{
                                        fontSize: "15px",
                                        color: "#a9b8cf",
                                        marginBottom: "10px",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {bike.info}
                                </div>

                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        color: "white",
                                        marginBottom: "14px",
                                    }}
                                >
                                    {bike.price}
                                </div>

                                <Link
                                    href={bike.href}
                                    style={{
                                        display: "inline-block",
                                        textDecoration: "none",
                                        padding: "12px 16px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                        color: "#04111f",
                                        fontWeight: 800,
                                        fontSize: "14px",
                                    }}
                                >
                                    View Listing
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}