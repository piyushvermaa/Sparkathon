"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGoogle
} from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";
import { Input } from "../../../components/input";
import { Label } from "../../../components/label";
export function SignupFormDemo() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const Formdata = new FormData(e.currentTarget);
    const data: { [key: string]: any } = {
      email: Formdata.get("email"),
      password: Formdata.get("password"),
      confirmPassword: Formdata.get("confirmPassword"),
    };

    if (!loginToSignin) {
      data.firstname = Formdata.get("firstname");
      data.lastname = Formdata.get("lastname");
    }
    
    try {
      const endpoint = loginToSignin ? "/auth/login" : "/auth/register";
      const response = await axios.post(endpoint, data);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Form submitted");
  };
  const [loginToSignin, setLoginToSignin] = useState(false);
  return (
    <div className="max-w-md w-full mx-auto mt-6 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-black">
      <form className="my-8" onSubmit={handleSubmit}>
        {!loginToSignin && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="confirmPassword"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-blue-500 to-blue-500 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loginToSignin ? "LogIn" : "Sign up"} &rarr;
          <BottomGradient />
        </button>
        <div className="mt-1 mx-2">
          <p>
            {loginToSignin ? "New to us? " : "Already a member? "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setLoginToSignin(!loginToSignin)}
            >
              {loginToSignin ? "SignIN" : "LogIn"}
            </button>
          </p>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-row space-x-4">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Apple
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Facebook
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
