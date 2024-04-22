import React, { useState } from "react";
import styles from "./_Faq.module.scss";
import Link from "next/link";

interface FaqInterface {
  question: string;
  answer: string;
}


const Faqdata = [
  {
    question: "Wo kann ich ipalat® Halspastillen kaufen?",
    answer:
      "ipalat® Halspastillen sind in Apotheken erhältlich. Dort bekommst du nicht nur ein qualitativ hochwertiges Produkt, sondern auch kompetente Beratung zu den einzelnen Varianten und Geschmacksrichtungen.",
  },

  {
    question: "Sind ipalat® Halspastillen vegan?",
    answer:
      "Zum Zeitpunkt meiner letzten Aktualisierung im Januar 2022 habe ich keine spezifischen Informationen über die Inhaltsstoffe von ipalat® Halspastillen, um festzustellen, ob sie vegan sind. Um sicher zu gehen, ist es am besten, die Produktverpackung zu überprüfen oder den Hersteller direkt zu kontaktieren. Sie sollten detaillierte Informationen über die Inhaltsstoffe und eventuelle tierische Bestandteile in den Halspastillen bereitstellen können.",
  },

  {
    question: "Sind ipalat® Halspastillen für Diabetiker:innen geeignet?",
    answer:
      "Die Eignung von ipalat® Halspastillen für Diabetiker:innen hängt von den individuellen Bedürfnissen und den spezifischen Inhaltsstoffen ab. Es wird empfohlen, die Zutatenliste zu überprüfen und gegebenenfalls Rücksprache mit einem Arzt zu halten.",
  },

  {
    question: " Sind ipalat® Halspastillen für Kinder geeignet?",

    answer:
      "Ja, ipalat® Halspastillen sind für Kinder geeignet, jedoch sollten Eltern die Anwendung und Dosierung entsprechend dem Alter und den individuellen Bedürfnissen ihres Kindes beachten. Es wird empfohlen, vor der Verwendung bei Kindern einen Arzt zu konsultieren.",
  },
  {
    question: "Wie viele ipalat® Halspastillen darf ich am Tag lutschen?",

    answer:
      " Die empfohlene Anzahl der ipalat® Halspastillen, die pro Tag gelutscht werden dürfen, kann je nach individuellen Bedürfnissen und den Anweisungen des Herstellers variieren. Es ist wichtig, die Dosierungsanweisungen auf der Verpackung oder die Anweisungen eines Arztes zu beachten.",
  },
  {
    question:
      "Können ipalat® Halspastillen in der Schwangerschaft oder während der Stillzeit eingenommen werden?",

    answer:
      "Während der Schwangerschaft oder Stillzeit sollte vor der Einnahme von ipalat® Halspastillen immer ein Arzt konsultiert werden, um sicherzustellen, dass sie sicher und angemessen sind.",
  },
];

const Faq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
const faqData:FaqInterface[] = Faqdata;
  const handleClick = (question: any) => {
    setOpenQuestion(question === openQuestion ? null : question);
  };

  return (
    <>
      <div className={styles.Faq}>
        <div className="Faq_title">
          <h2>ipalat®</h2>
        </div>

        <div className="Faq_cont">
          {faqData.map((item) => {
            return (
              <div key={item.question}>
                <div
                  className="Faq_cont_ques"
                  onClick={() => handleClick(item.question)}
                >
                  <h3>{item.question}</h3>
                </div>

                {openQuestion === item.question && (
                  <div className="Faq_cont_answer">
                    <p>{item.answer}</p>
                    <div className="Faq_cont_answer_line"></div>
                  </div>
                )}
                {openQuestion !== item.question && (
                  <div className="Faq_cont_mehrbtn">
                    <h2>mehr...</h2>
                  </div>
                )}
                <div className="Faq_cont_hr"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Faq;
