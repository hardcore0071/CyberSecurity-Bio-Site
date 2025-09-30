import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp, Terminal, Code } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export function AboutSection() {
  const stats = [
    { icon: Shield, label: "Years Experience", value: "6+" },
    { icon: Users, label: "Companies Secured", value: "50+" },
    { icon: Award, label: "Certifications", value: "10+" },
    { icon: TrendingUp, label: "Success Rate", value: "99.8%" },
  ]

  return (
    <section id="about" className="py-16 bg-muted/50 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-mono text-emerald-500">{"{"}</div>
        <div className="absolute top-20 right-20 text-4xl font-mono text-cyan-500">{"</>"}</div>
        <div className="absolute bottom-20 left-1/4 text-5xl font-mono text-purple-500">{"[]"}</div>
        <div className="absolute bottom-10 right-10 text-6xl font-mono text-emerald-500">{"}"}</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="mb-4 font-mono text-sm text-emerald-500 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <TypingAnimation text="$ cat about.txt" speed={80} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Welcome! I'm Umar Mushtaq, a Cyber Security Red Team Specialist with a passion for enhancing defenses and
            mitigating cyber risks.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-emerald-500/20"
            >
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-emerald-500" />
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 6 years of experience as a seasoned Penetration Tester and Red Teamer, I'm adept at evaluating
                web/mobile, network infrastructure, and social engineering. Expert in offensive and defensive
                strategies, I simulate threat scenarios to uncover weaknesses before exploitation.
              </p>
              <p>
                I hold multiple industry certifications including{" "}
                <span className="text-emerald-500 font-semibold">OSCP</span>,
                <span className="text-cyan-500 font-semibold"> CRTO</span>,{" "}
                <span className="text-purple-500 font-semibold"> CEH Practical</span>, and many more. I've successfully
                secured infrastructure for organizations across UAE, Oman, and the US.
              </p>
              <p>
                Committed to continuous learning, I stay updated with latest trends and have earned recognition in the
                <span className="text-emerald-500 font-semibold"> WHO Hall of Fame</span>. Strong problem-solving skills
                drive my approach to cybersecurity challenges.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-emerald-500 pl-6 hover:bg-emerald-500/5 p-4 rounded-r-lg transition-colors">
              <h4 className="font-semibold text-foreground mb-2">April 2025 - Present</h4>
              <p className="text-emerald-600 font-medium">Sr. Cybersecurity Specialist</p>
              <p className="text-muted-foreground text-sm">ValueMentor, Abu Dhabi</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-6 hover:bg-cyan-500/5 p-4 rounded-r-lg transition-colors">
              <h4 className="font-semibold text-foreground mb-2">Oct 2024 - May 2025</h4>
              <p className="text-cyan-600 font-medium">Sr. Security Analyst</p>
              <p className="text-muted-foreground text-sm">SoftTech Consultancy, Abu Dhabi</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6 hover:bg-purple-500/5 p-4 rounded-r-lg transition-colors">
              <h4 className="font-semibold text-foreground mb-2">Feb 2022 - May 2024</h4>
              <p className="text-purple-600 font-medium">Lead Penetration Tester</p>
              <p className="text-muted-foreground text-sm">Technolytics, United States (Remote)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
