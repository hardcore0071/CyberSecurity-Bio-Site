import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Terminal } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export function HeroSection() {
  return (
    <section id="home" className="pt-20 pb-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="mb-4 font-mono text-sm text-emerald-500 flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            <TypingAnimation text="whoami" speed={150} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            <span className="text-emerald-500">Umar Mushtaq</span>
            <br />
            Red Team Specialist & <span className="text-cyan-500">Penetration Tester</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl">
            Cyber Security Red Team Specialist with <span className="text-emerald-500 font-semibold">6+ years</span> of
            hands-on experience. Expert in penetration testing, delivering exceptional results through offensive and
            defensive strategies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2">
              <div className="text-emerald-500 font-bold text-lg">6+</div>
              <div className="text-xs text-muted-foreground">Years Exp</div>
            </div>
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg px-4 py-2">
              <div className="text-cyan-500 font-bold text-lg">10+</div>
              <div className="text-xs text-muted-foreground">Certifications</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-4 py-2">
              <div className="text-purple-500 font-bold text-lg">WHO</div>
              <div className="text-xs text-muted-foreground">Hall of Fame</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500/20 hover:bg-emerald-500/10 bg-transparent"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-12 font-mono text-sm text-muted-foreground flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-500" />
            <TypingAnimation text="cat /etc/passwd | grep umar" speed={100} />
          </div>
        </div>
      </div>
    </section>
  )
}
