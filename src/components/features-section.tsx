import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "ИИ в образовании",
    description: "Умные системы адаптируют программу под каждого ученика, помогают объяснять сложные темы и делают обучение интереснее.",
    icon: "brain",
    badge: "Учёба",
  },
  {
    title: "Безопасность в сети",
    description: "ИИ помогает защищать личные данные, распознаёт мошенничество и фейковые новости в интернете.",
    icon: "lock",
    badge: "Защита",
  },
  {
    title: "ИИ и профессии",
    description: "Одни профессии исчезают, другие появляются. Понимание этого сейчас — ключ к успешному будущему.",
    icon: "globe",
    badge: "Карьера",
  },
  {
    title: "Творчество с ИИ",
    description: "Нейросети создают музыку, картины и тексты. Кто автор — человек или машина? Разберёмся вместе.",
    icon: "zap",
    badge: "Творчество",
  },
  {
    title: "Этика и ИИ",
    description: "Может ли машина принимать справедливые решения? Кто несёт ответственность за ошибки алгоритмов?",
    icon: "link",
    badge: "Этика",
  },
  {
    title: "ИИ и здоровье",
    description: "Искусственный интеллект помогает врачам ставить диагнозы точнее и быстрее разрабатывать лекарства.",
    icon: "target",
    badge: "Медицина",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Как ИИ влияет на нашу жизнь</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Искусственный интеллект уже изменил мир — узнай, где и как это происходит прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}