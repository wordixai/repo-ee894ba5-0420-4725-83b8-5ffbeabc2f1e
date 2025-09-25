import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Clock, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            限时优惠：前100名用户享6折优惠
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好开启智能化
            <span className="block">民宿管理之旅了吗？</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            加入超过10,000名成功的民宿经营者，体验更高效、更智能的管理方式
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center text-white/90">
              <Clock className="w-5 h-5 mr-2" />
              <span>14天免费试用</span>
            </div>
            <div className="flex items-center text-white/90">
              <Shield className="w-5 h-5 mr-2" />
              <span>无需信用卡</span>
            </div>
            <div className="flex items-center text-white/90">
              <Sparkles className="w-5 h-5 mr-2" />
              <span>即刻开始</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="glass" 
              size="xl" 
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-xl border-white/30 text-white"
            >
              立即免费试用
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-white hover:bg-white/10 border border-white/20"
            >
              联系销售顾问
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              已有超过10,000家民宿选择我们
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">{i + 1}</span>
                </div>
              ))}
              <span className="text-white/70 text-sm ml-2">+更多</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;