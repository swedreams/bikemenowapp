const bikes = [
    {
        id: "yamaha-mt07",
        name: "Yamaha MT-07",
        price: "€7,900",
        location: "Stockholm",
        year: "2022",
        km: "6,200 km",
        image: "/bikes/yamaha.webp",
        description: "A lightweight and popular naked bike with excellent handling and strong everyday usability."
    },
    {
        id: "honda-cbr650r",
        name: "Honda CBR650R",
        price: "€9,400",
        location: "Gothenburg",
        year: "2023",
        km: "3,100 km",
        image: "/bikes/yamaha.webp",
        description: "A sporty middleweight bike with sharp styling and solid performance."
    },
    {
        id: "bmw-r1250-gs",
        name: "BMW R1250 GS",
        price: "€15,900",
        location: "Malmö",
        year: "2021",
        km: "11,800 km",
        image: "/bikes/BMW R1250 GS.jpg",
        description: "A premium adventure motorcycle built for comfort and long-distance touring."
    },
    {
        id: "kawasaki-z900",
        name: "Kawasaki Z900",
        price: "€10,200",
        location: "Uppsala",
        year: "2022",
        km: "5,400 km",
        image: "/bikes/Kawasaki Z900.jpg",
        description: "A powerful naked bike with aggressive styling and fun performance."
    },
    {
        id: "ducati-monster",
        name: "Ducati Monster",
        price: "€12,700",
        location: "Stockholm",
        year: "2023",
        km: "2,900 km",
        image: "/bikes/Ducati Monster.webp",
        description: "An iconic Italian naked bike with premium design and sporty riding feel."
    },
    {
        id: "ktm-duke-790",
        name: "KTM Duke 790",
        price: "€8,300",
        location: "Västerås",
        year: "2020",
        km: "9,100 km",
        image: "/bikes/KTM Duke 790.webp",
        description: "A sharp street bike known for lightweight agility and punchy performance."
    }
];

export default async function MotorcycleDetailPage({ params }) {
    const { id } = await params;
    const bike = bikes.find((item) => item.id === id);

    if (!bike) {
        return (
            <main style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
                <h1>Motorcycle not found</h1>
            </main>
        );
    }

    return (
        <main style={{ padding: "40px 20px 80px" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.1fr 0.9fr",
                        gap: "30px"
                    }}
                >
                    <div
                        style={{
                            background: "linear-gradient(180deg,#0f172a,#111827)",
                            border: "1px solid #334155",
                            borderRadius: "24px",
                            overflow: "hidden",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                        }}
                    >
                        <img
                            src={bike.image}
                            alt={bike.name}
                            style={{
                                width: "100%",
                                height: "420px",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            background: "linear-gradient(180deg,#0f172a,#111827)",
                            border: "1px solid #334155",
                            borderRadius: "24px",
                            padding: "28px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                        }}
                    >
                        <div
                            style={{
                                display: "inline-block",
                                padding: "8px 14px",
                                borderRadius: "999px",
                                border: "1px solid #334155",
                                background: "#0b1220",
                                color: "#94a3b8",
                                marginBottom: "16px"
                            }}
                        >
                            Featured Listing
                        </div>

                        <h1 style={{ fontSize: "42px", margin: "0 0 12px" }}>
                            {bike.name}
                        </h1>

                        <div style={{ color: "#94a3b8", marginBottom: "8px" }}>
                            {bike.year} • {bike.km}
                        </div>

                        <div style={{ color: "#94a3b8", marginBottom: "20px" }}>
                            {bike.location}
                        </div>

                        <div
                            style={{
                                fontSize: "34px",
                                fontWeight: "800",
                                marginBottom: "20px"
                            }}
                        >
                            {bike.price}
                        </div>

                        <p
                            style={{
                                color: "#cbd5e1",
                                lineHeight: 1.7,
                                marginBottom: "24px"
                            }}
                        >
                            {bike.description}
                        </p>

                        <button
                            style={{
                                width: "100%",
                                padding: "14px",
                                borderRadius: "12px",
                                border: "none",
                                background: "linear-gradient(135deg,#22c55e,#38bdf8)",
                                color: "#052e16",
                                fontWeight: "800",
                                fontSize: "16px",
                                cursor: "pointer"
                            }}
                        >
                            Contact Seller
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}