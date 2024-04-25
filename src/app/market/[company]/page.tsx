'use client'

import Icon from "@/components/common/icon"

export default function Page({ params }: { params: {company: string}}) {
  return (
    <div>
      <h1>This Page is {params.company}</h1>
    </div>
  );
}