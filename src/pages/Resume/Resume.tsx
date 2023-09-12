import { ResumeButton } from "./ResumeStyles";

export const Resume = () => {
  return (
    <ResumeButton
      variant="contained"
      color="primary"
      component="a"
      href="/brijesh_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </ResumeButton>
  );
};
