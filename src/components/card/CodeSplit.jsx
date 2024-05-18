import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export class CodeSplit extends Component {
  render() {
    return (
      <div>
        <Card className="w-75 mx-auto my-3 ">
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Code Spliting</Card.Title>
            <Card.Text>
              <div>
                <h1 className="text-primary">Code Splitting Nima?</h1>
                <p>
                  Code splitting — bu ilovaning kodini kichik qismlarga bo'lish
                  amaliyotidir, shunda ularning barchasi bir vaqtning o'zida
                  emas, balki kerak bo'lganda yuklanadi. Bu dastlabki yuklanish
                  vaqtini qisqartiradi va foydalanuvchi tajribasini yaxshilaydi.
                  Code splitting dastlabki yuklab olish vaqtini qisqartiradi va
                  umumiy dastur tezligini oshiradi.
                </p>
                <h2 className="text-primary">
                  Code Splitting Qanday ishlaydi?
                </h2>
                <p>
                  React ilovalari uchun code splitting odatda React.lazy() va
                  Suspense yordamida amalga oshiriladi. Mana qanday qilib:
                </p>
                <p>
                  <h3 className="text-danger">React.lazy():</h3> Bu funktsiya
                  komponentlarni dinamik import qilish imkonini beradi. U
                  yuklanadigan komponentni qabul qiladi va uni yuklashni
                  boshlash uchun import chaqirig'ini qaytaradi. React.lazy
                  komponentni yuklagan paytda qaytaradi va bu komponent qachon
                  bo'lsa ham yuklanadi.
                </p>

                <p>
                  <h3 className="text-danger">Suspense():</h3> Bu komponent
                  React.lazy tomonidan yuklangan komponentlarni o'rab oladi va
                  yuklanish jarayonida fallback komponent (odatda yuklanish
                  spinneri yoki boshqa indikator) ko'rsatadi.
                </p>
              </div>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CodeSplit;
