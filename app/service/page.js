const services = [
    {
        name: "Full Service",
        description:
            "Complete inspection, oil change, brake check, chain adjustment, and general maintenance.",
        price: "From €220",
        time: "2 - 4 hours",
    },
    {
        name: "Brake Service",
        description:
            "Brake pad inspection, brake fluid check, and performance-focused brake servicing.",
        price: "From €90",
        time: "1 - 2 hours",
    },
    {
        name: "Tire Change",
        description:
            "Professional tire replacement, pressure check, and setup for safer riding.",
        price: "From €60",
        time: "45 - 90 min",
    },
    {
        name: "Diagnostics",
        description:
            "Electronic system scan and troubleshooting for warning lights and performance issues.",
        price: "From €75",
        time: "30 - 60 min",
    },
];

export default function ServicePage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(47,178,255,0.10), transparent 28%), linear-gradient(180deg, #06101d 0%, #081425 55%, #09182b 100%)",
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
                    Book Service
                </h1>

                <p
                    style={{
                        margin: "0 0 28px",
                        fontSize: "22px",
                        color: "#a9b8cf",
                        lineHeight: 1.6,
                        maxWidth: "760px",
                    }}
                >
                    Book trusted motorcycle service, maintenance, and workshop support in
                    one place.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.1fr 0.9fr",
                        gap: "22px",
                        marginBottom: "28px",
                    }}
                >
                    <div
                        style={{
                            padding: "24px",
                            borderRadius: "24px",
                            background:
                                "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                            border: "1px solid rgba(255,255,255,0.10)",
                            boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                        }}
                    >
                        <h2
                            style={{
                                margin: "0 0 18px",
                                fontSize: "28px",
                                fontWeight: 800,
                                color: "white",
                            }}
                        >
                            Book an appointment
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gap: "14px",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your name"
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                placeholder="Email address"
                                style={inputStyle}
                            />
                            <input
                                type="text"
                                placeholder="Motorcycle model"
                                style={inputStyle}
                            />
                            <select style={inputStyle} defaultValue="">
                                <option value="" disabled>
                                    Select service
                                </option>
                                <option>Full Service</option>
                                <option>Brake Service</option>
                                <option>Tire Change</option>
                                <option>Diagnostics</option>
                            </select>
                            <input type="date" style={inputStyle} />
                            <textarea
                                placeholder="Additional details"
                                rows={5}
                                style={{
                                    ...inputStyle,
                                    height: "140px",
                                    resize: "none",
                                    fontFamily: "inherit",
                                }}
                            />

                            <button
                                style={{
                                    padding: "14px 18px",
                                    borderRadius: "14px",
                                    border: "none",
                                    background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                    color: "#04111f",
                                    fontWeight: 800,
                                    fontSize: "15px",
                                    cursor: "pointer",
                                    boxShadow: "0 12px 30px rgba(47,178,255,0.24)",
                                }}
                            >
                                Request Booking
                            </button>
                        </div>
                    </div>

                    <div
                        style={{
                            padding: "24px",
                            borderRadius: "24px",
                            background:
                                "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                            border: "1px solid rgba(255,255,255,0.10)",
                            boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                        }}
                    >
                        <h2
                            style={{
                                margin: "0 0 18px",
                                fontSize: "28px",
                                fontWeight: 800,
                                color: "white",
                            }}
                        >
                            Why book with BikeMeNow
                        </h2>

                        <div style={{ display: "grid", gap: "12px" }}>
                            {[
                                "Trusted workshop access",
                                "Fast and simple booking flow",
                                "Clear service pricing",
                                "Built for riders and bike shops",
                                "One platform for bikes, service, and community",
                            ].map((item) => (
                                <div
                                    key={item}
                                    style={{
                                        padding: "14px 16px",
                                        borderRadius: "16px",
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "white",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                    }}
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section style={{ marginTop: "12px" }}>
                    <h2
                        style={{
                            fontSize: "42px",
                            margin: "0 0 20px",
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            color: "white",
                        }}
                    >
                        Service options
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {services.map((service) => (
                            <div
                                key={service.name}
                                style={{
                                    padding: "24px",
                                    borderRadius: "24px",
                                    background:
                                        "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                                }}
                            >
                                <div
                                    style={{
                                        width: "54px",
                                        height: "54px",
                                        borderRadius: "16px",
                                        marginBottom: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            "linear-gradient(135deg, rgba(47,178,255,0.30), rgba(39,224,167,0.20))",
                                        fontSize: "24px",
                                    }}
                                >
                                    🔧
                                </div>

                                <h3
                                    style={{
                                        margin: "0 0 12px",
                                        fontSize: "22px",
                                        fontWeight: 800,
                                        color: "white",
                                    }}
                                >
                                    {service.name}
                                </h3>

                                <p
                                    style={{
                                        margin: "0 0 16px",
                                        color: "#cfd9ea",
                                        lineHeight: 1.7,
                                        fontSize: "16px",
                                    }}
                                >
                                    {service.description}
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        gap: "12px",
                                        flexWrap: "wrap",
                                        color: "#a9b8cf",
                                        fontSize: "15px",
                                        marginBottom: "18px",
                                    }}
                                >
                                    <span>{service.time}</span>
                                    <span style={{ color: "white", fontWeight: 800 }}>
                    {service.price}
                  </span>
                                </div>

                                <button
                                    style={{
                                        width: "100%",
                                        padding: "14px 16px",
                                        borderRadius: "14px",
                                        border: "none",
                                        background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                        color: "#04111f",
                                        fontWeight: 800,
                                        fontSize: "15px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Book Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    outline: "none",
    fontSize: "15px",
    boxSizing: "border-box",
    display: "block",
};