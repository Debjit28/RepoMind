import { ModeToggle } from "@/components/ui/mode_toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-10 text-foreground">
      <ModeToggle />

      <h1 className="mt-10 text-4xl font-bold">
        RepoMind
      </h1>
    </main>
  );
}