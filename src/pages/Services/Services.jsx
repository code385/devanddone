import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, TrendingUp, ArrowRight, CheckCircle, Target, Eye, Heart, Lightbulb, Users, Zap, Award, Globe } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('mission');

  const services = [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: <Code className="w-8 h-8" />,
      shortDesc: 'Custom websites & web applications',
      description: 'Full-stack web development using modern technologies like React, Node.js, and cloud platforms.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Implementation',
        'E-commerce Solutions',
        'CMS Integration',
        'API Development'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      gradient: 'from-[#6EE7B7] to-[#93C5FD]'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      icon: <Smartphone className="w-8 h-8" />,
      shortDesc: 'iOS & Android native applications',
      description: 'Cross-platform and native mobile applications with intuitive user experiences and robust functionality.',
      features: [
        'Cross-platform Development',
        'Native Performance',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Real-time Features'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'from-[#93C5FD] to-[#6EE7B7]'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      icon: <Palette className="w-8 h-8" />,
      shortDesc: 'Visual identity & brand design',
      description: 'Creative visual solutions that communicate your brand message effectively across all platforms.',
      features: [
        'Brand Identity Design',
        'Logo Creation',
        'Print Design',
        'Digital Assets',
        'UI/UX Design',
        'Marketing Materials'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'Canva'],
      gradient: 'from-[#6EE7B7] to-[#93C5FD]'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      shortDesc: 'Growth-driven marketing strategies',
      description: 'Data-driven marketing campaigns that increase brand visibility and drive measurable business results.',
      features: [
        'SEO & SEM',
        'Social Media Marketing',
        'Content Strategy',
        'Email Marketing',
        'Analytics & Reporting',
        'PPC Campaigns'
      ],
      technologies: ['Google Analytics', 'Facebook Ads', 'Mailchimp', 'SEMrush'],
      gradient: 'from-[#93C5FD] to-[#6EE7B7]'
    }
  ];

  const contentData = {
    mission: {
      title: 'My Mission',
      icon: <Target className="w-8 h-8" />,
      description: 'At Dev & DONE, I am passionate about delivering innovative tech solutions that help businesses thrive in the digital age. Our mission is to bridge the gap between technology and business success through custom digital experiences that drive growth and engagement.',
      highlights: [
        'Delivering innovative tech solutions',
        'Helping businesses thrive digitally',
        'Bridging technology and business success',
        'Creating custom digital experiences',
        'Driving growth and engagement'
      ],
      stats: [
        { number: '500+', label: 'Projects Completed' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' }
      ]
    },
    vision: {
      title: 'My Vision',
      icon: <Eye className="w-8 h-8" />,
      description: 'To become the leading digital transformation partner that empowers businesses worldwide to achieve unprecedented growth through cutting-edge technology solutions, innovative design, and strategic digital marketing.',
      highlights: [
        'Leading digital transformation partner',
        'Empowering businesses worldwide',
        'Achieving unprecedented growth',
        'Cutting-edge technology solutions',
        'Strategic digital innovation'
      ],
      stats: [
        { number: '2030', label: 'Global Vision' },
        { number: '50+', label: 'Countries Served' },
        { number: '1M+', label: 'Users Impacted' }
      ]
    },
    values: {
      title: 'My Values',
      icon: <Heart className="w-8 h-8" />,
      description: 'My core values guide every decision we make and every solution we deliver. We believe in excellence, innovation, integrity, and putting our clients first in everything we do.',
      highlights: [
        'Excellence in every delivery',
        'Innovation-driven approach',
        'Integrity and transparency',
        'Client-first mentality',
        'Continuous learning and growth'
      ],
      stats: [
        { number: '100%', label: 'Transparency' },
        { number: '5⭐', label: 'Average Rating' },
        { number: '∞', label: 'Innovation' }
      ]
    }
  };

  const tabIcons = {
    mission: <Target className="w-5 h-5" />,
    vision: <Eye className="w-5 h-5" />,
    values: <Heart className="w-5 h-5" />
  };

  const currentContent = contentData[activeTab];

  return (
    <div className="min-h-screen bg-[#121212] text-[#E5E7EB]">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6EE7B7]/10 to-[#93C5FD]/10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#6EE7B7] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-[#93C5FD] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#1E1E1E] border border-[#374151] rounded-full text-[#6EE7B7] font-medium mb-6 animate-bounce">
              <Award className="w-4 h-4 mr-2" />
              Premium Digital Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to elevate your business and drive growth in the modern marketplace
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E5E7EB]">
            What We Offer
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Discover our range of professional services designed to transform your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Service Card */}
              <div className={`relative bg-[#1E1E1E] rounded-2xl p-8 cursor-pointer transition-all duration-500 transform border border-[#374151] ${hoveredCard === service.id
                  ? 'scale-105 shadow-2xl shadow-[#6EE7B7]/20 border-[#6EE7B7]/30'
                  : 'hover:scale-102 hover:border-[#6EE7B7]/20'
                }`}>

                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-[#121212] mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{service.title}</h3>
                      <p className="text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors duration-300">{service.shortDesc}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-[#6EE7B7] font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Detailed Card - Appears on Hover */}
              <div className={`absolute inset-0 z-20 transition-all duration-500 ${hoveredCard === service.id
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                <div className="bg-[#1E1E1E] rounded-2xl p-8 shadow-2xl border border-[#6EE7B7]/30 backdrop-blur-sm">
                  <div className="flex items-start mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-[#121212] mr-4`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#E5E7EB] mb-2">{service.title}</h3>
                      <p className="text-[#9CA3AF]">{service.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#6EE7B7] mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-[#6EE7B7] mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#93C5FD] mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#2A2A2A] text-[#9CA3AF] rounded-full text-sm border border-[#374151] hover:border-[#6EE7B7]/50 hover:text-[#E5E7EB] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to="/ContactConfirmation">
                    <button
                      className={`w-full bg-gradient-to-r ${service.gradient} text-[#121212] font-semibold py-3 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission/Vision/Values Section */}
      <div className="bg-[#1E1E1E] border-t border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#121212] border border-[#374151] rounded-full text-[#93C5FD] font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Who We Are
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
              Discover our purpose, vision, and the values that drive us forward
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            {Object.keys(contentData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeTab === tab
                    ? 'bg-gradient-to-r from-[#6EE7B7] to-[#93C5FD] text-[#121212] shadow-lg shadow-[#6EE7B7]/25'
                    : 'bg-[#2A2A2A] text-[#9CA3AF] hover:bg-[#374151] hover:text-[#E5E7EB] border border-[#374151]'
                  }`}
              >
                {tabIcons[tab]}
                <span className="ml-2 capitalize">{tab}</span>
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="relative">
            <div className="bg-[#121212] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#374151] transition-all duration-500 transform">

              {/* Animated Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6EE7B7]/5 to-[#93C5FD]/5 opacity-50"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#93C5FD] text-[#121212] mb-6 animate-pulse">
                    {currentContent.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] mb-6">
                    {currentContent.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[#9CA3AF] max-w-4xl mx-auto leading-relaxed">
                    {currentContent.description}
                  </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                  {/* Left Column - Highlights */}
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-[#6EE7B7] mb-6 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3" />
                      Key Highlights
                    </h4>
                    <div className="space-y-4">
                      {currentContent.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start group hover:translate-x-2 transition-transform duration-300"
                        >
                          <CheckCircle className="w-5 h-5 text-[#6EE7B7] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors duration-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Stats */}
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-[#93C5FD] mb-6 flex items-center">
                      <Zap className="w-6 h-6 mr-3" />
                      Our Impact
                    </h4>
                    <div className="grid grid-cols-1 gap-6">
                      {currentContent.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-[#1E1E1E] rounded-xl p-6 text-center hover:bg-[#2A2A2A] transition-colors duration-300 group border border-[#374151] hover:border-[#6EE7B7]/30"
                        >
                          <div className="text-3xl md:text-4xl font-bold text-[#6EE7B7] mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.number}
                          </div>
                          <div className="text-[#9CA3AF] group-hover:text-[#E5E7EB] transition-colors duration-300">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* CTA */}
            <section className="py-10 sm:py-14 lg:py-16">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif">Ready to scale your platform?</h2>
                <p className="text-gray-400 mt-2 mb-6">Let's do it. go to confirmation page and fill your details.</p>
                <Link to="/ContactConfirmation" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-sky-500 text-gray-900 px-6 py-3 rounded-lg font-semibold">
                  Get started
                </Link>
              </div>
            </section>
    </div>
  );
};

export default Services;