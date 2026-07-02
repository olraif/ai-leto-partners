
const CONFIG = {
  contactEmail: "info@ai-leto.ru",
  documents: [
    {group:"Условия", title:"Коммерческое предложение", text:"Коротко о продукте, выгоде и партнерской модели.", url:"docs/commercial-offer.pdf"},
    {group:"Оферта", title:"Оферта для юрлица / ИП", text:"Для организаций, лагерей, санаториев, центров и ИП.", url:"docs/offer-legal-ip.pdf"},
    {group:"Оферта", title:"Оферта для самозанятого / НПД", text:"Для наставников, кураторов и организаторов групп.", url:"docs/offer-npd.pdf"},
    {group:"Персональные данные", title:"Политика обработки персональных данных", text:"Правила обработки данных, указанных в заявке.", url:"docs/privacy-policy.pdf"},
    {group:"Персональные данные", title:"Согласие на обработку персональных данных", text:"Согласие, которое подтверждается при подаче заявки.", url:"docs/personal-data-consent.pdf"},
    {group:"Инструкция", title:"Как подать заявку на промокод", text:"Порядок подключения и получения промокода.", url:"docs/promo-application-instruction.pdf"},
    {group:"Форматы", title:"Два варианта сотрудничества", text:"Что предоставить юрлицу / ИП и что предоставить самозанятому.", url:"docs/partner-options-memo.pdf"},
    {group:"Договор", title:"Договор для юрлица / ИП", text:"Шаблон договора оказания рекламно-информационных услуг.", url:"docs/service-contract-legal-ip.pdf"},
    {group:"Договор", title:"Договор для самозанятого / НПД", text:"Шаблон договора оказания информационно-рекламных услуг.", url:"docs/service-contract-npd.pdf"}
  ],
  materials: [
    {group:"Пакет", title:"Скачать все материалы одним архивом", text:"Документы, постеры, письма и сообщения для запуска.", url:"materials/AI_Leto_partner_docs_and_materials_full.zip"},
    {group:"Постер", title:"Постер для родителей", text:"Для родительских чатов и рассылок.", url:"materials/poster-for-parents.pdf"},
    {group:"Постер", title:"Постер для партнера", text:"Для знакомства команды с предложением.", url:"materials/poster-for-partner.pdf"},
    {group:"Письмо", title:"Письмо родителям", text:"Готовый текст в PDF.", url:"materials/parent-letter.pdf"},
    {group:"Письмо", title:"Письмо родителям DOCX", text:"Редактируемая версия письма.", url:"materials/parent-letter.docx"},
    {group:"Чат", title:"Сообщение в родительский чат", text:"Короткий текст для быстрой рассылки.", url:"materials/parent-chat-message.txt"},
    {group:"Команда", title:"Сообщение для руководителей отрядов", text:"Для координаторов, воспитателей и командиров отрядов.", url:"materials/squad-leaders-message.txt"}
  ]
};

function renderCards(targetId, items){
  const target = document.getElementById(targetId);
  if(!target) return;
  target.innerHTML = items.map(item => `
    <article class="download-card">
      <span class="tag">${item.group}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <a class="btn" href="${item.url}" target="_blank" rel="noopener">Открыть / скачать</a>
    </article>`).join('');
}
renderCards('docsGrid', CONFIG.documents);
renderCards('materialsGrid', CONFIG.materials);

const emailApplication = document.getElementById('emailApplication');
if(emailApplication){
  const subject = encodeURIComponent('Заявка на партнерский промокод AI-Лето');
  const body = encodeURIComponent(
    'Здравствуйте! Хочу получить партнерский промокод AI-Лето.\n\n' +
    'Название и тип организации: \n' +
    'Город / регион: \n' +
    'Контактное лицо: \n' +
    'Примерное количество родителей / детей: \n' +
    'Желаемый промокод: \n' +
    'Комментарий: '
  );
  emailApplication.href = `mailto:${CONFIG.contactEmail}?subject=${subject}&body=${body}`;
}
