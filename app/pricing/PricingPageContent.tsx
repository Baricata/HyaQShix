'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';

export default function PricingPageContent() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow data
  const slides = [
    {
      image: "/images/slide1.jpg",
      title: t('pricing.title'),
      subtitle: t('pricing.subtitle')
    },
    {
      image: "/images/slide2.jpg", 
      title: t('pricing.title'),
      subtitle: t('pricing.subtitle')
    },
    {
      image: "/images/slide3.jpg",
      title: t('pricing.title'),
      subtitle: t('pricing.subtitle')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-['Poppins',sans-serif] bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full">
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={slides[currentSlide].image}
            bgImageAlt={`Slide ${currentSlide + 1} Background`}
            strength={400}
            className="min-h-[80vh] md:min-h-screen flex items-center justify-center"
            bgImageStyle={{
              opacity: 0.5,
              objectFit: 'cover',
              objectPosition: 'center',
              height: '100%',
              width: '100%'
            }}
            renderLayer={percentage => (
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'black',
                  opacity: 0.6
                }}
              />
            )}
          >
            <motion.div 
              className="relative z-20 text-center max-w-4xl px-4 sm:px-6 py-8 md:py-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200 leading-tight"
                variants={fadeInUp}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-yellow-50 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-left whitespace-pre-line"
                variants={fadeInUp}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </Parallax>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-black text-white">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('pricing.plans.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
            variants={fadeInUp}
          ></motion.div>
          <motion.p 
            className="text-center text-gray-300 max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
          >
            {t('pricing.plans.desc')}
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  {t('pricing.plans.basic.badge')}
                </span>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{t('pricing.plans.basic.label')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-yellow-400">¥{t('pricing.plans.basic.price')}</span>
                  <span className="text-gray-400 ml-2">{t('pricing.plans.basic.tax')}</span>
                </div>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature1')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature2')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature3')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature4')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature5')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    {t('pricing.plans.basic.feature6')}
                  </li>
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-colors text-center"
                >
                  {t('pricing.plans.basic.cta')}
                </Link>
              </div>
            </motion.div>

            {/* Monthly Plan */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{t('pricing.plans.monthly.label')}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">¥{t('pricing.plans.monthly.price')}</span>
                  <span className="text-gray-400 ml-2">{t('pricing.plans.monthly.tax')}</span>
                </div>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature1')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature2')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature3')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature4')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature5')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.monthly.feature6')}
                  </li>
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-lg font-bold transition-colors text-center"
                >
                  {t('pricing.plans.monthly.cta')}
                </Link>
              </div>
            </motion.div>

            {/* Sponsor Plan */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{t('pricing.plans.sponsor.label')}</h3>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{t('pricing.plans.sponsor.price')}</span>
                  <span className="text-gray-400 ml-2 block text-sm">{t('pricing.plans.sponsor.tax')}</span>
                </div>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature1')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature2')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature3')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature4')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature5')}
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-gray-400 mr-3"></i>
                    {t('pricing.plans.sponsor.feature6')}
                  </li>
                </ul>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-lg font-bold transition-colors text-center"
                >
                  {t('pricing.plans.sponsor.cta')}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 bg-repeat"></div>
        <motion.div 
          className="max-w-4xl mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-700 text-yellow-100 text-xs font-semibold mb-6">
              {t('home.satisfaction.badge')}
            </span>
            <h2 className="text-4xl font-bold mb-6">{t('pricing.guarantee.title')}</h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">{t('pricing.guarantee.desc')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <div className="relative inline-block mb-8">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <Image 
                    src="/images/satisfaction-guarantee.png" 
                    alt={t('pricing.satisfaction.alt')}
                    width={300}
                    height={300}
                    className="mx-auto drop-shadow-xl" 
                  />
                </motion.div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('pricing.satisfaction.guarantee')}</h3>
              <p className="text-gray-300 mb-4">{t('pricing.satisfaction.desc')}</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">{t('pricing.satisfaction.eligibility')}</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• {t('pricing.guarantee.conditions.condition1')}</li>
                    <li>• {t('pricing.guarantee.conditions.condition2')}</li>
                    <li>• {t('pricing.guarantee.conditions.condition3')}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">{t('pricing.satisfaction.application')}</h4>
                  <p className="text-gray-300">{t('pricing.satisfaction.application.desc')}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">{t('pricing.satisfaction.refund')}</h4>
                  <p className="text-gray-300">{t('pricing.satisfaction.refund.desc')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-black">
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('pricing.payment.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-900 rounded-xl p-6 text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-credit-card text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pricing.payment.method1.title')}</h3>
              <p className="text-gray-300">{t('pricing.payment.method1.desc')}</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-xl p-6 text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-university text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pricing.payment.method2.title')}</h3>
              <p className="text-gray-300">{t('pricing.payment.method2.desc')}</p>
            </motion.div>

            <motion.div 
              className="bg-gray-900 rounded-xl p-6 text-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-bitcoin text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pricing.payment.method3.title')}</h3>
              <p className="text-gray-300">{t('pricing.payment.method3.desc')}</p>
            </motion.div>
          </div>

          <motion.p 
            className="text-center text-gray-400 mt-8"
            variants={fadeInUp}
          >
            {t('pricing.payment.note')}
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <motion.div 
          className="max-w-4xl mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            variants={fadeInUp}
          >
            {t('pricing.faq.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <div className="space-y-8">
            <motion.div 
              className="bg-black rounded-lg p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-400">{t('pricing.faq.q1')}</h3>
              <p className="text-gray-300">{t('pricing.faq.a1')}</p>
            </motion.div>

            <motion.div 
              className="bg-black rounded-lg p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-400">{t('pricing.faq.q2')}</h3>
              <p className="text-gray-300">{t('pricing.faq.a2')}</p>
            </motion.div>

            <motion.div 
              className="bg-black rounded-lg p-6"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold mb-2 text-yellow-400">{t('pricing.faq.q3')}</h3>
              <p className="text-gray-300">{t('pricing.faq.a3')}</p>
            </motion.div>
          </div>

          <motion.p 
            className="text-center text-gray-400 mt-12"
            variants={fadeInUp}
          >
            {t('pricing.contact')}
          </motion.p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <motion.div 
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('pricing.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('pricing.cta.subtitle')}</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-colors"
          >
            {t('pricing.cta.button')}
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
} 