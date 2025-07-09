import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Video, 
  Award, 
  Users, 
  Clock, 
  CheckCircle,
  TrendingUp,
  Shield
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Vidéos HD Premium",
      description: "Plus de 200h de contenu vidéo en haute définition avec experts reconnus",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Parcours Personnalisés",
      description: "Formations adaptées à votre niveau : débutant, intermédiaire ou expert",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Obtenez des certificats reconnus pour valoriser vos compétences",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Échangez avec 15,000+ apprenants et experts du secteur immobilier",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Accès 24/7",
      description: "Apprenez à votre rythme, où et quand vous voulez",
      color: "text-red-600"
    },
    {
      icon: CheckCircle,
      title: "Quiz Interactifs",
      description: "Testez vos connaissances avec des exercices pratiques",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Suivi de Progression",
      description: "Visualisez votre avancement et vos résultats en temps réel",
      color: "text-cyan-600"
    },
    {
      icon: Shield,
      title: "Garantie Satisfait",
      description: "30 jours pour tester, satisfait ou remboursé",
      color: "text-orange-600"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Une plateforme complète pour votre réussite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez tous les outils et ressources nécessaires pour développer 
            vos compétences en immobilier et faire décoller votre carrière.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features