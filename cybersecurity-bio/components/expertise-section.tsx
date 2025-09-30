import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, AlertTriangle, Cloud, Code, Bug, Smartphone, Terminal, Zap } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation" // Assuming TypingAnimation is imported from this path

export function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "External/Internal VAPT & Audit with comprehensive security assessments",
      skills: ["Web Application VAPT", "Network Penetration", "Mobile App Testing", "API Security Testing"],
      proficiency: 95,
    },
    {
      icon: Bug,
      title: "Red Team Operations",
      description: "Advanced red team exercises simulating sophisticated cyber-attacks",
      skills: ["Cobalt Strike", "Sliver", "Empire", "Mythic C2", "AD Red Teaming"],
      proficiency: 92,
    },
    {
      icon: AlertTriangle,
      title: "Social Engineering",
      description: "Social engineering assessments and phishing campaigns",
      skills: ["Phishing Assessments", "Physical Security", "OSINT", "Human Factor Analysis"],
      proficiency: 88,
    },
    {
      icon: Smartphone,
      title: "Mobile Security",
      description: "Android & iOS application security testing and analysis",
      skills: ["MOBSF", "DEX2JAR", "GHIDRA", "FRIDA", "GDB"],
      proficiency: 90,
    },
    {
      icon: Cloud,
      title: "Cloud Penetration Testing",
      description: "Securing cloud environments and identifying misconfigurations",
      skills: ["AWS Security", "Azure Testing", "Container Security", "Cloud Misconfigs"],
      proficiency: 85,
    },
    {
      icon: Code,
      title: "Malware Analysis",
      description: "Reverse engineering and malware analysis capabilities",
      skills: ["Reverse Engineering", "Static Analysis", "Dynamic Analysis", "Threat Intelligence"],
      proficiency: 82,
    },
  ]

  const tools = [
    { name: "Burp Suite", category: "Web Security", color: "text-emerald-500" },
    { name: "Metasploit", category: "Exploitation", color: "text-cyan-500" },
    { name: "Cobalt Strike", category: "Red Team", color: "text-purple-500" },
    { name: "Nessus", category: "Vulnerability Scanning", color: "text-emerald-500" },
    { name: "BloodHound", category: "AD Enumeration", color: "text-cyan-500" },
    { name: "OWASP ZAP", category: "Web Security", color: "text-purple-500" },
    { name: "Nmap", category: "Network Scanning", color: "text-emerald-500" },
    { name: "Wireshark", category: "Network Analysis", color: "text-cyan-500" },
    { name: "MOBSF", category: "Mobile Security", color: "text-purple-500" },
    { name: "GHIDRA", category: "Reverse Engineering", color: "text-emerald-500" },
    { name: "Sliver", category: "C2 Framework", color: "text-cyan-500" },
    { name: "Empire", category: "Post-Exploitation", color: "text-purple-500" },
  ]

  return (
    <section id="expertise" className="py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-4xl font-mono text-emerald-500 animate-pulse">{"<script>"}</div>
        <div className="absolute top-20 right-20 text-3xl font-mono text-cyan-500 animate-bounce">{"#!/bin/bash"}</div>
        <div className="absolute bottom-20 left-1/4 text-4xl font-mono text-purple-500 animate-pulse">
          {"SELECT * FROM"}
        </div>
        <div className="absolute bottom-10 right-10 text-3xl font-mono text-emerald-500 animate-bounce">
          {"</script>"}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="mb-4 font-mono text-sm text-emerald-500 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <TypingAnimation text="$ cat /skills/expertise.json" speed={80} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Areas of <span className="text-emerald-500">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive cybersecurity skills across multiple domains with 6+ years of hands-on experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-emerald-500/20 hover:border-emerald-500/40"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <area.icon className="h-8 w-8 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg group-hover:text-emerald-500 transition-colors">{area.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-emerald-500 font-semibold font-mono">{area.proficiency}%</span>
                  </div>
                  <Progress value={area.proficiency} className="h-2" />
                  <div className="flex flex-wrap gap-1 mt-3">
                    {area.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-full border border-emerald-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-emerald-500" />
              Security Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:scale-105 border border-emerald-500/10 hover:border-emerald-500/30"
                >
                  <div className={`font-semibold ${tool.color} font-mono`}>{tool.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{tool.category}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
