import { cn } from "@/utils/helpers/tw-util"

const HighlightText = ({ children }: { children: React.ReactNode}) => {
  return (
    <span className={cn(`text-neutral-content hover:text-info transition-colors font-bold`)}>{children}</span>
  );
}

export default HighlightText;