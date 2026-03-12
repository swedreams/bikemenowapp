"use client";

import { useState } from "react";

export default function SignUpPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.email || !form.password) {
            setMessage("Please fill in all fields.");
            return;
        }

        setMessage("Account created successfully!");
        setForm({
            name: "",
            email: "",
            password: "",
        });
    }

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
                    Get Started
                </h1>

                <p
                    style={{
                        margin: "0 0 20px",
                        color: "#a9b8cf",
                        fontSize: "16px",
                        lineHeight: 1.6,
                    }}
                >
                    Create your BikeMeNow account and start exploring the platform.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Full name"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        style={inputStyle}
                    />

                    <button type="submit" style={buttonStyle}>
                        Create Account
                    </button>
                </form>

                {message && (
                    <p
                        style={{
                            marginTop: "16px",
                            color: message.includes("successfully") ? "#27E0A7" : "#ff8080",
                            fontSize: "14px",
                            fontWeight: 600,
                        }}
                    >
                        {message}
                    </p>
                )}
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
    outline: "none",
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