"use client"
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

const Dashboard = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn(); // Redirects to sign-in page if not authenticated
    }
  }, [status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <h1>Welcome to your dashboard, {session.user.email}</h1>
      </div>
    );
  }

  return null; // Optionally handle cases like "unauthenticated" here
};

export default Dashboard;
