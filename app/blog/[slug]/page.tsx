// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/config/blog-posts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Tag, Users, User, Phone, Link2 } from "lucide-react";

export const dynamic = "force-static";
export const revalidate = 604800;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ background: "var(--color-background)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "100px 1.5rem 4rem", 
        }}
      >
        {/* Back button */}
        <Link
          href="/blog"
          className="back-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "var(--color-muted-foreground)",
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            marginBottom: "2rem",
            transition: "color 0.2s",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={20} /> Back to all posts
        </Link>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "var(--color-accent)",
              fontWeight: 600,
              textTransform: "uppercase",
              fontFamily: "var(--font-body)",
              marginBottom: 12,
            }}
          >
            <Tag size={16} />
            {post.category}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-headings)",
              fontSize: 40,
              fontWeight: 700,
              color: "var(--color-foreground)",
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              fontSize: 15,
              color: "var(--color-muted-foreground)",
              fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Calendar size={18} /> {post.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <MapPin size={18} /> {post.venue || "Various Venues"}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Users size={18} /> {post.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: 24,
            overflow: "hidden",
            marginBottom: "2.5rem",
            backgroundColor: "var(--color-border)",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            unoptimized={post.image.startsWith("https")}
            priority
          />
        </div>

        {/* Main Content */}
        <div
          className="blog-content"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.8,
            color: "var(--color-foreground)",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Slot */}
        {post.author && (
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <User size={20} style={{ color: "var(--color-accent)" }} />
              <span style={{ fontWeight: 600, color: "var(--color-foreground)" }}>
                {post.author.name}
              </span>
            </div>
            {post.author.phone && (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={18} style={{ color: "var(--color-accent)" }} />
                <a
                  href={`tel:${post.author.phone}`}
                  style={{
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    fontWeight: 500,
                    borderBottom: "1px dashed var(--color-border)",
                  }}
                >
                  {post.author.phone}
                </a>
              </div>
            )}
            <span style={{ fontSize: 14, color: "var(--color-muted-foreground)" }}>
              – Need help planning your event? Reach out!
            </span>
          </div>
        )}

        {/* Company Links */}
        {post.companyLinks && post.companyLinks.length > 0 && (
          <div
            style={{
              marginTop: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-headings)",
                fontSize: 20,
                fontWeight: 600,
                color: "var(--color-foreground)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Link2 size={20} style={{ color: "var(--color-accent)" }} />
              Companies Mentioned
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem 1.5rem",
                fontFamily: "var(--font-body)",
              }}
            >
              {post.companyLinks.map((link) => (
                <li key={link.url} style={{ margin: 0 }}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-link"
                    style={{
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      fontWeight: 500,
                      borderBottom: "1px dotted var(--color-border)",
                      transition: "border-color 0.2s",
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: 14,
                color: "var(--color-muted-foreground)",
                marginTop: "0.75rem",
              }}
            >
              Visit their websites to learn more or book their services.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}