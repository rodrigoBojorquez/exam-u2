import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-600 text-black">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">Ayuda</h2>
            <ul>
              <p >
                <p href="tel:99823684" className="text-black hover:underline">998-236-84</p>
              </p>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Correo</h2>
            <ul >
              <p >
                <p href="ejemplo@gmail.com" className="text-black hover:underline">Cuidatusplantas@gmail.com</p>
              </p>
            </ul>       
          </div>  
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Redes Sociales</h2>
            <ul className="mt-2 list-disc pl-4">
           <p className="mb-2">
           <a href="https://facebook.com/tupagina" className="text-black hover:underline">Facebook</a>
         </p>
          <p className="mb-2">
          <a href="https://twitter.com/tupagina" className="text-black hover:underline">Twitter</a>
        </p>
        </ul>
    </div>
   
        </div>
        <hr className="my-4 border-t border-black" />
      </div>
      
    </footer>
  );
}

export default Footer;
