

# אפקט הקלדה אוטומטית ב-JavaScript

הקוד יוצר אנימציה של “הקלדה” אוטומטית: הוא מתחיל ממחרוזת (`'קוד לכיתוב אוטומטי'`) ומוסיף תו אחד בכל פעם לאלמנט עם המחלקה `.heading`. ההשהיה בין תו לתו מתבצעת בעזרת `setTimeout`, והפונקציה קוראת לעצמה רקורסיבית עד שהמחרוזת הושלמה.

## איך זה עובד

1. **הגדרת נתונים**

   * `heading`: המחרוזת שברצוננו “להקליד”.
   * `i`: מונה המתקדם משמאל לימין בתוך המחרוזת.

2. **פונקציית ההקלדה (`typing`)**

   * **תנאי עצירה**: `if (i < heading.length)` — כל עוד לא הגענו לסוף המחרוזת.
   * **הוספת תו**: `document.querySelector('.heading').innerHTML += heading.charAt(i)` — מוסיף את התו הנוכחי לאלמנט ב-DOM.
   * **קידום המונה**: `i++`.
   * **תזמון הצעד הבא**: `setTimeout(typing, 150)` — מזמן את הקריאה הבאה לפונקציה בעוד 150ms.

3. **הפעלה**

   * קריאה ראשונית אחת: `typing()` — מתחילה את הלולאה הרקורסיבית.

> **למה `setTimeout`?**
> כדי ליצור השהיה לא-חוסמת בין כל תו, כך שהדפדפן יכול להמשיך לעבד את העמוד בזמן ההקלדה.

## קוד לדוגמה (JS בלבד)

```js
const heading = 'קוד לכיתוב אוטומטי';
let i = 0;

const typing = () => {
  if (i < heading.length) {
    document.querySelector('.heading').innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
};

typing();
```

## טיפים ושדרוגים (אופציונלי)

* **בטיחות טקסט**: אם המחרוזת מגיעה ממקור חיצוני, העדיפו `textContent` במקום `innerHTML`:

  ```js
  el.textContent += heading.charAt(i);
  ```
* **איפוס לפני התחלה**:

  ```js
  const el = document.querySelector('.heading');
  el.textContent = '';
  ```
* **המתנה ל-DOM מוכן** (אם הסקריפט נטען בראש העמוד):

  ```js
  document.addEventListener('DOMContentLoaded', typing);
  ```
* **שינוי מהירות**: החליפו את `150` לערך אחר (במילישניות) כדי להאיץ/להאט.



<img width="1196" height="430" alt="image" src="https://github.com/user-attachments/assets/4612e2f8-5db3-4266-9c2f-9a2735d16cb6" />

![Uploading image.png…]()

