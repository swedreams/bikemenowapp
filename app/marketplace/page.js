import Link from "next/link";

const items = [
    {
        id: "helmet",
        name: "Shoei RF-1400 Helmet",
        price: "€450",
        location: "Stockholm",
        image: "/gear/shoei.jpg",
        category: "Helmet",
        imageWidth: "86%",
        imageHeight: "86%",
    },
    {
        id: "jacket",
        name: "Alpinestars Riding Jacket",
        price: "€320",
        location: "Gothenburg",
        image: "/gear/alpinestars.webp",
        category: "Gear",
        imageWidth: "78%",
        imageHeight: "90%",
    },
    {
        id: "gloves",
        name: "Dainese Racing Gloves",
        price: "€120",
        location: "Malmö",
        image: "/gear/dainese.webp",
        category: "Gear",
        imageWidth: "84%",
        imageHeight: "84%",
    },
    {
        id: "exhaust",
        name: "Akrapovic Exhaust",
        price: "€850",
        location: "Uppsala",
        image: "/gear/akrapovic.webp",
        category: "Parts",
        imageWidth: "88%",
        imageHeight: "62%",
    },
];

export default function MarketplacePage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(47,178,255,0.12), transparent 28%), linear-gradient(180deg,#06101d,#081425,#09182b)",
                color: "white",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "40px 20px 80px",
                }}
            >
                <section
                    style={{
                        padding: "30px",
                        borderRadius: "24px",
                        background: "rgba(8,18,34,0.95)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        marginBottom: "30px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "52px",
                            fontWeight: 800,
                            margin: "0 0 10px",
                        }}
                    >
                        Marketplace
                    </h1>

                    <p
                        style={{
                            color: "#a6b6cc",
                            fontSize: "18px",
                            margin: "0 0 20px",
                        }}
                    >
                        Buy and sell motorcycle gear, parts, and accessories.
                    </p>

                    <input
                        placeholder="Search gear, helmets, parts..."
                        style={{
                            width: "100%",
                            padding: "16px 18px",
                            borderRadius: "16px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.03)",
                            color: "white",
                            fontSize: "16px",
                            outline: "none",
                            boxSizing: "border-box",
                        }}
                    />
                </section>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                        gap: "22px",
                    }}
                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                borderRadius: "22px",
                                overflow: "hidden",
                                background: "rgba(8,18,34,0.95)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div
                                style={{
                                    height: "250px",
                                    background: "#e9e9e9",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    padding: "18px",
                                }}
                            >
                <span
                    style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "rgba(0,0,0,0.6)",
                        padding: "6px 10px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        color: "white",
                        zIndex: 2,
                    }}
                >
                  {item.category}
                </span>

                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "16px",
                                        background: "#f3f3f3",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: item.imageWidth,
                                            height: item.imageHeight,
                                            objectFit: "contain",
                                            display: "block",
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    padding: "18px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    flex: 1,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        color: "white",
                                    }}
                                >
                                    {item.name}
                                </div>

                                <div
                                    style={{
                                        color: "#8fa2bf",
                                        fontSize: "14px",
                                    }}
                                >
                                    {item.location}
                                </div>

                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        color: "white",
                                    }}
                                >
                                    {item.price}
                                </div>

                                <Link
                                    href={`/marketplace/${item.id}`}
                                    style={{
                                        marginTop: "auto",
                                        textAlign: "center",
                                        padding: "12px",
                                        borderRadius: "12px",
                                        background: "linear-gradient(90deg,#2FB2FF,#27E0A7)",
                                        color: "#04111f",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                    }}
                                >
                                    View Listing
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}