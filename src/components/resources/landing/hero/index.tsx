'use client';

import ContentLayoutProvider from '@/components/providers/ContentLayoutProvider';
import HighlightText from '@/components/common/Texts/HighlightText';
import Footer from '@/components/common/Footer';
import Logo from '@/components/common/Logo';
import Icon from '@/components/common/icon';
import Link from 'next/link';
import Image from 'next/image';

import { MAIN_ROUTES } from '@/utils/constants/routes';

export default function LandingHero() {
  return (
    <div className="bg-base-100 h-full from-transparent via-transparent to-primary text-primary-content">
      <ContentLayoutProvider>
        <div className="flex flex-col items-start justify-center h-full w-full">

          <div className="flex flex-col gap-4 items-start justify-start h-3/6 w-1/2">
            <div className=" flex flex-row w-full mt-14">
              <Logo />
            </div>
            <h1 className="flex flex-col justify-end text-2xl md:text-3xl lg:text-3xl xl:text-7xl font-bold w-full h-full leading-tight">
              Your Gateway
              <p>to <HighlightText>Smarter Trading</HighlightText></p>
            </h1>
          </div>

          <div className="flex flex-col gap-4 items-start justify-end h-2/6 w-full mt-9">
            <div className="flex flex-row items-center justify-center h-full w-full bg-primary rounded-3xl text-neutral shadow-xl">
              
              <div className='ml-12 w-1/2'>
                <p className="font-light text-pretty w-5/6 mb-7 text-lg">
                  <span className='font-bold'><HighlightText>Welcome to the future of stock trading!</HighlightText> <br /></span>
                  Navigate the highs and lows with confidence. Our platform is designed to help you make informed decisions and trade with ease.
                </p>
                <div className="flex flex-row gap-4">
                  <Link 
                    href={MAIN_ROUTES.ONBOARDING}
                    className="btn btn-wide font-normal btn-info">
                    Get Started{' '}
                    <Icon
                      iconName="arrow-right-s-line"
                      className="text-info-content text-xl"
                    />
                  </Link>
                  <button className="btn btn-outline btn-neutral text-neutral font-normal">
                    Explore
                    <Icon
                      iconName="global-line"
                      className="text-lg"
                    />
                  </button>
                </div>
              </div>

              <div className='flex flex-row self-end w-1/2'>
                <div className="max-w-full h-auto">
                  <Image
                    src="landing.svg"
                    alt="Landing Hero"
                    priority={false}
                    width={650}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-start justify-end h-1/6 w-full">
            <Footer />
          </div>

        </div>

      </ContentLayoutProvider>
    </div>
  );
}
