'use client'

import { cn } from "@/utils/helpers/tw-util"
import { useState } from "react";

type HeadTagProps = {
  title?: string;
  icon?: string;
  description?: string;
  containerStyle?: string;
};

const HeadTag = ({ 
  title, 
  icon, 
  description, 
  containerStyle 
}: HeadTagProps) => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(true);

  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // delay the visibility to show the fade-out animation
    setFade(false);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  }
  return (
    visible ? (
      <div className={cn(fade ? `fade-in` : `fade-out`,`absolute w-full`)}>
        <div className={cn(`flex flex-row justify-center items-center py-2 gap-2 &>*:h-full ${containerStyle}`)}>
          { icon ? <i className={cn(`font-bold ri-${icon}`)}></i> : null}
          { title ? <h1 className="font-bold">{title}</h1> : null }
          { description ? <h2>{description}</h2> : null}
        </div>
        <button className="absolute top-1 left-1 text-info-content btn btn-circle btn-sm btn-ghost" onClick={onButtonClick}>X</button>
      </div>
    ) : null
  );
}

export default HeadTag;