import { signInSchema, signUpSchema } from "@/lib/schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useSignUpMutation } from "@/hooks/use-auth";
import { toast } from "sonner";

export type SignupFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useSignUpMutation();

  const handleOnSubmit = (values: SignupFormData) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Email Verification Required", {
          description:
            "Please check your email for a verification link. If you don't see it, please check your spam folder.",
        });

        form.reset();
        navigate("/sign-in");
      },
      onError: (error: any) => {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        console.log(error);
        toast.error(errorMessage);
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:p-0 p-4 relative">
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:p-8 p-4 relative z-10">
        <Card className="max-w-md w-full shadow-xl">
          <CardHeader className="text-center mb-5">
            <CardTitle className="text-2xl font-bold">
              Create an account
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Create an account to Access the Platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Bruno K. D"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Signing up..." : "Sign up"}
                </Button>
              </form>
            </Form>

            <CardFooter className="flex items-center justify-center mt-6">
              <div className="flex items-center justify-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account? <Link to="/sign-in">Sign in</Link>
                </p>
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
      <div className="absolute inset-0 -z-10 ">
        <img
          className="w-full h-full object-cover blur-sm"
          src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
          alt="Sign-image"
        />
      </div>
    </div>
  );
};

export default SignUp;
