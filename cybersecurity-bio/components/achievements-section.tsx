import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Trophy, Star, Briefcase as Certificate, Target, Zap, Lock, Bug, Globe, Users } from "lucide-react"
import { TypingAnimation } from "./typing-animation"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Certificate,
      title: "OSCP",
      description: "Offensive Security Certified Professional",
      year: "2024",
      category: "Certification",
    },
    {
      icon: Target,
      title: "CRTO",
      description: "Certified Red Team Operator - ZeroPoint Security",
      year: "2024",
      category: "Certification",
    },
    {
      icon: Shield,
      title: "CRTE",
      description: "Certified Red Team Expert - Altered Security",
      year: "2023",
      category: "Certification",
    },
    {
      icon: Users,
      title: "CRTP",
      description: "Certified Red Team Professional - Altered Security",
      year: "2023",
      category: "Certification",
    },
    {
      icon: Shield,
      title: "CDSA",
      description: "Certified Defense Security Analyst - HackTheBox",
      year: "2023",
      category: "Certification",
    },
    {
      icon: Bug,
      title: "CBBH",
      description: "Certified Bug Bounty Hunter - HackTheBox",
      year: "2023",
      category: "Certification",
    },
    {
      icon: Zap,
      title: "CPTS",
      description: "Certified Penetration Testing Specialist - HackTheBox",
      year: "2023",
      category: "Certification",
    },
    {
      icon: Certificate,
      title: "PNPT",
      description: "Professional Network Penetration Tester - TCM Security",
      year: "2022",
      category: "Certification",
    },
    {
      icon: Target,
      title: "eCPPTv2",
      description: "Certified Professional Penetration Tester - INE",
      year: "2022",
      category: "Certification",
    },
    {
      icon: Lock,
      title: "CEH Practical",
      description: "Certified Ethical Hacker Practical - EC-Council",
      year: "2022",
      category: "Certification",
    },
    {
      icon: Globe,
      title: "WHO Hall of Fame",
      description: "World Health Organization Security Hall of Fame",
      year: "2024",
      category: "Award",
    },
    {
      icon: Trophy,
      title: "Pro Labs Master",
      description: "Completed Zephyr, Dante, RastaLabs & Cybernetics",
      year: "2023-2024",
      category: "Achievement",
    },
    {
      icon: Star,
      title: "Red Team Excellence",
      description: "Led international penetration test projects across UAE, Oman & US",
      year: "2022-2024",
      category: "Achievement",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Certification":
        return "bg-emerald-500 text-white"
      case "Award":
        return "bg-purple-500 text-white"
      case "Achievement":
        return "bg-cyan-500 text-white"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <section id="achievements" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="mb-4 font-mono text-sm text-emerald-500">
            <TypingAnimation text="$ ls -la /achievements/" speed={80} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="text-emerald-500">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Recognition and certifications that demonstrate my commitment to cybersecurity excellence and continuous
            learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-emerald-500/20 hover:border-emerald-500/40"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <achievement.icon className="h-8 w-8 text-emerald-500 group-hover:scale-110 transition-transform" />
                  <Badge className={getCategoryColor(achievement.category)}>{achievement.category}</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-emerald-500 transition-colors">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                <div className="text-xs text-emerald-500 font-semibold font-mono">{achievement.year}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-emerald-500" />
                Continuous Learning & Development
              </h3>
              <p className="text-muted-foreground mb-4">
                Devoted to bug hunting and excelling in CTF programs. Committed to staying ahead of emerging threats
                through continuous education and hands-on practice.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-600">
                  Red Team Operations
                </Badge>
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-600">
                  Malware Analysis
                </Badge>
                <Badge variant="outline" className="border-purple-500/30 text-purple-600">
                  Cloud Penetration Testing
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-600">
                  Social Engineering
                </Badge>
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-600">
                  Mobile App Security
                </Badge>
                <Badge variant="outline" className="border-purple-500/30 text-purple-600">
                  Active Directory
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
