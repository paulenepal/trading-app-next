import HighlightText from '@/components/common/Texts/HighlightText';
import Image from 'next/image';

export default function Logo () {
  return (
    <>
      <Image
        src="logo.svg"
        alt="Logo"
        priority={false}
        width={55}
        height={55} />
      <HighlightText>
        <span className='ml-4 text-2xl'>t<span className='text-primary'>rails</span>.io</span>
      </HighlightText>
    </>
  )
}