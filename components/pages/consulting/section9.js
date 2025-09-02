"use client";
import Link from 'next/link'

export default function Section9() {
  return (
    <>
      <section style={{ backgroundColor: "#f2edea", padding: "100px 0", marginTop: "60px" }}>
        <div className="tf-container">
          <div 
            style={{ 
              backgroundColor: "white", 
              borderRadius: "30px", 
              padding: "60px 40px", 
              boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              textAlign: "center",
              maxWidth: "950px",
              margin: "0 auto",
              transition: "all 0.3s ease"
            }}
          >
            <h2 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "25px", color: "#000" }}>
              📌 Don’t see your industry listed? We probably serve it anyway.
            </h2>
            <p style={{ fontSize: "1.3rem", color: "#333", marginBottom: "40px", lineHeight: "1.9", maxWidth: "700px", margin: "0 auto" }}>
               Our team has worked with 500+ clients across various domains — from doctors and designers to farmers and factories.
            </p>
            <Link 
              href="/#"
              style={{ 
                display: "inline-block",
                background: "linear-gradient(90deg, #ffcd4c 0%, #ffc107 100%)",
                color: "#000",
                fontWeight: "700",
                fontSize: "1.25rem",
                padding: "18px 50px",
                borderRadius: "60px",
                textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease"
              }}
              className="cta-button"
            >
              📞 Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  )
}
