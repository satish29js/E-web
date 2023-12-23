import React from "react";
import styled from "styled-components";

function Contect() {
  return (
    <Wrapper>
      <h2 className="common-heading">Contect Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29374.669148264256!2d72.45315631334039!3d23.029879562227297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b75604775f5%3A0x930b2fbd58ee51b3!2sBrilliant%20Computer%20Education!5e0!3m2!1sen!2sin!4v1699275061620!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>



      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xyyqvneg" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              id=""
              placeholder="username"
              required
              autoComplete="off"
              // value=""
            />

            <input
              type="text"
              name="Email"
              id=""
              autoComplete="off"
              placeholder="Email"
              required
              // value=""
            />

            <textarea
              name="Message"
              placeholder="Enter Your Message"
              id=""
              cols="30"
              rows="10"
              autoComplete="off"
            ></textarea>


            <input type="submit" name="" id="" value="send"/>


          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contect;
