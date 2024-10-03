export enum PaymentStatus {
  PENDING = "PENDING", // Pagamento iniciado, aguardando processamento
  COMPLETED = "COMPLETED", // Pagamento realizado com sucesso
  FAILED = "FAILED", // Pagamento falhou
  CANCELED = "CANCELED", // Pagamento foi cancelado pelo usuário ou pelo sistema
  REFUNDED = "REFUNDED", // Pagamento foi estornado
  PROCESSING = "PROCESSING", // Pagamento está em processamento
  EXPIRED = "EXPIRED", // Prazo do pagamento expirou sem conclusão
  PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED", // Pagamento parcialmente estornado
}

export enum PaymentMethods {
  MULTIBANCO = "multibanco",
  KLARNA = "klarna",
  CARD = "card",
}
