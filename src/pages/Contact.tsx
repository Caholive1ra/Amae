import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Instagram } from 'lucide-react';
import aboutAtelier from '@/assets/about-atelier.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Mensagem enviada!',
      description: 'Em breve retornaremos o contato.',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco para conhecer mais sobre o ateliê ou fazer uma encomenda personalizada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Image & Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={aboutAtelier}
                alt="Ateliê Amaé"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-light text-foreground">O Ateliê</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada peça Amaé é criada com cuidado e atenção personalizada. 
                Trabalhamos com encomendas sob medida, respeitando o tempo necessário 
                para que cada criação seja única e especial.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:contato@amae.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={20} />
                  <span>contato@amae.com</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram size={20} />
                  <span>@amae.moda</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Conte-nos sobre seu interesse nas peças Amaé..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
