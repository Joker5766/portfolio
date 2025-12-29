import AndroidShowcase from "./AndroidShowcase";

const ProjectGallery = ({ media }) => {
  if (!media) return null;

  if (media.type === "android") {
    return <AndroidShowcase media={media} />;
  }

  return null;
};

export default ProjectGallery;
