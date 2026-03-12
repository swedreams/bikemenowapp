import Link from "next/link";

const popularSearches = [
    "Yamaha MT-07",
    "Best beginner motorcycles",
    "Adventure bikes",
    "Touring motorcycles",
    "Naked bikes",
    "Sport bikes",
];

const featuredSections = [
    {
        title: "Latest Motorcycles",
        text: "Explore new motorcycle models and recent releases.",
        href: "/motorcycles",
    },
    {
        title: "Beginner Bike Guides",
        text: "Find motorcycles that are easier to learn on and compare options.",
        href: "/ai",
    },
    {
        title: "Maintenance Help",
        text: "Get answers on oil changes, chain care, tires, and service basics.",
        href: "/service",
    },
];

const seoTopics = [
    "What is the best beginner motorcycle?",
    "How to choose your first motorcycle",
    "How often should you change motorcycle oil?",
    "Best touring motorcycles for long rides",
    "Best adventure motorcycles for beginners",
    "Motorcycle maintenance checklist",
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
                    padding: "32px 20px 80px",
                }}
            >
                <section
                    style={{
                        padding: "34px",
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
                            fontSize: "58px",
                            lineHeight: 1.02,
                            margin: "0 0 14px",
                            fontWeight: 800,
                            letterSpacing: "-1.2px",
                            color: "white",
                            maxWidth: "760px",
                        }}
                    >
                        Search Latest Motorcycles
                    </h1>

                    <p
                        style={{
                            margin: "0 0 22px",
                            fontSize: "21px",
                            lineHeight: 1.6,
                            color: "#cfd9ea",
                            maxWidth: "760px",
                        }}
                    >
                        Find new motorcycle models, compare categories, and discover the
                        right bike for your next ride.
                    </p>

                    <div
                        style={{
                            marginBottom: "18px",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search by model, brand, or category..."
                            style={{
                                width: "100%",
                                padding: "18px 20px",
                                borderRadius: "18px",
                                border: "1px solid rgba(255,255,255,0.10)",
                                background: "rgba(255,255,255,0.03)",
                                color: "white",
                                fontSize: "17px",
                                outline: "none",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        {popularSearches.map((item) => (
                            <Link
                                key={item}
                                href="/motorcycles"
                                style={{
                                    textDecoration: "none",
                                    padding: "10px 14px",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "#d7e2f1",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </section>

                <section
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: "16px",
                        marginBottom: "24px",
                    }}
                >
                    {featuredSections.map((section) => (
                        <Link
                            key={section.title}
                            href={section.href}
                            style={{
                                textDecoration: "none",
                                color: "white",
                                padding: "22px",
                                borderRadius: "22px",
                                background:
                                    "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: 800,
                                    marginBottom: "10px",
                                    color: "white",
                                }}
                            >
                                {section.title}
                            </div>

                            <div
                                style={{
                                    fontSize: "15px",
                                    lineHeight: 1.7,
                                    color: "#cfd9ea",
                                }}
                            >
                                {section.text}
                            </div>
                        </Link>
                    ))}
                </section>

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
                            Popular Motorcycle Topics
                        </h2>

                        <Link
                            href="/ai"
                            style={{
                                textDecoration: "none",
                                color: "#2FB2FF",
                                fontWeight: 700,
                                fontSize: "14px",
                            }}
                        >
                            Explore answers
                        </Link>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            gap: "14px",
                        }}
                    >
                        {seoTopics.map((topic) => (
                            <Link
                                key={topic}
                                href="/ai"
                                style={{
                                    textDecoration: "none",
                                    padding: "18px",
                                    borderRadius: "18px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    lineHeight: 1.6,
                                }}
                            >
                                {topic}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}