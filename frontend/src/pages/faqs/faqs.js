import React from 'react';
import './FAQsPage.css';
import Navbar from '../../components/navbar';

const questionsAndAnswers = [
  {
    question: 'What is the event about?',
    answer: 'The event is about showcasing the latest technologies and innovations in the industry.',
  },
  {
    question: 'How can I register for the event?',
    answer: 'You can register for the event by filling out the registration form on our website.',
  },
  {
    question: 'What are the dates for the event?',
    answer: 'The event will be held from June 15th to June 17th.',
  },
  {
    question: 'Is there a cost to attend the event?',
    answer: 'No, attendance to the event is free.',
  },
  {
    question: 'Can I bring a guest to the event?',
    answer: 'No, the event is only open to registered attendees.',
  },
];

const FAQ = ({ question, answer }) => {
  return (
    <div className="faq">
      <div className="faqQuestion">{question}</div>
      <div className="faqAnswer">{answer}</div>
    </div>
  );
};

const FAQsPage = () => {
  return (
    <div>
     <Navbar/>

      <div className="faqsPage">

        <div className="faqsHeader">Frequently Asked Questions</div>
        <div className="faqs">
          {questionsAndAnswers.map((qa, index) => (
            <FAQ key={index} question={qa.question} answer={qa.answer} />
          ))}
        </div>
      </div></div>
  );
};

export default FAQsPage;
