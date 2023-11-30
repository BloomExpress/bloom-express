import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import Font Awesome icons
import styled from "styled-components";

const FaqModal = ({ isOpen, onRequestClose }) => {
  const limit = 5;
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  const handleNext = () => {
    setSkip(skip + limit);
    getAllFaqs();
  };

  const handlePrevious = () => {
    if (skip - limit >= 0) {
      setSkip(skip - limit);
      getAllFaqs();
    }
  };

  useEffect(() => {
    const getAllFaqs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/faqs/getAllFaqs?limit=${limit}&skip=${skip}`);
      
        if (response.ok) {
          const data = await response.json();
          console.log("API Response:", data);
          setData(data);
        } else {
          console.error("No data found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAllFaqs();
  }, [skip]);

  const isFirstPage = skip === 0;
  const isLastPage = data.length < limit;

  return (
    <Wrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Faq Modal"
      >
        <h2>Frequent questions and answers</h2>
        <Content>
          <ul>
            {data.map((faq) => (
              <li key={faq._id}>
                <p>
                  <strong>Question:</strong> {faq.question}
                </p>
                <p>
                  <strong>Answer:</strong> {faq.answer}
                </p>
              </li>
            ))}
          </ul>
        </Content>
        {!isFirstPage && (
          <IconButton onClick={handlePrevious}>
            <FaArrowLeft />
          </IconButton>
        )}

        <Button onClick={onRequestClose}>Close</Button>

        {!isLastPage && (
          <IconButton onClick={handleNext}>
            <FaArrowRight />
          </IconButton>
        )}
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
  margin: 0.5rem;
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

const IconButton = styled(Button)`
  padding: 0.5rem;
`;

export default FaqModal;
