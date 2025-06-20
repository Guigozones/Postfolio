const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 text-center md:flex-row md:justify-between md:text-left">
          
          {}
          <div className="max-w-xs">
            {}
            <h2 className="text-2xl font-bold text-white">Postfolio</h2>
            <p className="mt-4 text-sm">
              Um jeito divertido de melhorar seu portfólio.
            </p>
          </div>

          {}
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
            
            {}
            <div>
              <p className="font-bold text-white">Home</p>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-white transition">O que é a competição</a></li>
                <li><a href="#" className="hover:text-white transition"> Critérios para avaliação</a></li>
                <li><a href="#" className="hover:text-white transition">Conheça os participantes</a></li>
                
              </ul>
            </div>

          

            {}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-bold text-white">Contato</p>
              <ul className="mt-4 space-y-2">
                <li><a href="mailto:contato@guipabrasil.com" className="hover:text-white transition">emaildoCassios</a></li>
                <li><span className="font-semibold">Ligação ou mensagem:</span></li>
                <li><a href="tel:+5511933202402" className="hover:text-white transition">+55 99 988051558</a></li>
              </ul>
            </div>
          </div>
        </div>

        {}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Postfolio. Todos os Direitos Reservados.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;