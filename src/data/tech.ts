
export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "React", icon: "/image/tech/react.svg" },
  { name: "JavaScript", icon: "/image/tech/js.svg" },
  { name: "TypeScript", icon: "/image/tech/typescript.svg" },
  { name: "Tailwind CSS", icon: "/image/tech/tailwindcss.svg" },
  { name: "Spring Boot", icon: "/image/tech/springboot.svg" },
  { name: "Supabase", icon: "/image/tech/supabase.svg" },
  { name: "Redis", icon: "/image/tech/redis.svg" },
];

export const frontendSkills: TechItem[] = [
  { name: "React", icon: "/image/tech/react.svg" },
  { name: "TypeScript", icon: "/image/tech/typescript.svg" },
  { name: "JavaScript", icon: "/image/tech/js.svg" },
  { name: "Tailwind CSS", icon: "/image/tech/tailwindcss.svg" },
  {
    name: "shadcn/ui",
    icon: "/image/tech/shadcn-ui-light.svg",
    darkIcon: "/image/tech/shadcn-ui-dark.svg",
  },
  { name: "Vite", icon: "/image/tech/vite.svg" },
  { name: "HTML5", icon: "/image/tech/html5.svg" },
  {
    name: "CSS",
    icon: "/image/tech/css3.svg",
    darkIcon: "/image/tech/css3-dark.svg",
  },
];

export const backendSkills: TechItem[] = [
  { name: "Java", icon: "/image/tech/java.svg" },
  { name: "Spring Boot", icon: "/image/tech/springboot.svg" },
  { name: "MySQL", icon: "/image/tech/mysql.svg" },
  { name: "Supabase", icon: "/image/tech/supabase.svg" },
  { name: "PostgreSQL", icon: "/image/tech/postgre.svg" },
  { name: "Redis", icon: "/image/tech/redis.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/image/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/image/tech/../social/github.svg",
    darkIcon: "/image/tech/../social/github-dark.svg",
  },
  { name: "Maven", icon: "/image/tech/apachemaven.svg" },
  { name: "Gradle", icon: "/image/tech/gradle.svg" },
  {
    name: "Vercel",
    icon: "/image/tech/vercel-light.svg",
    darkIcon: "/image/tech/vercel-dark.svg",
  },
  { name: "Netlify", icon: "/image/tech/netlify.svg" },
  {
    name: "Bun",
    icon: "/image/tech/bun.svg",
    darkIcon: "/image/tech/bun-dark.svg",
  },
  { name: "Docker", icon: "/image/tech/docker.svg" },
  { name: "NPM", icon: "/image/tech/npm.svg" },
];

export const skillRows: {
  direction: "left" | "right";
  category: string;
  items: TechItem[];
}[] = [
  { direction: "left", category: "Frontend", items: frontendSkills },
  { direction: "right", category: "Backend", items: backendSkills },
  { direction: "left", category: "Tools & DevOps", items: toolsSkills },
];

export const projectTech = {
  rust: { name: "Rust", icon: "/image/tech/rust.svg" },
  react: { name: "React", icon: "/image/tech/react.svg" },
  javascript: { name: "JavaScript", icon: "/image/tech/js.svg" },
  typescript: { name: "TypeScript", icon: "/image/tech/typescript.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/image/tech/tailwindcss.svg" },
  vite: { name: "Vite", icon: "/image/tech/vite.svg" },
  motion: { name: "Framer Motion", icon: "/image/tech/motion.svg" },
  springboot: { name: "Spring Boot", icon: "/image/tech/springboot.svg" },
  radixui: {
    name: "Radix UI",
    icon: "/image/tech/radixui.svg",
    darkIcon: "/image/tech/radixui-dark.svg",
  },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/image/tech/shadcn-ui-light.svg",
    darkIcon: "/image/tech/shadcn-ui-dark.svg",
  },
  gtk4: { name: "GTK4", icon: "/image/tech/gtk4.svg" },
  libadwaita: { name: "libadwaita", icon: "/image/tech/libadwaita.svg" },
  sqlite: { name: "SQLite", icon: "/image/tech/sqlite.svg" },
  supabase: { name: "Supabase", icon: "/image/tech/supabase.svg" },
  postgresql: { name: "PostgreSQL", icon: "/image/tech/postgre.svg" },
  redis: { name: "Redis", icon: "/image/tech/redis.svg" },
  jwt: {
    name: "JWT",
    icon: "/image/tech/jwt-light.svg",
    darkIcon: "/image/tech/jwt-dark.svg",
  },
  monaco: { name: "Monaco Editor", icon: "/image/tech/monaco.svg" },
  nodejs: {
    name: "Node.js",
    icon: "/image/tech/nodejs-light.svg",
    darkIcon: "/image/tech/nodejs-dark.svg",
  },
  ink: {
    name: "Ink",
    icon: "/image/tech/ink-light.svg",
    darkIcon: "/image/tech/ink-dark.svg",
  },
  commander: {
    name: "Commander.js",
    icon: "/image/tech/commander-light.svg",
    darkIcon: "/image/tech/commander-dark.svg",
  },
  execa: {
    name: "Execa",
    icon: "/image/tech/execa-light.svg",
    darkIcon: "/image/tech/execa-dark.svg",
  },
  docker: { name: "Docker", icon: "/image/tech/docker.svg" },
  go: { name: "Go", icon: "/image/tech/go.svg" },
  webassembly: { name: "WebAssembly", icon: "/image/tech/webassembly.svg" },
  cloudflare: {
    name: "Cloudflare Workers",
    icon: "/image/tech/cloudflare.svg",
  },
  framermotion: { name: "Framer Motion", icon: "/image/tech/motion.svg" },
  astro: {
    name: "Astro",
    icon: "/image/tech/astro-light.svg",
    darkIcon: "/image/tech/astro-dark.svg",
  },
  webcodecs: {
    name: "WebCodecs",
    icon: "/image/tech/webcodecs-light.svg",
    darkIcon: "/image/tech/webcodecs-dark.svg",
  },
} as const;
