"use client";
import React from "react";
import { StartupsInfiniteMovingCards } from "../ui/startups-infinite-moving-cards";

import bonsai from "@/assets/logos/bonsai logo icon.png";
import bookit from "@/assets/logos/bookit.png";
import cartello from "@/assets/logos/cartello logo name.png";
import clearly from "@/assets/logos/clearly logo color.png";
import diba from "@/assets/logos/diBa logo white.png";
import disko from "@/assets/logos/disko logo.png";
import idefy from "@/assets/logos/idefy logo color.png";
import lendopoly from "@/assets/logos/lendopoly logo with name.png";
import lighthouse from "@/assets/logos/lighthouse logo yellow.png";
import puerta from "@/assets/logos/puerta abierta logo.png";
import recreate from "@/assets/logos/recreate energy logo .png";
import redfordstartup from "@/assets/logos/redford startup logo.png";
import soundsense from "@/assets/logos/soundsense logo color.png";
import student from "@/assets/logos/student inc logo.png";
import surplus from "@/assets/logos/surplus logo.png";
import thrust from "@/assets/logos/thrust aeronautics logo color.png";
import vango from "@/assets/logos/vango.png";
import wastewise from "@/assets/logos/wastewise logo.png";

export default function ScrollStartups() {
  const images = [
    { image: bonsai.src, name: "bonsai", title: "bonsai" },
    { image: bookit.src, name: "bookit", title: "bookit" },
    { image: cartello.src, name: "cartello", title: "cartello" },
    { image: clearly.src, name: "clearly", title: "clearly" },
    { image: diba.src, name: "diba", title: "diba" },
    { image: disko.src, name: "disko", title: "disko" },
    { image: idefy.src, name: "idefy", title: "idefy" },
    { image: lendopoly.src, name: "lendopoly", title: "lendopoly" },
    { image: lighthouse.src, name: "lighthouse", title: "lighthouse" },
    { image: puerta.src, name: "puerta", title: "puerta" },
    { image: recreate.src, name: "recreate", title: "recreate" },
    { image: redfordstartup.src, name: "redfordstartup", title: "redfordstartup" },
    { image: soundsense.src, name: "soundsense", title: "soundsense" },
    { image: student.src, name: "student", title: "student" },
    { image: surplus.src, name: "surplus", title: "surplus" },
    { image: thrust.src, name: "thrust", title: "thrust" },
    { image: vango.src, name: "vango", title: "vango" },
    { image: wastewise.src, name: "wastewise", title: "wastewise" },
  ];

  return (
    
    <div className="h-screen flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-center md:text-7xl sm:text-6xl text-5xl font-bold md:py-8 sm:py-6 py-6 text-white">
        Startups we've built
      </h1>
      <StartupsInfiniteMovingCards items={images} direction="right" speed="slow" />
    </div>
  );
}

// StaticImageData objects (resulting from imported images) include properties like src, height, width, etc. The src property is a string that contains the image path or URL, which is what the InfiniteMovingCards component expects.
// By using image: aifinals.src, you pass the string URL to the component, satisfying its type requirements.