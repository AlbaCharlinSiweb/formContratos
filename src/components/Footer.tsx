import React from 'react';

const Footer = () => {
  const domain = window.location.hostname;
  const isSiwebCanarias = domain.includes('siwebcanarias');
  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              {isSiwebCanarias ? 'Siweb Canarias' : 'Siweb' }
            </h2>
          </div>
        
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Contacta con nosotros</a></li>
              <li>
                <a
                    href={`tel:${isSiwebCanarias ? '828670848' : '886020705' }`}
                    className="text-gray-300 hover:text-white"
                >
                  Llámanos al {isSiwebCanarias ? '828 670 848' : '886 02 07 05'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;