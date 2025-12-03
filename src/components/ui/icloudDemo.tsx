import {IconCloud} from "../../registry/magicui/icon-cloud";
 const skills = [
  "html5",
  "css3",
  "javascript",
  "react",
  "nextdotjs",
  "redux",
  "tailwindcss",
  "reactrouter",
  "axios",
  "formik",
  "yup",
  "reacthookform",
  "zod",
  "reactquery",
  "swiper",
  "framer",
  "jquery",
  "chakraui",
  "mui",
  "json",
  "git",
  "github",

  "visualstudiocode",
  "vercel",
  "netlify",
  "npm",
  "nvm",
  "strapi",
  "cplusplus"
];





export function IconCloudDemo() {
  const images = skills.map((s) => `https://cdn.simpleicons.org/${s}/${s}`);
  return (
    <div className="w-full flex items-center justify-center lg:justify-end xl:justify-center  ">
      <IconCloud images={images} />
    </div>
  );
}

export default IconCloudDemo;
