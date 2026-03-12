export default function SignInPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top left, rgba(47,178,255,0.10), transparent 28%), linear-gradient(180deg,#06101d 0%,#081425 55%,#09182b 100%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "440px",
                    padding: "32px",
                    borderRadius: "24px",
                    background:
                        "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
                }}
            >
                <h1
                    style={{
                        fontSize: "34px",
                        margin: "0 0 10px",
                        fontWeight: 800,
                        color: "white",
                    }}
                >
                    Sign In
                </h1>

                <p
                    style={{
                        margin: "0 0 20px",
                        color: "#a9b8cf",
                        fontSize: "16px",
                        lineHeight: 1.6,
                    }}
                >
                    Access your BikeMeNow account.
                </p>

                <input placeholder="Email" style={inputStyle} />
                <input type="password" placeholder="Password" style={inputStyle} />

                <button style={buttonStyle}>Sign In</button>
            </div>
        </main>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    marginBottom: "14px",
    fontSize: "14px",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg,#2FB2FF,#27E0A7)",
    color: "#04111f",
    fontWeight: 800,
    cursor: "pointer",
    fontSize: "15px",
};