import resumePdf from "../assets/CatherineZhaoResume.pdf";

export function ResumeSection() {
  return (
    <section className="resume" id="resume">
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
