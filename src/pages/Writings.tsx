import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Seo } from "@/components/Seo";
const posts = [
  {
    title: "The Future of AI in Marketing Automation",
    excerpt: "How artificial intelligence is reshaping the way we think about customer engagement and personalization.",
    date: "December 2024",
    readTime: "5 min read",
    category: "AI & Martech"
  },
  {
    title: "Building Products at the Intersection",
    excerpt: "Lessons learned from working at the crossroads of technology, marketing, and human experience.",
    date: "November 2024", 
    readTime: "8 min read",
    category: "Product"
  },
  {
    title: "The Art of Motorcycling and Product Thinking",
    excerpt: "How the principles of riding can inform better product decisions and risk management.",
    date: "October 2024",
    readTime: "6 min read",
    category: "Personal"
  },
  {
    title: "No-Code Revolution in Enterprise",
    excerpt: "Why no-code tools are becoming essential for rapid prototyping and workflow automation.",
    date: "September 2024",
    readTime: "7 min read", 
    category: "Technology"
  }
];

export default function Writings() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <Seo title="Writings – Karan" description="Essays on product, technology, and creative pursuits." canonicalPath="/writings" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Writings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts on product, technology, and the spaces in between
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="glass-card hover-lift cursor-pointer group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-smooth">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="glass-card mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about product, technology, and creative pursuits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}