// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او
let age = 16;
function driving(age) {
  if (age > 18) {
    console.log("مبوك سوف تحصل على الليسن");
  } else if (age < 18) {
    console.log("للاسف عمرك لا يسمح");
  }
}

driving(age);

// لا تنسى أن تنادي الدالة

// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

let icecream = ["chocolate", "vanilla", "strawberry"];

// 👇 هنا array عرف المصفوفة او

function myicecream() {
  console.log(icecream);
}
myicecream();

for (const x of icecream) {
  console.log(x);
}
// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

let movies = ["spongebob", "avatar", "batman"];
for (const y of movies) {
  console.log(y);
}

let i = 0;
let text = "";

while (i < 5) {
  text = "The movie is " + movies[i];
  i++;
  console.log(text);
}

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام
