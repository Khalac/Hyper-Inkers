import React, { useState, useRef, useEffect } from "react";
import "./FAQ.scss";
import { FiPlus } from "react-icons/fi";

import BG from "../../assets/ImgMobile/Background/MainBG.png";

function FAQ() {
  console.log("hello");
  const [active1, setActive1] = useState(false);
  const contentRef1 = useRef(null);
  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);
  const toggleAccordion1 = () => {
    if (
      (active2 !== true && active1 === false) ||
      (active3 !== true && active1 === false) ||
      (active4 !== true && active1 === false) ||
      (active5 !== true && active1 === false) ||
      (active6 !== true && active1 === false) ||
      (active7 !== true && active1 === false) ||
      (active8 !== true && active1 === false) ||
      (active9 !== true && active1 === false)
    ) {
      setActive1(!active1);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive1(!active1);
  };

  const [active2, setActive2] = useState(false);
  const contentRef2 = useRef(null);
  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);
  const toggleAccordion2 = () => {
    if (
      (active1 !== true && active2 === false) ||
      (active3 !== true && active2 === false) ||
      (active4 !== true && active2 === false) ||
      (active5 !== true && active2 === false) ||
      (active6 !== true && active2 === false) ||
      (active7 !== true && active2 === false) ||
      (active8 !== true && active2 === false) ||
      (active9 !== true && active2 === false)
    ) {
      setActive1(false);
      setActive2(!active2);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive2(!active2);
  };

  const [active3, setActive3] = useState(false);
  const contentRef3 = useRef(null);
  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);
  const toggleAccordion3 = () => {
    if (
      (active1 !== true && active3 === false) ||
      (active2 !== true && active3 === false) ||
      (active4 !== true && active3 === false) ||
      (active5 !== true && active3 === false) ||
      (active6 !== true && active3 === false) ||
      (active7 !== true && active3 === false) ||
      (active8 !== true && active3 === false) ||
      (active9 !== true && active3 === false)
    ) {
      setActive3(!active3);
      setActive2(false);
      setActive1(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive3(!active3);
  };

  const [active4, setActive4] = useState(false);
  const contentRef4 = useRef(null);
  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);
  const toggleAccordion4 = () => {
    if (
      (active1 !== true && active4 === false) ||
      (active3 !== true && active4 === false) ||
      (active2 !== true && active4 === false) ||
      (active5 !== true && active4 === false) ||
      (active6 !== true && active4 === false) ||
      (active7 !== true && active4 === false) ||
      (active8 !== true && active4 === false) ||
      (active9 !== true && active4 === false)
    ) {
      setActive4(!active4);
      setActive2(false);
      setActive3(false);
      setActive1(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive4(!active4);
  };

  const [active5, setActive5] = useState(false);
  const contentRef5 = useRef(null);
  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);
  const toggleAccordion5 = () => {
    if (
      (active2 !== true && active5 === false) ||
      (active3 !== true && active5 === false) ||
      (active4 !== true && active5 === false) ||
      (active1 !== true && active5 === false) ||
      (active6 !== true && active5 === false) ||
      (active7 !== true && active5 === false) ||
      (active8 !== true && active5 === false) ||
      (active9 !== true && active5 === false)
    ) {
      setActive5(!active5);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive5(!active5);
  };

  const [active6, setActive6] = useState(false);
  const contentRef6 = useRef(null);
  useEffect(() => {
    contentRef6.current.style.maxHeight = active6
      ? `${contentRef6.current.scrollHeight}px`
      : "0px";
  }, [contentRef6, active6]);
  const toggleAccordion6 = () => {
    if (
      (active2 !== true && active6 === false) ||
      (active3 !== true && active6 === false) ||
      (active4 !== true && active6 === false) ||
      (active1 !== true && active6 === false) ||
      (active5 !== true && active6 === false) ||
      (active7 !== true && active6 === false) ||
      (active8 !== true && active6 === false) ||
      (active9 !== true && active6 === false)
    ) {
      setActive6(!active6);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(false);
      setActive5(false);
      setActive7(false);
      setActive8(false);
      setActive9(false);
    } else setActive6(!active6);
  };

  const [active7, setActive7] = useState(false);
  const contentRef7 = useRef(null);
  useEffect(() => {
    contentRef7.current.style.maxHeight = active7
      ? `${contentRef7.current.scrollHeight}px`
      : "0px";
  }, [contentRef7, active7]);
  const toggleAccordion7 = () => {
    if (
      (active2 !== true && active7 === false) ||
      (active3 !== true && active7 === false) ||
      (active4 !== true && active7 === false) ||
      (active1 !== true && active7 === false) ||
      (active5 !== true && active7 === false) ||
      (active6 !== true && active7 === false) ||
      (active8 !== true && active7 === false) ||
      (active9 !== true && active7 === false)
    ) {
      setActive7(!active7);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(false);
      setActive5(false);
      setActive6(false);
      setActive8(false);
      setActive9(false);
    } else setActive7(!active7);
  };

  const [active8, setActive8] = useState(false);
  const contentRef8 = useRef(null);
  useEffect(() => {
    contentRef8.current.style.maxHeight = active8
      ? `${contentRef8.current.scrollHeight}px`
      : "0px";
  }, [contentRef8, active8]);
  const toggleAccordion8 = () => {
    if (
      (active2 !== true && active8 === false) ||
      (active3 !== true && active8 === false) ||
      (active4 !== true && active8 === false) ||
      (active1 !== true && active8 === false) ||
      (active5 !== true && active8 === false) ||
      (active6 !== true && active8 === false) ||
      (active7 !== true && active8 === false) ||
      (active9 !== true && active8 === false)
    ) {
      setActive8(!active8);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive9(false);
    } else setActive8(!active8);
  };

  const [active9, setActive9] = useState(false);
  const contentRef9 = useRef(null);
  useEffect(() => {
    contentRef9.current.style.maxHeight = active9
      ? `${contentRef9.current.scrollHeight}px`
      : "0px";
  }, [contentRef9, active9]);
  const toggleAccordion9 = () => {
    if (
      (active2 !== true && active9 === false) ||
      (active3 !== true && active9 === false) ||
      (active4 !== true && active9 === false) ||
      (active1 !== true && active9 === false) ||
      (active5 !== true && active9 === false) ||
      (active6 !== true && active9 === false) ||
      (active7 !== true && active9 === false) ||
      (active8 !== true && active9 === false)
    ) {
      setActive9(!active9);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive1(false);
      setActive5(false);
      setActive6(false);
      setActive7(false);
      setActive8(false);
    } else setActive9(!active9);
  };

  return (
    <div className="FAQ" id="FAQ">
      <img src={BG} alt="" className="FAQ_BG" />
      <div className="FAQ_Name">FREQUENTLY ASKED QUESTION</div>
      <div className="FAQ_Ques">
        Here are some common questions about HYPER INKER Tattoo Studio
      </div>
      <div className="FAQ_Ques_Ans">
        <button
          className={`question-section ${active1}`}
          onClick={toggleAccordion1}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                HOW OLD DO YOU HAVE TO BE TO GET A TATTOO?
              </h4>
              <FiPlus
                className={active1 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef1}
              className={active1 ? `answer answer-divider` : `answer`}
            >
              <p>
                You have to be 18 years old to get tattooed in the state of
                Texas.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active2}`}
          onClick={toggleAccordion2}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                HOW DO I SCHEDULE AN APPOINTMENT FOR A TATTOO?
              </h4>
              <FiPlus
                className={active2 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef2}
              className={active2 ? `answer answer-divider` : `answer`}
            >
              <p>
                You can contact directly through one of the studio's information
                for the most detailed discussion.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active3}`}
          onClick={toggleAccordion3}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                WHAT FORMS OF PAYMENT ARE ACCEPTED?
              </h4>
              <FiPlus
                className={active3 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef3}
              className={active3 ? `answer answer-divider` : `answer`}
            >
              <p>We only accept cash.</p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active4}`}
          onClick={toggleAccordion4}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                HOW SHOULD I PREPARE FOR A TATTOO?
              </h4>
              <FiPlus
                className={active4 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef4}
              className={active4 ? `answer answer-divider` : `answer`}
            >
              <p>
                Make sure you eat and are well hydrated. Also make sure you are
                dressed accordingly to the placement you are getting your
                tattoo.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active5}`}
          onClick={toggleAccordion5}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">HOW PAINFUL ARE TATTOOS?</h4>
              <FiPlus
                className={active5 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef5}
              className={active5 ? `answer answer-divider` : `answer`}
            >
              <p>
                Each person's pain tolerance is different. There are differences
                in pain levels at each location on the body.
              </p>
              <p>
                It is difficult to describe the exact pain. But it's definitely
                not easy. But in the end, it will be worth it after completing
                the work.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active6}`}
          onClick={toggleAccordion6}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">HOW MUCH DO TATTOOS COST?</h4>
              <FiPlus
                className={active6 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef6}
              className={active6 ? `answer answer-divider` : `answer`}
            >
              <p>
                Since tattoo artists provide a service, typically quoting
                factors such as size and details vary from person to person.
              </p>
              <p>
                It is always best to consult with the artist in person to
                discuss details and get an accurate quote based on the
                customized tattoo you are wanting.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active7}`}
          onClick={toggleAccordion7}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                HOW LONG DOES IT TAKE FOR MY TATTOO TO HEAL?
              </h4>
              <FiPlus
                className={active7 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef7}
              className={active7 ? `answer answer-divider` : `answer`}
            >
              <p>
                It usually takes 10-15 days for the external healing process.
                Customers will be provide proper aftercare instructions once he
                is done tattooing.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active8}`}
          onClick={toggleAccordion8}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                WHAT SHOULD I AVOID WHILE MY TATTOO IS HEALING?
              </h4>
              <FiPlus
                className={active8 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef8}
              className={active8 ? `answer answer-divider` : `answer`}
            >
              <p>
                Proper aftercare is necessary to avoid infections or scarring.
              </p>
              <p>
                Avoid touching, picking or scratching the tattoo, placing your
                tattoo into bodies of water, places like lakes, rivers, bath
                tubs carry bacteria and exposing your tattoo to sunlight as much
                as possible, a sunburn can definitely interfere with the healing
                process of your tattoo.
              </p>
            </div>
          </div>
        </button>
        <button
          className={`question-section ${active9}`}
          onClick={toggleAccordion9}
        >
          <div>
            <div className="question-align">
              <h4 className="question-style">
                WHAT IS THE AFTERCARE FOR A TATTOO?
              </h4>
              <FiPlus
                className={active9 ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef9}
              className={active9 ? `answer answer-divider` : `answer`}
            >
              <p>
                Remove covering and wash with warm water and antibacterial soap.
                Don't scrub, but be sure to remove any blood or dry ink. Pat
                dry, then apply a small amount of antibiotic cream or lotion and
                rub in until completely dissolved into the skin. Do this 3-5
                times per day for the first week. DO NOT scratch or peel off the
                scab. Do not soak in water, avoid exposure to the sun. Use
                sterile bandages if needed. Continue to apply lotion until skin
                is completely healed and smooth. Any touchups can be done once
                tattoo is completely healed. (4-6 weeks). Ibuprofen or other
                NSAID (use as directed on bottle) will help reduce swelling.
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default FAQ;
