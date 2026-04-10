
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/atiqanaeem666-cell",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/atiqa-naeem",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://x.com/AtiqaNaeem38910",
    label: "X",
    Icon: FaXTwitter,
  },
  {
    href: "mailto:atiqanaeem666@gmail.com",
    label: "Email",
    Icon: FaEnvelope,
  },
];

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © {new Date().getFullYear()} ZA Developers. Built with React.
        </p>

        <div style={styles.links}>
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              style={styles.link}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ff4d6d";
                e.currentTarget.style.color = "#ff4d6d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#374151";
                e.currentTarget.style.color = "#fff";
              }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "3rem",
    padding: "1rem 0",
    background: "#000",
    borderTop: "1px solid #111827",
    color: "#fff",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  text: {
    margin: 0,
    fontSize: "0.95rem",
  },
  links: {
    display: "flex",
    gap: "0.75rem",
  },
  link: {
    width: "2.2rem",
    height: "2.2rem",
    borderRadius: "999px",
    border: "1px solid #374151",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    background: "#111827",
    transition:
      "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease",
    textDecoration: "none",
  },
};

export default Footer;