import Link from "next/link";

const bikes = [
    {
        id: "yamaha-mt07",
        name: "Yamaha MT-07",
        price: "€7,900",
        location: "Stockholm",
        year: "2022",
        km: "6,200 km",
        image: "/bikes/yamaha.webp",
    },
    {
        id: "honda-cbr650r",
        name: "Honda CBR650R",
        price: "€9,400",
        location: "Gothenburg",
        year: "2023",
        km: "3,100 km",
        image: "/bikes/yamaha.webp",
    },
    {
        id: "bmw-r1250-gs",
        name: "BMW R1250 GS",
        price: "€15,900",
        location: "Malmö",
        year: "2021",
        km: "11,800 km",
        image: "/bikes/BMW R1250 GS.jpg",
    },
    {
        id: "kawasaki-z900",
        name: "Kawasaki Z900",
        price: "€10,200",
        location: "Uppsala",
        year: "2022",
        km: "5,400 km",
        image: "/bikes/Kawasaki Z900.jpg",
    },
    {
        id: "ducati-monster",
        name: "Ducati Monster",
        price: "€12,700",
        location: "Stockholm",
        year: "2023",
        km: "2,900 km",
        image: "/bikes/Ducati Monster.webp",
    },
    {
        id: "ktm-duke-790",
        name: "KTM Duke 790",
        price: "€8,300",
        location: "Västerås",
        year: "2020",
        km: "9,100 km",
        image: "/bikes/KTM Duke 790.webp",
    },
];

export default function MotorcyclesPage() {
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
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "40px 20px 80px",
                }}
            >
                <h1
                    style={{
                        fontSize: "58px",
                        margin: "0 0 14px",
                        fontWeight: 800,
                        letterSpacing: "-1px",
                        color: "white",
                    }}
                >
                    Discover Motorcycles
                </h1>

                <p
                    style={{
                        margin: "0 0 26px",
                        fontSize: "22px",
                        color: "#a9b8cf",
                        lineHeight: 1.6,
                    }}
                >
                    Browse motorcycles from dealers and private sellers.
                </p>

                <input
                    type="text"
                    placeholder="Search motorcycles..."
                    style={{
                        width: "100%",
                        maxWidth: "420px",
                        padding: "14px 16px",
                        borderRadius: "14px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.03)",
                        color: "white",
                        outline: "none",
                        marginBottom: "28px",
                        fontSize: "15px",
                        boxSizing: "border-box",
                    }}
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "20px",
                        alignItems: "stretch",
                    }}
                >
                    {bikes.map((bike) => (
                        <div
                            key={bike.id}
                            style={{
                                borderRadius: "24px",
                                overflow: "hidden",
                                background:
                                    "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                border: "1px solid rgba(255,255,255,0.10)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                            }}
                        >
                            <div
                                style={{
                                    background: "#efefef",
                                    height: "240px",
                                    padding: "18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxSizing: "border-box",
                                }}
                            >
                                <img
                                    src={bike.image}
                                    alt={bike.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        display: "block",
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: "18px",
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    boxSizing: "border-box",
                                }}
                            >
                                <h2
                                    style={{
                                        margin: "0 0 8px",
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        color: "white",
                                    }}
                                >
                                    {bike.name}
                                </h2>

                                <p
                                    style={{
                                        margin: "0 0 3px",
                                        color: "#a9b8cf",
                                        fontSize: "15px",
                                    }}
                                >
                                    {bike.year} • {bike.km}
                                </p>

                                <p
                                    style={{
                                        margin: "0 0 16px",
                                        color: "#a9b8cf",
                                        fontSize: "15px",
                                    }}
                                >
                                    {bike.location}
                                </p>

                                <div
                                    style={{
                                        fontSize: "20px",
                                        fontWeight: 800,
                                        marginBottom: "16px",
                                        color: "white",
                                    }}
                                >
                                    {bike.price}
                                </div>

                                <div style={{ marginTop: "auto" }}>
                                    <Link
                                        href={`/motorcycles/${bike.id}`}
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            textAlign: "center",
                                            padding: "14px",
                                            borderRadius: "14px",
                                            textDecoration: "none",
                                            background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                            color: "#04111f",
                                            fontWeight: 800,
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        View Listing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}