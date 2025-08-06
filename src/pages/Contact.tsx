import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's build something cool.</h1>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate on your next project or just want to chat about 
            AI, product strategy, or the best riding routes?
          </p>
        </div>

        {/* Contact Form */}
        <Card className="glass-card mb-12">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                />
              </div>
              <Button className="w-full py-3 text-lg font-medium">
                Send
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Connect with me on</p>
          <div className="flex justify-center items-center gap-6">
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Linkedin className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Twitter className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
            >
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Github className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}