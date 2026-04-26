import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* Root container — padding:70px <1024, 125px ≥1024 */}
      <div className="max-w-[1440px] mx-auto px-[15px] py-[70px] lg:py-[125px] relative">
        
        {/* 
          Layout strategy:
          - default (390w): flex column, everything stacked
          - md (768w): flex column, but lines/images go row
          - lg (1024w): same as md, wider columns
          - xl (1440w+): absolute positioning for overlapping layout
        */}
        <div className="flex flex-col xl:block xl:relative xl:min-h-[1060px]">

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* BLOCK 1: "Shri Shyam G™" (2003:5478)                      */}
          {/* Inter Medium 113.6px/79.3px, w:1270, h:79.3               */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pl-[15px] xl:pl-0 xl:absolute xl:top-0 xl:left-[15px] xl:w-[1270px] xl:h-[79px] z-10"
          >
            <h2 className="font-display text-[36px] sm:text-[44.8px] md:text-[79.1px] xl:text-[129.2px] leading-[1] md:leading-[48.8px] xl:leading-[79.3px] text-brand-text font-medium">
              Shri Shyam G™
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* BLOCK 2: "Group PVT LTD" (2003:5482)                      */}
          {/* Inter Medium 36.3px/40px, w:1270, h:40                    */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="pl-[15px] xl:pl-0 mt-2 md:mt-0 xl:h-[40px] flex items-start xl:absolute xl:top-[94px] xl:left-[15px] xl:w-[1270px] z-10"
          >
            <h3 className="font-display text-[20px] sm:text-[24px] md:text-[36.3px] leading-[1.2] md:leading-[40px] text-brand-text font-medium">
              Group PVT LTD
            </h3>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* BLOCK 3: Lines + RedBox                                    */}
          {/* 390: column, full-width red box only                       */}
          {/* 768/1024: row, 50/50, h:180, red box p:30/20              */}
          {/* 1440: 1270×348 absolute, logo+lines+redbox                 */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="mt-6 md:mt-0 md:h-[180px] xl:h-auto xl:absolute xl:top-[135px] xl:left-[15px] xl:w-[1270px] xl:h-[348px] z-20 pointer-events-none">
            
            <div className="flex flex-col md:flex-row w-full h-full">
              
              {/* Left column: Lines + Logo */}
              {/* 390: hidden | 768/1024: 50% with lines | xl: 737px with logo */}
              <div className="hidden md:flex md:w-1/2 xl:w-[737px] relative h-full xl:shrink-0 md:items-center xl:items-start">
                
                {/* Lines — md/lg: full-width lines within column */}
                <div className="xl:hidden absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-black/15" />
                  <div className="absolute bottom-0 left-0 w-[200%] h-[1px] bg-black/15" />
                </div>

                {/* Lines — xl only */}
                <div className="hidden xl:block absolute top-0 left-0 w-[737px] h-[183px]">
                  <div className="absolute top-0 -left-[737px] w-[1473px] h-[1px] bg-black/15" />
                  <div className="absolute top-[182px] -left-[737px] w-[1473px] h-[1px] bg-black/15" />
                </div>
                
                {/* Logo+TM — visible md+, scaled per breakpoint */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  className="flex flex-row items-start md:justify-center xl:justify-start xl:absolute xl:top-[47px] xl:left-0 pointer-events-auto"
                >
                  <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] xl:w-[284px] xl:h-[284px] shrink-0">
                    <img 
                      src="/images/about/shri-shyam.svg" 
                      alt="SG Group Logo" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  <span className="font-display text-[40px] lg:text-[50px] xl:text-[113.6px] font-medium text-brand-text leading-[1] xl:leading-[79.3px]">™</span>
                </motion.div>
              </div>

              {/* Red Box — full-width mobile | 50% md/lg | 533px xl */}
              <div className="w-full md:w-1/2 xl:w-[533px] xl:h-[292px] xl:shrink-0 pointer-events-auto">
                <div className="w-full h-full flex items-start md:items-center xl:items-start">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative w-full xl:w-[523px] xl:h-[269px] overflow-hidden"
                  >
                    <div className="bg-brand-secondary p-6 md:py-[30px] md:px-[20px] xl:pt-[47px] xl:pr-[36px] xl:pb-[46px] xl:pl-[40px] w-full xl:w-[523px] xl:[clip-path:polygon(0_0,calc(100%-42px)_0,100%_42px,100%_100%,0_100%)]">
                      <p className="font-body text-[14px] md:text-[16px] xl:text-[18px] leading-[22px] md:leading-[26px] xl:leading-[30px] text-white">
                        As a leading interior exterior glass facade solutions provider, we enable you to tackle complex challenges in the built environment.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════ */}
          {/* BLOCK 4: Images + Text                                     */}
          {/* 390: h:1047 stacked | 768: h:753 row 337/386              */}
          {/* 1024: h:649 row 457/522 | 1440: row 592/678 absolute      */}
          {/* ═══════════════════════════════════════════════════════════ */}
          <div className="md:-mt-[90px] xl:mt-0 xl:absolute xl:top-[240px] xl:left-[15px] xl:w-[1270px] xl:h-[756px] z-10">
            
            {/* row from md+, stretch on md/lg, flex-end on xl */}
            <div className="flex flex-col md:flex-row md:items-stretch xl:items-end w-full">
              
              {/* ─── Left column: Images ─── */}
              {/* 390: full | 768/1024: ~46.6% (457/979) | 1440: 592px */}
              <div className="relative w-full md:w-[46.6%] xl:w-[592px] md:shrink-0 mb-16 md:mb-0">
                
                {/* Main building image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full xl:w-[582px] xl:h-[816px] xl:pl-[10px] overflow-hidden relative"
                >
                  <div className="w-full h-[310px] md:h-[649px] xl:h-full bg-gray-100">
                    <img 
                      src="/images/about/about-main-198dad.png" 
                      alt="Architectural Excellence" 
                      className="w-full h-full object-cover" 
                      onError={(e) => { e.target.src = "/images/about/about-main.png" }}
                    />
                  </div>
                </motion.div>

                {/* Small secondary image — masked with about-mask.svg */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="absolute bottom-[-40px] left-3 md:bottom-4 md:-left-[69px] xl:bottom-auto xl:top-[331px] xl:-left-[86px] w-[140px] h-[180px] md:w-[220px] md:h-[300px] lg:w-[283px] lg:h-[388px] z-20 cursor-pointer overflow-hidden"
                  style={{
                    WebkitMaskImage: 'url(/images/about/about-mask.svg)',
                    WebkitMaskSize: '100% 100%',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: 'url(/images/about/about-mask.svg)',
                    maskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                  }}
                >
                  <img 
                    src="/images/about/about-small-7cb3e1.png" 
                    alt="Secondary Building" 
                    className="w-full h-full object-cover" 
                    onError={(e) => { e.target.src = "/images/about/about-main.png" }}
                  />
                </motion.div>
              </div>

              {/* ─── Right column: Typography (2003:5462) ─── */}
              {/* Parent: mode:none (absolute children) at xl, w:fill, h:fill */}
              {/* 390: full stacked | 768/1024: ~53.4% | 1440: 678px */}
              <div className="relative w-full md:w-[53.4%] xl:w-[678px] md:shrink-0 xl:h-[649px] pt-[30px] md:pt-0">
                
                {/* Inner content — md/lg gets padding to clear red box, xl uses absolute */}
                <div className="md:p-[140px_15px_78px] xl:p-0 xl:relative xl:w-full xl:h-full">

                  {/* "Transforming Spaces..." — x:82.55, y:24.02, w:549.53 */}
                  {/* Inter Medium 41.3px/54px, right-padding:81.56 */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="xl:absolute xl:top-[24px] xl:left-[83px] xl:w-[550px]"
                  >
                    <h4 className="font-display text-[28px] md:text-[32px] lg:text-[36px] xl:text-[41.3px] leading-[1.15] md:leading-[1.2] xl:leading-[54px] text-brand-text font-medium tracking-tight xl:pr-[82px]">
                      Transforming Spaces with Innovation &amp; Elegances
                    </h4>
                  </motion.div>
                  
                  {/* Body text — x:82.55, y:208.02, w:549.53 */}
                  {/* Satoshi Regular 16px/25.92px, pl:2, pr:3.68 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="mt-6 md:mt-8 xl:mt-0 xl:absolute xl:top-[208px] xl:left-[83px] xl:w-[550px]"
                  >
                    <div className="xl:pl-[2px] xl:pr-[4px]">
                      <p className="font-body text-[14px] md:text-[16px] leading-[22px] md:leading-[25.92px] text-brand-text">
                        With our unique combination of innovative thinking, collaborative problem solving and innovative technology like precision engineering, modern design, and premium materials, we expand the boundaries of what's possible.
                      </p>
                      <p className="font-body text-[14px] md:text-[16px] leading-[22px] md:leading-[25.92px] text-brand-text mt-4 md:mt-[25.92px]">
                        From intelligent planning to efficient installation, we bring together a diverse array of capabilities centred around a common purpose – ensuring that your architectural project is nothing short of spectacular. Your Delights, Our Victory.
                      </p>
                    </div>
                  </motion.div>

                  {/* "Your Delights, Our Victory." — x:83, y:456.04, w:549.53, h:36.41 */}
                  {/* Inter Medium 20.1px/26.4px */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 md:mt-8 xl:mt-0 xl:absolute xl:top-[456px] xl:left-[83px] xl:w-[550px] xl:h-[36px]"
                  >
                    <h5 className="font-display text-[16px] md:text-[18px] xl:text-[20.1px] leading-[26.4px] text-brand-text font-medium">
                      Your Delights, Our Victory.
                    </h5>
                  </motion.div>

                  {/* CTA Button — x:83, y:517.02, h:55 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="mt-8 md:mt-10 xl:mt-0 xl:absolute xl:top-[517px] xl:left-[83px]"
                  >
                    <a href="#about" className="inline-flex flex-row items-center group cursor-none px1-cursor">
                      {/* Text column — w:193.25, padding:0 37px, column center */}
                      <div className="relative flex flex-col items-center justify-center w-[160px] md:w-[180px] xl:w-[193px] px-[28px] md:px-[34px] xl:px-[37px]">
                        {/* Border box (absolute) — white fill, #D9D9D9 stroke */}
                        <div className="absolute left-0 top-[0.5px] w-full h-[44px] md:h-[50px] xl:h-[52.5px] bg-white border border-brand-border overflow-hidden group-hover:border-brand-secondary transition-colors duration-500">
                          {/* Left-to-right fill overlay */}
                          <div className="absolute inset-0 bg-brand-secondary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                        </div>
                        {/* Text */}
                        <span className="relative z-10 font-[Inter] text-[11px] md:text-[12px] xl:text-[13px] font-medium uppercase tracking-[0.077em] text-black leading-[44px] md:leading-[50px] xl:leading-[53px] transition-colors duration-500 group-hover:text-white whitespace-nowrap">
                          more about us
                        </span>
                      </div>
                      {/* Icon wrapper — w:61, h:55, pl:6 */}
                      <div className="pl-[4px] md:pl-[5px] xl:pl-[6px]">
                        {/* Icon box — w:55, h:55, bg:brand-secondary */}
                        <div className="bg-brand-secondary w-[40px] h-[40px] md:w-[48px] md:h-[48px] xl:w-[55px] xl:h-[55px] flex items-center justify-center">
                          <ArrowUpRight className="text-white w-[14px] h-[14px] md:w-[17px] md:h-[17px] xl:w-5 xl:h-5 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-center group-hover:rotate-45" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
