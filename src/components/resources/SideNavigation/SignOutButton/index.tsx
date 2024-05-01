import React from 'react'

import Icon from '@/components/common/icon';
import { HandleSignOut } from '@/utils/helpers/services';

export default function SignOutButton() {
  return (
    <button onClick={HandleSignOut} className='btn btn-primary btn-outline nav-button justify-start group'>
      <div className='rounded-full text-xl px-1.5 py-1.5 group-hover:scale-110 transition-all ease-in-out'>
        <Icon iconName='logout-circle-fill' className="text-primary-content" />
      </div>
    </button>
  )
}
