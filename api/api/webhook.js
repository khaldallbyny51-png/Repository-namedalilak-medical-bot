export default async function handler(req, res) {
 // قبول GET بسيط للاختبار
 if (req.method === 'GET') {
 res.status(200).send('Dalilak Medical Bot webhook endpoint');
 return;
 }
  if (req.method !== 'POST') {
 res.status(405).send('Method Not Allowed');
 return;
  }
  try {

const body = req.body;

if (!body) {

res.status (400).send('No body'); return;

}
    if

inline_que) إذا كان التحديث هو استعلام مضمن (body.inline_query) { const inlineQuery = body.inline_query const queryId = inlineQuery.id;

const BOT_TOKEN = process.env.BOT_TOK

if (!BOT_TOKEN) {

console.error('BOT_TOKEN not config res.status(500).send('Bot token not return;

}

فرص بحثية مميزة

النص العربي المطلوب بالضبط //

const messageText =
  شارك في مشاريع بحثية طبية واكتسب خبرة عملية في إعداد الأبحاث والنشر العلمي

إشراف أكاديمي متخصص

مشاركة فعلية في إعداد الأبحاث

تدريب وإرشاد للباحثين

فرص للنشر في مجلات علمية مفهرسة

تعزيز السيرة الذاتية

تعرف على الفرص البحثية المتاحة
                                                                 النتيجة الواحدة التي سنرسلها للمستخدم //

const result = {

type: 'article',

id: 'dalilak_medical_1',

, فرص بحثية مميزة ' :title

input_message_content:

{

message_text: messageText

reply_markup: { inline_keyboard: [

[

text:

00

Ask Copilot

الفرص البحثية كاملة

الآن

url: 'https://t.me/LEADSTEn
  answerInli الإرسال Telegram API استدعاء //

const answerUrl = `https://api.telegr const params = new URLSearchParams(); params.append('inline_query_id', quer params.append('results', JSON.stringi params.append('cache_time', '0');

const resp = await fetch(answerUrl, { method: 'POST',

});

headers: { 'Content-Type': 'applica body: params.toString()

}

const data = await resp.json();

console.log('answerInlineQuery respon

res.status(200).json({ ok: true }); return;

تجاهل أنواع التحديثات الأخرى //

res.status(200).send('ignored update ty
catch (err) {

console.error(err);

res.status (500).send('Internal Server

Error');

}
}

الغرض هذه هي دالة السير فليس التي ستتلقى طلبات بنتيجة واحدة inline queries وتجيب على Telegram ل - BOTTOKEN لاحظ أن التوكن يقرأ من متغير بيئة تضع التوكن هنا


لا تشارك توكن البوت في المستودع أو في أي مكان عام
