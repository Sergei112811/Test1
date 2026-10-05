import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Check,
  FileCheck2,
  Fuel,
  Gauge,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  Truck,
  UserCheck,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

const phone = "+7 (965) 202-88-73";

const faqs = [
  ["На какой срок можно взять автомобиль?", "От одного дня до одного года. Для нового клиента первая неделя оплачивается заранее."],
  ["Есть ли ограничение пробега?", "Нет. Пробег по России не ограничен, доплаты за километры нет."],
  ["Нужен ли залог?", "Нет, автомобили предоставляются без залога."],
  ["Можно ли ездить в другие регионы?", "Да, автомобиль можно использовать по всей России."],
  ["Кто может управлять автомобилем?", "Только водитель, указанный в договоре и допущенный к управлению по ОСАГО."],
  ["Что входит в аренду?", "ОСАГО, плановое обслуживание и ремонт поломок, возникших не по вине арендатора."],
  ["Есть ли КАСКО?", "Нет. Ответственность при ДТП и повреждении автомобиля фиксируется в договоре."],
  ["Где получить машину?", "В Москве, в районе Люблино. Точное место сообщается после согласования аренды."],
  ["Как быстро можно получить автомобиль?", "При наличии свободной машины — обычно на следующий день после обращения."],
  ["Можно ли продлить аренду дистанционно?", "Да. Срок согласовывается, после чего подписывается новый договор."],
];

function VehicleDrawing({ large = false }: { large?: boolean }) {
  return (
    <svg className="vehicle-drawing" viewBox="0 0 560 230" role="img" aria-label={large ? "Схема вместительного фургона" : "Схема компактного фургона"}>
      <path className="vehicle-fill" d={large ? "M45 58h328l87 58h48v61H45z" : "M52 91h262l64-48h83l47 78v56H52z"} />
      <path className="vehicle-line" d={large ? "M45 58h328l87 58h48v61H45V58Zm328 0v59h87L373 58Z" : "M52 91h262l64-48h83l47 78v56H52V91Zm262 0v86m64-134v78h130"} />
      <circle className="wheel" cx="153" cy="178" r="34" />
      <circle className="wheel-hub" cx="153" cy="178" r="12" />
      <circle className="wheel" cx="425" cy="178" r="34" />
      <circle className="wheel-hub" cx="425" cy="178" r="12" />
      <path className="vehicle-detail" d="M73 116h52m355 22h22" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На главную">
          <span className="brand-mark"><Route aria-hidden="true" /></span>
          <span>Фургоны<br /><b>без лимита</b></span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#vehicles">Автомобили</a>
          <a href="#terms">Условия</a>
          <a href="#steps">Как получить</a>
        </nav>
        <a className="header-phone" href="tel:+79652028873"><Phone aria-hidden="true" /> {phone}</a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span>Москва · Люблино</span> Аренда без водителя</p>
            <h1>Автомобиль для работы — <em>без залога</em> и лимита пробега</h1>
            <p className="hero-lead">LADA Largus или УАЗ Профи для доставки и перевозок. Ездите по всей России без доплаты за километры.</p>
            <div className="hero-facts" aria-label="Основные условия">
              <span><BadgeCheck aria-hidden="true" /> Без залога</span>
              <span><Gauge aria-hidden="true" /> Пробег без ограничений</span>
              <span><FileCheck2 aria-hidden="true" /> От 1 дня до года</span>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#request">Узнать, какая машина свободна <ArrowRight aria-hidden="true" /></a>
              <a className="button button-ghost" href="tel:+79652028873"><Phone aria-hidden="true" /> {phone}</a>
            </div>
            <p className="hero-note">Выдача после проверки документов, договора и внесения водителя в ОСАГО. Обычно — на следующий день.</p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="route-card route-start"><MapPin /> <span>Старт<br /><b>Люблино</b></span></div>
            <div className="route-line"><span /><span /><span /></div>
            <div className="route-card route-end"><Route /> <span>Маршрут<br /><b>Вся Россия</b></span></div>
            <div className="hero-vehicle"><VehicleDrawing large /></div>
            <p className="visual-caption">0 ₽ за перепробег</p>
          </div>
          <a className="scroll-cue" href="#route"><ArrowDown aria-hidden="true" /> Смотрите условия</a>
        </section>

        <section className="route-section" id="route">
          <div className="section-shell route-layout">
            <div>
              <p className="section-index">01 / Главное отличие</p>
              <h2>Планируйте маршрут, а не оставшиеся километры</h2>
            </div>
            <div className="route-copy">
              <p>У аренды нет суточного лимита пробега. Можно работать в Москве, области и выезжать в другие регионы России без доплаты за каждый километр.</p>
              <div className="contract-proof"><FileCheck2 aria-hidden="true" /><span>Безлимитный пробег фиксируется <b>в договоре аренды</b></span></div>
              <a className="text-link" href="#request">Получить условия аренды <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="vehicles section-shell" id="vehicles">
          <div className="section-heading">
            <p className="section-index">02 / Автомобили</p>
            <h2>Два фургона.<br />Два масштаба работы.</h2>
            <p>Расскажите, что планируете перевозить, — поможем выбрать подходящую машину.</p>
          </div>

          <div className="vehicle-grid">
            <article className="vehicle-card vehicle-compact">
              <div className="vehicle-card-top"><span className="vehicle-number">01</span><span className="availability">1 автомобиль</span></div>
              <VehicleDrawing />
              <p className="vehicle-type">Компактный фургон</p>
              <h3>LADA Largus</h3>
              <p className="vehicle-description">Для городской доставки и небольших партий груза.</p>
              <dl>
                <div><dt>Год</dt><dd>2018</dd></div>
                <div><dt>Грузоподъёмность</dt><dd>до 750 кг <small>нужно подтвердить</small></dd></div>
                <div><dt>Внешние габариты</dt><dd>4,48 × 1,73 × 1,62 м</dd></div>
                <div><dt>Права</dt><dd>Категория B</dd></div>
              </dl>
              <a className="button button-dark" href="#request">Узнать доступность <ArrowRight aria-hidden="true" /></a>
            </article>

            <article className="vehicle-card vehicle-large">
              <div className="vehicle-card-top"><span className="vehicle-number">02</span><span className="availability">1 автомобиль</span></div>
              <VehicleDrawing large />
              <p className="vehicle-type">Вместительный фургон</p>
              <h3>УАЗ Профи</h3>
              <p className="vehicle-description">Для более тяжёлых и объёмных грузов.</p>
              <dl>
                <div><dt>Грузоподъёмность</dt><dd>до 1,5 тонны</dd></div>
                <div><dt>Внешние размеры фургона</dt><dd>3 × 2 × 1,8 м</dd></div>
                <div><dt>Пробег</dt><dd>Без ограничений</dd></div>
                <div><dt>Права</dt><dd>Категория B</dd></div>
              </dl>
              <a className="button button-primary" href="#request">Узнать доступность <ArrowRight aria-hidden="true" /></a>
            </article>
          </div>
          <p className="section-disclaimer">Окончательный выбор зависит от массы и размеров груза. Перегруз и перевозка запрещённых грузов не допускаются.</p>
        </section>

        <section className="terms" id="terms">
          <div className="section-shell">
            <div className="section-heading heading-light">
              <p className="section-index">03 / Расходы</p>
              <h2>Условия без мелкого шрифта</h2>
              <p>До подписания договора понятно, за что отвечает каждая сторона.</p>
            </div>
            <div className="terms-grid">
              <article className="term-card included">
                <div className="term-title"><Check aria-hidden="true" /><h3>Входит в аренду</h3></div>
                <ul>
                  <li><ShieldCheck aria-hidden="true" /><span>ОСАГО с внесением арендатора</span></li>
                  <li><Wrench aria-hidden="true" /><span>Плановое обслуживание</span></li>
                  <li><Truck aria-hidden="true" /><span>Ремонт поломок не по вине арендатора</span></li>
                  <li><Gauge aria-hidden="true" /><span>Безлимитный пробег по России</span></li>
                </ul>
              </article>
              <article className="term-card excluded">
                <div className="term-title"><X aria-hidden="true" /><h3>Оплачивает арендатор</h3></div>
                <ul>
                  <li><Fuel aria-hidden="true" /><span>Топливо</span></li>
                  <li><WalletCards aria-hidden="true" /><span>Штрафы, парковки и платные дороги</span></li>
                  <li><Truck aria-hidden="true" /><span>Эвакуацию</span></li>
                  <li><Wrench aria-hidden="true" /><span>Ущерб при повреждении по своей вине</span></li>
                </ul>
              </article>
            </div>
            <p className="insurance-note"><ShieldCheck aria-hidden="true" /><span>КАСКО у автомобилей нет. Ответственность сторон и порядок действий при ДТП фиксируются в договоре.</span></p>
          </div>
        </section>

        <section className="requirements section-shell">
          <div className="requirement-intro">
            <p className="section-index">04 / Требования</p>
            <h2>Проверьте, подходят ли вам условия</h2>
            <p>Документы не нужно отправлять через сайт. Проверка проводится отдельно перед подписанием договора.</p>
          </div>
          <div className="requirement-list">
            {["Гражданство РФ", "Возраст от 25 лет", "Стаж от 2 лет", "Категория B", "Паспорт и права", "Регистрация в России"].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><Check aria-hidden="true" /></div>
            ))}
          </div>
        </section>

        <section className="steps" id="steps">
          <div className="section-shell">
            <div className="section-heading">
              <p className="section-index">05 / Получение</p>
              <h2>Сегодня обращение.<br />Обычно завтра — машина.</h2>
            </div>
            <ol className="step-list">
              <li><span>01</span><div><h3>Заявка</h3><p>Указываете даты, срок и нужный автомобиль.</p></div></li>
              <li><span>02</span><div><h3>Условия</h3><p>Подтверждаем доступность, стоимость и присылаем реальные фото.</p></div></li>
              <li><span>03</span><div><h3>Документы</h3><p>Проверяем паспорт и права, согласовываем договор и ОСАГО.</p></div></li>
              <li><span>04</span><div><h3>Получение</h3><p>Подписываем акт, осматриваем автомобиль и передаём его в Люблино.</p></div></li>
            </ol>
            <p className="step-note"><MapPin aria-hidden="true" /> Выдача в Москве, район Люблино, при наличии свободного автомобиля.</p>
          </div>
        </section>

        <section className="payment section-shell">
          <div className="payment-title">
            <p className="section-index">06 / Оплата</p>
            <h2>От одного дня<br />до одного года</h2>
          </div>
          <div className="payment-copy">
            <p className="payment-lead">Новый клиент оплачивает первую неделю заранее. Затем по согласованию можно перейти на оплату в конце недели.</p>
            <ul>
              <li><Check /> Наличный и безналичный расчёт</li>
              <li><Check /> Продление дистанционно по новому договору</li>
              <li><Check /> Условия оплаты фиксируются в договоре</li>
            </ul>
            <div className="price-note"><span>Стоимость</span><p>Зависит от автомобиля и срока. Точную сумму сообщим до оформления договора.</p></div>
            <a className="text-link" href="#request">Рассчитать аренду <ArrowRight /></a>
          </div>
        </section>

        <section className="incident">
          <div className="section-shell incident-layout">
            <div>
              <p className="section-index">07 / ДТП и поломки</p>
              <h2>Понятный порядок действий</h2>
              <p>При ДТП остановитесь, действуйте по ПДД и сразу сообщите арендодателю. Не начинайте ремонт без согласования.</p>
            </div>
            <div className="incident-cards">
              <article><UserCheck /><h3>Арендатор не виноват</h3><p>Расходы несёт арендодатель. Дни ремонта не включаются в аренду — проводится перерасчёт.</p></article>
              <article><Wrench /><h3>Повреждение по вине арендатора</h3><p>Арендатор возмещает ущерб в порядке, установленном договором. Дни ремонта не компенсируются.</p></article>
            </div>
          </div>
          <p className="legal-note section-shell">Точный порядок оформления ДТП, оценки ущерба и ответственности сторон требует проверки юристом.</p>
        </section>

        <section className="faq section-shell">
          <div className="faq-title"><p className="section-index">08 / Вопросы</p><h2>Коротко о важном</h2></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section className="request" id="request">
          <div className="section-shell request-layout">
            <div className="request-copy">
              <p className="section-index">09 / Заявка</p>
              <h2>Какая машина свободна на ваши даты?</h2>
              <p>Уточним задачу, подтвердим доступность и сообщим стоимость до оформления договора.</p>
              <div className="request-promise"><Phone /><span>Можно не ждать ответа формы:<br /><a href="tel:+79652028873">{phone}</a></span></div>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <div className="brand"><span className="brand-mark"><Route /></span><span>Фургоны<br /><b>без лимита</b></span></div>
        <p>Аренда LADA Largus и УАЗ Профи без водителя.<br />Москва, район Люблино.</p>
        <a href="tel:+79652028873">{phone}</a>
        <p className="footer-legal">Информация на сайте не является публичной офертой. Итоговые условия фиксируются в договоре.</p>
      </footer>

      <div className="mobile-bar">
        <a href="tel:+79652028873"><Phone /> Позвонить</a>
        <a href="#request">Узнать доступность</a>
      </div>
    </>
  );
}
