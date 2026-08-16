import { certificatesData } from "../data/certificates";

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Certificates</h2>

      <div>
        {certificatesData.map((certificate) => (
          <div key={certificate.id}>
            <h3>{certificate.name}</h3>
            <p>{certificate.organization}</p>
            <p>{certificate.date}</p>

            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>

            <p>Credential ID: {certificate.credentialId}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;