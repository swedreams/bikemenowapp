"use client";

import { useState } from "react";

export default function CommunityPage() {
    const [postText, setPostText] = useState("");

    const posts = [
        {
            user: "AlexRides",
            handle: "@alexrides",
            time: "2h ago",
            location: "Stockholm",
            text: "Sunrise ride today. Amazing roads and weather. Anyone else riding this weekend?",
            likes: 24,
            comments: 8,
            tags: ["Weekend Ride", "Scenic Roads"],
        },
        {
            user: "TomasTrail",
            handle: "@tomastrail",
            time: "5h ago",
            location: "Göteborg",
            text: "Testing a new luggage setup for weekend trips. Looking for touring bag recommendations.",
            likes: 17,
            comments: 5,
            tags: ["Touring", "Gear Setup"],
        },
        {
            user: "NinaMoto",
            handle: "@ninamoto",
            time: "1d ago",
            location: "Malmö",
            text: "Fresh tires installed. Anyone up for a Friday evening ride around the coast?",
            likes: 31,
            comments: 12,
            tags: ["Friday Ride", "Meetup"],
        },
    ];

    const trendingTopics = [
        "Best beginner bikes",
        "Weekend group rides",
        "Touring gear",
        "Service tips",
        "Scenic routes in Sweden",
    ];

    const suggestedGroups = [
        {
            name: "Stockholm Riders",
            members: "1,240 members",
            description: "Local riders sharing events, routes, and meetups.",
        },
        {
            name: "Weekend Touring Club",
            members: "860 members",
            description: "Long-distance riders planning weekend escapes.",
        },
        {
            name: "BikeMeNow Beginners",
            members: "540 members",
            description: "A welcoming group for new motorcycle riders.",
        },
    ];

    function handlePostSubmit(e) {
        e.preventDefault();

        if (!postText.trim()) return;

        alert("Post published!");
        setPostText("");
    }

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
                    Rider Community
                </h1>

                <p
                    style={{
                        margin: "0 0 30px",
                        fontSize: "22px",
                        color: "#a9b8cf",
                        lineHeight: 1.6,
                        maxWidth: "760px",
                    }}
                >
                    Connect with riders, share updates, discover groups, and build your
                    motorcycle community in one place.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.1fr 0.9fr",
                        gap: "22px",
                        alignItems: "start",
                    }}
                >
                    <div style={{ display: "grid", gap: "20px" }}>
                        <section
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
                                    fontSize: "28px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Share an update
                            </div>

                            <form onSubmit={handlePostSubmit}>
                <textarea
                    placeholder="What are you riding, fixing, or planning today?"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    rows={5}
                    style={{
                        width: "100%",
                        padding: "16px",
                        borderRadius: "16px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(255,255,255,0.04)",
                        color: "white",
                        outline: "none",
                        resize: "vertical",
                        fontSize: "15px",
                        fontFamily: "inherit",
                        boxSizing: "border-box",
                        minHeight: "140px",
                    }}
                />

                                <div
                                    style={{
                                        marginTop: "14px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        gap: "12px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <div
                                        style={{
                                            color: "#8fa2bf",
                                            fontSize: "14px",
                                        }}
                                    >
                                        Share ride plans, gear tips, route ideas, or community meetups.
                                    </div>

                                    <button
                                        type="submit"
                                        style={{
                                            padding: "12px 20px",
                                            borderRadius: "12px",
                                            border: "none",
                                            background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                            color: "#04111f",
                                            fontWeight: 800,
                                            fontSize: "14px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Post Update
                                    </button>
                                </div>
                            </form>
                        </section>

                        <section>
                            <div
                                style={{
                                    fontSize: "40px",
                                    fontWeight: 800,
                                    marginBottom: "18px",
                                    color: "white",
                                    letterSpacing: "-1px",
                                }}
                            >
                                Community Feed
                            </div>

                            <div style={{ display: "grid", gap: "18px" }}>
                                {posts.map((post) => (
                                    <article
                                        key={post.user}
                                        style={{
                                            padding: "22px",
                                            borderRadius: "24px",
                                            background:
                                                "linear-gradient(180deg, rgba(11,24,44,0.96), rgba(8,18,34,0.98))",
                                            border: "1px solid rgba(255,255,255,0.10)",
                                            boxShadow: "0 14px 36px rgba(0,0,0,0.18)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                gap: "14px",
                                                marginBottom: "14px",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <div style={{ display: "flex", gap: "14px" }}>
                                                <div
                                                    style={{
                                                        width: "52px",
                                                        height: "52px",
                                                        borderRadius: "50%",
                                                        background:
                                                            "linear-gradient(135deg, rgba(47,178,255,0.32), rgba(39,224,167,0.22))",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        fontWeight: 800,
                                                        fontSize: "18px",
                                                        color: "white",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    {post.user.charAt(0)}
                                                </div>

                                                <div>
                                                    <div
                                                        style={{
                                                            fontSize: "24px",
                                                            fontWeight: 800,
                                                            color: "white",
                                                            marginBottom: "4px",
                                                        }}
                                                    >
                                                        {post.user}
                                                    </div>

                                                    <div
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#8fa2bf",
                                                        }}
                                                    >
                                                        {post.handle} • {post.location} • {post.time}
                                                    </div>
                                                </div>
                                            </div>

                                            <button
                                                style={{
                                                    padding: "10px 16px",
                                                    borderRadius: "999px",
                                                    border: "1px solid rgba(255,255,255,0.12)",
                                                    background: "rgba(255,255,255,0.03)",
                                                    color: "white",
                                                    fontWeight: 700,
                                                    fontSize: "14px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                Follow
                                            </button>
                                        </div>

                                        <p
                                            style={{
                                                margin: "0 0 16px",
                                                fontSize: "17px",
                                                lineHeight: 1.8,
                                                color: "#d5deed",
                                            }}
                                        >
                                            {post.text}
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                flexWrap: "wrap",
                                                marginBottom: "16px",
                                            }}
                                        >
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    style={{
                                                        padding: "8px 12px",
                                                        borderRadius: "999px",
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.08)",
                                                        color: "#cfd9ea",
                                                        fontSize: "13px",
                                                        fontWeight: 600,
                                                    }}
                                                >
                          #{tag}
                        </span>
                                            ))}
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "12px",
                                                flexWrap: "wrap",
                                            }}
                                        >
                                            <button style={actionButtonStyle}>👍 Like ({post.likes})</button>
                                            <button style={actionButtonStyle}>
                                                💬 Comment ({post.comments})
                                            </button>
                                            <button style={actionButtonStyle}>↗ Share</button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div style={{ display: "grid", gap: "20px" }}>
                        <section
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
                                    fontSize: "26px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Trending Topics
                            </div>

                            <div style={{ display: "grid", gap: "12px" }}>
                                {trendingTopics.map((topic) => (
                                    <div
                                        key={topic}
                                        style={{
                                            padding: "14px 16px",
                                            borderRadius: "16px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "white",
                                            fontSize: "15px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        🔥 {topic}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section
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
                                    fontSize: "26px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Suggested Groups
                            </div>

                            <div style={{ display: "grid", gap: "14px" }}>
                                {suggestedGroups.map((group) => (
                                    <div
                                        key={group.name}
                                        style={{
                                            padding: "16px",
                                            borderRadius: "18px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: 800,
                                                color: "white",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {group.name}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "14px",
                                                color: "#8fa2bf",
                                                marginBottom: "10px",
                                            }}
                                        >
                                            {group.members}
                                        </div>

                                        <p
                                            style={{
                                                margin: "0 0 14px",
                                                color: "#cfd9ea",
                                                lineHeight: 1.6,
                                                fontSize: "14px",
                                            }}
                                        >
                                            {group.description}
                                        </p>

                                        <button
                                            style={{
                                                padding: "10px 16px",
                                                borderRadius: "12px",
                                                border: "none",
                                                background: "linear-gradient(90deg, #2FB2FF, #27E0A7)",
                                                color: "#04111f",
                                                fontWeight: 800,
                                                fontSize: "14px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Join Group
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section
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
                                    fontSize: "26px",
                                    fontWeight: 800,
                                    marginBottom: "16px",
                                    color: "white",
                                }}
                            >
                                Community Stats
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                    gap: "12px",
                                }}
                            >
                                {[
                                    { label: "Active Riders", value: "12.4K" },
                                    { label: "Posts Today", value: "486" },
                                    { label: "Groups", value: "132" },
                                    { label: "Upcoming Rides", value: "28" },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        style={{
                                            padding: "16px",
                                            borderRadius: "18px",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "13px",
                                                color: "#8fa2bf",
                                                marginBottom: "6px",
                                            }}
                                        >
                                            {stat.label}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "24px",
                                                fontWeight: 800,
                                                color: "white",
                                            }}
                                        >
                                            {stat.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}

const actionButtonStyle = {
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.03)",
    color: "white",
    fontWeight: 700,
    fontSize: "14px",
    cursor: "pointer",
};