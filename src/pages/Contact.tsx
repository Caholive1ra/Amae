import { useState, useEffect, useRef } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Instagram } from 'lucide-react';
import aboutAtelier from '@/assets/atelie-novo.jpeg';
import { useProduct } from '@/contexts/ProductContext';

const Contact = () => {
  const { toast } = useToast();
  const { selectedProduct, setSelectedProduct } = useProduct();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        message: `Gostaria de encomendar: ${selectedProduct}`
      }));
      
      // Scroll suave para o formulário
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      
      // Limpar produto selecionado após usar
      setSelectedProduct(null);
    }
  }, [selectedProduct, setSelectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Mensagem enviada!',
      description: 'Em breve retornaremos o contato.',
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="container mx-auto px-0 sm:px-4 md:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight px-2">
              Contato
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
              Entre em contato conosco para conhecer mais sobre o ateliê ou fazer uma encomenda personalizada
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Image & Info */}
          <ScrollReveal delay={50}>
            <div className="space-y-6 sm:space-y-8 md:space-y-10 w-full px-2 sm:px-0">
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-lg overflow-hidden shadow-soft-lg image-zoom">
                <img
                  src={aboutAtelier}
                  alt="Ateliê Amaé"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair text-foreground">O Ateliê</h2>
                <p className="text-muted-foreground leading-relaxed font-light text-sm sm:text-base md:text-lg">
                  Cada peça Amaé é criada com cuidado e atenção personalizada. 
                  Trabalhamos com encomendas sob medida, respeitando o tempo necessário 
                  para que cada criação seja única e especial.
                </p>

                <div className="space-y-3 sm:space-y-4 md:space-y-5 pt-2 md:pt-4">
                  <div className="text-muted-foreground min-h-[44px]">
                    <p className="font-light text-xs sm:text-sm md:text-base mb-1">Loja na Rua Mateus Grou, 306, Loja 1</p>
                    <p className="font-light text-xs sm:text-sm md:text-base">Pinheiros - São Paulo, SP</p>
                  </div>
                  <a
                    href="mailto:contato@amae.com"
                    className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 min-h-[44px]"
                  >
                    <Mail size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] flex-shrink-0" />
                    <span className="font-light text-xs sm:text-sm md:text-base">contato@amae.com</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 text-muted-foreground hover:text-accent transition-all duration-300 hover:translate-x-2 min-h-[44px]"
                  >
                    <Instagram size={18} className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] flex-shrink-0" />
                    <span className="font-light text-xs sm:text-sm md:text-base">@amae.moda</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={150}>
            <form 
              ref={formRef}
              id="contact-form"
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6 md:space-y-8 bg-card/50 px-[100px] py-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-soft w-full mx-auto"
            >
              <div className="space-y-3">
                <Label htmlFor="name" className="text-base font-lato">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome completo"
                  className="h-12 border-border/50 focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-lato">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                  className="h-12 border-border/50 focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-base font-lato">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Conte-nos sobre seu interesse nas peças Amaé..."
                  className="border-border/50 focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full shadow-soft hover-lift">
                Enviar Mensagem
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
