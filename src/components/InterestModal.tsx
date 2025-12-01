import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  pieceName: string;
}

const InterestModal = ({ isOpen, onClose, pieceName }: InterestModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Interesse registrado!',
      description: 'Em breve entraremos em contato.',
    });
    
    setFormData({ name: '', email: '', message: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-playfair">Registrar Interesse</DialogTitle>
          <DialogDescription className="font-light text-lg">
            Preencha o formulário e entraremos em contato sobre {pieceName}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="font-lato">Nome</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-border/50 focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="font-lato">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-border/50 focus:border-accent transition-colors"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="message" className="font-lato">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="border-border/50 focus:border-accent transition-colors resize-none"
            />
          </div>
          <Button type="submit" className="w-full shadow-soft hover-lift">
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestModal;
