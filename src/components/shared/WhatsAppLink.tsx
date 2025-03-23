
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+541158046137"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, me gustaría obtener más información!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <FaWhatsapp size={30} />

    </a>
    
  );
};

export default WhatsAppButton;
