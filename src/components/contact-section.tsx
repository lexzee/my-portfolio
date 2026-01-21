"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Send,
  Loader2Icon,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactSection() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);
  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Context & Socials */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something <br />
            <span className="text-primary">extraordinary.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            I'm currently available for freelance projects and open to full-time
            opportunities. If you need a dedicated Full Stack Developer to help
            scale your product, get in touch.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:developerlexzee@gmail.com"
              className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              developerlexzee@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/lexzee" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://x.com/devlexzee" target="_blank">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter / X</span>
              </Link>
            </Button>
            {/* <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button> */}
          </div>
        </div>

        {/* Right Side: The Form */}
        <Card className="border-muted-foreground/10 bg-muted/5">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    placeholder="John"
                    required
                  />
                  <ValidationError
                    prefix="First name"
                    field="first-name"
                    errors={state.errors}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-30"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 text-base"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
