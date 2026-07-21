import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section" style={{ paddingBlock: "clamp(80px, 14vw, 180px)" }}>
      <div className="container center">
        <p className="eyebrow is-centered">Error 404</p>
        <h1 style={{ fontSize: "clamp(3rem, 9vw, 7rem)", marginBottom: 20 }}>
          Lost the thread.
        </h1>
        <p className="lede measure-center" style={{ marginBottom: 36 }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s
          get you back to something useful.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-gold btn-lg">
            Back to home
            <ArrowRight />
          </Link>
          <Link href="/services" className="btn btn-outline btn-lg">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
