'use client';

import Link from 'next/link';
import React from 'react';

import useSignOut from '@/hooks/useSignOut';
import { useHomeContext } from '@/providers/HomeProvider';

import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

export default function Header() {
  const { isAuthenticated, refetchSession } = useHomeContext();
  const { signOut } = useSignOut();
  return (
    <Card className="fixed left-0 right-0 top-0 flex flex-row justify-center bg-white p-4 shadow-md">
      <CardContent className="flex w-full max-w-6xl items-center">
        <Link href="/" className="text-black-500 font-bold">
          AroundU
        </Link>
        <Card className="ml-auto flex flex-row gap-1">
          {!isAuthenticated && (
            <>
              <SignUpButton refetchSession={refetchSession} />
              <SignInButton refetchSession={refetchSession} />
            </>
          )}
          {isAuthenticated && (
            <Button
              className="bg-blue-500 hover:bg-blue-400"
              onClick={() => {
                signOut().then(() => refetchSession());
              }}
            >
              Sign Out
            </Button>
          )}
        </Card>
      </CardContent>
    </Card>
  );
}
