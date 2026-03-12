"use client";

import Link from "next/link";
import {
    Search,
    Bike,
    Shield,
    Compass,
    Wrench,
    Gauge,
    HelpCircle,
} from "lucide-react";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
    const { t } = useLanguage();

    const popularSearches = [
        { label: t.home.popularSearches.item1, icon: Bike },
        { label: t.home.popularSearches.item2, icon: Shield },
        { label: t.home.popularSearches.item3, icon: Compass },
        { label: t.home.popularSearches.item4, icon: Gauge },
        { label: t.home.popularSearches.item5, icon: Bike },
        { label: t.home.popularSearches.item6, icon: Bike },
    ];

    const featuredSections = [
        {
            title: t.home.featured.card1.title,
            text: t.home.featured.card1.text,
            href: "/motorcycles",
            icon: Bike,
        },
        {
            title: t.home.featured.card2.title,
            text: t.home.featured.card2.text,
            href: "/ai",
            icon: Compass,
        },
        {
            title: t.home.featured.card3.title,
            text: t.home.featured.card3.text,
            href: "/service",
            icon: Wrench,
        },
    ];

    const seoTopics = [
        t.home.topics.item1,
        t.home.topics.item2,
        t.home.topics.item3,
        t.home.topics.item4,
        t.home.topics.item5,
        t.home.topics.item6,
    ];

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
                        {t.home.brand}
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
                        {t.home.heroTitle}
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
                        {t.home.heroSubtitle}
                    </p>

                    <div style={{ position: "relative", marginBottom: "18px" }}>
                        <Search
                            size={18}
                            style={{
                                position: "absolute",
                                left: "16px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#8fa2bf",
                            }}
                        />

                        <input
                            type="text"
                            placeholder={t.home.searchPlaceholder}
                            style={{
                                width: "100%",
                                padding: "18px 18px 18px 44px",
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
                        {popularSearches.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.label}
                                    href="/motorcycles"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
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
                                    <Icon size={16} />
                                    {item.label}
                                </Link>
                            );
                        })}
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
                    {featuredSections.map((section) => {
                        const Icon = section.icon;

                        return (
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
                                <Icon
                                    size={28}
                                    style={{
                                        marginBottom: "10px",
                                        color: "#2FB2FF",
                                    }}
                                />

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
                        );
                    })}
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
                            marginBottom: "18px",
                            flexWrap: "wrap",
                            gap: "10px",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontSize: "34px",
                                fontWeight: 800,
                                letterSpacing: "-0.8px",
                            }}
                        >
                            {t.home.topicsTitle}
                        </h2>

                        <Link
                            href="/ai"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                textDecoration: "none",
                                color: "#2FB2FF",
                                fontWeight: 700,
                                fontSize: "14px",
                            }}
                        >
                            <HelpCircle size={16} />
                            {t.home.exploreAnswers}
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
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    textDecoration: "none",
                                    padding: "18px",
                                    borderRadius: "18px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "white",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                }}
                            >
                                <HelpCircle size={18} />
                                {topic}
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}