import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алина, 10 класс",
    role: "Москва, школа №1234",
    avatar: "/professional-woman-scientist.png",
    content:
      "Я думала, что ИИ — это просто роботы из кино. Теперь понимаю, что он уже в каждом моём приложении. Это немного пугает, но и восхищает.",
  },
  {
    name: "Дмитрий, 9 класс",
    role: "Санкт-Петербург, гимназия №5",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Узнал, что алгоритм решает, что я вижу в ленте. Теперь по-другому смотрю на соцсети — хочу сам управлять своим вниманием.",
  },
  {
    name: "Мария, учитель информатики",
    role: "Казань, лицей №145",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Отличный ресурс для объяснения сложных тем простым языком. Ученики наконец-то начали задавать правильные вопросы об ИИ.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят ребята</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мнения школьников и учителей, которые уже изучили тему ИИ и общества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}