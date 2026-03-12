export default function AIPage() {
    const questions = [
        "What is the best beginner motorcycle under €8,000?",
        "Which motorcycle is best for long distance touring?",
        "How often should I change motorcycle oil?",
        "What gear should every rider have?",
        "How do I maintain my motorcycle chain?",
        "Which motorcycles are best for city commuting?",
    ];

    return (
        <main
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(47,178,255,0.12), transparent 28%), linear-gradient(180deg,#06101d 0%,#081425 55%,#09182b 100%)",
                color: "white",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "40px 20px 80px",
                }}
            >
                <h1
                    style={{
                        fontSize: "56px",
                        fontWeight: "800",
                        marginBottom: "12px",
                        color: "white",
                    }}
                >
                    AI Feature
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        color: "#a9b8cf",
                        marginBottom: "28px",
                    }}
                >
                    Get motorcycle recommendations, maintenance help, and route ideas.
                </p>

                {/* AI BOX */}
                <div
                    style={{
                        padding: "28px",
                        borderRadius: "22px",
                        background:
                            "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                        border: "1px solid rgba(255,255,255,0.10)",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                        marginBottom: "40px",
                    }}
                >
                    <p
                        style={{
                            marginBottom: "18px",
                            color: "#cfd9ea",
                            fontSize: "16px",
                        }}
                    >
                        Example prompt: “Recommend me a beginner motorcycle under €8,000.”
                    </p>

                    <input
                        type="text"
                        placeholder="Ask AI anything..."
                        style={{
                            width: "100%",
                            padding: "14px 16px",
                            borderRadius: "14px",
                            border: "1px solid rgba(255,255,255,0.12)",
                            background: "rgba(255,255,255,0.04)",
                            color: "white",
                            outline: "none",
                            fontSize: "15px",
                            marginBottom: "16px",
                            boxSizing: "border-box",
                        }}
                    />

                    <button
                        style={{
                            padding: "12px 22px",
                            borderRadius: "12px",
                            border: "none",
                            background: "linear-gradient(90deg,#2FB2FF,#27E0A7)",
                            color: "#04111f",
                            fontWeight: "700",
                            cursor: "pointer",
                        }}
                    >
                        Send
                    </button>
                </div>

                {/* POPULAR QUESTIONS */}
                <h2
                    style={{
                        fontSize: "32px",
                        fontWeight: "800",
                        marginBottom: "18px",
                        color: "white",
                    }}
                >
                    Popular Questions
                </h2>

                <div
                    style={{
                        display: "grid",
                        gap: "16px",
                    }}
                >
                    {questions.map((q, index) => (
                        <div
                            key={index}
                            style={{
                                padding: "18px",
                                borderRadius: "18px",
                                background:
                                    "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                border: "1px solid rgba(255,255,255,0.10)",
                                color: "#cfd9ea",
                                fontSize: "16px",
                                cursor: "pointer",
                            }}
                        >
                            {q}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}