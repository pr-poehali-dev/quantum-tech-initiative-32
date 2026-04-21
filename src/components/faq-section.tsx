import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Может ли ИИ заменить учителей?",
      answer:
        "ИИ может помочь учителям — автоматически проверять задания, подбирать материалы для каждого ученика, отвечать на вопросы 24/7. Но живое общение, поддержка и вдохновение — это то, что машина заменить не может.",
    },
    {
      question: "Опасно ли использовать ChatGPT для учёбы?",
      answer:
        "Само по себе — нет. Важно понимать, что ИИ может ошибаться и выдавать неточную информацию. Используй его как помощника, но всегда проверяй факты из надёжных источников.",
    },
    {
      question: "Заберёт ли ИИ мою будущую работу?",
      answer:
        "Одни профессии изменятся, другие исчезнут — но появятся новые, которых сегодня ещё нет. Ключевой навык будущего — уметь работать вместе с ИИ, а не против него.",
    },
    {
      question: "Как ИИ узнаёт, что мне показывать в соцсетях?",
      answer:
        "Алгоритмы анализируют, на что ты кликаешь, сколько времени смотришь видео, что лайкаешь. На основе этого они предсказывают, что тебя «зацепит» больше всего — и показывают именно это.",
    },
    {
      question: "Что такое дипфейки и чем они опасны?",
      answer:
        "Дипфейки — это видео или фото, созданные ИИ, где лицо одного человека «наложено» на другого. Их используют для дезинформации и мошенничества. Важно уметь распознавать такой контент.",
    },
    {
      question: "Может ли ИИ быть предвзятым и несправедливым?",
      answer:
        "Да! ИИ учится на данных, созданных людьми — а люди бывают предвзяты. Если в обучающих данных есть дискриминация, алгоритм её воспроизведёт. Поэтому этика ИИ — одна из важнейших тем современности.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Отвечаем на самые популярные вопросы школьников об искусственном интеллекте и его роли в обществе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}