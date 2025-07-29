'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CertificationPageContent() {
  const { t, certificationLevels, evaluationProcesses, certificationCertificate, getCertificationFees, language } = useLanguage();

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

      {/* Hero */}
      <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/images/slide3.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200"
            variants={fadeInUp}
          >
            {t('certification.title')}
          </motion.h1>
          <motion.p 
            className="text-xl text-yellow-50"
            variants={fadeInUp}
          >
            {t('certification.subtitle')}
          </motion.p>
        </motion.div>
      </section>

      {/* Certification Levels */}
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
            {t('certification.levels.title')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationLevels.map((cert, index) => (
              <motion.div 
                key={index}
                className="group perspective"
                variants={fadeInUp}
                whileHover={{
                  z: 50,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`rounded-xl overflow-hidden shadow-lg ${cert.title.en === 'Black' ? 'shadow-yellow-500/20' : ''} h-full transform-gpu transition-all duration-500 group-hover:shadow-2xl border border-gray-800`}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 }
                  }}
                >
                  <div className={`${cert.bgClass} h-24 relative flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/images/certificate-pattern.png')]"></div>
                    <i className={`fas fa-award text-4xl ${cert.textClass || 'text-white'}`}></i>
                    <div className="absolute -bottom-5 right-5 w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm border border-gray-700 shadow-lg flex flex-col items-center justify-center">
                      <span className="text-sm font-semibold text-gray-200">{t('passRate')}</span>
                      <span className="text-lg font-bold text-yellow-500">{cert.passRate[language]}</span>
                    </div>
                  </div>
                  <div className="p-8 bg-black flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-xs font-semibold mb-6 backdrop-blur-sm">CERTIFICATION</span>
                      <h3 className={`text-2xl font-bold mb-4 ${cert.title.en === 'Gold' ? 'text-yellow-500' : cert.title.en === 'Platina' ? 'text-gray-200' : 'text-white'}`}>
                        {cert.title[language]}
                      </h3>
                      <p className="text-gray-300 opacity-90 mb-6">{cert.description[language]}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link 
                        href="/contact" 
                        className="px-6 py-3 bg-white/10 rounded-lg text-white backdrop-blur-sm hover:bg-yellow-500 transition-colors"
                      >
                        {t('learnMore')}
                      </Link>
                      <motion.div 
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                      >
                        <i className="fas fa-arrow-right text-yellow-400"></i>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Evaluation Process */}
      <section className="py-20 bg-gray-900">
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
            {t('certification.evaluation.method')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {evaluationProcesses.map((process, index) => (
              <motion.div 
                key={index}
                className="bg-black rounded-xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${process.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{process.title[language]}</h3>
                <p className="text-gray-300">{process.description[language]}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certificate Information */}
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
            {t('certification.certificate.about')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <img 
                src={certificationCertificate.sampleImage.src}
                alt={certificationCertificate.sampleImage.alt[language]}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6">{certificationCertificate.title[language]}</h3>
              <p className="text-gray-300 mb-6">{certificationCertificate.description[language]}</p>
              
              <ul className="space-y-3 mb-6">
                {certificationCertificate.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check text-yellow-400 mr-3"></i>
                    <span>{detail[language]}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">{t('certification.certificate.renewal')}</h4>
                <p className="text-gray-300 mb-4">{certificationCertificate.validityPeriod[language]}</p>
                <ul className="space-y-2">
                  {certificationCertificate.renewalInfo.map((info, index) => (
                    <li key={index} className="text-gray-300">• {info[language]}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Exam Fees */}
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
            {t('certification.exam.fees')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-yellow-400 mx-auto mb-16"
            variants={fadeInUp}
          ></motion.div>

          <motion.div 
            className="bg-black rounded-xl overflow-hidden"
            variants={fadeInUp}
          >
            <table className="w-full">
              <thead className="bg-yellow-500">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-black">ランク</th>
                  <th className="px-6 py-4 text-left font-bold text-black">受験料</th>
                  <th className="px-6 py-4 text-left font-bold text-black">合格率</th>
                  <th className="px-6 py-4 text-left font-bold text-black">更新周期</th>
                </tr>
              </thead>
              <tbody>
                {getCertificationFees(language).map((fee, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="px-6 py-4 font-semibold">{fee.rank}</td>
                    <td className="px-6 py-4">{fee.fee}</td>
                    <td className="px-6 py-4">{fee.passRate}</td>
                    <td className="px-6 py-4">{fee.renewal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
          <h2 className="text-3xl font-bold mb-4">{t('certification.cta.title')}</h2>
          <p className="text-xl mb-8 text-gray-300">{t('certification.cta.subtitle')}</p>
          <Link 
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-bold hover:from-yellow-600 hover:to-yellow-700 transition-colors"
          >
            {t('certification.cta.apply')}
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
} 