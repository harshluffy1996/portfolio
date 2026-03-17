import {
  FaReact,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGithub,
  FaTerminal,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiApachekafka,
  SiPrometheus,
  SiNewrelic,
  SiStorybook,
  SiMui,
} from "react-icons/si";
import { TbApi, TbNetwork, TbShield, TbActivityHeartbeat, TbMessage } from "react-icons/tb";
import { FiServer } from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  react: <FaReact size={18} />,
  typescript: <SiTypescript size={18} />,
  python: <FaPython size={18} />,
  java: <FaJava size={18} />,
  bash: <FaTerminal size={18} />,
  aws: <FaAws size={18} />,
  lambda: <FiServer size={18} />,
  docker: <FaDocker size={18} />,
  kubernetes: <SiKubernetes size={18} />,
  github: <FaGithub size={18} />,
  jenkins: <SiJenkins size={18} />,
  terraform: <SiTerraform size={18} />,
  tailwind: <SiTailwindcss size={18} />,
  graphql: <SiGraphql size={18} />,
  kafka: <SiApachekafka size={18} />,
  prometheus: <SiPrometheus size={18} />,
  newrelic: <SiNewrelic size={18} />,
  storybook: <SiStorybook size={18} />,
  mui: <SiMui size={18} />,
  api: <TbApi size={18} />,
  microservices: <TbNetwork size={18} />,
  security: <TbShield size={18} />,
  monitoring: <TbActivityHeartbeat size={18} />,
  messaging: <TbMessage size={18} />,
  database: <FaDatabase size={18} />,
};

interface SkillBadgeProps {
  name: string;
  icon: string;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2.5 py-2">
      <span className="text-text-muted">{iconMap[icon] ?? <TbApi size={18} />}</span>
      <span className="text-text-secondary text-sm">{name}</span>
    </div>
  );
}
