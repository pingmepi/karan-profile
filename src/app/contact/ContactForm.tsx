"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s build something cool.</h1>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate on your next project or just want to chat about
            AI, product strategy, or the best riding routes?
          </p>
        </div>

        {/* Contact Form */}
        <Card className="glass-card mb-12">
          <CardContent className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                />
              </div>
              <Button className="w-full py-3 text-lg font-medium" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Connect with me on</p>
          <div className="flex justify-center items-center gap-6">
            <a href="https://www.linkedin.com/in/mandalam-karan/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group">
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Image src="/assets/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://x.com/pingmepi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group">
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Image src="/assets/icons/x.svg" alt="X (Twitter)" width={24} height={24} className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a href="https://github.com/pingmepi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group">
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Image src="/assets/icons/github.svg" alt="GitHub" width={24} height={24} className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.instagram.com/pingmepi/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group">
              <div className="p-3 rounded-lg bg-accent group-hover:bg-primary/10 transition-smooth">
                <Image src="/assets/icons/instagram.svg" alt="Instagram" width={24} height={24} className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

