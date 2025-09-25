import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "张婷",
      role: "山景民宿老板",
      location: "丽江",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "使用民宿云管家后，我们的预订管理效率提升了300%，再也不用担心重复预订的问题。客人满意度也大幅提升。",
      rating: 5,
      stats: "收益增长 45%"
    },
    {
      name: "李明",
      role: "海景别墅管理者",
      location: "三亚",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "这个平台的数据分析功能太强大了！帮我们优化了定价策略，旺季收益比去年同期增长了60%。",
      rating: 5,
      stats: "入住率 95%"
    },
    {
      name: "王芳",
      role: "古镇客栈连锁",
      location: "乌镇",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "从单店到连锁，民宿云管家一直陪伴着我们成长。团队协作功能让我们的管理更加规范化。",
      rating: 5,
      stats: "管理 12 家门店"
    },
    {
      name: "陈浩",
      role: "精品民宿品牌",
      location: "厦门",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "移动端管理让我即使出差也能随时了解经营状况。智能客服减少了我们80%的重复咨询工作。",
      rating: 5,
      stats: "客服效率 +80%"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            客户见证
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            来自全国各地的民宿经营者，分享他们与民宿云管家的成功故事
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">10,000+</div>
            <div className="text-gray-600">活跃用户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-gray-600">客户满意度</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">35%</div>
            <div className="text-gray-600">平均收益增长</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-gray-600">技术支持</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-brand-primary mb-4 opacity-50" />
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="glass px-3 py-1 rounded-full border border-white/20">
                    <span className="text-xs font-medium text-brand-primary">
                      {testimonial.stats}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">受到全国各地民宿经营者的信赖</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">阿里云</div>
            <div className="text-2xl font-bold text-gray-400">腾讯云</div>
            <div className="text-2xl font-bold text-gray-400">携程</div>
            <div className="text-2xl font-bold text-gray-400">美团</div>
            <div className="text-2xl font-bold text-gray-400">飞猪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;