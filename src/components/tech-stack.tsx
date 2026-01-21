import { cn } from "@/lib/utils";

const techs = [
  {
    name: "React",
    icon: (props: any) => (
      <svg viewBox="-10.5 -9.45 21 18.9" fill="currentColor" {...props}>
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
          <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (props: any) => (
      <svg viewBox="0 0 180 180" fill="currentColor" {...props}>
        <path
          d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z"
          fill="black"
          className="dark:fill-white"
          fillOpacity="1"
        />
        <mask
          id="mask0"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="180"
          height="180"
          style={{ maskType: "alpha" }}
        >
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_linear)"
          />
          <rect
            x="115"
            y="54"
            width="12"
            height="72"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="121"
            y1="54"
            x2="120.799"
            y2="106.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (props: any) => (
      <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
        <path
          d="M1.5 64A62.5 62.5 0 1 0 126.5 64A62.5 62.5 0 1 0 1.5 64z"
          fill="#3178C6"
        ></path>
        <path
          d="M72.2 88.8h11.5v-7h-6.2v-27h6.2v-7h-11.5v41zm-18.7-20.8c0-3.2 2.4-5.3 6.1-5.3 3.6 0 6.1 2.1 6.1 5.3s-2.4 5.3-6.1 5.3c-3.7 0-6.1-2.1-6.1-5.3zm6.1-13.2c-7.9 0-13.6 5.5-13.6 13.5v12.2h-7.6v7.6h7.6v20.8h7.6v-20.8h5.9v-7.6h-5.9v-12.2c0-3.9 2.7-6.5 6-6.5s6 2.6 6 6.5v12.2h7.6v-12.2c0-8-5.7-13.5-13.6-13.5z"
          fill="#FFF"
        ></path>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          fill="#06B6D4"
        ></path>
      </svg>
    ),
  },
  {
    name: "Solana",
    icon: (props: any) => (
      <svg viewBox="0 0 322 266" fill="currentColor" {...props}>
        <defs>
          <linearGradient
            id="solana_gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#9945FF" />
            <stop offset="100%" stopColor="#14F195" />
          </linearGradient>
        </defs>
        <path
          d="M49.6 156.4L5.9 200.2C2.1 204 .0 209.1 .0 214.5s2.1 10.5 5.9 14.3l37.2 37.2c3.8 3.8 8.9 5.9 14.3 5.9h214.9c16.3 0 24.4-19.7 12.9-31.2l-43.7-43.7c-3.8-3.8-8.9-5.9-14.3-5.9H12.9c-16.3 .1-24.4 19.7-12.9 31.2zm266.5-104.9L272.4 7.9c-3.8-3.8-8.9-5.9-14.3-5.9H43.2C26.9 2 18.8 21.7 30.3 33.2l43.7 43.7c3.8 3.8 8.9 5.9 14.3 5.9h214.9c16.3 0 24.4-19.7 12.9-31.2zM49.6 98.4L5.9 142.2c-3.8 3.8-5.9 8.9-5.9 14.3s2.1 10.5 5.9 14.3l43.7 43.7c11.5 11.5 31.2 3.3 31.2-12.9H265.7c5.4 0 10.5-2.1 14.3-5.9l43.7-43.7c3.8-3.8 5.9-8.9 5.9-14.3s-2.1-10.5-5.9-14.3l-37.2-37.2c-3.8-3.8-8.9-5.9-14.3-5.9H57.4c-5.4 0-10.5 2.1-14.3 5.9z"
          fill="url(#solana_gradient)"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (props: any) => (
      <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
        <path
          d="M16 2.5L2.5 9.5V23.5L16 30.5L29.5 23.5V9.5L16 2.5ZM16 4.5L27 10.2V21.8L16 27.5L5 21.8V10.2L16 4.5Z"
          fill="#339933"
        ></path>
        <path
          d="M16 8L8 12V20L16 24L24 20V12L16 8Z"
          fill="#339933"
          opacity="0.5"
        ></path>
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (props: any) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path
          d="M11.9686 0.25L4.49257 10.875H11.5173L10.3204 23.75L19.476 11.5H12.639L14.4339 0.25H11.9686Z"
          fill="#3ECF8E"
        />
      </svg>
    ),
  },
];

export function TechStack() {
  return (
    <section className="w-full border-b bg-muted/20 py-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
          Powering Next-Gen Applications With
        </p>

        {/* Mask edges to create fade effect */}
        <div className="relative flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee gap-12 sm:gap-24 whitespace-nowrap py-4">
            {/* First Set */}
            {techs.map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 group">
                <div className="h-8 w-8 text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  <tech.icon className="h-full w-full object-contain" />
                </div>
                <span className="text-lg font-semibold text-foreground/60 group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Second Set (Duplicate for smooth infinite loop) */}
            {techs.map((tech) => (
              <div
                key={`${tech.name}-duplicate`}
                className="flex items-center gap-2 group"
              >
                <div className="h-8 w-8 text-foreground/80 group-hover:text-primary transition-colors duration-300">
                  <tech.icon className="h-full w-full object-contain" />
                </div>
                <span className="text-lg font-semibold text-foreground/60 group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
