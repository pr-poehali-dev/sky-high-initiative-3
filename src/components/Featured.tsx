export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4eeeeaa4-2075-4f1c-a042-9a5b4835131f/files/05d80ef8-24ed-4a9d-83f5-c0efc595af5c.jpg"
          alt="Мастер Кристина Дьякова"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Авторский подход</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждая работа — это уникальный диалог между мастером и клиентом. Готика, графика, орнамент, тёмная акварель — Кристина воплотит любую идею с безупречной точностью.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700 text-sm uppercase tracking-wide">
            <span className="w-1 h-1 bg-red-500 rounded-full" /> Gothic & Dark Art
          </div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm uppercase tracking-wide">
            <span className="w-1 h-1 bg-red-500 rounded-full" /> Графика & Линейная работа
          </div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm uppercase tracking-wide">
            <span className="w-1 h-1 bg-red-500 rounded-full" /> Орнаментальные тату
          </div>
          <div className="flex items-center gap-3 text-neutral-700 text-sm uppercase tracking-wide">
            <span className="w-1 h-1 bg-red-500 rounded-full" /> Тёмная акварель
          </div>
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Записаться на сеанс
        </button>
      </div>
    </div>
  );
}