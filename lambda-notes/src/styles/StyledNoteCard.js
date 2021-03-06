import styled from 'styled-components';

const StyledNoteCard = styled.div`
  height: 265px;
  width: 31%;
  position: relative;
  background: #fff;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.9);
  transition: all 200ms;
  transform-origin: bottom;
  cursor: pointer;

  @media (max-width: 940px) {
    width: 48%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    transform: scaleX(1.05);
    background: lightyellow;
  }
  h3 {
    font-weight: 700;
    font-size: 1.8rem;
  }
  hr {
      border-color: darkgray;
      border-width: 1px;
  }
  span {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default StyledNoteCard;
