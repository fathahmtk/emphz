
"use client";

import { useUser, loginWithGoogle } from "@/firebase";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/inquiries');
    }
  }, [user, router]);

  const handleLogin = () => {
    loginWithGoogle().catch(console.error);
  };

  if (loading || user) {
    return (
        <div className="container flex items-center justify-center py-24">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="container flex items-center justify-center py-24">
      <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Partner Login</CardTitle>
            <CardDescription>Sign in with Google to access partner resources.</CardDescription>
          </CardHeader>
          <CardContent>
             <Button onClick={handleLogin} className="w-full">
                Sign in with Google
             </Button>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">Access is restricted to authorized partners. Contact us to request access.</p>
          </CardFooter>
      </Card>
    </div>
  );
}
