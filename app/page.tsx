import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Calendar, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SERVICES, MENU_ITEMS } from "@/lib/mockData";
import Hero from "@/components/Hero";
import { blogPosts } from "@/config/blog-posts";
import CakeSectionHome from "@/components/CakeSectionHome";

// Helper: get latest 3 posts sorted by date
const getLatestPosts = () => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
};

export default function HomePage() {
  const latestPosts = getLatestPosts();

  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        <Hero />

        {/* About Teaser */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card-round p-2 relative z-10">
                  <img
                    src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538241/IMG-20260615-WA0094_tlw8hr.jpg"
                    alt="Fine dining table"
                    className="w-full h-full object-cover rounded-[calc(var(--radius)+4px)]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              </div>

              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl">
                  The Art of <br />
                  <span className="text-primary italic">Hospitality</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Benkiz Caterers was born from a simple desire: to elevate the rich, vibrant flavors of the African continent to the realm of fine dining. We believe that a meal is more than sustenance—it is a story, a celebration, and a connection.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From intimate gatherings to grand corporate galas, our team meticulously curates every detail. Rich mahogany, crisp linens, and the intoxicating aroma of slow-cooked delicacies define the Benkiz experience.
                </p>
                <Button variant="link" className="px-0 group text-foreground font-medium" asChild>
                  <Link href="/about">
                    Read Our Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-card/50 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl">Curated Experiences</h2>
              <p className="text-muted-foreground">
                Tailored catering services designed to match the scale and significance of your event.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <div key={service.title} className="group relative">
                  <div className="glass-card overflow-hidden rounded-3xl h-full flex flex-col">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                      <Link
                        href="/services"
                        className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        Discover <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Menu */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl">Culinary Signatures</h2>
                <p className="text-muted-foreground">A glimpse into our contemporary take on timeless classics.</p>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MENU_ITEMS.slice(0, 4).map((item) => (
                <div key={item.name} className="glass-card p-4 rounded-3xl flex flex-col group cursor-pointer">
                  <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2 pb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg leading-tight">{item.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cake Section */}
        <CakeSectionHome />

        {/* Blog Section – Fully SSR, no JavaScript animations */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4 max-w-2xl">
                <h2 className="font-serif text-4xl md:text-5xl">From the Blog</h2>
                <p className="text-muted-foreground">
                  Stories, tips, and insights from our team to inspire your next event.
                </p>
              </div>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
                  <div className="glass-card overflow-hidden rounded-3xl h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        unoptimized={post.image.startsWith("https")}
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-wider mb-3">
                        <Tag size={14} />
                        {post.category}
                      </div>
                      <h3 className="font-serif text-xl leading-tight mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10" />
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <div className="glass max-w-3xl mx-auto p-12 md:p-16 rounded-[3rem]">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Host?</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                Let us handle the details while you enjoy the moment. Reserve your date and begin customizing your menu today.
              </p>
              <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                <Link href="/booking">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}