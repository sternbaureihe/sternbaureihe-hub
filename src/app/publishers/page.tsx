export const metadata = {
  title: "Publisher Network | SternBaureihe",
  description: "SternBaureihe ad network: 97 Mercedes-Benz chassis domains, 2,300+ pages of premium automotive inventory.",
  robots: "index, follow",
};

const domains = [
  "mb-a124.com","mb-c107.com","mbc117.com","mbc118.com","mb-c124.com",
  "mb-c126.com","mb-c178.com","mb-c190.com","mb-c208.com","mb-c209.com",
  "mb-c215.com","mb-c216.com","mb-c257.com","mb-h247.com","mb-r107.com",
  "mbr129.com","mb-r170.com","mb-r171.com","mb-r172.com","mb-r230.com",
  "mb-r231.com","mb-s124.com","mb-w100.com","mb-w105.com","mb-w108.com",
  "mb-w109.com","mb-w110.com","mb-w111.com","mb-w112.com","mb-w113.com",
  "mb-w114.com","mb-w115.com","mb-w116.com","mb-w120.com","mb-w121.com",
  "mb-w123.com","mb-w124.com","mb-w126.com","mb-w128.com","mbw140.com",
  "mb-w163.com","mb-w164.com","mb-w166.com","mb-w167.com","mb-w168.com",
  "mb-w169.com","mb-w176.com","mb-w177.com","mb-w180.com","mb-w186.com",
  "mb-w187.com","mb-w188.com","mb-w189.com","mb-w198.com","mb-w201.com",
  "mb-w202.com","mb-w203.com","mb-w204.com","mb-w205.com","mb-w209.com",
  "mb-w210.com","mb-w211.com","mb-w212.com","mb-w213.com","mb-w214.com",
  "mb-w215.com","mb-w216.com","mb-w219.com","mb-w220.com","mb-w221.com",
  "mb-w222.com","mb-w223.com","mb-w245.com","mb-w246.com","mb-w247.com",
  "mb-w251.com","mb-w253.com","mb-w290.com","mb-w447.com","mb-w460.com",
  "mb-w461.com","mb-w463a.com","mb-w463.com","mb-w639.com","mb-w906.com",
  "mb-w907.com","mb-x156.com","mb-x164.com","mb-x166.com","mb-x167.com",
  "mb-x204.com","mb-x247.com","mb-x253.com","mb-x254.com","mb-x290.com",
];

export default function PublishersPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px", fontFamily: "system-ui, sans-serif", color: "#e0e0e0", background: "#0a0a0a", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#fff" }}>SternBaureihe Publisher Network</h1>
      <p style={{ color: "#888", marginBottom: 40, fontSize: 16 }}>Operated by Audacities Media &amp; Advertising LLC · Henderson, NV</p>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }}>
        {[
          { label: "Chassis Domains", value: "97" },
          { label: "Total Pages", value: "2,300+" },
          { label: "Audience", value: "Mercedes-Benz Enthusiasts" },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: "#111", border: "1px solid #222", borderRadius: 8, padding: "24px 20px" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>{value}</div>
            <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 16 }}>Ad Formats Supported</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {["Leaderboard 728×90","Rectangle 300×250","Half Page 300×600","Mobile Banner 320×50","Billboard 970×250","Skyscraper 160×600","Pre-roll Video","Newsletter"].map(f => (
            <span key={f} style={{ background: "#111", border: "1px solid #333", borderRadius: 4, padding: "6px 12px", fontSize: 13, color: "#aaa" }}>{f}</span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 16 }}>Network Domains ({domains.length})</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
          {domains.map(d => (
            <a key={d} href={"https://" + d} target="_blank" rel="noopener noreferrer"
              style={{ color: "#888", fontSize: 13, textDecoration: "none", padding: "4px 0" }}>
              {d}
            </a>
          ))}
        </div>
      </section>

      <section style={{ borderTop: "1px solid #222", paddingTop: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: "#fff", marginBottom: 12 }}>Contact</h2>
        <p style={{ color: "#888", fontSize: 14 }}>Publisher inquiries: <a href="mailto:publisher@audacitiesmedia.com" style={{ color: "#aaa" }}>publisher@audacitiesmedia.com</a></p>
        <p style={{ color: "#888", fontSize: 14, marginTop: 8 }}>3535 Executive Terminal Dr, Henderson NV 89052</p>
        <p style={{ color: "#888", fontSize: 14, marginTop: 8 }}><a href="/sellers.json" style={{ color: "#aaa" }}>sellers.json</a></p>
      </section>
    </main>
  );
}
