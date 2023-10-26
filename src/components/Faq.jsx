import Modal from 'react-modal';
import styled from 'styled-components';

const FaqModal = ({ isOpen, onRequestClose }) => {
  return (
    <Wrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Faq Modal"
      >
        <h2>Frequent questions and answers</h2>
        <Content>
          <p></p>
        </Content>

        <Button onClick={onRequestClose}>Close</Button>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const Content = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: var(--clr-primary-button);
  border: none;
  border-radius: 5px;
  color: var(--clr-grey-1);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: #397f84;
    color: var(--clr-white);
  }
`;
export default FaqModal;
