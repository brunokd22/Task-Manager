import React, { useEffect, useState, type JSX } from "react";
import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import NavBar from "@/components/homePage/NavBar";
import ImageSlider from "@/components/homePage/ImageSlider";
import { ThemeProvider } from "@/provider/theme-context";
import DarkModeToggler from "@/components/homePage/DarkModeToggler";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Task Managent App" },
    { name: "description", content: "This Our Task Management App" },
  ];
}

// const renderPage = (): JSX.Element => {
//   switch (currentPage) {
//     case 'home':
//       return <HomePage />;
//     case 'about':
//       return <AboutPage />;
//     case 'services':
//       return <ServicesPage />;
//     case 'contact':
//       return <ContactPage />;
//     default:
//       return <HomePage />;
//   }
// };

const Homepage = () => {
  return (
    <>
      <NavBar />
      <section id="home-section">
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
            </div>
          </div>
        </div>
        <ImageSlider />
      </section>
    </>
  );
};

export default Homepage;
