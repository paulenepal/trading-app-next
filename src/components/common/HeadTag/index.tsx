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

  const onButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(false);
  }
  return (
    <div className={visible ? `visible` : `hidden`}>
      <div className={cn(`flex flex-row justify-center items-center py-2 gap-2 &>*:h-full ${containerStyle}`)}>
        { icon ? <i className={cn(`font-bold ri-${icon}`)}></i> : null}
        { title ? <h1 className="font-bold">{title}</h1> : null }
        { description ? <h2>{description}</h2> : null}
      </div>
      <button className="absolute top-1 left-1 text-info-content btn btn-circle btn-sm btn-ghost" onClick={onButtonClick}>X</button>
    </div>
  );
}

export default HeadTag;