"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [errorMgs, setErrorMgs] = useState("");
  const router = useRouter();
  
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log({name, email, password, image})
    //RKeQVZ2YIUvctshG

    const { data, error } = await authClient.signIn.email({
      password,
      email,
      callbackURL: "/",
    });

    if (error) {
      //alert("login not successful")
      setErrorMgs("Login not successful");
    }

    //console.log({ data, error });
  };

  return (
    <Card className=" mx-auto w-full py-5 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-80 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" variant="outline">
            Log In
          </Button>
          <Button variant="outline" href="/signup">
            Register
          </Button>
        </div>
        <p className="text-xl text-center mb-2">Or,</p>
        <Button
          onClick={handleSignIn}
          type="button"
          variant="outline"
          className={"w-full"}
        >
          Sign In with Google
        </Button>
      </Form>
    </Card>
  );
}
