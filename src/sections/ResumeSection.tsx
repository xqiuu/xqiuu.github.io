import resumePdf from "../assets/CatherineZhaoResume.pdf";

export function ResumeSection() {
  return (
    <section className="resume" id="resume">
      <p>
        take a look at my resume below, or{" "}
        <a href={resumePdf} target="_blank" rel="noreferrer">
          download the PDF
        </a>
        .
      </p>
      <div className="resume-embed">
        <iframe
          src={resumePdf}
          title="Catherine Zhao's Resume"
          width="100%"
          height="800"
        />
      </div>
    </section>
  );
}
