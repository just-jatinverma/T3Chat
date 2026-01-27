"use client";
import { Button } from "@/components/ui/button";
import { signUp, signIn } from "@/lib/auth-client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success("Account created successfully!");
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || "Failed to create account.");
          setLoading(false);
        },
      },
    );
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background  px-4 py-16 md:py-32 ">
      <div className="flex flex-row justify-center items-center gap-x-2">
        <h1 className="text-3xl font-extrabold text-foreground ">Welcome to</h1>
        <Image src="/logo.svg" alt="logo" width={142} height={142} />
      </div>
      <p className="mt-2 text-lg text-muted-foreground font-semibold">
        Create an account below (we'll increase your message limits if you do
        😉)
      </p>

      <div className="w-full max-w-sm mt-8 space-y-4">
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
          </div>
          <Button type="submit" className="w-full font-bold" disabled={loading}>
            {loading ? "Creating account..." : "Sign up with Email"}
          </Button>
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          variant={"outline"}
          type="button"
          className={
            "w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
          }
          onClick={() =>
            signIn.social({
              provider: "github",
              callbackURL: "/",
            })
          }
          disabled={loading}
        >
          <Image src={"/github.svg"} alt={"github"} width={24} height={24} />
          <span className="font-bold ml-2">Sign in with Github</span>
        </Button>

        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-primary hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
