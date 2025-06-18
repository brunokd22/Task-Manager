import React from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

import BgImage from "../../images/hero.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Task Managent App" },
    { name: "description", content: "This Our Task Management App" },
  ];
}

const Homepage = () => {
  return (
    <section id="home-section" className="bg-green-50">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center">
          <div className="col-span-6 flex flex-col gap-8 ">
            <div className="flex gap-2 mx-auto lg:mx-0">
              <p className="text-success text-sm font-semibold text-center lg:text-start">
                Please Trust Us
              </p>
            </div>
            <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold pt-5 lg:pt-0">
              Manage your tasks easily.
            </h1>
            <h3 className="text-black/70 text-lg pt-5 lg:pt-0">
              We are a platform that helps you to manage your tasks.
            </h3>
            <div className="relative rounded-full pt-5 lg:pt-0"></div>
            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <div className="w-full h-screen flex items-center justify-center gap-4">
                <Link to="/sign-in">
                  <Button className="bg-red-700 text-white">Login</Button>
                </Link>
                <Link to="/sign-up">
                  <Button variant="outline" className="bg-green-500 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-no-repeat style={{ backgroundImage: `url(${bgImage})` }} bg-cover col-span-6 flex justify-center">
            <img
              src="https://www.freepik.com/free-photo/african-american-man-sitting-desk-surrounded-with-gadgets-papers_13556701.htm#fromView=search&page=1&position=1&uuid=cf3dd910-f529-4803-b391-c58cf9f12508&query=task+management"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
