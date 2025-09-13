import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@ssengar13",
    icon: Icons.gitHub,
    link: "https://github.com/ssengar13",
  },
  {
    name: "LinkedIn",
    username: "Sonal Sengar",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sonal-sengar-b2b32b156",
  },
  {
    name: "Twitter",
    username: "@SonalSengar13",
    icon: Icons.twitter,
    link: "https://x.com/SonalSengar13",
  },
  {
    name: "Gmail",
    username: "sonalsengar1305",
    icon: Icons.gmail,
    link: "mailto:sonalsengar1305@gmail.com",
  },
];
