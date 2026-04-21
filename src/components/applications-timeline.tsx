import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Вчера: ИИ в фантастике",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Десятилетиями ИИ существовал только в книгах и фильмах — как Терминатор или HAL 9000.
            Люди боялись и мечтали о нём одновременно. Это время заложило наши ожидания от умных машин.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Роботы в кино пугали и восхищали
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Шахматные программы побеждали чемпионов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Первые голосовые помощники появились в телефонах
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сегодня: ИИ повсюду",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Сегодня ИИ — это не будущее, а настоящее. Он в твоём смартфоне, в рекомендациях YouTube,
            в фильтрах соцсетей и даже в экзаменационных проверяющих системах.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ChatGPT, Midjourney, Sora — инструменты для всех
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Алгоритмы решают, что ты видишь в ленте
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Врачи используют ИИ для диагностики рака
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Завтра: твой выбор",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Твоё поколение будет решать, каким станет ИИ: инструментом свободы или контроля.
            Понимать технологию — значит управлять ею, а не подчиняться ей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Новые профессии: промпт-инженер, ИИ-этик, датасайентист
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Законы и права в цифровом мире
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Люди + ИИ = партнёрство, не конкуренция
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">От фантастики к реальности</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            История ИИ — это история человечества. Посмотрим, как мы шли от роботов в кино
            к алгоритмам, которые меняют каждый день нашей жизни.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}