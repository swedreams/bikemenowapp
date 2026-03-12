export default function RidesPage() {
    const stats = [
        { label: "Total Distance", value: "421 km" },
        { label: "Ride Time", value: "7h 41m" },
        { label: "Avg Speed", value: "68 km/h" },
        { label: "This Month", value: "12 rides" },
    ];

    const rides = [
        {
            name: "Malmö Coastal Ride",
            details: "186 km • 3h 20m",
            date: "May 18, 2026",
            type: "Touring",
        },
        {
            name: "Stockholm Sprint",
            details: "94 km • 1h 45m",
            date: "May 15, 2026",
            type: "City Ride",
        },
        {
            name: "Göteborg Loop",
            details: "141 km • 2h 36m",
            date: "May 11, 2026",
            type: "Weekend Ride",
        },
    ];

    const savedRoutes = [
        "Roslagen Scenic Route",
        "Lake Mälaren Sunset Ride",
        "Söder Coast Weekend Loop",
    ];

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
                    Ride Tracking
                </h1>

                <p
                    style={{
                        margin: "0 0 28px",
                        fontSize: "22px",
                        color: "#a9b8cf",
                        lineHeight: 1.6,
                    }}
                >
                    Track routes, distance, ride history, and performance in one place.
                </p>

                {/* TOP GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.25fr 0.75fr",
                        gap: "22px",
                        marginBottom: "24px",
                    }}
                >
                    {/* MAP AREA */}
                    <div
                        style={{
                            minHeight: "320px",
                            borderRadius: "26px",
                            background:
                                "radial-gradient(circle at 20% 20%, rgba(47,178,255,0.12), transparent 24%), radial-gradient(circle at 80% 30%, rgba(39,224,167,0.10), transparent 20%), linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                            border: "1px solid rgba(255,255,255,0.10)",
                            boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                            padding: "24px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "18px",
                                gap: "12px",
                                flexWrap: "wrap",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: "26px",
                                        fontWeight: 800,
                                        color: "white",
                                        marginBottom: "6px",
                                    }}
                                >
                                    Live Route Overview
                                </div>
                                <div
                                    style={{
                                        fontSize: "15px",
                                        color: "#a9b8cf",
                                    }}
                                >
                                    Visualize your current and recent motorcycle routes
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    flexWrap: "wrap",
                                }}
                            >
                                <button style={secondaryButtonStyle}>Weekly</button>
                                <button style={secondaryButtonStyle}>Monthly</button>
                                <button style={primaryButtonStyle}>Start Ride</button>
                            </div>
                        </div>

                        <div
                            style={{
                                height: "220px",
                                borderRadius: "20px",
                                border: "1px solid rgba(255,255,255,0.08)",
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                                    backgroundSize: "36px 36px",
                                    opacity: 0.4,
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    width: "72%",
                                    height: "2px",
                                    background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                    transform: "rotate(-8deg)",
                                    borderRadius: "999px",
                                    boxShadow: "0 0 20px rgba(47,178,255,0.35)",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "50%",
                                    background: "#2FB2FF",
                                    left: "24%",
                                    top: "58%",
                                    boxShadow: "0 0 18px rgba(47,178,255,0.5)",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    width: "14px",
                                    height: "14px",
                                    borderRadius: "50%",
                                    background: "#27E0A7",
                                    right: "20%",
                                    top: "40%",
                                    boxShadow: "0 0 18px rgba(39,224,167,0.5)",
                                }}
                            />

                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 2,
                                    fontSize: "34px",
                                    fontWeight: 800,
                                    color: "white",
                                }}
                            >
                                Map area
                            </div>
                        </div>
                    </div>

                    {/* SIDE PANEL */}
                    <div
                        style={{
                            display: "grid",
                            gap: "18px",
                        }}
                    >
                        <div
                            style={{
                                padding: "22px",
                                borderRadius: "24px",
                                background:
                                    "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                border: "1px solid rgba(255,255,255,0.10)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Ride Summary
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gap: "12px",
                                }}
                            >
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            padding: "14px 16px",
                                            borderRadius: "16px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                color: "#a9b8cf",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "22px",
                                                fontWeight: 800,
                                                color: "white",
                                            }}
                                        >
                                            {item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            style={{
                                padding: "22px",
                                borderRadius: "24px",
                                background:
                                    "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                border: "1px solid rgba(255,255,255,0.10)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Achievements
                            </div>

                            <div style={{ display: "grid", gap: "12px" }}>
                                <div style={achievementStyle}>🏍️ 10 rides completed</div>
                                <div style={achievementStyle}>🛣️ 400+ km tracked</div>
                                <div style={achievementStyle}>⚡ Longest ride: 186 km</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RECENT RIDES */}
                <section
                    style={{
                        marginBottom: "24px",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "40px",
                            margin: "0 0 20px",
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            color: "white",
                        }}
                    >
                        Recent Rides
                    </h2>

                    <div style={{ display: "grid", gap: "18px" }}>
                        {rides.map((ride) => (
                            <div
                                key={ride.name}
                                style={{
                                    padding: "22px",
                                    borderRadius: "22px",
                                    background:
                                        "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "18px",
                                    flexWrap: "wrap",
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            margin: "0 0 8px",
                                            fontSize: "30px",
                                            fontWeight: 800,
                                            color: "white",
                                        }}
                                    >
                                        {ride.name}
                                    </h3>

                                    <p
                                        style={{
                                            margin: "0 0 6px",
                                            fontSize: "17px",
                                            color: "#cfd9ea",
                                        }}
                                    >
                                        {ride.details}
                                    </p>

                                    <p
                                        style={{
                                            margin: 0,
                                            fontSize: "15px",
                                            color: "#8fa2bf",
                                        }}
                                    >
                                        {ride.date} • {ride.type}
                                    </p>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <button style={secondaryButtonStyle}>View Route</button>
                                    <button style={primaryButtonStyle}>Track Again</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SAVED ROUTES */}
                <section>
                    <h2
                        style={{
                            fontSize: "40px",
                            margin: "0 0 20px",
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            color: "white",
                        }}
                    >
                        Saved Routes
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                            gap: "18px",
                        }}
                    >
                        {savedRoutes.map((route) => (
                            <div
                                key={route}
                                style={{
                                    padding: "22px",
                                    borderRadius: "22px",
                                    background:
                                        "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "22px",
                                        fontWeight: 800,
                                        color: "white",
                                        marginBottom: "12px",
                                    }}
                                >
                                    {route}
                                </div>

                                <p
                                    style={{
                                        margin: "0 0 18px",
                                        color: "#a9b8cf",
                                        lineHeight: 1.7,
                                        fontSize: "15px",
                                    }}
                                >
                                    Save your favorite roads and quickly start a ride whenever you
                                    want.
                                </p>

                                <button style={primaryButtonStyle}>Open Route</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

const primaryButtonStyle = {
    padding: "12px 18px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
    color: "#04111f",
    fontWeight: 800,
    fontSize: "14px",
    cursor: "pointer",
};

const secondaryButtonStyle = {
    padding: "12px 18px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    color: "white",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
};

const achievementStyle = {
    padding: "14px 16px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "white",
    fontSize: "16px",
    fontWeight: 600,
};