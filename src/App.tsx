import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Fast setup",
    description: "Get your team running in minutes, not days.",
  },
  {
    title: "Built-in checks",
    description: "Catch issues before they reach your customers.",
  },
  {
    title: "Works with your stack",
    description: "Drop it into your existing workflow with no rewrites.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        <span className="font-semibold">Northwind</span>
        <nav className="flex items-center gap-4">
          <button className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </button>
          <Button variant="ghost">Sign in</Button>
        </nav>
      </header>

      <section className="flex flex-col items-center text-center px-6 py-xl gap-md">
        <Badge variant="secondary">New: Team workspaces</Badge>
        <h1 className="text-4xl font-bold tracking-tight max-w-2xl">
          Ship with confidence, every time
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Northwind helps your team catch problems early, so launches feel
          routine instead of risky.
        </p>
        <div className="flex items-center gap-sm pt-sm">
          <Button size="lg">Get started</Button>
          <button className="h-10 rounded-md px-8 text-sm font-medium border border-border bg-background hover:bg-accent">
            Learn more
          </button>
        </div>
        <p style={{ color: "#6b7280" }} className="text-sm pt-xs">
          Trusted by teams at companies of every size
        </p>
      </section>

      <section className="px-6 py-[37px] grid grid-cols-1 md:grid-cols-3 gap-md max-w-5xl mx-auto">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Learn more
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="flex flex-col items-center text-center px-6 py-xl gap-sm border-t border-border">
        <h2 className="text-2xl font-semibold">Ready to try it out?</h2>
        <p className="text-muted-foreground max-w-md">
          Start free. No credit card required.
        </p>
        <Button size="lg">Create your account</Button>
      </section>

      <footer className="px-6 py-md text-center text-sm text-muted-foreground border-t border-border">
        © 2026 Northwind, Inc.
      </footer>
    </div>
  );
}

export default App;
