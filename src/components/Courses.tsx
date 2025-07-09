import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Users, 
  Star, 
  Play,
  Home,
  TrendingUp,
  Calculator,
  FileText,
  Building,
  Gavel
} from "lucide-react"

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Fondamentaux de l'Immobilier",
      level: "Débutant",
      duration: "12h",
      students: "2,450",
      rating: 4.9,
      price: "59€/mois",
      description: "Découvrez les bases essentielles de l'investissement immobilier",
      icon: Home,
      topics: ["Vocabulaire immobilier", "Types de biens", "Marché local", "Première acquisition"],
      color: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "Stratégies d'Investissement",
      level: "Intermédiaire",
      duration: "25h",
      students: "1,890",
      rating: 4.8,
      price: "79€/mois",
      description: "Maîtrisez les différentes stratégies d'investissement immobilier",
      icon: TrendingUp,
      topics: ["Location classique", "Location saisonnière", "Colocation", "Défiscalisation"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: 3,
      title: "Analyse Financière Avancée",
      level: "Intermédiaire",
      duration: "18h",
      students: "1,245",
      rating: 4.9,
      price: "79€/mois",
      description: "Analysez la rentabilité et les risques de vos investissements",
      icon: Calculator,
      topics: ["Calcul de rentabilité", "Cashflow", "Plus-values", "Optimisation fiscale"],
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: 4,
      title: "Négociation & Juridique",
      level: "Expert",
      duration: "20h",
      students: "856",
      rating: 4.7,
      price: "99€/mois",
      description: "Négociez comme un pro et maîtrisez les aspects juridiques",
      icon: Gavel,
      topics: ["Techniques de négociation", "Contrats", "Diagnostics", "Recours"],
      color: "bg-red-100 text-red-700"
    },
    {
      id: 5,
      title: "Immobilier Commercial",
      level: "Expert",
      duration: "30h",
      students: "623",
      rating: 4.8,
      price: "99€/mois",
      description: "Investissez dans l'immobilier commercial et d'entreprise",
      icon: Building,
      topics: ["Bureaux", "Commerces", "Entrepôts", "Analyse de marché"],
      color: "bg-orange-100 text-orange-700"
    },
    {
      id: 6,
      title: "Gestion Patrimoniale",
      level: "Expert",
      duration: "22h",
      students: "445",
      rating: 4.9,
      price: "99€/mois",
      description: "Optimisez votre patrimoine immobilier sur le long terme",
      icon: FileText,
      topics: ["Transmission", "SCI", "SCPI", "Diversification"],
      color: "bg-indigo-100 text-indigo-700"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Débutant": return "bg-green-100 text-green-700"
      case "Intermédiaire": return "bg-blue-100 text-blue-700"
      case "Expert": return "bg-purple-100 text-purple-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos Formations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choisissez votre parcours de formation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Du débutant à l'expert, nos formations couvrent tous les aspects 
            de l'immobilier pour faire de vous un professionnel accompli.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${course.color.split(' ')[0]} flex items-center justify-center`}>
                    <course.icon className={`h-6 w-6 ${course.color.split(' ')[1]} ${course.color.split(' ')[2]}`} />
                  </div>
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3">Ce que vous apprendrez :</h4>
                  <div className="space-y-2">
                    {course.topics.slice(0, 3).map((topic, index) => (
                      <div key={index} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                    {course.topics.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        + {course.topics.length - 3} autres sujets
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <div className="text-xs text-muted-foreground">Accès illimité</div>
                  </div>
                  <Button variant="premium" size="sm" className="group-hover:scale-105 transition-transform">
                    <Play className="mr-2 h-4 w-4" />
                    Commencer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Besoin d'aide pour choisir ? Notre équipe vous conseille gratuitement.
          </p>
          <Button variant="outline" size="lg">
            Parler à un conseiller
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Courses