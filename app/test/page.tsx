'use client';

import { useState } from 'react';

export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FAFafA] text-neutral-900 font-sans antialiased min-h-screen">
      
      {/* SECTION 1: HERO / ABOUT US */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              About
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
              About AI Media
            </h1>
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
              We help businesses of all shapes and sizes grow online with high-quality website design, custom web development, and content strategy services.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold rounded-full text-white bg-neutral-950 hover:bg-neutral-800 transition-colors shadow-sm">
                Get Started with Us
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            {/* Signature Leaf-Shape Corner Container */}
            <div className="relative aspect-[4/3] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[7.5rem] rounded-bl-[7.5rem] overflow-hidden bg-neutral-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-neutral-200/50">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
                alt="Design, Build, Grow Workspace" 
                className="w-full h-full object-cover grayscale contrast-[1.15] brightness-90 saturate-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent flex flex-col justify-start p-10 sm:p-14">
                <div className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
                  Design.<br />Build.<br />Grow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ONE TEAM FOR YOUR DIGITAL PRESENCE */}
      <section className="py-20 bg-[#F6F6F6]/60 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-12">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              Our Agency
            </span>
            <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
              One Team for Your Digital Presence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-8 min-h-[250px]">
              <div className="p-3.5 bg-white border border-neutral-100 rounded-2xl w-fit shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-[16px] text-neutral-900">Design & Development</h3>
                <p className="text-[13px] text-neutral-400 leading-relaxed font-normal">Building responsive, modern websites tailored to your specific performance goals.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-8 min-h-[250px]">
              <div className="p-3.5 bg-white border border-neutral-100 rounded-2xl w-fit shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-[16px] text-neutral-900">SEO & Analytics</h3>
                <p className="text-[13px] text-neutral-400 leading-relaxed font-normal">Optimizing search engines and configuring analytics to scale organic traffic growth.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-8 min-h-[250px]">
              <div className="p-3.5 bg-white border border-neutral-100 rounded-2xl w-fit shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.39m3.42 3.39a15.945 15.945 0 0 1-3.39-1.622M10.5 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.47 5.622a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.99 15.99 0 0 1-1.622-3.39m3.42 3.39a15.94 15.94 0 0 1-3.39-1.622M18 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-[16px] text-neutral-900">Branding & Design</h3>
                <p className="text-[13px] text-neutral-400 leading-relaxed font-normal">Professional brand identities and digital assets tailored to connect with clients.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-8 min-h-[250px]">
              <div className="p-3.5 bg-white border border-neutral-100 rounded-2xl w-fit shadow-[0_4px_16px_rgba(0,0,0,0.03)] flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-[16px] text-neutral-900">Content & Marketing</h3>
                <p className="text-[13px] text-neutral-400 leading-relaxed font-normal">Engaging content and social campaigns designed to raise your brand voice online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
            Process
          </span>
          <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
            How it work
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[26px] left-[12%] right-[12%] h-[1.5px] bg-neutral-200/70 hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-neutral-950 text-white font-extrabold text-[13px] flex items-center justify-center border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                01
              </div>
              <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-full text-left space-y-4">
                <div className="p-2.5 bg-white border border-neutral-100 rounded-xl w-fit shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <svg className="w-4.5 h-4.5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" /></svg>
                </div>
                <h3 className="font-extrabold text-[15px] text-neutral-900">Brand Discovery</h3>
                <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">We audit your current platforms, map target profiles, and layout the exact gaps in your target markets.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-neutral-950 text-white font-extrabold text-[13px] flex items-center justify-center border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                02
              </div>
              <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-full text-left space-y-4">
                <div className="p-2.5 bg-white border border-neutral-100 rounded-xl w-fit shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <svg className="w-4.5 h-4.5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
                </div>
                <h3 className="font-extrabold text-[15px] text-neutral-900">Design</h3>
                <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">We outline fully custom website layouts, creative assets, and visual structures ready for development phase.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-neutral-950 text-white font-extrabold text-[13px] flex items-center justify-center border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                03
              </div>
              <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-full text-left space-y-4">
                <div className="p-2.5 bg-white border border-neutral-100 rounded-xl w-fit shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <svg className="w-4.5 h-4.5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" /></svg>
                </div>
                <h3 className="font-extrabold text-[15px] text-neutral-900">AI Marketing</h3>
                <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">We implement customized AI-driven growth funnels to drive consistent target leads directly to your business.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-neutral-950 text-white font-extrabold text-[13px] flex items-center justify-center border-4 border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                04
              </div>
              <div className="bg-white border border-neutral-200/50 rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] w-full text-left space-y-4">
                <div className="p-2.5 bg-white border border-neutral-100 rounded-xl w-fit shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <svg className="w-4.5 h-4.5 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                </div>
                <h3 className="font-extrabold text-[15px] text-neutral-900">Growth</h3>
                <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">We consistently optimize your systems, track key data, and deploy updates to keep growth metrics climbing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY BRANDS CHOOSE AI MEDIA */}
      <section className="py-24 bg-[#F6F6F6]/60 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Signature Leaf-Shape Corner Container */}
            <div className="relative aspect-[4/3] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-[7.5rem] rounded-bl-[7.5rem] overflow-hidden bg-neutral-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-neutral-200/50">
              <img 
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Neon Sign" 
                className="w-full h-full object-cover grayscale contrast-[1.15] brightness-95 saturate-50"
              />
            </div>
            
            <div className="space-y-6 lg:pl-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
                Why Brands<br />Choose AI Media
              </h2>
              <p className="text-neutral-500 text-[14px] leading-relaxed max-w-md">
                With over 12+ years of combined experience in website design, SEO, branding, and digital marketing growth, we know how to connect with your audiences and scale businesses seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET OUR TEAM */}
      <section className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              Team
            </span>
            <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
              Meet our team.
            </h2>
            <p className="text-neutral-400 text-xs">
              Handpicked multi-disciplinary, creative and technical professionals.
            </p>
          </div>
          {/* Slider Controllers */}
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-neutral-200/80 bg-white flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-700 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Josh Travis */}
          <div className="bg-white border border-neutral-200/50 rounded-[2.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.015)] overflow-hidden flex flex-col justify-between">
            <div className="p-8 pb-4 space-y-4">
              <span className="text-[10px] text-neutral-300 font-bold tracking-widest uppercase">Founder & CEO</span>
              <h3 className="text-lg font-extrabold text-neutral-900">Josh Travis</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">
                Leads the company's strategic growth planning, build relationships with key focus on building impactful digital experiences that drive long-term business success.
              </p>
            </div>
            {/* Portrait with Vignette Container */}
            <div className="mx-6 mb-6 rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#EEEEEE] via-[#E2E2E2] to-[#CCCCCC] relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Josh Travis" 
                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.98] object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#B0B0B0]/40 to-transparent" />
            </div>
          </div>

          {/* Sophie Bennett */}
          <div className="bg-white border border-neutral-200/50 rounded-[2.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.015)] overflow-hidden flex flex-col justify-between">
            <div className="p-8 pb-4 space-y-4">
              <span className="text-[10px] text-neutral-300 font-bold tracking-widest uppercase">Project Manager</span>
              <h3 className="text-lg font-extrabold text-neutral-900">Sophie Bennett</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">
                She is really passionate on finding how planning rules with key technologies, digital corner, location and dynamic databases can help website
              </p>
            </div>
            <div className="mx-6 mb-6 rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#EEEEEE] via-[#E2E2E2] to-[#CCCCCC] relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Sophie Bennett" 
                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.98] object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#B0B0B0]/40 to-transparent" />
            </div>
          </div>

          {/* Mason Todd */}
          <div className="bg-white border border-neutral-200/50 rounded-[2.25rem] shadow-[0_8px_30px_rgba(0,0,0,0.015)] overflow-hidden flex flex-col justify-between">
            <div className="p-8 pb-4 space-y-4">
              <span className="text-[10px] text-neutral-300 font-bold tracking-widest uppercase">Senior Front-end Developer</span>
              <h3 className="text-lg font-extrabold text-neutral-900">Mason Todd</h3>
              <p className="text-[12px] text-neutral-400 leading-relaxed font-normal">
                She is really passionate on finding how planning rules with key technologies, digital corner, location and dynamic databases can help website
              </p>
            </div>
            <div className="mx-6 mb-6 rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#EEEEEE] via-[#E2E2E2] to-[#CCCCCC] relative shadow-inner">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&h=800&q=80" 
                alt="Mason Todd" 
                className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.98] object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#B0B0B0]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="py-24 bg-[#F6F6F6]/60 border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
              What our client says
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quote 1 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2.25rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.015)] flex flex-col justify-between space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-5xl text-neutral-200 font-serif leading-none select-none">“</span>
                <p className="text-neutral-500 leading-relaxed text-[13px] pt-2 font-normal">
                  I received three quotes for a house cleaning request and could compare prices, availability, and reviews so I could make an informed decision.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-100/80 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-100">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Marie Gonzalez" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[13px] text-neutral-900">Marie Gonzalez</h4>
                    <p className="text-[10px] text-neutral-400">Founder</p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white border border-neutral-200/50 rounded-[2.25rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.015)] flex flex-col justify-between space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-5xl text-neutral-200 font-serif leading-none select-none">“</span>
                <p className="text-neutral-500 leading-relaxed text-[13px] pt-2 font-normal">
                  I received three quotes for a house cleaning request and could compare prices, availability, and reviews so I could make an informed decision.
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-neutral-100/80 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-100">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Marie Gonzalez" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[13px] text-neutral-900">Marie Gonzalez</h4>
                    <p className="text-[10px] text-neutral-400">Founder</p>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-1.5 pt-4">
            <button className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
            <button className="w-2.5 h-1.5 rounded-full bg-neutral-950 transition-all" />
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ (Questions? Answers!) */}
      <section className="py-24 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 uppercase bg-white border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
            FAQs
          </span>
          <h2 className="text-3xl sm:text-[2.25rem] font-extrabold tracking-tight text-neutral-900 leading-[1.2]">
            Questions? Answers!
          </h2>
          <p className="text-neutral-400 text-xs">
            Get quick answers to the most common questions.
          </p>
        </div>

        {/* Accordions in Pill Style with Gaps */}
        <div className="space-y-4">
          {[
            {
              q: "How long does it take to design and build a website?",
              a: "We typically deliver a fully optimized, custom site within 4 to 8 weeks depending on structure, scope complexity, and feedback loops."
            },
            {
              q: "Can you help with branding and logo design?",
              a: "Yes, we build comprehensive brand systems including identities, logos, color guidelines, and functional components designed for consistency."
            },
            {
              q: "Do you build custom websites or use templates?",
              a: "We engineer everything tailored directly from the ground up matching exact unique project layouts, completely free of generic templates."
            },
            {
              q: "How often will I communicate with your agency?",
              a: "You'll have dedicated access with weekly status checkups and clear, asynchronous channels open throughout the entire design sprint."
            },
            {
              q: "What is your pricing structure for projects?",
              a: "We scope projects individually or package them via transparent project quotes based on explicit component requirements and milestones."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="border border-neutral-200/50 rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-neutral-50/50 transition-colors"
              >
                <span className="font-extrabold text-neutral-900 text-[13px]">{item.q}</span>
                <span className="text-neutral-400 transition-transform duration-200 text-lg font-light flex items-center justify-center">
                  {openFaq === idx ? '−' : '+'}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 text-[12px] text-neutral-400 leading-relaxed border-t border-neutral-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold text-neutral-800 hover:text-neutral-600 transition-colors border-b border-neutral-800 pb-0.5">
            Feel free to check our full list of questions
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>
      </section>

      {/* SECTION 8: BOTTOM CTA BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-neutral-950 text-white rounded-[2.5rem] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-xl overflow-hidden relative">
          
          <div className="relative aspect-video rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[5.5rem] rounded-bl-[5.5rem] overflow-hidden bg-neutral-900 border border-neutral-800/80">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" 
              alt="Design Office Team" 
              className="w-full h-full object-cover grayscale contrast-[1.15] brightness-75"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute top-6 left-6 text-white/95 text-lg font-extrabold tracking-tight">
              Design.<br />Build.<br />Grow.
            </div>
          </div>
          
          <div className="space-y-6 lg:pl-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-neutral-300 uppercase bg-neutral-900 border border-neutral-800">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
              Let's build
            </span>
            <h2 className="text-3xl sm:text-[2rem] font-extrabold tracking-tight leading-[1.2]">
              Ready to Build a Smarter Online Presence?
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              Let's create a website or custom marketing framework designed entirely around your target growth. Get in touch with our team today.
            </p>
            <div className="pt-2">
              <button className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold rounded-full text-neutral-950 bg-white hover:bg-neutral-100 transition-colors shadow-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}