import { Button } from "@/components/ui/button"
import { BookOpen, User, LogIn } from "lucide-react"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-primary">ImmobiLearn</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#formations" className="text-foreground hover:text-primary transition-colors">
            Formations
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Tarifs
          </a>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Connexion
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="premium" size="sm">
              <User className="mr-2 h-4 w-4" />
              S'inscrire
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation