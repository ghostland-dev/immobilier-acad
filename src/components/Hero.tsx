import { Button } from "@/components/ui/button"
import { Play, Star, Users, BookOpen } from "lucide-react"
import heroImage from "@/assets/hero-real-estate.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-light mb-8 animate-fade-in">
            <Star className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Plateforme #1 en France</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Maîtrisez l'
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Immobilier
            </span>
            <br />
            de A à Z
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Formations premium pour particuliers et professionnels. 
            Du débutant à l'expert, développez vos compétences immobilières 
            avec nos formations certifiantes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button variant="premium" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Commencer maintenant
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <BookOpen className="mr-2 h-5 w-5" />
              Découvrir les formations
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15,000+</div>
              <div className="text-white/80">Apprenants actifs</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-white/80">Heures de contenu</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-white/80">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero