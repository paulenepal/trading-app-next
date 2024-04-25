'use client';

import ContentLayoutProvider from '@/components/common/ContentLayoutProvider';
import HighlightText from '@/components/common/Texts/HighlightText';
import Icon from '@/components/common/icon';
import Link from 'next/link';

import { MAIN_ROUTES } from '@/utils/constants/routes';

export default function LandingHero() {
  return (
    <div className="bg-base-100 h-full bg-gradient-to-br from-transparent via-transparent to-primary text-primary-content">
      <ContentLayoutProvider>
        <div className="flex flex-col gap-4 items-start justify-center h-full w-2/3">
          <h1 className="text-6xl font-bold w-2/3 leading-tight">
            Your Gateway to Smarter Trading
          </h1>
          <p className="font-normal text-pretty w-2/3">
            <HighlightText>Welcome to the future of stock trading!</HighlightText> <br />
            Navigate the highs and lows with confidence. Our platform is designed to help you make informed decisions and trade with ease.
          </p>
          <div className="flex flex-row gap-4">
            <Link 
              href={MAIN_ROUTES.ONBOARDING}
              className="btn btn-wide font-normal btn-primary ">
              Get Started{' '}
              <Icon
                iconName="arrow-right-s-line"
                className="text-primary-content text-xl"
              />
            </Link>
            <button className="btn btn-outline btn-info text-info font-normal">
              Explore
              <Icon
                iconName="global-line"
                className="text-lg"
              />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-start justify-center w-1/3 h-full'>
          HELLO
        </div>
      </ContentLayoutProvider>
    </div>
  );
}
