import { portfolioData } from "@/lib/data";

const Footer = () => {
  const { socialLinks } = portfolioData.footer;
  const { personalInfo } = portfolioData.about;
  const whatsappUrl = portfolioData.contact?.whatsappUrl;

  return (
    <footer className="bg-primary py-12 mt-20 border-t border-white-100/10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a
            href={whatsappUrl && whatsappUrl !== "#" ? whatsappUrl : `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:text-white transition-colors text-3xl"
          >
            <i className="bx bxl-whatsapp" />
          </a>

          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors text-3xl"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-secondary text-[16px] text-center mt-2">
          &copy; {new Date().getFullYear()} Biraj Regmi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
