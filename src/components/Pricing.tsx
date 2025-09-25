import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "基础版",
      price: "99",
      period: "/月",
      description: "适合1-3间房的小型民宿",
      icon: Star,
      popular: false,
      features: [
        "最多3间房源管理",
        "基础预订管理",
        "客户信息管理",
        "财务报表统计",
        "移动端应用",
        "邮件支持"
      ],
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "专业版",
      price: "299",
      period: "/月",
      description: "适合4-15间房的中型民宿",
      icon: Zap,
      popular: true,
      features: [
        "最多15间房源管理",
        "多平台同步管理",
        "智能定价策略",
        "高级数据分析",
        "自动化工作流程",
        "24/7客服支持",
        "团队协作功能",
        "API接口集成"
      ],
      color: "from-brand-primary to-brand-secondary"
    },
    {
      name: "企业版",
      price: "699",
      period: "/月",
      description: "适合15间房以上的大型民宿集团",
      icon: Crown,
      popular: false,
      features: [
        "无限房源管理",
        "多品牌管理",
        "高级商业智能",
        "自定义报表",
        "专属客户经理",
        "私有化部署",
        "定制开发服务",
        "SLA服务保障"
      ],
      color: "from-brand-warm to-brand-accent"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            定价方案
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            选择最适合您业务规模的方案，所有计划都包含14天免费试用
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center p-1 rounded-lg glass border border-white/20">
            <button className="px-4 py-2 rounded-md bg-gradient-primary text-white text-sm font-medium">
              月付
            </button>
            <button className="px-4 py-2 rounded-md text-gray-600 text-sm font-medium">
              年付 (省20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative transition-all duration-300 hover:shadow-strong ${
                  plan.popular 
                    ? 'ring-2 ring-brand-primary transform scale-105 shadow-glow' 
                    : 'hover:-translate-y-2 shadow-soft'
                } border-0`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-4 py-1">
                    最受欢迎
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-5xl font-bold text-gray-900">¥{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  
                  <CardDescription className="mt-2 text-gray-600">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-brand-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-primary hover:shadow-glow' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white`}
                    size="lg"
                  >
                    {plan.popular ? '立即开始免费试用' : '选择方案'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            所有方案都包含免费迁移、培训和技术支持
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✓ 无设置费用</span>
            <span>✓ 随时取消</span>
            <span>✓ 30天退款保证</span>
            <span>✓ 免费数据迁移</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;