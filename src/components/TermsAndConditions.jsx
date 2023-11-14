import Modal from "react-modal";
import styled from "styled-components";

const TermsAndConditionsModal = ({ isOpen, onRequestClose }) => {
  return (
    <Wrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Terms and Conditions Modal"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
      >
        <ModalHeader id="modal-title">Terms and Conditions</ModalHeader>
        <Content id="modal-content">
          <p>
            Welcome to Bloom-Express! These Terms and Conditions outline the
            rules and regulations for the use of our online flower shop. By
            accessing this website and placing an order, you agree to be bound
            by these Terms and Conditions. If you disagree with any part of
            these terms, please do not use our website or services.
          </p>
          <p>
            1. Flower Availability and Substitutions: - Our flower arrangements
            are subject to seasonal availability. In case a specific flower is
            not available, we may substitute it with a similar flower of equal
            or greater value.
          </p>
          <p>
            2. Pricing and Payment: - All prices displayed on our website are in
            Euro and are inclusive of any applicable taxes. - Payment for your
            order is required at the time of checkout.
          </p>
          <p>
            3. Delivery Policy: - We offer delivery services to specified areas.
            Delivery charges may apply, and the delivery date and time are
            subject to availability. - Please provide accurate delivery
            information to ensure successful delivery. We are not responsible
            for delayed or failed delivery due to incorrect details provided.{" "}
          </p>
          <p>
            4. Cancellation and Refunds: - Cancellations of orders can be made
            up to 7 days before the scheduled delivery date. Refunds will be
            processed within 14 days. - No refunds will be issued for
            cancellations made after the specified time frame.
          </p>
          <p>
            5. Returns and Exchanges: - Due to the nature of our products, we do
            not accept returns or exchanges. However, if there is a quality
            issue with your order, please contact us within 30 days for
            assistance.
          </p>
          <p>
            6. Intellectual Property: - All content on our website, including
            images, logos, and text, is the property of Bloom-Express and is
            protected by intellectual property laws. You may not use, reproduce,
            or distribute our content without prior written permission.
          </p>
          <p>
            7. Privacy Policy: - We respect your privacy and are committed to
            protecting your personal information. Please refer to our Privacy
            Policy for details on how we collect, use, and disclose your data.
          </p>
          <p>
            8. Disclaimer: - We make every effort to ensure the accuracy of
            information on our website. However, we do not guarantee the
            completeness, reliability, or suitability of the content for any
            purpose.
          </p>
          <p>
            9. Governing Law: - These Terms and Conditions are governed by the
            laws of Germany, and any disputes will be subject to the exclusive
            jurisdiction of the courts.
          </p>
          <p>
            10. Changes to Terms and Conditions: - We reserve the right to
            update or modify these Terms and Conditions at any time. Any changes
            will be effective immediately upon posting on our website. Thank you
            for choosing Bloom-Express. If you have any questions or concerns,
            please contact our customer support team.
          </p>
        </Content>
        <CloseButton onClick={onRequestClose}>Close</CloseButton>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const ModalHeader = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
  margin-top: 1rem;
`;

const CloseButton = styled.button`
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
export default TermsAndConditionsModal;
