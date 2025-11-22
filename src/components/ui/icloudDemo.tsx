import {IconCloud} from "../../registry/magicui/icon-cloud";

const slugs = [
  "typescript","javascript","dart","java","react",
  "flutter","android","html5","css3","nodedotjs",
  "express","nextdotjs","prisma","amazonaws","postgresql",
  "firebase","nginx","vercel","testinglibrary","jest",
  "cypress","docker","git","jira","github","gitlab",
  "visualstudiocode","androidstudio","sonarqube","figma"
];

export function IconCloudDemo() {
  const images = slugs.map((s) => `https://cdn.simpleicons.org/${s}/${s}`);
  return (
    <div className="w-full flex items-center justify-center lg:justify-end xl:justify-center  ">
      <IconCloud images={images} />
    </div>
  );
}

export default IconCloudDemo;
