import Script from "next/script";

export default function GlobalScripts() {
    return (
        // Website Carbon Badge
        <Script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer strategy="afterInteractive" />
    )
}