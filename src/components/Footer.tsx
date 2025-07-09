import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">ImmobiLearn</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              La plateforme de référence pour votre formation en immobilier. 
              Du débutant à l'expert, développez vos compétences avec nos formations premium.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Formations</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Fondamentaux de l'immobilier
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Stratégies d'investissement
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Analyse financière
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Négociation & Juridique
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Immobilier commercial
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Gestion patrimoniale
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Nous contacter
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Communauté
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Webinaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">contact@immobilearn.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Recevez nos dernières actualités et offres
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="premium" size="sm">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 ImmobiLearn. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                CGU
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer