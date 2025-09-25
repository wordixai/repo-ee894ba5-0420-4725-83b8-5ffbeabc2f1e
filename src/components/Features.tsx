import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Smartphone, 
  Shield, 
  Zap,
  Users,
  CreditCard,
  Settings
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "智能预订管理",
      description: "多平台订单统一管理，自动同步房态，防止超售，智能定价策略",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "客户服务中心",
      description: "24/7智能客服，多语言支持，自动回复常见问题，提升客户满意度",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "数据分析报表",
      description: "实时经营数据，收益分析，入住率统计，市场趋势预测",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "移动端管理",
      description: "随时随地管理民宿，移动应用支持，离线模式，消息推送",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "安全保障",
      description: "银行级加密，数据备份，身份验证，交易安全保护",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Zap,
      title: "自动化流程",
      description: "入住离店自动化，清洁任务分配，库存管理，账单生成",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600"
    },
    {
      icon: Users,
      title: "团队协作",
      description: "多角色权限管理，团队任务分配，内部沟通，工作流程优化",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: CreditCard,
      title: "财务管理",
      description: "收支统计，税务报表，成本分析，利润优化建议",
      color: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      icon: Settings,
      title: "个性化定制",
      description: "灵活配置，自定义模板，API集成，第三方插件支持",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            功能特性
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专为民宿经营者设计的全方位管理解决方案，让每个功能都成为您成功的助力
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft"
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-white/20 text-sm font-medium text-gray-700">
            <Zap className="w-4 h-4 text-yellow-500 mr-2" />
            还有更多强大功能等您发现
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;