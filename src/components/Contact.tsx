import type { IconType } from "react-icons";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const methods: {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}[] = [
  {
    icon: FiMail,
    title: "Email",
    value: "Islam_Abdelrahman@outlook.com",
    href: "mailto:Islam_Abdelrahman@outlook.com",
  },
  {
    icon: FiLinkedin,
    title: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/islam-abdelrahman-dev/",
  },
  {
    icon: FiPhone,
    title: "Phone",
    value: "+971 55 141 7445",
    href: "tel:+971551417445",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/971551417445",
  },
];
export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container">
        <div className="content-width">
          <h2 className="text-3xl font-bold mb-5">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            Looking for a full-stack or mobile engineer? I’m open to
            conversations about roles and projects. Reach me directly by email,
            LinkedIn, phone, or WhatsApp.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {methods.map(({ icon: Icon, ...method }) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("https:") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("https:")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-start gap-4 p-5 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                <span className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-100 rounded-lg shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold mb-1">
                    {method.title}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 break-words">
                    {method.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
