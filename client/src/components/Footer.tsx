import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">ED</span>
              </div>
              <h3 className="font-bold text-lg">MoveEDuo</h3>
            </div>
            <p className="text-sm text-gray-400">
              Mobilidade estudantil entre Portugal e Espanha.
            </p>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">INFORMAÇÕES</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Número do escritório
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Número de celular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  E-mail
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Other Information */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">OUTRAS INFORMAÇÕES</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-orange-500 transition-colors">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-500 transition-colors">
                  O que fazemos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-500 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-500 transition-colors">
                  Contacte-nos
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">Social</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Telefone</p>
                <p className="text-white font-semibold">+351 XXX XXX XXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">info@moveedu.pt</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Localização</p>
                <p className="text-white font-semibold">Portugal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div>
            <p>© {currentYear} MoveEDuo. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Direitos autorais
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Cookies
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Aviso legal
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
