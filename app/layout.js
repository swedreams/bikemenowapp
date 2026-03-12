import { LanguageProvider } from "./context/LanguageContext";
import NavbarClient from "./NavbarClient";

export const metadata = {
    title: "BikeMeNow",
    description: "The all-in-one motorcycle platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            style={{
                margin: 0,
                fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                background: "#06101d",
            }}
        >
        <LanguageProvider>
            <NavbarClient />
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}