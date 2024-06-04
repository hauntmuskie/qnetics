"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

import ResepkuImage from "@/public/resepku-home.png";
import ResepkuImage2 from "@/public/resepku-recipe.png";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            ResepKu, Penguasa Ranah Kuliner Nusantara!
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Dengan komunitas lebih dari 100.000 foodies setiap bulan, ResepKu
            adalah wadah utama bagi para pencinta kuliner.
          </p>
        </div>
        <Image
          src={ResepkuImage}
          width={500}
          height={500}
          alt="gambar demo linear"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Qnetics: Inovasi Digital Anda
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Qnetics menciptakan berbagai platform digital inovatif seperti
          ResepKu, WolangWatu, CaurStore, dan Sarasa untuk memenuhi berbagai
          kebutuhan Anda.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Daftar untuk ResepKu yang cepat dan canggih hari ini!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            ResepKu adalah platform resep terdepan yang menghubungkan para
            pencinta kuliner di seluruh Indonesia.
          </p>
        </div>
        <Image
          src={ResepkuImage2}
          width={500}
          height={500}
          alt="gambar demo linear"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
