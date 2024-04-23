import { cn } from "@/utils/helpers/tw-util"

type IconProps = {
  iconName?: string;
  className?: string;
};

const Icon = ({ iconName, className }: IconProps) => {
  return (
    <>
      <i className={cn(`ri-${iconName}`,className)}></i>
    </>
  );
};

export default Icon;
