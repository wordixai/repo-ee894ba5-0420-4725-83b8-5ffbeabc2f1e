import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, TrendingUp, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-warm opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-gray-700 mb-8 animate-fade-up">
            <Star className="w-4 h-4 text-yellow-500 mr-2" />
            全新升级 - 智能化民宿管理平台
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            让民宿经营
            <span className="text-gradient block mt-2">更简单高效</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            一站式智能民宿管理解决方案，整合预订管理、客户服务、财务分析，
            <span className="text-gradient-warm font-semibold">让您专注于提供美好住宿体验</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-brand-primary" />
              <span className="text-sm">10,000+ 活跃用户</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-brand-success" />
              <span className="text-sm">平均提升收益 35%</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-brand-accent" />
              <span className="text-sm">99.9% 系统稳定性</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="group">
              立即免费试用
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              观看演示视频
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="民宿管理平台界面"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 glass rounded-lg p-4 shadow-medium animate-float hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">收益增长</p>
                  <p className="text-xs text-gray-600">+35% 本月</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass rounded-lg p-4 shadow-medium animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">新客户</p>
                  <p className="text-xs text-gray-600">+128 本周</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;