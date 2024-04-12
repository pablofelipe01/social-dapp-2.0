import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Link, useNavigate } from "react-router-dom";

import { useToast } from "@/components/ui/use-toast"

import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
"use client"
import { useForm } from "react-hook-form";

import { SigninValidation } from "../../lib/validation/Index";
import Loader from "@/components/shared/Loader"

import {  useSignInAccount } from "@/lib/react-query/queries";
// import { signInAccount } from "@/lib/appwrite/api";
import { useUserContext } from "@/context/AuthContext";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })
const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();


  
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      
      email: "",
      password: "",
    },
  })
  
  const { mutateAsync: signInAccount } = useSignInAccount();
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    try {    
   
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    });

    if (!session) {
      toast({ title: "Something went wrong. Please login your new account", });
      
      navigate("/sign-in");
      
      return;
    }
    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      form.reset();

      navigate("/all-users");
    } else {
      toast({ title: "Login failed. Please try again.", });
      
      return;
    }
  } catch (error) {
    console.log({ error });
  }


  }

  return (
    
    <Form {...form}>
    <div className="sm:w-420 flex-center flex-col">
      <img src="/assets/images/logo.svg" alt="logo" />
      
      {/* <a className="text-sm md:text-base pt-3 sm:pt-6 text-purple-500 border border-purple-500 inline-block px-2 sm:px-4 py-1 sm:py-2 rounded" 
          href="https://www.youtube.com/watch?v=hb6v4DIiWc8&t=76s" 
          target="_blank" 
          rel="noopener noreferrer">
            First Time Click here
      </a> */}

      <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
        Log in to your Token account
      </h2>
      <p className="text-light-3 small-medium md:base-regular mt-2">
        Welcome back! Please enter your details.
      </p>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Email</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
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
              <FormLabel className="shad-form_label">Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="shad-button_primary">
          {isUserLoading ? (
            <div className="flex-center gap-2">
              <Loader /> Loading...
            </div>
          ) : (
            "Log in"
          )}
        </Button>

        <p className="text-small-regular text-light-2 text-center mt-2">
          Don&apos;t have your Token?
          <Link
            to="/sign-up"
            className="text-primary-500 text-small-semibold ml-1">
            Sign up
          </Link>
        </p>
      </form>
    </div>
    <br />
    <div>
    <div>
  <a href="https://github.com/pablofelipe01" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2">
    <i className="fab fa-github"></i> 
  </a>
  <a href="https://twitter.com/tokensolutions" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2 ml-3">
    <i className="fa-brands fa-x-twitter"></i> 
  </a>
  
  {/* Email link with icon */}
  <a href="mailto:toksol@toksol.io" className="text-small-regular text-light-2 ml-3">
    <i className="far fa-envelope"></i> 
  </a>
  <a href="https://www.toksol.io/" className="text-small-regular text-light-2 ml-3">
    <i className="fas fa-globe"></i> 
  </a>
  {/* <a href="https://www.toksol.io/" target="_blank" rel="noopener noreferrer" className="text-small-regular text-light-2">
        <i className="fas fa-globe"></i> 
      </a> */}
</div>
      
      <div>
      {/* Developer's website link with icon */}
      
      </div>
     
    </div>
    <div style={{ width: '200px', height: 'auto' }}>
    {/* Solana logo with slogan */}
    <img src="/by.png" alt="Logo" className="mt-2" width="1200" height="1200" />
    </div>
    <div>
      {/* <p className="text-purple-500">Only possible in Solana</p> */}
      </div>
  </Form>
    
  )
}

export default SigninForm