export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="https://github.com/lexzee"
            target="_blank"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Abdulquddus Abdulrahman (Lexzee)
          </a>
          {/* . The source code is available on{" "}
          <a
            href="https://github.com/lexzee/my-portfolio"
            target="_blank"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a> */}
          .
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
