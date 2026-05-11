
'use client'
import UserUpdate from '@/components/UserUpdate';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const profilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user);
    return (
    <section className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">

        {/* Card */}
        <div className="bg-white rounded-3xl border border-amber-100 overflow-hidden">

          {/* Banner */}
          <div className="h-24 bg-slate-200 relative">
            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2">
              <Avatar className='w-20 h-20'>
                              <Avatar.Image alt={user?.name} src={user?.Image} />
                              <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                            </Avatar>
            </div>
          </div>

          {/* Body */}
          <div className="pt-12 pb-8 px-6 text-center">

            {/* Name & Badge */}
            <h2 className="text-lg font-semibold text-stone-800">{user?.name}</h2>
            <h2 className="text-x  text-stone-800">{user?.email}</h2>
    
            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <UserUpdate></UserUpdate>
             
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};


export default profilePage;