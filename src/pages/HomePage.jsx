import React, { Component } from "react";
import Counter from "../components/shares/Counter";
import CodeSplit from "../components/card/CodeSplit";
import { Tab, Tabs } from "react-bootstrap";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      mounting: true,
      showMore: false, // Yangi state qo'shiladi
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  toggle = () => {
    this.setState({ mounting: !this.state.mounting });
  };

  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    console.log("Render");
    const { mounting, showMore } = this.state;

    return (
      <div className="container">
        {/* <section>
          <div className="container">
            <h1>HomePage</h1>
            <button onClick={this.toggle}>Toggle</button>
            {mounting && <Counter />}
          </div>
        </section> */}

        <div className="w-100 d-flex  gap-3 flex-column my-3 flex-md-row align-items-center">
          <div className="w-100 text-center text-sm-start">
            <h1>React.js</h1> — bu veb-foydalanuvchi interfeyslari (UI) yaratish
            uchun JavaScript kutubxonasi. Facebook tomonidan ishlab chiqilgan va
            hozirda ochiq manbali (open source) sifatida foydalaniladi. React
            veb-ilovalarda dinamik va samarali foydalanuvchi interfeyslarini
            yaratishga yordam beradi. Quyida React.js haqida batafsil ma'lumot
            va uning qanday ishlashi haqida tushuntirish berilgan.
            <h1>React.js'ning Asosiy Xususiyatlari</h1>
            <p className={showMore ? "d-block" : "d-none"}>
              Component-Based Architecture (Komponentga asoslangan arxitektura):
              React'da hamma narsa komponentlarda bo'linadi. Komponentlar
              mustaqil, qayta ishlatilishi mumkin bo'lgan UI bo'laklari
              hisoblanadi. Har bir komponent o'zining alohida davlatiga (state)
              va xususiyatlariga (props) ega bo'lishi mumkin. Virtual DOM
              (Virtual Document Object Model): React Virtual DOM'dan
              foydalanadi, bu haqiqiy DOM bilan solishtirganda ancha tez
              ishlaydi. Virtual DOM haqiqiy DOMning yengil nusxasi bo'lib,
              undagi o'zgarishlar dastlab Virtual DOM'da amalga oshiriladi,
              so'ngra faqat kerakli o'zgarishlar haqiqiy DOMga qo'llaniladi.
              Declarative Programming (Deklarativ dasturlash): React deklarativ
              dasturlash usulini qo'llaydi, bu orqali siz qanday interfeys
              bo'lishini belgilaysiz va React ushbu holatni yaratadi va
              yangilaydi. Bu kodni sodda va tushunarli qiladi. JSX (JavaScript
              XML): JSX — bu JavaScript kodida HTML kabi sintaksisdan
              foydalanishga imkon beruvchi kengaytma. JSX React'da
              komponentlarni yaratishni osonlashtiradi va kodni ancha o'qilishi
              oson qiladi.
            </p>
            <button className="btn btn-primary" onClick={this.toggleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="w-100">
            <img
              className="w-100"
              src="https://www.clavistechnologies.com/wp-content/uploads/2021/08/react-js-1080x675.png"
              alt="React.js"
            />
          </div>
        </div>

        <Tabs
          defaultActiveKey="codesplit"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
          variant="pills"
        >
          <Tab eventKey="codesplit" title="CodeSplit">
            <CodeSplit />
          </Tab>
          <Tab eventKey="lifecycle" title="Lifecycle methods">
            Tab content for Lifecycle methods
          </Tab>
          <Tab eventKey="apiworking" title="API in Class Component">
            Tab content for API in Class Component
          </Tab>
        </Tabs>

        <section></section>
      </div>
    );
  }
}

export default HomePage;
