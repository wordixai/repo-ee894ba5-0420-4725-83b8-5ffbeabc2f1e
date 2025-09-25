import React from 'react';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: '功能特性', href: '#features' },
      { name: '定价方案', href: '#pricing' },
      { name: '客户案例', href: '#testimonials' },
      { name: '产品更新', href: '#' },
    ],
    support: [
      { name: '帮助中心', href: '#' },
      { name: '开发文档', href: '#' },
      { name: 'API参考', href: '#' },
      { name: '联系支持', href: '#' },
    ],
    company: [
      { name: '关于我们', href: '#' },
      { name: '团队介绍', href: '#' },
      { name: '招聘信息', href: '#' },
      { name: '媒体报道', href: '#' },
    ],
    legal: [
      { name: '服务条款', href: '#' },
      { name: '隐私政策', href: '#' },
      { name: '使用协议', href: '#' },
      { name: '安全说明', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">民宿云管家</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              专业的民宿管理SaaS平台，为全国民宿经营者提供智能化、数字化的管理解决方案，让民宿经营更简单高效。
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-brand-primary" />
                contact@bnbcloud.com
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-brand-primary" />
                400-888-9999
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-brand-primary" />
                北京市朝阳区科技园区
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">产品</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">支持</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">公司</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">法律</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-brand-primary transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-lg font-semibold mb-2">订阅我们的产品动态</h3>
              <p className="text-gray-400">获取最新的功能更新和行业资讯</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent flex-1 lg:w-64"
              />
              <button className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 whitespace-nowrap">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2024 民宿云管家. 保留所有权利. | 京ICP备12345678号-1
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export defaultFooter;