import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/built-in/icon";
import { Link } from "@tanstack/react-router";
import React from "react";
export default function Login() {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const onSubmit = () => {};
    return (
        <div className="container relative mx-auto min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-6 w-6"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    Acme Inc
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            &ldquo;This library has saved me countless hours of work and helped me
                            deliver stunning designs to my clients faster than ever before.&rdquo;
                        </p>
                        <footer className="text-sm">Sofia Davis</footer>
                    </blockquote>
                </div>
            </div>

            <div className="xs:w-[350px] x2s:w-[350px] x3s:w-[270px] x2s:min-h-screen xs:min-h-screen xs:items-center x2s:items-center x3s:items-center mx-auto my-auto flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Hello</h1>
                    <p className="text-sm text-muted-foreground">Hello</p>
                </div>
                <div className={"grid w-full gap-6"}>
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    ref={emailRef}
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    //disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    ref={passwordRef}
                                    id="password"
                                    placeholder="********"
                                    type="password"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    //disabled={isLoading}
                                />
                            </div>
                            <Button disabled={isLoading} onClick={() => {}}>
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Hello
                            </Button>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Hello</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            variant="outline"
                            type="button"
                            className="w-[75%]"
                            onClick={() => {}}
                        >
                            Hello
                        </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link to="/home">Skip the step</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
