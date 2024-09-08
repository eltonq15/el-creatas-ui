import React, { useState } from "react";
import { useCartStore } from "../../stores/cart-store/cart-store";

import "./styles.scss";

export const CheckoutStepper = () => {
  const [currentStep, setCurrentStep] = useState(1); // Estado para controlar a etapa atual

  //use zustande store

  const { cartProducts } = useCartStore();

  const steps = [
    {
      label: "Resumo dos produtos (1 de 4)",
      component: (
        <>
          {cartProducts.map((product) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{product.name}</span>
              <span>{product.quantity}</span>
              <span>{product.price}</span>
            </div>
          ))}
        </>
      ),
    }, //<ShoppingCart /> },
    {
      label: "Informações de Entrega (2 de 4)",
      component: <>Informações de Entrega</>,
    }, // <ShippingInfo /> },
    { label: "Pagamento (3 de 4)", component: <>Pagamento</> }, //<Payment /> },
    { label: "Confirmação (4 de 4)", component: <>Confirmação</> }, //<Confirmation /> },
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="checkout-stepper">
      <div>{steps[currentStep - 1].label}</div>
      <div className="checkout-stepper-content">
        {steps[currentStep - 1].component}
      </div>

      {/* Renderizar os botões de navegação */}
      <div className="checkout-stepper-buttons">
        {currentStep > 1 && <button onClick={handlePrev}>Voltar</button>}
        {currentStep < steps.length && (
          <button className="primary" color="black" onClick={handleNext}>
            Próximo
          </button>
        )}
        {currentStep === steps.length && (
          <button className="primary">Finalizar Compra</button>
        )}
      </div>
    </div>
  );
};
