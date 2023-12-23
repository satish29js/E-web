import React from 'react'
import styled from 'styled-components';

function Trusted() {
  return (
    <Wrapper>
 <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8xefr2G6YFFCOMKv10FM7zH9o_ix1fEgMfFtbgIfo-VTa9Zyty9SR_T01VuT0IWQA7A&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0uILkRaNFMbhV3uqlQB1X3yFf_eP-U738zTAW3WZ35JLbKTGTelCEOMmyjwjdANqMLuA&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLiclMgkLfvz2NvmLhAIQK1FxBlW1t475ddJtyYLuYXJrQWT2eyAcYE7utRgB3BOJrJGc&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FM6CmDH2crMDi3XpVeJWeTV6PQU4bC8YfpuHF1cCxtcwV__G3u9klx4AN81qX_FJQ88&usqp=CAU"
            />
          </div>
          <div className="slide">
            <img
              src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-colorfull-number-3-m-logo-vector-png-image_5007415.jpg"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;
export default Trusted;
