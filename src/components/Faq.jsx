import { useEffect, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import axios from "../utils/axiosInstance";

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
        const response = await axios.get(
          `/api/faqs/getAllFaqs?limit=${limit}&skip=${skip}`
        );
        console.log("API Response:", response.data); // Log the response data
        if (response.data && response.data) {
          setData(response.data);
        } else {
          console.error("No data found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAllFaqs();
  }, [skip]);

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

        <Button onClick={onRequestClose}>Close</Button>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
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
