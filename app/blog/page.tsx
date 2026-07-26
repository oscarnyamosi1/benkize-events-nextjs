// app/blog/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, MapPin, Users } from "lucide-react";
import { blogPosts } from "@/config/blog-posts";

export const metadata: Metadata = {
  title: "Benkiz Events Blog – Event Planning, Venues & Management Insights",
  description:
    "Expert tips and guides on event planning, venue selection, corporate events, weddings, and event technology. Read our latest stories.",
  keywords: "event planning blog, venue selection, corporate events, wedding planning, event technology, Nairobi events",
  openGraph: {
    title: "Benkiz Events Blog – Insights for Event Professionals",
    description: "Practical guides on planning memorable events, choosing venues, and leveraging technology for seamless experiences.",
    url: "https://events.benkiz.org/blog",
    siteName: "Benkiz Events",
    locale: "en_KE",
    type: "website",
  },
  alternates: {
    canonical: "https://events.benkiz.org/blog",
  },
};

export const revalidate = 604800; // 7 days

// Add the new categories here
const categories = ["All", "Corporate Events", "Weddings", "Venues", "Event Tech", "Catering", "Event Organizers"];

interface PageProps {
  searchParams: {
    category?: string;
  };
}

export default function BlogIndexPage({ searchParams }: PageProps) {
  const activeCategory = searchParams.category || "All";

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const categoryLinks = categories.map((cat) => ({
    label: cat,
    href: cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`,
    isActive: cat === activeCategory,
  }));

  return (
    <div style={{ background: "var(--color-background)", minHeight: "100vh" }}>
      <div
        style={{
          padding: "4rem 3.5rem 2rem",
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-headings)",
            fontSize: 42,
            fontWeight: 700,
            color: "var(--color-foreground)",
            marginBottom: 8,
          }}
        >
          Events Blog & Stories
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--color-muted-foreground)",
            fontFamily: "var(--font-body)",
            marginBottom: 32,
          }}
        >
          Insights on planning, venues, and making every event unforgettable.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 40,
            borderBottom: "1px solid var(--color-border)",
            paddingBottom: 16,
          }}
        >
          {categoryLinks.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: 100,
                border: "none",
                background: cat.isActive
                  ? "var(--gradient-primary)"
                  : "var(--color-card)",
                color: cat.isActive
                  ? "#fff"
                  : "var(--color-muted-foreground)",
                fontFamily: "var(--font-body)",
                fontWeight: cat.isActive ? 700 : 500,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <p style={{ color: "var(--color-muted-foreground)" }}>
            No posts in this category yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "var(--color-card)",
                    borderRadius: 24,
                    overflow: "hidden",
                    border: "1px solid var(--color-border)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="blog-card-hover"
                >
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/9",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                        fontSize: 12,
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      <Tag size={14} />
                      {post.category}
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-headings)",
                        fontSize: 20,
                        fontWeight: 700,
                        color: "var(--color-foreground)",
                        marginBottom: 8,
                        lineHeight: 1.3,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--color-muted-foreground)",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginTop: 16,
                        fontSize: 13,
                        color: "var(--color-muted-foreground)",
                        fontFamily: "var(--font-body)",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span>•</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={14} /> {post.venue || "Various Venues"}
                      </span>
                      <span>•</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <Users size={14} /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}