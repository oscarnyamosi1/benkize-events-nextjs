import React from 'react';
import Link from 'next/link';

interface CakeItem {
  id: number;
  name: string;
  price: string;
  thumbnail: string | null;
}

type ApiResponse = CakeItem[];

export default async function CakeSectionHome(): Promise<React.ReactElement> {
  try {
    const res = await fetch(
      'https://benkizbakers.pythonanywhere.com/api/items/?limit=8',
      { cache: 'force-cache' }
    );

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const cakes: ApiResponse = await res.json();

    return (
      <section className="py-12 px-4 md:px-8 bg-background">
        {/* Header – Comic Sans */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive" }}
        >
          Our Cakes
        </h2>

        {/* Cake Grid – 2 cols mobile, 4 cols tablet/PC */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {cakes.map((cake, index) => {
            let thumbnailUrl = 'https://via.placeholder.com/300x200?text=No+Image';
            if (cake.thumbnail) {
              thumbnailUrl = cake.thumbnail.replace(/^\[|\]$/g, '');
            }

            return (
              <Link
                key={cake.id}
                href={`https://cakes.benkiz.org/shop/${cake.id}`}
                className={`
                  glass-card rounded-[15px] overflow-hidden flex flex-col group
                  transition-transform duration-300 hover:-translate-y-2
                  ${index >= 4 ? 'hidden md:flex' : ''}
                `}
                style={{ textDecoration: 'none' }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={thumbnailUrl}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-[15px]"
                    width="600"
                    height="400"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {cake.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    KES {parseFloat(cake.price).toLocaleString()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View More Button – with small rounding */}
        <div className="text-center mt-10">
          <a
            href="https://cakes.benkiz.org/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-[0.125rem] bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View more on our Benkiz official cake website
          </a>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CakeSectionHome fetch error:', error);
    return (
      <section className="py-16 text-center text-foreground">
        <p>Sorry, we couldn&apos;t load the cakes. Please try again later.</p>
      </section>
    );
  }
}