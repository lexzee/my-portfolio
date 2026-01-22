import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

function CustomLink(props: any) {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={cn(
          "font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors",
        props.className,
      )}
      {...props}
    />
  );
}

function RoundedImage(props: any) {
  return (
    <Image alt={props.alt} className="rounded-lg border bg-muted" {...props} />
  );
}

function Callout(props: any) {
  return (
    <div className="my-6 flex items-start rounded-md border border-l-4 border-l-primary bg-muted/50 p-4">
      <div className="ml-4 flex-1">
        <div className="font-semibold">{props.title}</div>
        <div className="mt-1 text-sm text-muted-foreground">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "leading-7 not-first:mt-6 text-muted-foreground/90",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  a: CustomLink,
  img: RoundedImage,
  Callout,
};
