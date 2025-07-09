import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

const Pricing = () => {
  const plans = [
    {
      name: "Débutant",
      price: "59",
      originalPrice: "79",
      period: "mois",
      description: "Parfait pour débuter en immobilier",
      icon: Star,
      popular: false,
      features: [
        "Accès aux formations débutant",
        "5 heures de contenu vidéo/mois",
        "Quiz et exercices",
        "Support email",
        "Certificat de base",
        "Accès mobile"
      ],
      limitations: [
        "Formations intermédiaires",
        "Formations expert",
        "Coaching individuel",
        "Webinaires exclusifs"
      ]
    },
    {
      name: "Professionnel",
      price: "99",
      originalPrice: "129",
      period: "mois",
      description: "Pour les investisseurs sérieux",
      icon: Zap,
      popular: true,
      features: [
        "Toutes les formations débutant & intermédiaire",
        "20 heures de contenu vidéo/mois",
        "Outils de calcul avancés",
        "Support prioritaire",
        "Certificats reconnus",
        "Accès communauté premium",
        "Webinaires mensuels",
        "Templates de contrats"
      ],
      limitations: [
        "Formations expert",
        "Coaching individuel"
      ]
    },
    {
      name: "Expert",
      price: "149",
      originalPrice: "199",
      period: "mois",
      description: "Solution complète pour les pros",
      icon: Crown,
      popular: false,
      features: [
        "Accès illimité à toutes les formations",
        "Contenu vidéo illimité",
        "Tous les outils et calculateurs",
        "Support 24/7",
        "Certificats experts",
        "Coaching individuel (2h/mois)",
        "Webinaires exclusifs",
        "Réseau d'experts",
        "Analyses de marché premium",
        "Accompagnement personnalisé"
      ],
      limitations: []
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Nos Tarifs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choisissez le plan qui vous convient
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Commencez votre parcours immobilier avec nos formules flexibles. 
            Annulation possible à tout moment.
          </p>
          
          {/* Promotion Banner */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-light text-accent mb-8">
            <Star className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">
              🎉 Offre de lancement : -25% sur tous les plans !
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary shadow-elegant scale-105' 
                  : 'border-border/50 hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-accent text-white px-4 py-1">
                    Le plus populaire
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  plan.popular ? 'bg-gradient-primary' : 'bg-primary-light'
                }`}>
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-primary'}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      {plan.price}€
                    </span>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground line-through">
                        {plan.originalPrice}€
                      </div>
                      <div className="text-sm text-muted-foreground">
                        /{plan.period}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Économisez {parseInt(plan.originalPrice) - parseInt(plan.price)}€/mois
                  </div>
                </div>

                <Button 
                  variant={plan.popular ? "premium" : "default"} 
                  size="lg" 
                  className="w-full mb-6"
                >
                  {plan.popular ? "Commencer maintenant" : "Choisir ce plan"}
                </Button>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      Non inclus :
                    </p>
                    <div className="space-y-2">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start">
                          <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                            <div className="w-3 h-3 border border-muted-foreground/50 rounded" />
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Garantees */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Garantie 30 jours</h4>
              <p className="text-sm text-muted-foreground">
                Satisfait ou remboursé sans condition
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Activation immédiate</h4>
              <p className="text-sm text-muted-foreground">
                Accès instantané après paiement
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Crown className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Sans engagement</h4>
              <p className="text-sm text-muted-foreground">
                Résiliez à tout moment en 1 clic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing